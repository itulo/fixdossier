'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const core = require('../src/core');

const NOW = '2026-10-12T00:00:00Z';
const mini = {
  releases: [
    { tag_name: 'v1.0.0', published_at: '2026-01-10T00:00:00Z', html_url: 'u1' },
    { tag_name: 'v1.1.0', published_at: '2026-03-01T00:00:00Z', html_url: 'u2' },
    { tag_name: 'v2.0.0-rc.1', published_at: '2026-03-05T00:00:00Z', prerelease: true },
    { tag_name: 'v9', draft: true, published_at: null },
  ],
  tags: [{ name: 'v1.1.0', commit: { sha: 'abc' } }, { name: 'v1.0.0', commit: { sha: 'def' } }, { name: 'old-tag', commit: { sha: 'zzz' } }],
  pulls: [
    { merged_at: '2026-02-01T00:00:00Z', user: { login: 'dependabot[bot]' }, title: 'Bump lodash from 4.17.20 to 4.17.21', body: 'Fixes CVE-2021-23337', html_url: 'p1', labels: [] },
    { merged_at: '2026-02-02T00:00:00Z', user: { login: 'renovate[bot]' }, title: 'chore(deps): update eslint', body: 'release notes mention security hardening', html_url: 'p2', labels: [] },
    { merged_at: null, user: { login: 'dependabot[bot]' }, title: 'Bump x', html_url: 'p3' },
    { merged_at: '2026-02-03T00:00:00Z', user: { login: 'alice' }, title: 'security: fix', html_url: 'p4' },
  ],
  advisories: [{ ghsa_id: 'GHSA-aaaa-bbbb-cccc', cve_id: 'CVE-2026-0001', summary: 'XSS', severity: 'high', html_url: 'a1', published_at: '2026-03-10T00:00:00Z', vulnerabilities: [{ patched_versions: '>= 1.1.0' }] }],
  commits: [
    { sha: 'abc', html_url: 'c1', author: { login: 'bob' }, commit: { message: 'fix: sanitize input (GHSA-aaaa-bbbb-cccc)', committer: { date: '2026-02-20T00:00:00Z' } } },
    { sha: 'x1', author: { login: 'bob' }, commit: { message: 'docs: update SECURITY.md', committer: { date: '2026-02-21T00:00:00Z' } } },
    { sha: 'x2', author: { login: 'bob' }, commit: { message: 'Fix path traversal vulnerability', committer: { date: '2026-04-01T00:00:00Z' } } },
    { sha: 'x3', author: { login: 'bob' }, commit: { message: 'feat: add button', committer: { date: '2026-04-02T00:00:00Z' } } },
  ],
};

test('commit classification', () => {
  assert.ok(core.isSecurityCommit('fix CVE-2024-12345'));
  assert.ok(core.isSecurityCommit('Fix XSS in template'));
  assert.ok(!core.isSecurityCommit('docs: security policy'));
  assert.ok(core.isSecurityCommit('docs: note for GHSA-aaaa-bbbb-cccc'));
  assert.ok(!core.isSecurityCommit('feat: improve vulnerable-looking naming? no'.replace('vulnerable', 'odd')));
  assert.deepStrictEqual(core.ids('see cve-2024-1234 and GHSA-AAAA-BBBB-CCCC'), ['CVE-2024-1234', 'GHSA-aaaa-bbbb-cccc']);
});

