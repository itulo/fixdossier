'use strict';
// fixdossier core logic. Zero dependencies, Node >= 20.

const SEC_RE = /\b(CVE-\d{4}-\d{4,}|GHSA(-[a-z0-9]{4}){3})\b/gi;
const SEC_WORDS = /\b(security|vulnerab\w*|vuln|exploit|xss|csrf|ssrf|rce|injection|prototype pollution|denial of service|redos)\b/i;
const BOTS = ['dependabot[bot]', 'renovate[bot]', 'dependabot-preview[bot]', 'renovate-bot'];

function ids(text) {
  const m = (text || '').match(SEC_RE) || [];
  return [...new Set(m.map((s) => s.toUpperCase().replace(/^GHSA/, 'GHSA').replace(/^(GHSA-)(.*)$/, (_, a, b) => a + b.toLowerCase())))];
}

// Conventional commit type "docs", any scope, colon optional.
// "docs(cra) #1474 … Security" and "docs(security): …" are documentation.
// "docsfoo:" is not a docs commit. "fix(security): …" is not this type.
function isDocsSubject(subject) {
  return /^docs(?:\([^)]*\))?!?(?=$|[\s:#])/i.test(subject);
}

function isSecurityCommit(msg) {
  const first = (msg || '').split('\n')[0];
  if (ids(msg).length > 0) return true; // explicit CVE/GHSA, even on a docs subject
  if (isDocsSubject(first)) return false;
  if (/^(?:test|ci|chore\(docs\)|build)(\(.*?\))?!?:/i.test(first)) return false; // CI/test noise
  return SEC_WORDS.test(first);
}

class Api {
  constructor({ token, repo, apiUrl = 'https://api.github.com', maxPages = 5, fetchImpl = fetch }) {
    Object.assign(this, { token, repo, apiUrl, maxPages, fetchImpl });
    this.gaps = [];
    this.calls = 0;
  }
  headers() {
    return {
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      'user-agent': 'fixdossier-action',
      ...(this.token ? { authorization: `Bearer ${this.token}` } : {}),
    };
  }
  async request(url) {
    this.calls++;
    return this.fetchImpl(url, { headers: this.headers() });
  }
  async list(path, label) {
    const out = [];
    let url = `${this.apiUrl}/repos/${this.repo}/${path}${path.includes('?') ? '&' : '?'}per_page=100`;
    for (let page = 0; url && page < this.maxPages; page++) {
      let res;
      try {
        res = await this.request(url);
      } catch (e) {
        this.gaps.push(`${label}: network error (${e.message})`);
        return out;
      }
      if (!res.ok) {
        const hint = res.status === 403 || res.status === 401
          ? 'missing permission or rate limit'
          : res.status === 404 ? 'not found or not visible to this token' : 'API error';
        this.gaps.push(`${label}: HTTP ${res.status} (${hint}) — section skipped`);
        return out;
      }
      const data = await res.json();
      out.push(...(Array.isArray(data) ? data : []));
      const link = res.headers.get('link') || '';
      const next = link.match(/<([^>]+)>;\s*rel="next"/);
      url = next ? next[1] : null;
      if (url && page + 1 >= this.maxPages) this.gaps.push(`${label}: stopped after ${this.maxPages} pages (raise max_pages for full history)`);
    }
    return out;
  }
}

// List-tags commit.sha is already the peeled commit. If a payload instead points
// commit.url at a git tag object (annotated tag), replace it with the target commit.
async function peelAnnotatedTags(api, tags) {
  for (const t of tags) {
    const url = t && t.commit && t.commit.url;
    if (!url || !url.includes('/git/tags/')) continue;
    let obj;
    try {
      const res = await api.request(url);
      if (!res.ok) {
        api.gaps.push(`tags: could not peel annotated tag ${t.name} (HTTP ${res.status})`);
        continue;
      }
      obj = await res.json();
    } catch (e) {
      api.gaps.push(`tags: could not peel annotated tag ${t.name} (${e.message})`);
      continue;
    }
    if (obj && obj.object && obj.object.type === 'commit' && obj.object.sha) {
      t.tag_object_sha = t.commit.sha;
      t.object = { type: 'commit', sha: obj.object.sha };
    }
  }
}

async function collect(api) {
  const [releases, tags, pulls, advisories, commits] = [
    await api.list('releases', 'releases'),
    await api.list('tags', 'tags'),
    await api.list('pulls?state=closed&sort=updated&direction=desc', 'pull requests'),
    await api.list('security-advisories?state=published', 'security advisories'),
    await api.list('commits', 'commits'),
  ];
  await peelAnnotatedTags(api, tags);
  return { releases, tags, pulls, advisories, commits };
}

// Commit a release tag points at. List-tags already peels annotated tags into
// commit.sha. An inlined git tag object (object.type === 'commit') wins, so the
// tag-object SHA is not treated as the commit.
function commitShaOfTag(tag) {
  if (!tag) return null;
  if (tag.object && tag.object.type === 'commit' && tag.object.sha) return String(tag.object.sha);
  if (tag.commit && tag.commit.sha) return String(tag.commit.sha);
  return null;
}

function normSha(s) { return String(s || '').trim().toLowerCase(); }

// Exact SHA, or a unique abbreviation of at least 7 hex characters.
function releasesMatchingSha(releases, sha) {
  const want = normSha(sha);
  if (!want || !/^[0-9a-f]+$/.test(want)) return [];
  const withSha = releases.filter((r) => r.sha && /^[0-9a-f]+$/.test(normSha(r.sha)));
  const exact = withSha.filter((r) => normSha(r.sha) === want);
  if (exact.length) return exact.slice().sort((a, b) => a.date.localeCompare(b.date));
  if (want.length < 7) return [];
  const pref = withSha.filter((r) => {
    const s = normSha(r.sha);
    const [short, long] = want.length <= s.length ? [want, s] : [s, want];
    return short.length >= 7 && short.length < long.length && long.startsWith(short);
  });
  return pref.length === 1 ? pref : [];
}

const VER_SRC = 'v?\\d+(?:\\.\\d+){0,3}(?:-[0-9A-Za-z.]+)?(?:\\+[0-9A-Za-z.-]+)?';
const VER_RE = new RegExp(`^${VER_SRC}$`, 'i');

function parseVer(input) {
  const s = String(input || '').trim().replace(/^v/i, '');
  const m = s.match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z.]+))?(?:\+[0-9A-Za-z.-]+)?$/);
  if (!m) return null;
  return {
    major: +m[1], minor: +(m[2] || 0), patch: +(m[3] || 0),
    rev: m[4] != null ? +m[4] : null,
    pre: m[5] ? m[5].split('.').filter(Boolean) : null,
  };
}

