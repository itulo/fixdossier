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

test('build maps fixes to releases', () => {
  const r = core.build(mini, { repo: 'o/r', now: NOW });
  const adv = r.security_fixes.find((f) => f.type === 'advisory');
  assert.strictEqual(adv.release, 'v1.1.0');
  assert.strictEqual(adv.mapping, 'advisory patched_versions');
  const c = r.security_fixes.find((f) => f.sha === 'abc');
  assert.strictEqual(c.release, 'v1.1.0'); // exact tag SHA match
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
