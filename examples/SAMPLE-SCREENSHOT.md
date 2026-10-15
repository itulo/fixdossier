# Sample output (screenshot-able) — axios/axios, generated 2026-10-12 by a local run against the public GitHub API (anonymous, max_pages=2). Trimmed to the first 6 rows.

## Summary

| Item | Count |
|---|---|
| Published GitHub security advisories | 51 |
| Commits that look like security fixes | 2 |
| Merged bot dependency updates (security-flagged) | 43 (9) |
| Releases | 125 |
| Fixes not yet in a release | 0 |

## Security fixes (newest first)

| Date | Type | IDs | Fix | Shipped in | Release date | How mapped |
|---|---|---|---|---|---|---|
| 2026-09-16 | advisory (medium) | GHSA-j8rh-479h-cp32, CVE-2026-101904 | [Header Injection via Inherited headers After Minimal Interceptor](https://github.com/axios/axios/security/advisories/GHSA-j8rh-479h-cp32) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (medium) | GHSA-4hqw-qxg8-jxx2, CVE-2026-101900 | [Fetch Adapter Header Injection via Inherited FormData getHeaders](https://github.com/axios/axios/security/advisories/GHSA-4hqw-qxg8-jxx2) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (high) | GHSA-m8m8-qj5v-23w3, CVE-2026-101905 | [Node HTTP adapter prototype-pollution gadget allows request socket hijack via inherited createConnection](https://github.com/axios/axios/security/advisories/GHSA-m8m8-qj5v-23w3) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (medium) | GHSA-44g4-m2mj-wpvx, CVE-2026-101899 | [CIDR-form NO_PROXY entries are ignored, causing proxy exclusion bypass for internal IP ranges](https://github.com/axios/axios/security/advisories/GHSA-44g4-m2mj-wpvx) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (high) | GHSA-r4gj-5m52-g5wh, CVE-2026-101907 | [maxRedirects: 0 is not enforced by the fetch adapter, allowing redirect-based SSRF](https://github.com/axios/axios/security/advisories/GHSA-r4gj-5m52-g5wh) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (medium) | GHSA-vh66-26gq-q6x8, CVE-2026-101908 | [Prototype pollution gadget in fetch adapter can alter outbound requests](https://github.com/axios/axios/security/advisories/GHSA-vh66-26gq-q6x8) | v1.20.0 | 2026-08-24 | advisory patched_versions |

…

Commit example: | 2026-05-24 | commit | CVE-2026-42264, GHSA-72mg-mc2j-cwf6 | [fix: guard socketPath with own() to prevent prototype pollution SSRF (#10901)](https://github.com/axios/axios/commit/140a17944a6ff175611597c874e218ad6c2afd1c) | v1.17.0 | 2026-06-03 | date heuristic (first release on/after commit) |

SUPPORT.md excerpt (fastify/fastify, inputs: 24 months, eol 2030-12-31):

| Release | Released | Security support until | Status |
|---|---|---|---|
| v5.12.5 | 2026-09-16 | 2028-09-16 | supported |
| v5.12.4 | 2026-09-11 | 2028-09-11 | supported |
| v5.12.2 | 2026-09-04 | 2028-09-04 | supported |
| v5.12.1 | 2026-08-18 | 2028-08-18 | supported |
