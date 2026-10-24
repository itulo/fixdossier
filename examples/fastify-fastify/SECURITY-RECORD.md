# Security record — fastify/fastify

_Generated 2026-10-12T13:36:58.908Z by fixdossier from GitHub data (releases, tags, security advisories, merged Dependabot/Renovate PRs, commit messages). Automatically compiled; review before relying on it. Not legal advice._

## Summary

| Item | Count |
|---|---|
| Published GitHub security advisories | 15 |
| Commits that look like security fixes | 0 |
| Merged bot dependency updates (security-flagged) | 7 (1) |
| Releases | 200 |
| Fixes not yet in a release | 0 |

## Security fixes (newest first)

| Date | Type | IDs | Fix | Shipped in | Release date | How mapped |
|---|---|---|---|---|---|---|
| 2026-09-16 | advisory (medium) | GHSA-4mh8-r7rc-xpvc, CVE-2026-92081 | [fastify vulnerable to Denial of Service via unhandled exception on HTTP/2 trailer responses](https://github.com/fastify/fastify/security/advisories/GHSA-4mh8-r7rc-xpvc) | v5.12.5 | 2026-09-16 | advisory patched_versions |
| 2026-09-04 | advisory (high) | GHSA-667r-xxjv-c9mm, CVE-2026-84504 | [fastify vulnerable to request body replacement via an async validation result collision](https://github.com/fastify/fastify/security/advisories/GHSA-667r-xxjv-c9mm) | v5.12.2 | 2026-09-04 | advisory patched_versions |
| 2026-09-04 | advisory (high) | GHSA-p68q-wchp-6fh7, CVE-2026-76169 | [fastify vulnerable to authentication bypass via malformed URLs reaching encapsulated not-found handlers](https://github.com/fastify/fastify/security/advisories/GHSA-p68q-wchp-6fh7) | v5.12.2 | 2026-09-04 | advisory patched_versions |
| 2026-09-04 | advisory (high) | GHSA-hwr6-493r-vm6h, CVE-2026-84469 | [fastify vulnerable to request validation bypass via skipped boolean false schemas](https://github.com/fastify/fastify/security/advisories/GHSA-hwr6-493r-vm6h) | v5.12.2 | 2026-09-04 | advisory patched_versions |
| 2026-09-04 | advisory (high) | GHSA-9q9j-q6p8-xq58, CVE-2026-84428 | [fastify vulnerable to header validation bypass via incomplete schema case normalization](https://github.com/fastify/fastify/security/advisories/GHSA-9q9j-q6p8-xq58) | v5.12.2 | 2026-09-04 | advisory patched_versions |
| 2026-08-18 | advisory (medium) | GHSA-3m5p-2c4r-xxw2, CVE-2026-16732 | [fastify vulnerable to X-Forwarded-* spoofing under trustProxy hop-count](https://github.com/fastify/fastify/security/advisories/GHSA-3m5p-2c4r-xxw2) | v5.12.1 | 2026-08-18 | advisory patched_versions |
| 2026-08-18 | advisory (medium) | GHSA-w2qp-rph6-63g4, CVE-2026-18504 | [fastify vulnerable to schema validation bypass via root primitive coercion mismatch](https://github.com/fastify/fastify/security/advisories/GHSA-w2qp-rph6-63g4) | v5.12.1 | 2026-08-18 | advisory patched_versions |
| 2026-04-14 | advisory (high) | GHSA-247c-9743-5963, CVE-2026-33806 | [Body Schema Validation Bypass via Leading Space in Content-Type Header](https://github.com/fastify/fastify/security/advisories/GHSA-247c-9743-5963) | v5.8.5 | 2026-04-14 | advisory patched_versions |
| 2026-03-23 | advisory (medium) | GHSA-444r-cwp2-x5xf, CVE-2026-3635 | [request.protocol and request.host spoofable via X-Forwarded-Proto/Host from untrusted connections when trustProxy uses restrictive trust function](https://github.com/fastify/fastify/security/advisories/GHSA-444r-cwp2-x5xf) | v5.8.3 | 2026-03-23 | advisory patched_versions |
| 2026-03-05 | advisory (medium) | GHSA-573f-x89g-hqp9, CVE-2026-3419 | [Missing End Anchor in "subtypeNameReg" Allows Malformed Content-Types to Pass Validation](https://github.com/fastify/fastify/security/advisories/GHSA-573f-x89g-hqp9) | v5.8.1 | 2026-03-05 | advisory patched_versions |
| 2026-02-02 | advisory (low) | GHSA-mrq3-vjjr-p77c, CVE-2026-25224 | [DoS via Unbounded Memory Allocation in sendWebStream](https://github.com/fastify/fastify/security/advisories/GHSA-mrq3-vjjr-p77c) | v5.7.3 | 2026-02-02 | advisory patched_versions |
| 2026-02-02 | advisory (high) | GHSA-jx2c-rxcm-jvmq, CVE-2026-25223 | [Content-Type header tab character allows body validation bypass](https://github.com/fastify/fastify/security/advisories/GHSA-jx2c-rxcm-jvmq) | v5.7.2 | 2026-01-26 | advisory patched_versions |
| 2025-04-18 | advisory (high) | GHSA-mg2h-6x62-wpwc, CVE-2025-32442 | [Invalid content-type parsing could lead to validation bypass](https://github.com/fastify/fastify/security/advisories/GHSA-mg2h-6x62-wpwc) | v5.3.2 | 2025-04-18 | advisory patched_versions |
| 2022-11-21 | advisory (medium) | GHSA-3fjj-p79j-c9hh, CVE-2022-41919 | [Incorrect Content-Type parsing can lead to CSRF attack ](https://github.com/fastify/fastify/security/advisories/GHSA-3fjj-p79j-c9hh) | v4.10.2 | 2022-11-21 | advisory patched_versions |
| 2022-10-10 | advisory (high) | GHSA-455w-c45v-86rg, CVE-2022-39288 | [Deny of service via malicious Content-Type](https://github.com/fastify/fastify/security/advisories/GHSA-455w-c45v-86rg) | v4.8.1 | 2022-10-10 | advisory patched_versions |

## Dependency updates by bots (newest first)

| Merged | Bot | Update | Security? | Shipped in |
|---|---|---|---|---|
| 2026-07-02 | dependabot[bot] | [chore: Bump @types/node from 25.9.4 to 26.0.1 in the dev-dependencies-typescript group](https://github.com/fastify/fastify/pull/6829) |  | v5.10.0 |
| 2026-06-28 | dependabot[bot] | [chore: Bump actions/checkout from 6 to 7](https://github.com/fastify/fastify/pull/6812) |  | v5.9.0 |
| 2026-06-23 | dependabot[bot] | [chore: Bump fastify-plugin from 5.1.0 to 6.0.0](https://github.com/fastify/fastify/pull/6801) |  | v5.9.0 |
| 2026-06-14 | dependabot[bot] | [chore: Bump esbuild from 0.25.12 to 0.28.1 in /test/bundler/esbuild in the npm_and_yarn group across 1 directory](https://github.com/fastify/fastify/pull/6788) | yes | v5.9.0 |
| 2026-05-01 | dependabot[bot] | [chore: Bump JustinBeckwith/linkinator-action from 2.4.0 to 2.4.2](https://github.com/fastify/fastify/pull/6706) |  | v5.9.0 |
| 2026-05-01 | dependabot[bot] | [chore: Bump actions/github-script from 8 to 9](https://github.com/fastify/fastify/pull/6705) |  | v5.9.0 |
| 2026-05-01 | dependabot[bot] | [chore: Bump pnpm/action-setup from 5.0.0 to 6.0.4](https://github.com/fastify/fastify/pull/6704) |  | v5.9.0 |

## Releases

| Release | Date | Pre-release |
|---|---|---|
| [v6.0.0-alpha.4](https://github.com/fastify/fastify/releases/tag/v6.0.0-alpha.4) | 2026-09-17 | yes |
| [v5.12.5](https://github.com/fastify/fastify/releases/tag/v5.12.5) | 2026-09-16 |  |
| [v5.12.4](https://github.com/fastify/fastify/releases/tag/v5.12.4) | 2026-09-11 |  |
| [v6.0.0-alpha.3](https://github.com/fastify/fastify/releases/tag/v6.0.0-alpha.3) | 2026-09-04 | yes |
| [v5.12.2](https://github.com/fastify/fastify/releases/tag/v5.12.2) | 2026-09-04 |  |
| [v6.0.0-alpha.2](https://github.com/fastify/fastify/releases/tag/v6.0.0-alpha.2) | 2026-08-19 | yes |
| [v5.12.1](https://github.com/fastify/fastify/releases/tag/v5.12.1) | 2026-08-18 |  |
| [v6.0.0-alpha.1](https://github.com/fastify/fastify/releases/tag/v6.0.0-alpha.1) | 2026-08-13 | yes |
| [v5.12.0](https://github.com/fastify/fastify/releases/tag/v5.12.0) | 2026-08-13 |  |
| [v6.0.0-alpha.0](https://github.com/fastify/fastify/releases/tag/v6.0.0-alpha.0) | 2026-08-11 | yes |
| [v5.11.3](https://github.com/fastify/fastify/releases/tag/v5.11.3) | 2026-08-08 |  |
| [v5.11.2](https://github.com/fastify/fastify/releases/tag/v5.11.2) | 2026-08-03 |  |
| [v5.11.1](https://github.com/fastify/fastify/releases/tag/v5.11.1) | 2026-08-03 |  |
| [v5.11.0](https://github.com/fastify/fastify/releases/tag/v5.11.0) | 2026-07-30 |  |
| [v5.10.0](https://github.com/fastify/fastify/releases/tag/v5.10.0) | 2026-07-05 |  |
| [v5.9.0](https://github.com/fastify/fastify/releases/tag/v5.9.0) | 2026-06-28 |  |
| [v5.8.5](https://github.com/fastify/fastify/releases/tag/v5.8.5) | 2026-04-14 |  |
| [v5.8.4](https://github.com/fastify/fastify/releases/tag/v5.8.4) | 2026-03-23 |  |
| [v5.8.3](https://github.com/fastify/fastify/releases/tag/v5.8.3) | 2026-03-23 |  |
| [v5.8.2](https://github.com/fastify/fastify/releases/tag/v5.8.2) | 2026-03-07 |  |
| [v5.8.1](https://github.com/fastify/fastify/releases/tag/v5.8.1) | 2026-03-05 |  |
| [v5.8.0](https://github.com/fastify/fastify/releases/tag/v5.8.0) | 2026-03-05 |  |
| [v5.7.4](https://github.com/fastify/fastify/releases/tag/v5.7.4) | 2026-02-02 |  |
| [v5.7.3](https://github.com/fastify/fastify/releases/tag/v5.7.3) | 2026-02-02 |  |
| [v5.7.2](https://github.com/fastify/fastify/releases/tag/v5.7.2) | 2026-01-26 |  |
| [v5.7.1](https://github.com/fastify/fastify/releases/tag/v5.7.1) | 2026-01-16 |  |
| [v5.7.0](https://github.com/fastify/fastify/releases/tag/v5.7.0) | 2026-01-15 |  |
| [v5.6.2](https://github.com/fastify/fastify/releases/tag/v5.6.2) | 2025-11-09 |  |
| [v5.6.1](https://github.com/fastify/fastify/releases/tag/v5.6.1) | 2025-09-22 |  |
| [v5.6.0](https://github.com/fastify/fastify/releases/tag/v5.6.0) | 2025-09-05 |  |
| [v5.5.0](https://github.com/fastify/fastify/releases/tag/v5.5.0) | 2025-08-11 |  |
| [v5.4.0](https://github.com/fastify/fastify/releases/tag/v5.4.0) | 2025-06-12 |  |
| [v5.3.3](https://github.com/fastify/fastify/releases/tag/v5.3.3) | 2025-05-13 |  |
| [v4.29.1](https://github.com/fastify/fastify/releases/tag/v4.29.1) | 2025-04-28 |  |
| [v5.3.2](https://github.com/fastify/fastify/releases/tag/v5.3.2) | 2025-04-18 |  |
| [v5.3.1](https://github.com/fastify/fastify/releases/tag/v5.3.1) | 2025-04-18 |  |
| [v5.3.0](https://github.com/fastify/fastify/releases/tag/v5.3.0) | 2025-04-13 |  |
| [v5.2.2](https://github.com/fastify/fastify/releases/tag/v5.2.2) | 2025-03-25 |  |
| [v5.2.1](https://github.com/fastify/fastify/releases/tag/v5.2.1) | 2025-01-06 |  |
| [v5.2.0](https://github.com/fastify/fastify/releases/tag/v5.2.0) | 2024-12-14 |  |
| [v4.29.0](https://github.com/fastify/fastify/releases/tag/v4.29.0) | 2024-12-04 |  |
| [v5.1.0](https://github.com/fastify/fastify/releases/tag/v5.1.0) | 2024-10-31 |  |
| [v5.0.0](https://github.com/fastify/fastify/releases/tag/v5.0.0) | 2024-09-17 |  |
| [v5.0.0-alpha.4](https://github.com/fastify/fastify/releases/tag/v5.0.0-alpha.4) | 2024-09-03 | yes |
| [v4.28.1](https://github.com/fastify/fastify/releases/tag/v4.28.1) | 2024-06-29 |  |
| [v5.0.0-alpha.2](https://github.com/fastify/fastify/releases/tag/v5.0.0-alpha.2) | 2024-06-21 | yes |
| [v4.28.0](https://github.com/fastify/fastify/releases/tag/v4.28.0) | 2024-06-14 |  |
| [v5.0.0-alpha.1](https://github.com/fastify/fastify/releases/tag/v5.0.0-alpha.1) | 2024-05-07 | yes |
| [v4.27.0](https://github.com/fastify/fastify/releases/tag/v4.27.0) | 2024-05-07 |  |
| [v4.26.2](https://github.com/fastify/fastify/releases/tag/v4.26.2) | 2024-03-03 |  |

## Gaps in this record

- releases: stopped after 2 pages (raise max_pages for full history)
- tags: stopped after 2 pages (raise max_pages for full history)
- pull requests: stopped after 2 pages (raise max_pages for full history)
- commits: stopped after 2 pages (raise max_pages for full history)

---
Mapping notes: "advisory patched_versions" matches the advisory's patched version to a release tag. "date heuristic" picks the first stable release published on or after the fix date, which can be wrong for backports or multi-branch repos. Commit detection uses message keywords (CVE-, GHSA-, security, vuln…) and will miss silent fixes and include some false positives.