function cmpPre(a, b) {
  if (!a && !b) return 0;
  if (!a) return 1; // release > prerelease
  if (!b) return -1;
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (a[i] === undefined) return -1;
    if (b[i] === undefined) return 1;
    const an = /^\d+$/.test(a[i]);
    const bn = /^\d+$/.test(b[i]);
    if (an && bn) {
      const d = Number(a[i]) - Number(b[i]);
      if (d) return d < 0 ? -1 : 1;
    } else if (an) return -1;
    else if (bn) return 1;
    else if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return 0;
}

function cmpVer(a, b) {
  if (a.major !== b.major) return a.major < b.major ? -1 : 1;
  if (a.minor !== b.minor) return a.minor < b.minor ? -1 : 1;
  if (a.patch !== b.patch) return a.patch < b.patch ? -1 : 1;
  const ar = a.rev || 0;
  const br = b.rev || 0;
  if (ar !== br) return ar < br ? -1 : 1;
  return cmpPre(a.pre, b.pre);
}

function formatVer(v) {
  let s = `${v.major}.${v.minor}.${v.patch}`;
  if (v.rev != null) s += `.${v.rev}`;
  if (v.pre && v.pre.length) s += `-${v.pre.join('.')}`;
  return s;
}

function formatRange(comps) {
  return comps.map((c) => (c.op === '=' ? formatVer(c.ver) : `${c.op}${formatVer(c.ver)}`)).join(' ');
}

