'use strict';
// fixdossier core logic. Zero dependencies, Node >= 20.

const SEC_RE = /\b(CVE-\d{4}-\d{4,}|GHSA(-[a-z0-9]{4}){3})\b/gi;
const SEC_WORDS = /\b(security|vulnerab\w*|vuln|exploit|xss|csrf|ssrf|rce|injection|prototype pollution|denial of service|redos)\b/i;
const BOTS = ['dependabot[bot]', 'renovate[bot]', 'dependabot-preview[bot]', 'renovate-bot'];

function ids(text) {
  const m = (text || '').match(SEC_RE) || [];
  return [...new Set(m.map((s) => s.toUpperCase().replace(/^GHSA/, 'GHSA').replace(/^(GHSA-)(.*)$/, (_, a, b) => a + b.toLowerCase())))];
}

function isSecurityCommit(msg) {
  const first = (msg || '').split('\n')[0];
  if (ids(msg).length > 0) return true;
  if (/^(docs|test|ci|chore\(docs\)|build)(\(.*?\))?!?:/i.test(first)) return false; // docs/CI noise
  return SEC_WORDS.test(first);
}

class Api {
  constructor({ token, repo, apiUrl = 'https://api.github.com', maxPages = 5, fetchImpl = fetch }) {
    Object.assign(this, { token, repo, apiUrl, maxPages, fetchImpl });
    this.gaps = [];
    this.calls = 0;
  }
  async list(path, label) {
    const out = [];
    let url = `${this.apiUrl}/repos/${this.repo}/${path}${path.includes('?') ? '&' : '?'}per_page=100`;
    for (let page = 0; url && page < this.maxPages; page++) {
      this.calls++;
      let res;
      try {
        res = await this.fetchImpl(url, {
          headers: {
            accept: 'application/vnd.github+json',
            'x-github-api-version': '2022-11-28',
            'user-agent': 'fixdossier-action',
            ...(this.token ? { authorization: `Bearer ${this.token}` } : {}),
          },
        });
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

async function collect(api) {
  const [releases, tags, pulls, advisories, commits] = [
    await api.list('releases', 'releases'),
    await api.list('tags', 'tags'),
    await api.list('pulls?state=closed&sort=updated&direction=desc', 'pull requests'),
    await api.list('security-advisories?state=published', 'security advisories'),
    await api.list('commits', 'commits'),
  ];
  return { releases, tags, pulls, advisories, commits };
}

function normVer(v) { return String(v || '').trim().replace(/^v/i, ''); }

function build(raw, opts = {}) {
  const repo = opts.repo;
  const releases = raw.releases
    .filter((r) => !r.draft && r.published_at)
    .map((r) => ({ tag: r.tag_name, name: r.name || r.tag_name, date: r.published_at, url: r.html_url, prerelease: !!r.prerelease, sha: null }))
    .sort((a, b) => a.date.localeCompare(b.date));
  const tagShas = Object.fromEntries(raw.tags.map((t) => [t.name, t.commit && t.commit.sha]));
  releases.forEach((r) => { r.sha = tagShas[r.tag] || null; });
  const tagsWithoutRelease = raw.tags.map((t) => t.name).filter((n) => !releases.some((r) => r.tag === n));
  const stable = releases.filter((r) => !r.prerelease);

  const byVersion = (v) => releases.find((r) => normVer(r.tag) === normVer(v) || normVer(r.tag).endsWith('@' + normVer(v)));
  const firstAfter = (date) => (stable.find((r) => r.date >= date) || releases.find((r) => r.date >= date) || null);
  const shaToRelease = (sha) => releases.find((r) => r.sha && r.sha === sha) || null;

  const fixes = [];
  for (const a of raw.advisories) {
    const patched = [...new Set((a.vulnerabilities || []).flatMap((v) => String(v.patched_versions || '').split(',').map((s) => s.replace(/[>=<~^ ]/g, '')).filter(Boolean)))];
    let rel = null; let method = 'none';
    for (const p of patched) { rel = byVersion(p); if (rel) { method = 'advisory patched_versions'; break; } }
    const date = a.published_at || a.updated_at;
    if (!rel && date) { rel = firstAfter(date); if (rel) method = 'date heuristic (first release on/after publish)'; }
    fixes.push({
      date, type: 'advisory', ids: [a.ghsa_id, a.cve_id].filter(Boolean), title: a.summary, severity: a.severity || null,
      url: a.html_url, patched_versions: patched, release: rel ? rel.tag : null, release_date: rel ? rel.date : null, mapping: method,
    });
  }
  const deps = [];
  for (const p of raw.pulls) {
    if (!p.merged_at || !p.user || !BOTS.includes(p.user.login)) continue;
    const text = `${p.title}\n${p.body || ''}`;
    const labels = (p.labels || []).map((l) => l.name);
    // Strict on purpose: release notes pasted by bots mention "security" constantly.
    const security = ids(text).length > 0 || SEC_WORDS.test(p.title) || labels.some((l) => /secur|vuln/i.test(l));
    const rel = shaToRelease(p.merge_commit_sha) || firstAfter(p.merged_at);
    deps.push({
      date: p.merged_at, type: 'dependency-update', bot: p.user.login, ids: ids(text), title: p.title, security, url: p.html_url,
      release: rel ? rel.tag : null, release_date: rel ? rel.date : null, mapping: rel ? 'date heuristic (first release on/after merge)' : 'unreleased',
    });
  }
  for (const c of raw.commits) {
    const msg = c.commit && c.commit.message;
    if (!isSecurityCommit(msg)) continue;
    if (c.author && BOTS.includes(c.author.login)) continue; // counted as dependency update
    const date = (c.commit.committer && c.commit.committer.date) || (c.commit.author && c.commit.author.date);
    const rel = shaToRelease(c.sha) || firstAfter(date);
    fixes.push({
      date, type: 'commit', ids: ids(msg), title: msg.split('\n')[0].slice(0, 160), sha: c.sha, url: c.html_url,
      release: rel ? rel.tag : null, release_date: rel ? rel.date : null, mapping: rel ? 'date heuristic (first release on/after commit)' : 'unreleased',
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
  rec.security_fixes.slice(0, maxRows).forEach((f) => L.push(`| ${d(f.date)} | ${f.type}${f.severity ? ` (${f.severity})` : ''} | ${esc(f.ids.join(', ')) || '—'} | ${link(f.title, f.url)} | ${esc(f.release) || '_unreleased_'} | ${d(f.release_date)} | ${f.mapping} |`));
  if (!rec.security_fixes.length) L.push('| — | — | — | No security fixes found in the checked range | — | — | — |');
  if (rec.security_fixes.length > maxRows) L.push('', `_${rec.security_fixes.length - maxRows} older rows omitted; see JSON._`);
  L.push('', '## Dependency updates by bots (newest first)', '', '| Merged | Bot | Update | Security? | Shipped in |', '|---|---|---|---|---|');
  rec.dependency_updates.slice(0, maxRows).forEach((u) => L.push(`| ${d(u.date)} | ${u.bot} | ${link(u.title, u.url)} | ${u.security ? 'yes' : ''} | ${esc(u.release) || '_unreleased_'} |`));
  if (!rec.dependency_updates.length) L.push('| — | — | None found in the checked range | | |');
  L.push('', '## Releases', '', '| Release | Date | Pre-release |', '|---|---|---|');
  rec.releases.slice(0, 50).forEach((r) => L.push(`| ${link(r.tag, r.url)} | ${d(r.date)} | ${r.prerelease ? 'yes' : ''} |`));
  if (rec.gaps.length) { L.push('', '## Gaps in this record', ''); rec.gaps.forEach((g) => L.push(`- ${g}`)); }
  L.push('', '---', 'Mapping notes: "advisory patched_versions" matches the advisory\'s patched version to a release tag. "date heuristic" picks the first stable release published on or after the fix date, which can be wrong for backports or multi-branch repos. Commit detection uses message keywords (CVE-, GHSA-, security, vuln…) and will miss silent fixes and include some false positives.', '');
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

module.exports = { Api, collect, build, renderRecord, renderSupport, isSecurityCommit, ids };