test('docs conventional commits are not security fixes', () => {
  const docs = [
    'docs(cra): ...',
    'docs(security): ...',
    'docs: update SECURITY.md',
    'docs(cra) #1474',
    'docs(cra) #1474 ICS_5.10-1: Examination of System Telemetry Data for Security Anomalies (#1475)',
    'docs(security) describe the threat model',
    'docs(cra): update SECURITY.md and the security policy',
    'docs(cra)!: security note',
  ];
  for (const m of docs) assert.ok(!core.isSecurityCommit(m), m);
  assert.ok(core.isSecurityCommit('fix(security): ...'));
  assert.ok(core.isSecurityCommit('fix(security): patch xss'));
  assert.ok(!core.isSecurityCommit('test: security policy'));
  assert.ok(!core.isSecurityCommit('chore(docs): security notes'));
  const commits = docs.map((message, i) => ({
    sha: `d${i}`, html_url: `d${i}`, author: { login: 'bob' },
    commit: { message, committer: { date: '2026-02-01T00:00:00Z' } },
  }));
  commits.push({
    sha: 'fix1', html_url: 'fix1', author: { login: 'bob' },
    commit: { message: 'fix(security): ...', committer: { date: '2026-02-02T00:00:00Z' } },
  });
  const r = core.build({ releases: [], tags: [], pulls: [], advisories: [], commits }, { repo: 'ruuvi/ruuvi.gateway_esp.c', now: NOW });
  assert.deepStrictEqual(r.security_fixes.map((f) => f.sha), ['fix1']);
  assert.strictEqual(r.summary.security_commits, 1);
});

test('build maps fixes to releases', () => {
  const r = core.build(mini, { repo: 'o/r', now: NOW });
  assert.strictEqual(r.schema, 'fixdossier/v1');
  const adv = r.security_fixes.find((f) => f.type === 'advisory');
  assert.strictEqual(adv.release, 'v1.1.0');
  assert.strictEqual(adv.mapping, 'advisory patched_versions');
  const c = r.security_fixes.find((f) => f.sha === 'abc');
  assert.strictEqual(c.release, 'v1.1.0'); // exact tag SHA match
  assert.strictEqual(c.mapping, 'tag commit match');
  const dep = r.dependency_updates.find((d) => d.url === 'p1');
  assert.strictEqual(dep.release, 'v1.1.0');
  assert.strictEqual(dep.mapping, 'date heuristic (first release on/after merge)');
  const unreleased = r.security_fixes.find((f) => f.sha === 'x2');
  assert.strictEqual(unreleased.release, null);
  assert.strictEqual(r.summary.unreleased_fixes, 1);
  assert.ok(!r.security_fixes.some((f) => f.sha === 'x1' || f.sha === 'x3'));
  assert.strictEqual(r.dependency_updates.length, 2); // unmerged and human PRs excluded
  assert.deepStrictEqual(r.dependency_updates.map((d) => d.security), [false, true]); // body-only "security" not enough
  assert.deepStrictEqual(r.tags_without_release, ['old-tag']);
  assert.ok(!r.releases.some((x) => x.tag === 'v9'));
});