function caretUpper(ver) {
  if (ver.major > 0) return { major: ver.major + 1, minor: 0, patch: 0, rev: null, pre: null };
  if (ver.minor > 0) return { major: 0, minor: ver.minor + 1, patch: 0, rev: null, pre: null };
  return { major: 0, minor: 0, patch: ver.patch + 1, rev: null, pre: null };
}

function tildeUpper(ver) {
  return { major: ver.major, minor: ver.minor + 1, patch: 0, rev: null, pre: null };
}

// A field of only bare versions ("11.5.15 12.3.3", "11.5.15, 12.3.3",
// "11.5.15 || 12.3.3", optional "(LTS)" notes). Each version is its own exact
// range. Splitting first is required: deleting the whitespace used to glue
// "11.5.15 12.3.3" into the single bogus version 11.5.1512.3.3.
// Returns null when the text has comparators (^ ~ >= < …) so the range parser
// below can keep ">=2.9.17 <3.0.0" as one range and ">= 1.2.3" as a lower bound.
function bareVersionList(text) {
  if (/[<>^=~]/.test(text)) return null;
  const cleaned = text.replace(/\([^)]*\)/g, ' ');
  const parts = cleaned.split(/\s*(?:\|\||,)\s*|\s+/).map((s) => s.trim()).filter(Boolean);
  if (!parts.length) return [];
  const ranges = [];
  for (const part of parts) {
    const ver = parseVer(part);
    if (!ver) return null;
    ranges.push([{ op: '=', ver }]);
  }
  return ranges;
}

// GitHub patched_versions strings mix semver AND (comma or space) with backport
// alternatives in one field, for example ">=2.9.17 <3.0.0" and ">=5.4.12, <6.0.0".
// A new lower bound starts another range. "||", "^", and "~" are accepted too.
function parsePatchedRanges(input) {
  const text = String(input || '').trim();
  if (!text) return [];
  const bare = bareVersionList(text);
  if (bare) return bare;
  const re = new RegExp(`(>=|<=|==|>|<|=|\\^|~)\\s*(${VER_SRC})|(${VER_SRC})`, 'g');
  const ranges = [];
  for (const group of text.split('||')) {
    let open = null;
    const flush = () => { if (open && open.length) ranges.push(open); open = null; };
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(group))) {
      const rawVer = m[2] || m[3];
      const ver = parseVer(rawVer);
      if (!ver) continue;
      const op = m[1] === '==' ? '=' : (m[1] || '=');
      if (op === '^' || op === '~') {
        flush();
        const upper = op === '^' ? caretUpper(ver) : tildeUpper(ver);
        ranges.push([{ op: '>=', ver: { ...ver } }, { op: '<', ver: upper }]);
        continue;
      }
      if (op === '<' || op === '<=') {
        if (open && open.some((c) => c.op === '>=' || c.op === '>' || c.op === '=')) open.push({ op, ver });
        continue;
      }
      flush();
      open = [{ op, ver }];
    }
    flush();
  }
  return ranges;
}

function satisfies(ver, comps) {
  if (ver.pre) {
    const tuple = comps.some((c) => c.ver.pre && c.ver.major === ver.major && c.ver.minor === ver.minor && c.ver.patch === ver.patch && (c.ver.rev || 0) === (ver.rev || 0));
    if (!tuple) return false;
  }
  for (const c of comps) {
    const d = cmpVer(ver, c.ver);
    if (c.op === '>=' && d < 0) return false;
    if (c.op === '>' && d <= 0) return false;
    if (c.op === '<=' && d > 0) return false;
    if (c.op === '<' && d >= 0) return false;
    if (c.op === '=' && d !== 0) return false;
  }
  return true;
}

