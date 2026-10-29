# Security record — vitejs/vite

_Generated 2026-10-29T13:16:44.131Z by fixdossier from GitHub data (releases, tags, security advisories, merged Dependabot/Renovate PRs, commit messages). Automatically compiled; review before relying on it. Not legal advice._

## Summary

| Item | Count |
|---|---|
| Published GitHub security advisories | 23 |
| Commits that look like security fixes | 0 |
| Merged bot dependency updates (security-flagged) | 11 (1) |
| Releases | 200 |
| Fixes not yet in a release | 0 |

## Security fixes (newest first)

| Date | Type | IDs | Fix | Shipped in | Release date | How mapped |
|---|---|---|---|---|---|---|
| 2026-10-21 | advisory (medium) | GHSA-8g5g-mxqh-grgj, CVE-2026-118662 | [`server.fs.deny` bypassed with queries for v6](https://github.com/vitejs/vite/security/advisories/GHSA-8g5g-mxqh-grgj) | v6.4.5 | 2026-10-21 | advisory patched_versions |
| 2026-10-06 | advisory (low) | GHSA-9jrq-w75r-8gcw, CVE-2026-112945 | [Cross origin script execution through Vite custom middleware](https://github.com/vitejs/vite/security/advisories/GHSA-9jrq-w75r-8gcw) | v8.3.3, v8.2.4, v8.1.6, v7.3.7, v6.4.4 | 2026-10-06, 2026-10-06, 2026-10-06, 2026-10-06, 2026-10-06 | advisory patched_versions |
| 2026-10-06 | advisory (medium) | GHSA-vfpm-58rq-9qcg, CVE-2026-112947 | [First 4 bytes of files outside of `server.fs` setting is exposed by `?vite-wasm-instance`](https://github.com/vitejs/vite/security/advisories/GHSA-vfpm-58rq-9qcg) | v8.3.3, v8.2.4 | 2026-10-06, 2026-10-06 | advisory patched_versions |
| 2026-10-06 | advisory (medium) | GHSA-rq7h-c2jc-7f22, CVE-2026-112946 | [Files outside `server.fs.allow` could be served when project paths match system paths on non-Windows machine](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22) | v8.3.3, v8.2.4, v8.1.6, v7.3.7, v6.4.4 | 2026-10-06, 2026-10-06, 2026-10-06, 2026-10-06, 2026-10-06 | advisory patched_versions |
| 2026-06-01 | advisory (medium) | GHSA-fx2h-pf6j-xcff, CVE-2026-53571 | [`server.fs.deny` bypass on Windows alternate paths](https://github.com/vitejs/vite/security/advisories/GHSA-fx2h-pf6j-xcff) | v8.0.16, v7.3.5, v6.4.3 | 2026-06-01, 2026-06-01, 2026-06-01 | advisory patched_versions |
| 2026-04-06 | advisory (medium) | GHSA-4w7w-66w2-5vf9, CVE-2026-39365 | [Path Traversal in Optimized Deps `.map` Handling](https://github.com/vitejs/vite/security/advisories/GHSA-4w7w-66w2-5vf9) | v8.0.5, v7.3.2, v6.4.2 | 2026-04-06, 2026-04-06, 2026-04-06 | advisory patched_versions |
| 2026-04-06 | advisory (medium) | GHSA-v2wj-q39q-566r, CVE-2026-39364 | [`server.fs.deny` bypassed with queries](https://github.com/vitejs/vite/security/advisories/GHSA-v2wj-q39q-566r) | v8.0.5, v7.3.2 | 2026-04-06, 2026-04-06 | advisory patched_versions |
| 2026-04-06 | advisory (high) | GHSA-p9ff-h696-f583, CVE-2026-39363 | [Arbitrary File Read via Vite Dev Server WebSocket](https://github.com/vitejs/vite/security/advisories/GHSA-p9ff-h696-f583) | v8.0.5, v7.3.2, v6.4.2 | 2026-04-06, 2026-04-06, 2026-04-06 | advisory patched_versions |
| 2025-10-20 | advisory (medium) | GHSA-93m4-6634-74q7, CVE-2025-62522 | [`server.fs.deny` bypassed with `\` on Windows](https://github.com/vitejs/vite/security/advisories/GHSA-93m4-6634-74q7) | v7.1.11, v7.0.8, v6.4.1, v5.4.21 | 2025-10-20, 2025-10-20, 2025-10-20, 2025-10-20 | advisory patched_versions |
| 2025-09-08 | advisory (medium) | GHSA-g4jq-h2w9-997c, CVE-2025-58751 | [Files starting with the same name with the public directory were served](https://github.com/vitejs/vite/security/advisories/GHSA-g4jq-h2w9-997c) | v7.1.5, v7.0.7, v6.3.6, v5.4.20 | 2025-09-08, 2025-09-08, 2025-09-08, 2025-09-08 | advisory patched_versions |
| 2025-09-08 | advisory (medium) | GHSA-jqfw-vq24-v9c3, CVE-2025-58752 | [`server.fs` settings was not applied to HTML files](https://github.com/vitejs/vite/security/advisories/GHSA-jqfw-vq24-v9c3) | v7.1.5, v7.0.7, v6.3.6, v5.4.20 | 2025-09-08, 2025-09-08, 2025-09-08, 2025-09-08 | advisory patched_versions |
| 2025-04-30 | advisory (medium) | GHSA-859w-5945-r5v3, CVE-2025-46565 | [`server.fs.deny` bypassed with `/.` for files under project `root`](https://github.com/vitejs/vite/security/advisories/GHSA-859w-5945-r5v3) | v6.3.4, v6.2.7, v6.1.6, v5.4.19, v4.5.14 | 2025-04-30, 2025-04-30, 2025-04-30, 2025-04-30, 2025-04-30 | advisory patched_versions |
| 2025-04-10 | advisory (high) | GHSA-356w-63v5-8wf4, CVE-2025-32395 | [`server.fs.deny` bypassed with an invalid `request-target`](https://github.com/vitejs/vite/security/advisories/GHSA-356w-63v5-8wf4) | v6.2.6, v6.1.5, v6.0.15, v5.4.18, v4.5.13 | 2025-04-10, 2025-04-10, 2025-04-10, 2025-04-10, 2025-04-10 | advisory patched_versions |
| 2025-04-03 | advisory (high) | GHSA-xcj6-pq6g-qj4x, CVE-2025-31486 | [`server.fs.deny` bypassed with `.svg` or relative paths](https://github.com/vitejs/vite/security/advisories/GHSA-xcj6-pq6g-qj4x) | v6.2.5, v6.1.4, v6.0.14, v5.4.17, v4.5.12 | 2025-04-03, 2025-04-03, 2025-04-03, 2025-04-03, 2025-04-03 | advisory patched_versions |
| 2025-03-31 | advisory (high) | GHSA-4r4m-qw57-chr8, CVE-2025-31125 | [`server.fs.deny` bypassed for `inline` and `raw` with `?import` query](https://github.com/vitejs/vite/security/advisories/GHSA-4r4m-qw57-chr8) | v6.2.4, v6.1.3, v6.0.13, v5.4.16, v4.5.11 | 2025-03-31, 2025-03-31, 2025-03-31, 2025-03-31, 2025-03-31 | advisory patched_versions |
| 2025-03-24 | advisory (high) | GHSA-x574-m823-4x7w, CVE-2025-30208 | [ server.fs.deny bypassed when using `?raw??`](https://github.com/vitejs/vite/security/advisories/GHSA-x574-m823-4x7w) | v6.2.3, v6.1.2, v6.0.12, v5.4.16, v4.5.11 | 2025-03-24, 2025-03-24, 2025-03-24, 2025-03-31, 2025-03-31 | advisory patched_versions |
| 2025-01-20 | advisory (medium) | GHSA-vg6x-rcgg-rjx6, CVE-2025-24010 | [Any websites were able to send any requests to the development server and read the response](https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6) | v6.0.12, v5.4.16, v4.5.11 | 2025-03-24, 2025-03-31, 2025-03-31 | advisory patched_versions |
| 2024-09-17 | advisory (medium) | GHSA-64vr-g452-qvp3, CVE-2024-45812 | [DOM Clobbering gadget found in vite bundled scripts that leads to XSS](https://github.com/vitejs/vite/security/advisories/GHSA-64vr-g452-qvp3) | v5.4.16, v4.5.11 | 2025-03-31, 2025-03-31 | advisory patched_versions |
| 2024-09-17 | advisory (high) | GHSA-9cwx-2883-4wfx, CVE-2024-45811 | [server.fs.deny bypassed when using ?import&raw](https://github.com/vitejs/vite/security/advisories/GHSA-9cwx-2883-4wfx) | v5.4.16, v4.5.11 | 2025-03-31, 2025-03-31 | advisory patched_versions |
| 2024-04-03 | advisory (medium) | GHSA-8jhw-289h-jh2g, CVE-2024-31207 | [`server.fs.deny` did not deny requests for patterns with directories.](https://github.com/vitejs/vite/security/advisories/GHSA-8jhw-289h-jh2g) | v6.2.3 | 2025-03-24 | date heuristic (first release on/after publish) |
| 2024-01-19 | advisory (medium) | GHSA-c24v-8rfc-w8vw, CVE-2024-23331 | [Vite dev server option `server.fs.deny` can be bypassed when hosted on case-insensitive filesystem](https://github.com/vitejs/vite/security/advisories/GHSA-c24v-8rfc-w8vw) | v4.5.11, v5.4.16 | 2025-03-31, 2025-03-31 | advisory patched_versions |
| 2023-12-04 | advisory (low) | GHSA-92r3-m2mg-pj97, CVE-2023-49293 | [XSS vulnerability in `server.transformIndexHtml` via URL payload](https://github.com/vitejs/vite/security/advisories/GHSA-92r3-m2mg-pj97) | v4.5.11, v5.4.16 | 2025-03-31, 2025-03-31 | advisory patched_versions |
| 2023-06-01 | advisory (medium) | GHSA-353f-5xf4-qw67, CVE-2023-34092 | [Vite Server Options (server.fs.deny) can be bypassed using double forward-slash (//)](https://github.com/vitejs/vite/security/advisories/GHSA-353f-5xf4-qw67) | v4.5.11 | 2025-03-31 | advisory patched_versions |

## Dependency updates by bots (newest first)

| Merged | Bot | Update | Security? | Shipped in | How mapped |
|---|---|---|---|---|---|
| 2026-10-27 | renovate[bot] | [fix(deps): update all non-major dependencies](https://github.com/vitejs/vite/pull/23896) |  | create-vite@9.3.2 | date heuristic (first release on/after merge) |
| 2026-10-26 | renovate[bot] | [chore(deps): update dependency tsdown to ^0.23.2](https://github.com/vitejs/vite/pull/23895) |  | create-vite@9.3.2 | date heuristic (first release on/after merge) |
| 2026-10-22 | renovate[bot] | [fix(deps): update dependency @node-rs/bcrypt to v2](https://github.com/vitejs/vite/pull/23866) |  | create-vite@9.3.2 | date heuristic (first release on/after merge) |
| 2026-10-22 | renovate[bot] | [fix(deps): update dependency preact to v11](https://github.com/vitejs/vite/pull/23867) |  | create-vite@9.3.2 | date heuristic (first release on/after merge) |
| 2026-10-19 | renovate[bot] | [fix(deps): update all non-major dependencies](https://github.com/vitejs/vite/pull/23826) |  | create-vite@9.3.0 | date heuristic (first release on/after merge) |
| 2026-10-19 | renovate[bot] | [fix(deps): update rolldown-related dependencies](https://github.com/vitejs/vite/pull/23827) |  | create-vite@9.3.0 | date heuristic (first release on/after merge) |
| 2026-10-13 | renovate[bot] | [fix(deps): update all non-major dependencies](https://github.com/vitejs/vite/pull/23731) | yes | create-vite@9.3.0 | date heuristic (first release on/after merge) |
| 2026-10-13 | renovate[bot] | [fix(deps): update rolldown-related dependencies](https://github.com/vitejs/vite/pull/23733) |  | create-vite@9.3.0 | date heuristic (first release on/after merge) |
| 2026-10-12 | renovate[bot] | [chore(deps): update actions/setup-node digest to 949feb2](https://github.com/vitejs/vite/pull/23730) |  | create-vite@9.3.0 | date heuristic (first release on/after merge) |
| 2026-10-07 | renovate[bot] | [fix(deps): update all non-major dependencies](https://github.com/vitejs/vite/pull/23648) |  | v8.3.4 | date heuristic (first release on/after merge) |
| 2026-10-07 | renovate[bot] | [fix(deps): update rolldown-related dependencies](https://github.com/vitejs/vite/pull/23649) |  | v8.3.4 | date heuristic (first release on/after merge) |

## Releases

| Release | Date | Pre-release |
|---|---|---|
| [create-vite@9.3.3](https://github.com/vitejs/vite/releases/tag/create-vite%409.3.3) | 2026-10-27 |  |
| [create-vite@9.3.2](https://github.com/vitejs/vite/releases/tag/create-vite%409.3.2) | 2026-10-27 |  |
| [v8.3.5](https://github.com/vitejs/vite/releases/tag/v8.3.5) | 2026-10-21 |  |
| [v6.4.5](https://github.com/vitejs/vite/releases/tag/v6.4.5) | 2026-10-21 |  |
| [create-vite@9.3.1](https://github.com/vitejs/vite/releases/tag/create-vite%409.3.1) | 2026-10-20 |  |
| [create-vite@9.3.0](https://github.com/vitejs/vite/releases/tag/create-vite%409.3.0) | 2026-10-19 |  |
| [v8.3.4](https://github.com/vitejs/vite/releases/tag/v8.3.4) | 2026-10-08 |  |
| [v6.4.4](https://github.com/vitejs/vite/releases/tag/v6.4.4) | 2026-10-06 |  |
| [v7.3.7](https://github.com/vitejs/vite/releases/tag/v7.3.7) | 2026-10-06 |  |
| [v8.1.6](https://github.com/vitejs/vite/releases/tag/v8.1.6) | 2026-10-06 |  |
| [v8.2.4](https://github.com/vitejs/vite/releases/tag/v8.2.4) | 2026-10-06 |  |
| [v8.3.3](https://github.com/vitejs/vite/releases/tag/v8.3.3) | 2026-10-06 |  |
| [v8.3.2](https://github.com/vitejs/vite/releases/tag/v8.3.2) | 2026-10-01 |  |
| [v8.3.1](https://github.com/vitejs/vite/releases/tag/v8.3.1) | 2026-09-24 |  |
| [create-vite@9.2.1](https://github.com/vitejs/vite/releases/tag/create-vite%409.2.1) | 2026-09-10 |  |
| [v8.3.0](https://github.com/vitejs/vite/releases/tag/v8.3.0) | 2026-09-10 |  |
| [v8.3.0-beta.1](https://github.com/vitejs/vite/releases/tag/v8.3.0-beta.1) | 2026-09-07 | yes |
| [v8.3.0-beta.0](https://github.com/vitejs/vite/releases/tag/v8.3.0-beta.0) | 2026-09-02 | yes |
| [create-vite@9.2.0](https://github.com/vitejs/vite/releases/tag/create-vite%409.2.0) | 2026-08-24 |  |
| [v8.2.2](https://github.com/vitejs/vite/releases/tag/v8.2.2) | 2026-08-20 |  |
| [plugin-legacy@8.2.3](https://github.com/vitejs/vite/releases/tag/plugin-legacy%408.2.3) | 2026-08-06 |  |
| [v8.2.1](https://github.com/vitejs/vite/releases/tag/v8.2.1) | 2026-08-06 |  |
| [create-vite@9.1.2](https://github.com/vitejs/vite/releases/tag/create-vite%409.1.2) | 2026-07-30 |  |
| [v8.2.0](https://github.com/vitejs/vite/releases/tag/v8.2.0) | 2026-07-30 |  |
| [plugin-legacy@8.2.2](https://github.com/vitejs/vite/releases/tag/plugin-legacy%408.2.2) | 2026-07-23 |  |
| [v8.2.0-beta.0](https://github.com/vitejs/vite/releases/tag/v8.2.0-beta.0) | 2026-07-22 | yes |
| [v8.1.5](https://github.com/vitejs/vite/releases/tag/v8.1.5) | 2026-07-16 |  |
| [plugin-legacy@8.2.1](https://github.com/vitejs/vite/releases/tag/plugin-legacy%408.2.1) | 2026-07-16 |  |
| [plugin-legacy@8.2.0](https://github.com/vitejs/vite/releases/tag/plugin-legacy%408.2.0) | 2026-07-09 |  |
| [v8.1.4](https://github.com/vitejs/vite/releases/tag/v8.1.4) | 2026-07-09 |  |
| [v8.1.3](https://github.com/vitejs/vite/releases/tag/v8.1.3) | 2026-07-02 |  |
| [v8.1.2](https://github.com/vitejs/vite/releases/tag/v8.1.2) | 2026-06-30 |  |
| [create-vite@9.1.1](https://github.com/vitejs/vite/releases/tag/create-vite%409.1.1) | 2026-06-30 |  |
| [v8.1.1](https://github.com/vitejs/vite/releases/tag/v8.1.1) | 2026-06-30 |  |
| [v7.3.6](https://github.com/vitejs/vite/releases/tag/v7.3.6) | 2026-06-25 |  |
| [create-vite@9.1.0](https://github.com/vitejs/vite/releases/tag/create-vite%409.1.0) | 2026-06-23 |  |
| [plugin-legacy@8.1.0](https://github.com/vitejs/vite/releases/tag/plugin-legacy%408.1.0) | 2026-06-23 |  |
| [v8.1.0](https://github.com/vitejs/vite/releases/tag/v8.1.0) | 2026-06-23 |  |
| [plugin-legacy@8.1.0-beta.0](https://github.com/vitejs/vite/releases/tag/plugin-legacy%408.1.0-beta.0) | 2026-06-15 | yes |
| [v8.1.0-beta.0](https://github.com/vitejs/vite/releases/tag/v8.1.0-beta.0) | 2026-06-15 | yes |
| [v6.4.3](https://github.com/vitejs/vite/releases/tag/v6.4.3) | 2026-06-01 |  |
| [v7.3.5](https://github.com/vitejs/vite/releases/tag/v7.3.5) | 2026-06-01 |  |
| [v8.0.16](https://github.com/vitejs/vite/releases/tag/v8.0.16) | 2026-06-01 |  |
| [v8.0.15](https://github.com/vitejs/vite/releases/tag/v8.0.15) | 2026-06-01 |  |
| [v8.0.14](https://github.com/vitejs/vite/releases/tag/v8.0.14) | 2026-05-21 |  |
| [plugin-legacy@8.0.2](https://github.com/vitejs/vite/releases/tag/plugin-legacy%408.0.2) | 2026-05-14 |  |
| [v8.0.13](https://github.com/vitejs/vite/releases/tag/v8.0.13) | 2026-05-14 |  |
| [create-vite@9.0.7](https://github.com/vitejs/vite/releases/tag/create-vite%409.0.7) | 2026-05-11 |  |
| [v8.0.12](https://github.com/vitejs/vite/releases/tag/v8.0.12) | 2026-05-11 |  |
| [v8.0.11](https://github.com/vitejs/vite/releases/tag/v8.0.11) | 2026-05-07 |  |

## Gaps in this record

- releases: stopped after 2 pages (raise max_pages for full history)
- tags: stopped after 2 pages (raise max_pages for full history)
- pull requests: stopped after 2 pages (raise max_pages for full history)
- commits: stopped after 2 pages (raise max_pages for full history)

---
Mapping notes: `advisory patched_versions` means each advisory patched range was parsed and matched to the earliest fetched release tag that satisfies it; every matched release is listed. `tag commit match` means the commit SHA or bot PR merge SHA equals the commit a release tag points at (annotated tags use the peeled commit, not the tag object; a short SHA counts only when it is a unique prefix of one tag commit). `date heuristic (first release on/after publish)`, `date heuristic (first release on/after commit)`, and `date heuristic (first release on/after merge)` are the first stable release published on or after that date, used only when the methods above do not match. That heuristic can be wrong for backports and multi-branch repos. Commit detection uses message keywords (CVE-, GHSA-, security, vuln…) and will miss silent fixes and include some false positives.