test('renderers produce markdown with disclaimers and support windows', () => {
  const r = core.build(mini, { repo: 'o/r', now: NOW, gaps: ['security advisories: HTTP 403'] });
  const md = core.renderRecord(r);
  assert.match(md, /Not legal advice/);
  assert.match(md, /GHSA-aaaa-bbbb-cccc, CVE-2026-0001/);
  assert.match(md, /## Gaps in this record/);
  const sup = core.renderSupport(r, { supportMonths: 6, eolDate: '2026-08-01', contact: 'sec@x' });
  assert.match(sup, /\| v1.1.0 \| 2026-03-01 \| 2026-08-01 \| ended \|/); // capped by EOL
  assert.match(sup, /\| v1.0.0 \| 2026-01-10 \| 2026-07-10 \| ended \|/);
  assert.doesNotMatch(sup, /rc\.1/);
});

function fakeFetch(map) {
  return async (url) => {
    const key = Object.keys(map).find((k) => url.includes(k));
    const v = map[key] || { status: 404, body: {} };
    return { ok: v.status === 200, status: v.status, headers: { get: () => v.link || '' }, json: async () => v.body };
  };
}

test('missing permissions degrade gracefully', async () => {
  const api = new core.Api({ repo: 'o/r', fetchImpl: fakeFetch({
    '/releases': { status: 200, body: mini.releases }, '/tags': { status: 200, body: mini.tags },
    '/pulls': { status: 403, body: {} }, '/security-advisories': { status: 404, body: {} }, '/commits': { status: 200, body: mini.commits },
  }) });
  const raw = await core.collect(api);
  assert.strictEqual(raw.pulls.length, 0);
  assert.strictEqual(api.gaps.length, 2);
  assert.match(api.gaps[0], /pull requests: HTTP 403 \(missing permission/);
  const md = core.renderRecord(core.build(raw, { repo: 'o/r', gaps: api.gaps, now: NOW }));
  assert.match(md, /security advisories: HTTP 404/);
});

test('pagination follows Link and respects max_pages', async () => {
  let n = 0;
  const api = new core.Api({ repo: 'o/r', maxPages: 2, fetchImpl: async () => { n++; return { ok: true, status: 200, headers: { get: () => '<https://api.github.com/next>; rel="next"' }, json: async () => [{ i: n }] }; } });
  const out = await api.list('tags', 'tags');
  assert.strictEqual(out.length, 2);
  assert.match(api.gaps[0], /stopped after 2 pages/);
});

test('real-data fixture (trimmed axios/axios API responses, fetched 2026-10-12)', () => {
  const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixture-axios.json')));
  const r = core.build(raw, { repo: 'axios/axios', now: NOW });
  assert.ok(r.summary.advisories === 6);
  assert.ok(r.security_fixes.filter((f) => f.type === 'advisory').every((f) => f.release), 'every advisory mapped');
  assert.ok(r.security_fixes.some((f) => f.mapping === 'advisory patched_versions'));
  const backports = r.security_fixes.find((f) => f.ids.includes('GHSA-9fr6-4gfg-395g'));
  assert.strictEqual(backports.release, 'v0.34.0');
  assert.deepStrictEqual(backports.matched_releases.map((x) => x.tag), ['v0.34.0', 'v1.20.0']);
  assert.match(core.renderRecord(r), /v0\.34\.0, v1\.20\.0/);
});

function rel(tag, date, extra = {}) {
  return { tag_name: tag, published_at: date, html_url: tag, ...extra };
}

test('tag commit match labels SHA equality, peeled annotated tags, and unique short SHAs', () => {
  const full = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
  const other = 'ccccccc111111111111111111111111111111111';
  const tagObject = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  const raw = {
    releases: [
      rel('v1.0.0', '2026-01-01T00:00:00Z'),
      rel('v1.2.0', '2026-03-01T00:00:00Z'),
      rel('v2.0.0', '2026-04-01T00:00:00Z'),
    ],
    tags: [
      { name: 'v1.0.0', commit: { sha: 'abc1234def567890abc1234def567890abc1234d' } },
      // Annotated tag: commit.sha is the tag object; object.sha is the peeled commit
      // (list-tags normally peels this itself; git tag objects do not).
      { name: 'v1.2.0', commit: { sha: tagObject }, object: { type: 'commit', sha: full } },
      { name: 'v2.0.0', commit: { sha: other } },
    ],
    pulls: [
      { merged_at: '2026-02-01T00:00:00Z', merge_commit_sha: full, user: { login: 'dependabot[bot]' }, title: 'Bump left-pad', html_url: 'pr-sha', labels: [] },
      { merged_at: '2026-02-02T00:00:00Z', merge_commit_sha: '0123456789abcdef0123456789abcdef01234567', user: { login: 'renovate[bot]' }, title: 'Bump eslint', html_url: 'pr-date', labels: [] },
    ],
    advisories: [],
    commits: [
      { sha: full, html_url: 'c-full', author: { login: 'bob' }, commit: { message: 'fix: security patch', committer: { date: '2026-02-15T00:00:00Z' } } },
      { sha: full.slice(0, 7), html_url: 'c-short', author: { login: 'bob' }, commit: { message: 'fix: security follow-up', committer: { date: '2026-02-16T00:00:00Z' } } },
      { sha: tagObject, html_url: 'c-tagobj', author: { login: 'bob' }, commit: { message: 'fix: security tag object is not the commit', committer: { date: '2026-02-17T00:00:00Z' } } },
      { sha: '0123456789abcdef0123456789abcdef01234567', html_url: 'c-miss', author: { login: 'bob' }, commit: { message: 'fix: security not on a tag', committer: { date: '2026-02-18T00:00:00Z' } } },
    ],
  };
  const r = core.build(raw, { repo: 'o/r', now: NOW });
  const byUrl = (u) => r.security_fixes.find((f) => f.url === u) || r.dependency_updates.find((f) => f.url === u);
  assert.strictEqual(byUrl('c-full').mapping, 'tag commit match');
  assert.strictEqual(byUrl('c-full').release, 'v1.2.0');
  assert.strictEqual(byUrl('c-short').mapping, 'tag commit match');
  assert.strictEqual(byUrl('c-short').release, 'v1.2.0');
  // Tag-object SHA is not the commit the tag points at.
  assert.strictEqual(byUrl('c-tagobj').mapping, 'date heuristic (first release on/after commit)');
  assert.strictEqual(byUrl('c-tagobj').release, 'v1.2.0');
  assert.strictEqual(byUrl('c-miss').mapping, 'date heuristic (first release on/after commit)');
  assert.strictEqual(byUrl('c-miss').release, 'v1.2.0');
  assert.strictEqual(byUrl('pr-sha').mapping, 'tag commit match');
  assert.strictEqual(byUrl('pr-sha').release, 'v1.2.0');
  assert.strictEqual(byUrl('pr-date').mapping, 'date heuristic (first release on/after merge)');
  assert.match(core.renderRecord(r), /tag commit match/);
  const depLine = core.renderRecord(r).split('\n').find((l) => l.includes('pr-sha'));
  assert.match(depLine, /tag commit match/);
});

test('ambiguous short SHAs are not labelled tag commit match', () => {
  const raw = {
    releases: [rel('v1.0.0', '2026-03-01T00:00:00Z'), rel('v1.1.0', '2026-04-01T00:00:00Z')],
    tags: [
      { name: 'v1.0.0', commit: { sha: 'aaaaaaa111111111111111111111111111111111' } },
      { name: 'v1.1.0', commit: { sha: 'aaaaaaa222222222222222222222222222222222' } },
    ],
    pulls: [],
    advisories: [],
    commits: [
      { sha: 'aaaaaaa', html_url: 'c-amb', author: { login: 'bob' }, commit: { message: 'fix security hole', committer: { date: '2026-02-01T00:00:00Z' } } },
    ],
  };
  const r = core.build(raw, { repo: 'o/r', now: NOW });
  const c = r.security_fixes.find((f) => f.url === 'c-amb');
  assert.strictEqual(c.mapping, 'date heuristic (first release on/after commit)');
  assert.strictEqual(c.release, 'v1.0.0');
});

test('patched version ranges match the earliest tag in each range, including backports', () => {
  const raw = {
    releases: [
      rel('v2.9.16', '2023-05-01T00:00:00Z'),
      rel('v2.9.18', '2023-06-02T00:00:00Z'),
      rel('v3.0.0', '2023-07-01T00:00:00Z'),
      rel('v3.2.8', '2023-08-01T00:00:00Z'),
      rel('v4.5.10', '2024-06-01T00:00:00Z'),
      rel('v5.0.12', '2024-02-01T00:00:00Z'),
      rel('v6.2.0', '2025-02-25T00:00:00Z'),
      rel('plugin@2.9.17', '2023-06-01T00:00:00Z'),
      rel('v0.34.0', '2024-01-15T00:00:00Z'),
      rel('v1.2.3', '2024-01-01T00:00:00Z'),
      rel('v1.20.0', '2024-05-01T00:00:00Z'),
      rel('v1.2.9', '2024-02-01T00:00:00Z'),
      rel('v1.3.0', '2024-03-01T00:00:00Z'),
      rel('v2.0.0', '2024-04-01T00:00:00Z'),
    ],
    tags: [],
    pulls: [],
    advisories: [
      {
        ghsa_id: 'GHSA-c24v-8rfc-w8vw', summary: 'space separated bounds', severity: 'high', html_url: 'a-space',
        published_at: '2024-01-19T00:00:00Z',
        vulnerabilities: [{ patched_versions: '>=2.9.17 <3.0.0' }, { patched_versions: '>= 3.2.8 < 4.0.0' }, { patched_versions: '>= 5.0.12' }],
      },
      {
        ghsa_id: 'GHSA-comma-andx-xxxx', summary: 'comma AND bounds', severity: 'medium', html_url: 'a-comma',
        published_at: '2024-01-19T00:00:00Z',
        vulnerabilities: [{ patched_versions: '>= 2.9.17, < 3.0.0' }],
      },
      {
        ghsa_id: 'GHSA-9fr6-4gfg-395g', summary: 'backport lines', severity: 'medium', html_url: 'a-back',
        published_at: '2026-09-16T00:00:00Z',
        vulnerabilities: [{ patched_versions: '>=0.34.0' }, { patched_versions: '>=1.20.0' }],
      },
      {
        ghsa_id: 'GHSA-tilde-caret-xxxx', summary: 'caret and tilde', severity: 'low', html_url: 'a-caret',
        published_at: '2024-01-02T00:00:00Z',
        vulnerabilities: [{ patched_versions: '^1.2.3 || ~1.2.3' }],
      },
      {
        ghsa_id: 'GHSA-none-none-xxxx', summary: 'nothing in range', severity: 'low', html_url: 'a-none',
        published_at: '2024-08-01T00:00:00Z',
        vulnerabilities: [{ patched_versions: '>= 9.9.9, < 9.9.10' }],
      },
      {
        ghsa_id: 'GHSA-late-late-xxxx', summary: 'nothing and no later release', severity: 'low', html_url: 'a-late',
        published_at: '2026-12-01T00:00:00Z',
        vulnerabilities: [{ patched_versions: '>= 9.9.9 < 9.9.10' }],
      },
    ],
    commits: [],
  };
  // v prefix on the lower-bound tag, and an unprefixed tag for another line.
  raw.releases.push(rel('2.9.17', '2023-05-20T00:00:00Z'));
  const r = core.build(raw, { repo: 'o/r', now: NOW });
  const space = r.security_fixes.find((f) => f.url === 'a-space');
  assert.deepStrictEqual(space.patched_versions, ['>=2.9.17 <3.0.0', '>=3.2.8 <4.0.0', '>=5.0.12']);
  assert.ok(!space.patched_versions.some((p) => p.includes('2.9.173')));
  // 2.9.17 is present (no v). 2.9.18 is later. 3.0.0 is outside the upper bound.
  // plugin@2.9.17 is the same version but a package tag; the plain tag wins.
  assert.deepStrictEqual(space.matched_releases.map((x) => x.tag), ['2.9.17', 'v3.2.8', 'v5.0.12']);
  assert.strictEqual(space.mapping, 'advisory patched_versions');
  assert.strictEqual(space.release, '2.9.17');
  const md = core.renderRecord(r);
  assert.match(md, /\| 2\.9\.17, v3\.2\.8, v5\.0\.12 \|/);
  const comma = r.security_fixes.find((f) => f.url === 'a-comma');
  assert.deepStrictEqual(comma.patched_versions, ['>=2.9.17 <3.0.0']);
  assert.strictEqual(comma.release, '2.9.17');
  assert.notStrictEqual(comma.release, 'v3.0.0');
  const back = r.security_fixes.find((f) => f.url === 'a-back');
  assert.deepStrictEqual(back.matched_releases.map((x) => x.tag), ['v0.34.0', 'v1.20.0']);
  assert.strictEqual(back.release, 'v0.34.0');
  assert.match(md, /v0\.34\.0, v1\.20\.0/);
  const caret = r.security_fixes.find((f) => f.url === 'a-caret');
  // ^1.2.3 is >=1.2.3 <2.0.0, ~1.2.3 is >=1.2.3 <1.3.0. Both resolve to v1.2.3, listed once.
  assert.strictEqual(caret.release, 'v1.2.3');
  assert.ok(!caret.matched_releases.some((x) => x.tag === 'v2.0.0' || x.tag === 'v1.3.0'));
  const none = r.security_fixes.find((f) => f.url === 'a-none');
  assert.strictEqual(none.mapping, 'date heuristic (first release on/after publish)');
  assert.strictEqual(none.release, 'v6.2.0');
  const late = r.security_fixes.find((f) => f.url === 'a-late');
  assert.strictEqual(late.release, null);
  assert.strictEqual(late.mapping, 'none');
});

test('whitespace-separated patched versions stay separate and each maps to its release', () => {
  const raw = {
    releases: [
      rel('v1.2.2', '2024-01-01T00:00:00Z'),
      rel('v1.2.3', '2024-03-01T00:00:00Z'),
      rel('v1.3.0', '2024-04-01T00:00:00Z'),
      rel('v11.5.14', '2026-01-13T00:00:00Z'),
      rel('v11.5.15', '2026-02-01T00:00:00Z'),
      rel('v11.5.17', '2026-03-01T00:00:00Z'),
      rel('v12.3.2', '2026-02-04T00:00:00Z'),
      rel('v12.3.3', '2026-02-19T00:00:00Z'),
      rel('v12.3.7', '2026-05-19T00:00:00Z'),
    ],
    tags: [], pulls: [], commits: [],
    advisories: [
      {
        ghsa_id: 'GHSA-vxg3-v4p6-f3fp', summary: 'pimcore space-separated patched versions', html_url: 'a-space-exact',
        published_at: '2026-02-20T00:00:00Z',
        vulnerabilities: [{ patched_versions: '11.5.15 12.3.3' }],
      },
      {
        ghsa_id: 'GHSA-comma-list-xxxx', summary: 'comma-separated patched versions', html_url: 'a-comma-exact',
        published_at: '2026-02-20T00:00:00Z',
        vulnerabilities: [{ patched_versions: '11.5.15, 12.3.3' }],
      },
      {
        ghsa_id: 'GHSA-oror-oror-xxxx', summary: 'or-separated patched versions', html_url: 'a-or-exact',
        published_at: '2026-02-20T00:00:00Z',
        vulnerabilities: [{ patched_versions: '11.5.15 || 12.3.3' }],
      },
      {
        ghsa_id: 'GHSA-gteq-oper-xxxx', summary: 'operator lower bound', html_url: 'a-gte',
        published_at: '2024-03-02T00:00:00Z',
        vulnerabilities: [{ patched_versions: '>= 1.2.3' }],
      },
      {
        ghsa_id: 'GHSA-lts-paren-xxxx', summary: 'parenthetical note', html_url: 'a-lts',
        published_at: '2026-05-20T00:00:00Z',
        vulnerabilities: [{ patched_versions: '11.5.17 (LTS), 12.3.7' }],
      },
    ],
  };
  const r = core.build(raw, { repo: 'pimcore/pimcore', now: NOW });
  const space = r.security_fixes.find((f) => f.url === 'a-space-exact');
  assert.deepStrictEqual(space.patched_versions, ['11.5.15', '12.3.3']);
  assert.ok(!JSON.stringify(space).includes('11.5.1512.3.3'));
  assert.deepStrictEqual(space.matched_releases.map((x) => x.tag), ['v11.5.15', 'v12.3.3']);
  assert.strictEqual(space.release, 'v11.5.15');
  assert.strictEqual(space.mapping, 'advisory patched_versions');
  assert.match(core.renderRecord(r), /v11\.5\.15, v12\.3\.3/);
  for (const url of ['a-comma-exact', 'a-or-exact']) {
    const row = r.security_fixes.find((f) => f.url === url);
    assert.deepStrictEqual(row.patched_versions, ['11.5.15', '12.3.3']);
    assert.deepStrictEqual(row.matched_releases.map((x) => x.tag), ['v11.5.15', 'v12.3.3']);
  }
  const gte = r.security_fixes.find((f) => f.url === 'a-gte');
  assert.deepStrictEqual(gte.patched_versions, ['>=1.2.3']);
  assert.strictEqual(gte.release, 'v1.2.3');
  assert.ok(!gte.matched_releases.some((x) => x.tag === 'v1.2.2' || x.tag === 'v11.5.15'));
  const lts = r.security_fixes.find((f) => f.url === 'a-lts');
  assert.deepStrictEqual(lts.patched_versions, ['11.5.17', '12.3.7']);
  assert.deepStrictEqual(lts.matched_releases.map((x) => x.tag), ['v11.5.17', 'v12.3.7']);
});

test('range lower bound falls forward when that exact tag is missing', () => {
  const raw = {
    releases: [
      rel('v2.9.16', '2023-05-01T00:00:00Z'),
      rel('v2.9.18', '2023-06-02T00:00:00Z'),
      rel('v3.0.0', '2023-07-01T00:00:00Z'),
      rel('v6.2.0', '2025-02-25T00:00:00Z'),
    ],
    tags: [],
    pulls: [],
    advisories: [{
      ghsa_id: 'GHSA-miss-ingx-xxxx', summary: 'missing lower bound', html_url: 'a-miss',
      published_at: '2023-06-01T00:00:00Z',
      vulnerabilities: [{ patched_versions: '>= 2.9.17, < 3.0.0' }],
    }],
    commits: [],
  };
  const hit = core.build(raw, { repo: 'o/r', now: NOW }).security_fixes[0];
  assert.strictEqual(hit.mapping, 'advisory patched_versions');
  assert.strictEqual(hit.release, 'v2.9.18');
  assert.deepStrictEqual(hit.patched_versions, ['>=2.9.17 <3.0.0']);
});

test('scoped tag is used when no plain release tag satisfies the range', () => {
  const raw = {
    releases: [rel('create-vite@2.9.17', '2023-06-01T00:00:00Z'), rel('v6.2.0', '2025-02-25T00:00:00Z')],
    tags: [], pulls: [], commits: [],
    advisories: [{
      ghsa_id: 'GHSA-scop-edxx-xxxx', summary: 'package tag', html_url: 'a-scope',
      published_at: '2023-06-01T00:00:00Z',
      vulnerabilities: [{ patched_versions: '>=2.9.17 <3.0.0' }],
    }],
  };
  const hit = core.build(raw, { repo: 'o/r', now: NOW }).security_fixes[0];
  assert.strictEqual(hit.release, 'create-vite@2.9.17');
  assert.strictEqual(hit.mapping, 'advisory patched_versions');
});

test('annotated tag objects are peeled before SHA matching', async () => {
  const tagObject = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  const commit = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
  const api = new core.Api({
    repo: 'o/r',
    fetchImpl: async (url) => {
      if (url.includes('/git/tags/')) {
        return { ok: true, status: 200, headers: { get: () => '' }, json: async () => ({ object: { type: 'commit', sha: commit } }) };
      }
      const body = {
        '/releases': [{ tag_name: 'v1.2.0', published_at: '2026-03-01T00:00:00Z', html_url: 'u' }],
        '/tags': [{ name: 'v1.2.0', commit: { sha: tagObject, url: 'https://api.github.com/repos/o/r/git/tags/' + tagObject } }],
        '/pulls': [],
        '/security-advisories': [],
        '/commits': [{ sha: commit, html_url: 'c1', author: { login: 'bob' }, commit: { message: 'fix security issue', committer: { date: '2026-02-01T00:00:00Z' } } }],
      };
      const key = Object.keys(body).find((k) => url.includes(k));
      return { ok: true, status: 200, headers: { get: () => '' }, json: async () => (key ? body[key] : []) };
    },
  });
  const raw = await core.collect(api);
  assert.strictEqual(raw.tags[0].object.sha, commit);
  const rec = core.build(raw, { repo: 'o/r', now: NOW, gaps: api.gaps });
  const row = rec.security_fixes.find((f) => f.sha === commit);
  assert.strictEqual(row.mapping, 'tag commit match');
  assert.strictEqual(row.release, 'v1.2.0');
  assert.strictEqual(rec.releases.find((r) => r.tag === 'v1.2.0').sha, commit);
});

const live = path.join(__dirname, 'live');
for (const f of fs.existsSync(live) ? fs.readdirSync(live).filter((x) => x.endsWith('.raw.json')) : []) {
  test(`live dump ${f} builds and renders`, () => {
    const raw = JSON.parse(fs.readFileSync(path.join(live, f)));
    const r = core.build(raw, { repo: f.replace('.raw.json', ''), now: NOW });
    assert.ok(r.security_fixes.length > 0);
    assert.ok(core.renderRecord(r).length > 1000);
  });
}