function versionOfTag(tagName) {
  const name = String(tagName || '');
  const at = name.lastIndexOf('@');
  const scoped = at > 0;
  const raw = scoped ? name.slice(at + 1) : name;
  if (!VER_RE.test(raw)) return null;
  const ver = parseVer(raw);
  if (!ver) return null;
  return { ver, kind: scoped ? 'scoped' : 'plain' };
}

// Earliest release whose version satisfies the range. Plain tags (v1.2.3) win
// over name@version tags when both satisfy, so a package tag does not stand in
// for the project release.
function earliestRelease(releases, comps) {
  const cands = [];
  for (const r of releases) {
    const parsed = versionOfTag(r.tag);
    if (!parsed || !satisfies(parsed.ver, comps)) continue;
    cands.push({ r, ...parsed });
  }
  const pools = [
    cands.filter((c) => c.kind === 'plain' && !c.ver.pre),
    cands.filter((c) => c.kind === 'scoped' && !c.ver.pre),
    cands.filter((c) => c.kind === 'plain'),
    cands.filter((c) => c.kind === 'scoped'),
  ];
  const pool = pools.find((p) => p.length) || [];
  pool.sort((a, b) => cmpVer(a.ver, b.ver) || String(a.r.date).localeCompare(String(b.r.date)));
  return pool[0] ? pool[0].r : null;
}

function advisoryRanges(advisory) {
  const ranges = [];
  const seen = new Set();
  for (const v of advisory.vulnerabilities || []) {
    for (const range of parsePatchedRanges(v.patched_versions)) {
      const key = formatRange(range);
      if (seen.has(key)) continue;
      seen.add(key);
      ranges.push(range);
    }
  }
  return ranges;
}

function releaseFields(list) {
  const rels = list || [];
  return {
    release: rels.length ? rels[0].tag : null,
    release_date: rels.length ? rels[0].date : null,
    matched_releases: rels.map((r) => ({ tag: r.tag, date: r.date })),
  };
}

function build(raw, opts = {}) {
  const repo = opts.repo;
  const releases = raw.releases
    .filter((r) => !r.draft && r.published_at)
    .map((r) => ({ tag: r.tag_name, name: r.name || r.tag_name, date: r.published_at, url: r.html_url, prerelease: !!r.prerelease, sha: null }))
    .sort((a, b) => a.date.localeCompare(b.date));
  const tagShas = Object.fromEntries(raw.tags.map((t) => [t.name, commitShaOfTag(t)]));
  releases.forEach((r) => { r.sha = tagShas[r.tag] || null; });
  const tagsWithoutRelease = raw.tags.map((t) => t.name).filter((n) => !releases.some((r) => r.tag === n));
  const stable = releases.filter((r) => !r.prerelease);

  const firstAfter = (date) => (stable.find((r) => r.date >= date) || releases.find((r) => r.date >= date) || null);

  const fixes = [];
  for (const a of raw.advisories) {
    const ranges = advisoryRanges(a);
    const matched = [];
    const seenTags = new Set();
    for (const range of ranges) {
      const rel = earliestRelease(releases, range);
      if (rel && !seenTags.has(rel.tag)) { seenTags.add(rel.tag); matched.push(rel); }
    }
    let method = 'none';
    let chosen = matched;
    if (matched.length) method = 'advisory patched_versions';
    else {
      const dateHit = (a.published_at || a.updated_at) ? firstAfter(a.published_at || a.updated_at) : null;
      if (dateHit) { chosen = [dateHit]; method = 'date heuristic (first release on/after publish)'; }
    }
    const date = a.published_at || a.updated_at;
    fixes.push({
      date, type: 'advisory', ids: [a.ghsa_id, a.cve_id].filter(Boolean), title: a.summary, severity: a.severity || null,
      url: a.html_url, patched_versions: ranges.map(formatRange), ...releaseFields(chosen), mapping: method,
    });
  }
  const deps = [];
  for (const p of raw.pulls) {
    if (!p.merged_at || !p.user || !BOTS.includes(p.user.login)) continue;
    const text = `${p.title}\n${p.body || ''}`;
    const labels = (p.labels || []).map((l) => l.name);
    // Strict on purpose: release notes pasted by bots mention "security" constantly.
    const security = ids(text).length > 0 || SEC_WORDS.test(p.title) || labels.some((l) => /secur|vuln/i.test(l));
    const bySha = releasesMatchingSha(releases, p.merge_commit_sha);
    const rels = bySha.length ? bySha : (firstAfter(p.merged_at) ? [firstAfter(p.merged_at)] : []);
    const mapping = bySha.length ? 'tag commit match' : (rels.length ? 'date heuristic (first release on/after merge)' : 'unreleased');
    deps.push({
      date: p.merged_at, type: 'dependency-update', bot: p.user.login, ids: ids(text), title: p.title, security, url: p.html_url,
      ...releaseFields(rels), mapping,
    });
  }
  for (const c of raw.commits) {
    const msg = c.commit && c.commit.message;
    if (!isSecurityCommit(msg)) continue;
    if (c.author && BOTS.includes(c.author.login)) continue; // counted as dependency update
    const date = (c.commit.committer && c.commit.committer.date) || (c.commit.author && c.commit.author.date);
    const bySha = releasesMatchingSha(releases, c.sha);
    const rels = bySha.length ? bySha : (date && firstAfter(date) ? [firstAfter(date)] : []);
    const mapping = bySha.length ? 'tag commit match' : (rels.length ? 'date heuristic (first release on/after commit)' : 'unreleased');
    fixes.push({
      date, type: 'commit', ids: ids(msg), title: msg.split('\n')[0].slice(0, 160), sha: c.sha, url: c.html_url,
      ...releaseFields(rels), mapping,
    });
  }
  fixes.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  deps.sort((a, b) => b.date.localeCompare(a.date));
  return {
    schema: 'fixdossier/v1', repo, generated_at: opts.now || new Date().toISOString(),
    sources_checked: { releases: raw.releases.length, tags: raw.tags.length, closed_pulls: raw.pulls.length, advisories: raw.advisories.length, commits: raw.commits.length },
    gaps: opts.gaps || [],
    releases: releases.slice().reverse(), tags_without_release: tagsWithoutRelease,
    security_fixes: fixes, dependency_updates: deps,
    summary: {
      advisories: fixes.filter((f) => f.type === 'advisory').length,
      security_commits: fixes.filter((f) => f.type === 'commit').length,
      dependency_updates: deps.length, security_dependency_updates: deps.filter((d) => d.security).length,
      unreleased_fixes: fixes.filter((f) => !f.release).length,
    },
  };
}

const d = (s) => (s ? s.slice(0, 10) : '—');
const esc = (s) => String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const link = (text, url) => (url ? `[${esc(text)}](${url})` : esc(text));
function shippedTags(row) {
  if (row.matched_releases && row.matched_releases.length) return row.matched_releases.map((r) => r.tag);
  return row.release ? [row.release] : [];
}
function shippedDates(row) {
  if (row.matched_releases && row.matched_releases.length) return row.matched_releases.map((r) => d(r.date));
  return row.release_date ? [d(row.release_date)] : [];
}

function renderRecord(rec, { maxRows = 200 } = {}) {
  const L = [];
  L.push(`# Security record — ${rec.repo}`, '');
  L.push(`_Generated ${rec.generated_at} by fixdossier from GitHub data (releases, tags, security advisories, merged Dependabot/Renovate PRs, commit messages). Automatically compiled; review before relying on it. Not legal advice._`, '');
  const s = rec.summary;
  L.push('## Summary', '', `| Item | Count |`, `|---|---|`,
    `| Published GitHub security advisories | ${s.advisories} |`,
    `| Commits that look like security fixes | ${s.security_commits} |`,
    `| Merged bot dependency updates (security-flagged) | ${s.dependency_updates} (${s.security_dependency_updates}) |`,
    `| Releases | ${rec.releases.length} |`,
    `| Fixes not yet in a release | ${s.unreleased_fixes} |`, '');
  L.push('## Security fixes (newest first)', '', '| Date | Type | IDs | Fix | Shipped in | Release date | How mapped |', '|---|---|---|---|---|---|---|');
  rec.security_fixes.slice(0, maxRows).forEach((f) => {
    const tags = shippedTags(f);
    const dates = shippedDates(f);
    L.push(`| ${d(f.date)} | ${f.type}${f.severity ? ` (${f.severity})` : ''} | ${esc(f.ids.join(', ')) || '—'} | ${link(f.title, f.url)} | ${tags.length ? tags.map(esc).join(', ') : '_unreleased_'} | ${dates.length ? dates.join(', ') : '—'} | ${f.mapping} |`);
  });
  if (!rec.security_fixes.length) L.push('| — | — | — | No security fixes found in the checked range | — | — | — |');
  if (rec.security_fixes.length > maxRows) L.push('', `_${rec.security_fixes.length - maxRows} older rows omitted; see JSON._`);
  L.push('', '## Dependency updates by bots (newest first)', '', '| Merged | Bot | Update | Security? | Shipped in | How mapped |', '|---|---|---|---|---|---|');
  rec.dependency_updates.slice(0, maxRows).forEach((u) => {
    const tags = shippedTags(u);
    L.push(`| ${d(u.date)} | ${u.bot} | ${link(u.title, u.url)} | ${u.security ? 'yes' : ''} | ${tags.length ? tags.map(esc).join(', ') : '_unreleased_'} | ${u.mapping} |`);
  });
  if (!rec.dependency_updates.length) L.push('| — | — | None found in the checked range | | | |');
  L.push('', '## Releases', '', '| Release | Date | Pre-release |', '|---|---|---|');
  rec.releases.slice(0, 50).forEach((r) => L.push(`| ${link(r.tag, r.url)} | ${d(r.date)} | ${r.prerelease ? 'yes' : ''} |`));
  if (rec.gaps.length) { L.push('', '## Gaps in this record', ''); rec.gaps.forEach((g) => L.push(`- ${g}`)); }
  L.push('', '---', 'Mapping notes: `advisory patched_versions` means each advisory patched range was parsed and matched to the earliest fetched release tag that satisfies it; every matched release is listed. `tag commit match` means the commit SHA or bot PR merge SHA equals the commit a release tag points at (annotated tags use the peeled commit, not the tag object; a short SHA counts only when it is a unique prefix of one tag commit). `date heuristic (first release on/after publish)`, `date heuristic (first release on/after commit)`, and `date heuristic (first release on/after merge)` are the first stable release published on or after that date, used only when the methods above do not match. That heuristic can be wrong for backports and multi-branch repos. Commit detection uses message keywords (CVE-, GHSA-, security, vuln…) and will miss silent fixes and include some false positives. A docs conventional commit (any scope, with or without a colon) is not a fix candidate unless the message cites a CVE or GHSA.', '');
  return L.join('\n');
}

function addMonths(iso, m) { const x = new Date(iso); x.setUTCMonth(x.getUTCMonth() + m); return x.toISOString().slice(0, 10); }

function renderSupport(rec, { supportMonths = 12, eolDate = '', contact = '', product = '' } = {}) {
  const name = product || rec.repo;
  const L = [`# Support policy — ${name}`, ''];
  L.push(`Security updates are provided for each release for **${supportMonths} months** from its release date${eolDate ? `, and in any case not after **${eolDate}** (end of life)` : ''}.`, '');
  L.push(`Report vulnerabilities to: ${contact || '_(set the `contact` input)_'}. See SECURITY-RECORD.md for the dated history of security fixes.`, '');
  L.push('| Release | Released | Security support until | Status |', '|---|---|---|---|');
  const today = rec.generated_at.slice(0, 10);
  rec.releases.filter((r) => !r.prerelease).slice(0, 30).forEach((r) => {
    let until = addMonths(r.date, supportMonths);
    if (eolDate && eolDate < until) until = eolDate;
    L.push(`| ${esc(r.tag)} | ${d(r.date)} | ${until} | ${until >= today ? 'supported' : 'ended'} |`);
  });
  L.push('', `_Generated ${rec.generated_at} by fixdossier from inputs support_period_months=${supportMonths}${eolDate ? `, eol_date=${eolDate}` : ''}. This is a statement of intent written by the maintainer, not legal advice._`, '');
  return L.join('\n');
}


async function uploadToPro(jsonBody, { proUrl = 'https://app.fixdossier.dev', proToken = '', repo = '', env = process.env, fetchImpl = fetch } = {}) {
  const baseUrl = String(proUrl || 'https://app.fixdossier.dev').trim().replace(/\/+$/, '');
  const ingestUrl = `${baseUrl}/api/v1/ingest`;
  const bodyStr = typeof jsonBody === 'string' ? jsonBody : JSON.stringify(jsonBody);
  const ownerFromRepo = (repo || env.GITHUB_REPOSITORY || '').split('/')[0] || '';
  const diagHeaders = {
    'content-type': 'application/json',
    'user-agent': 'fixdossier-action',
    'x-github-repository': repo || env.GITHUB_REPOSITORY || '',
    'x-github-repository-owner': env.GITHUB_REPOSITORY_OWNER || ownerFromRepo,
    'x-github-repository-owner-id': env.GITHUB_REPOSITORY_OWNER_ID || '',
    'x-github-run-id': env.GITHUB_RUN_ID || '',
    'x-github-sha': env.GITHUB_SHA || '',
    'x-github-ref': env.GITHUB_REF || '',
    'x-github-workflow': env.GITHUB_WORKFLOW || '',
  };

  let bearer = String(proToken || '').trim();
  let clientError = '';

  if (!bearer) {
    const reqUrlRaw = env.ACTIONS_ID_TOKEN_REQUEST_URL || '';
    const reqTok = env.ACTIONS_ID_TOKEN_REQUEST_TOKEN || '';
    if (!reqUrlRaw || !reqTok) {
      clientError = "Missing GitHub OIDC environment (ACTIONS_ID_TOKEN_REQUEST_URL). Add 'permissions: id-token: write' to your workflow job, or pass 'pro_token'.";
    } else {
      try {
        const u = new URL(reqUrlRaw);
        u.searchParams.set('audience', baseUrl);
        const oidcRes = await fetchImpl(u.toString(), {
          headers: {
            authorization: `bearer ${reqTok}`,
            accept: 'application/json; api-version=2.0',
            'user-agent': 'fixdossier-action',
          },
        });
        if (!oidcRes.ok) {
          clientError = `GitHub OIDC token request returned HTTP ${oidcRes.status}`;
        } else {
          const oidcData = await oidcRes.json();
          if (!oidcData || !oidcData.value) {
            clientError = 'GitHub OIDC token response did not contain a token value';
          } else {
            bearer = oidcData.value;
          }
        }
      } catch (err) {
        clientError = `Failed to request GitHub OIDC token: ${err.message}`;
      }
    }
  }

  const headers = { ...diagHeaders };
  if (bearer) headers.authorization = `Bearer ${bearer}`;
  if (clientError) headers['x-fixdossier-client-error'] = clientError;

  let lastErr = clientError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetchImpl(ingestUrl, { method: 'POST', headers, body: bodyStr });
      let data = {};
      try { data = await res.json(); } catch (_) {}
      if (res.ok) {
        return { ok: true, status: res.status, data };
      }
      const serverErr = data.error || `HTTP ${res.status}`;
      if (res.status >= 502 && res.status <= 504 && attempt < 3) {
        lastErr = serverErr;
        continue;
      }
      return { ok: false, status: res.status, error: clientError || serverErr, data };
    } catch (err) {
      lastErr = err.message;
    }
  }
  return { ok: false, status: 0, error: lastErr || 'network error uploading to fixdossier Pro' };
}

module.exports = { Api, collect, build, renderRecord, renderSupport, isSecurityCommit, ids, uploadToPro };
