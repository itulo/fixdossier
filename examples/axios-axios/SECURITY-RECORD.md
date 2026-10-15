# Security record — axios/axios

_Generated 2026-10-12T13:36:53.690Z by fixledger from GitHub data (releases, tags, security advisories, merged Dependabot/Renovate PRs, commit messages). Automatically compiled; review before relying on it. Not legal advice._

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
| 2026-09-16 | advisory (medium) | GHSA-9fr6-4gfg-395g, CVE-2026-101902 | [Prototype-Pollution Gadget in Axios Default Instance Allows Inherited Object.prototype.method to Override HTTP Method](https://github.com/axios/axios/security/advisories/GHSA-9fr6-4gfg-395g) | v0.34.0 | 2026-09-13 | advisory patched_versions |
| 2026-09-16 | advisory (high) | GHSA-c29m-xwm3-cm6r, CVE-2026-101903 | [ReDoS in fromDataURI data: URL parser freezes the Node event loop (DoS)](https://github.com/axios/axios/security/advisories/GHSA-c29m-xwm3-cm6r) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (high) | GHSA-mghh-pgcx-3jjj, CVE-2026-101906 | [ReDoS (O(N²)) in shouldBypassProxy host normalization, reachable via untrusted redirect Location](https://github.com/axios/axios/security/advisories/GHSA-mghh-pgcx-3jjj) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (high) | GHSA-x97p-jq2g-jp4f, CVE-2026-101909 | [Prototype Pollution Gadget in axios toFormData Options](https://github.com/axios/axios/security/advisories/GHSA-x97p-jq2g-jp4f) | v0.34.0 | 2026-09-13 | advisory patched_versions |
| 2026-09-16 | advisory (high) | GHSA-3pq3-5fj3-cg6v, CVE-2026-101898 | [HTTP/2 adapter bypasses configured DNS lookup and proxy controls](https://github.com/axios/axios/security/advisories/GHSA-3pq3-5fj3-cg6v) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-09-16 | advisory (high) | GHSA-542g-h47m-68v8, CVE-2026-101901 | [Denial of Service  via Unhandled 'error' Event in HTTP/2 ClientHttp2Session Initialization](https://github.com/axios/axios/security/advisories/GHSA-542g-h47m-68v8) | v1.20.0 | 2026-08-24 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-hcpx-6fm6-wx23, CVE-2026-69125 | [Axios form serializer maxDepth bypass via {} metatoken](https://github.com/axios/axios/security/advisories/GHSA-hcpx-6fm6-wx23) | v0.33.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (high) | GHSA-gcfj-64vw-6mp9, CVE-2026-69124 | [Axios Node HTTP adapter can use an inherited proxy after interceptor config cloning](https://github.com/axios/axios/security/advisories/GHSA-gcfj-64vw-6mp9) | v0.33.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-7q8q-rj6j-mhjq, CVE-2026-69123 | [Nested axios option objects can consume polluted prototype values](https://github.com/axios/axios/security/advisories/GHSA-7q8q-rj6j-mhjq) | v0.33.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-mwf2-3pr3-8698, CVE-2026-68948 | [HTTP/2 streamed uploads bypass `maxBodyLength`](https://github.com/axios/axios/security/advisories/GHSA-mwf2-3pr3-8698) | v1.18.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-jqh4-m9w3-8hp9, CVE-2026-68947 | [Fetch adapter `ReadableStream` uploads bypass `maxBodyLength`](https://github.com/axios/axios/security/advisories/GHSA-jqh4-m9w3-8hp9) | v1.18.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-mmx7-hfxf-jppx, CVE-2026-68944 | [Prototype pollution gadgets can alter axios request construction](https://github.com/axios/axios/security/advisories/GHSA-mmx7-hfxf-jppx) | v1.18.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-f4gw-2p7v-4548, CVE-2026-68946 | [NO_PROXY bypass for 0.0.0.0 local addresses in axios](https://github.com/axios/axios/security/advisories/GHSA-f4gw-2p7v-4548) | v1.18.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-xj6q-8x83-jv6g, CVE-2026-68943 | [Prototype pollution auth subfields can inject Basic auth](https://github.com/axios/axios/security/advisories/GHSA-xj6q-8x83-jv6g) | v1.18.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-42h9-826w-cgv3, CVE-2026-68942 | [Excessive recursion in formDataToJSON can cause denial of service](https://github.com/axios/axios/security/advisories/GHSA-42h9-826w-cgv3) | v1.18.0 | 2026-06-13 | advisory patched_versions |
| 2026-07-06 | advisory (medium) | GHSA-pmv8-rq9r-6j72, CVE-2026-68941 | [Deep formToJSON Key Recursion Can Cause Denial of Service](https://github.com/axios/axios/security/advisories/GHSA-pmv8-rq9r-6j72) | v0.33.0 | 2026-06-13 | advisory patched_versions |
| 2026-06-22 | commit | — | [chore(deps): bump form-data floor to ^4.0.6 to patch CRLF injection (#11028)](https://github.com/axios/axios/commit/5d2af0485354580dce4b6b77890b84cadc0ead0e) | v1.19.0 | 2026-07-26 | date heuristic (first release on/after commit) |
| 2026-05-30 | advisory (high) | GHSA-777c-7fjr-54vf, CVE-2026-44488 | [Allocation of Resources Without Limits or Throttling in axios](https://github.com/axios/axios/security/advisories/GHSA-777c-7fjr-54vf) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-30 | advisory (medium) | GHSA-p92q-9vqr-4j8v, CVE-2026-44487 | [Proxy-Authorization Credential Leak to Origin Server Across HTTP-to-HTTPS Redirect in Axios Node.js HTTP Adapter](https://github.com/axios/axios/security/advisories/GHSA-p92q-9vqr-4j8v) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-30 | advisory (high) | GHSA-j5f8-grm9-p9fc, CVE-2026-44486 | [Proxy-Authorization header leaks to redirect target when proxy is re-evaluated to direct connection](https://github.com/axios/axios/security/advisories/GHSA-j5f8-grm9-p9fc) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-30 | advisory (high) | GHSA-hfxv-24rg-xrqf, CVE-2026-44496 | [Regular Expression Denial of Service (ReDoS) via Cookie Name Injection](https://github.com/axios/axios/security/advisories/GHSA-hfxv-24rg-xrqf) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-29 | advisory (high) | GHSA-3g43-6gmg-66jw, CVE-2026-44495 | [Prototype Pollution Gadget in Axios Config Merge Allows Inherited transformResponse Execution](https://github.com/axios/axios/security/advisories/GHSA-3g43-6gmg-66jw) | v1.15.2 | 2026-04-21 | advisory patched_versions |
| 2026-05-29 | advisory (high) | GHSA-35jp-ww65-95wh, CVE-2026-44494 | [Prototype Pollution Gadget in Axios Node Proxy Handling](https://github.com/axios/axios/security/advisories/GHSA-35jp-ww65-95wh) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-29 | advisory (high) | GHSA-pjwm-pj3p-43mv, CVE-2026-44492 | [shouldBypassProxy does not recognize IPv4-mapped IPv6 addresses, allowing NO_PROXY bypass (incomplete fix for CVE-2025-62718)](https://github.com/axios/axios/security/advisories/GHSA-pjwm-pj3p-43mv) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-29 | advisory (medium) | GHSA-898c-q2cr-xwhg, CVE-2026-44490 | [DoS & Header Injection via Prototype Pollution Read-Side Gadgets in axios merge functions](https://github.com/axios/axios/security/advisories/GHSA-898c-q2cr-xwhg) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-29 | advisory (low) | GHSA-654m-c8p4-x5fp, CVE-2026-44489 | [Proxy-Authorization Header Injection via Prototype Pollution — Incomplete Null-Prototype Fix](https://github.com/axios/axios/security/advisories/GHSA-654m-c8p4-x5fp) | v1.16.0 | 2026-05-02 | advisory patched_versions |
| 2026-05-24 | commit | CVE-2026-42264, GHSA-72mg-mc2j-cwf6 | [fix: guard socketPath with own() to prevent prototype pollution SSRF (#10901)](https://github.com/axios/axios/commit/140a17944a6ff175611597c874e218ad6c2afd1c) | v1.17.0 | 2026-06-03 | date heuristic (first release on/after commit) |
| 2026-04-24 | advisory (medium) | GHSA-445q-vr5w-6q77, CVE-2026-42037 | [CRLF Injection in multipart/form-data body via unsanitized blob.type in formDataToStream](https://github.com/axios/axios/security/advisories/GHSA-445q-vr5w-6q77) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (medium) | GHSA-m7pr-hjqh-92cm, CVE-2026-42038 | [no_proxy bypass via IP alias allows SSRF](https://github.com/axios/axios/security/advisories/GHSA-m7pr-hjqh-92cm) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (medium) | GHSA-62hf-57xw-28j9, CVE-2026-42039 | [axios: unbounded recursion in toFormData causes DoS via deeply nested request data](https://github.com/axios/axios/security/advisories/GHSA-62hf-57xw-28j9) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (medium) | GHSA-5c9x-8gcm-mpgx, CVE-2026-42034 | [ HTTP adapter streamed uploads bypass maxBodyLength when maxRedirects: 0](https://github.com/axios/axios/security/advisories/GHSA-5c9x-8gcm-mpgx) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (medium) | GHSA-vf2m-468p-8v99, CVE-2026-42036 | [HTTP adapter streamed responses bypass maxContentLength](https://github.com/axios/axios/security/advisories/GHSA-vf2m-468p-8v99) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (high) | GHSA-pf86-5x62-jrwf, CVE-2026-42033 | [Prototype Pollution Gadgets in axios: Response Tampering, Data Exfiltration, and Request Hijacking](https://github.com/axios/axios/security/advisories/GHSA-pf86-5x62-jrwf) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (high) | GHSA-6chq-wfr3-2hj9, CVE-2026-42035 | [Header Injection via Prototype Pollution](https://github.com/axios/axios/security/advisories/GHSA-6chq-wfr3-2hj9) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (medium) | GHSA-xx6v-rp6x-q39c, CVE-2026-42042 | [XSRF Token Cross-Origin Leakage via Prototype Pollution Gadget in `withXSRFToken` Boolean Coercion](https://github.com/axios/axios/security/advisories/GHSA-xx6v-rp6x-q39c) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (medium) | GHSA-w9j2-pvgh-6h63, CVE-2026-42041 | [Authentication Bypass via Prototype Pollution Gadget in `validateStatus` Merge Strategy](https://github.com/axios/axios/security/advisories/GHSA-w9j2-pvgh-6h63) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (high) | GHSA-pmwg-cvhr-8vh7, CVE-2026-42043 | [[Patch Bypass] Incomplete Fix for GHSA-3p68-rc4w-qgx5 (CVE-2025-62718) — NO_PROXY  Protection Bypassed via RFC 1122 Loopback Subnet (127.0.0.0/8)  in Axios 1.15.0](https://github.com/axios/axios/security/advisories/GHSA-pmwg-cvhr-8vh7) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-24 | advisory (medium) | GHSA-3w6x-2g7m-8v23, CVE-2026-42044 | [Invisible JSON Response Tampering via Prototype Pollution Gadget in `parseReviver`](https://github.com/axios/axios/security/advisories/GHSA-3w6x-2g7m-8v23) | v1.15.2 | 2026-04-21 | advisory patched_versions |
| 2026-04-24 | advisory (high) | GHSA-q8qp-cvcw-x6jj, CVE-2026-42264 | [Prototype pollution read-side gadgets in HTTP adapter allow credential injection and request hijacking](https://github.com/axios/axios/security/advisories/GHSA-q8qp-cvcw-x6jj) | v1.15.2 | 2026-04-21 | advisory patched_versions |
| 2026-04-24 | advisory (low) | GHSA-xhjh-pmcv-23jw, CVE-2026-42040 | [Null Byte Injection via Reverse-Encoding in AxiosURLSearchParams](https://github.com/axios/axios/security/advisories/GHSA-xhjh-pmcv-23jw) | v1.15.1 | 2026-04-19 | advisory patched_versions |
| 2026-04-09 | advisory (medium) | GHSA-fvcv-3m26-pcqx, CVE-2026-40175 | [Unrestricted Cloud Metadata Exfiltration via Header Injection Chain](https://github.com/axios/axios/security/advisories/GHSA-fvcv-3m26-pcqx) | v1.15.0 | 2026-04-07 | advisory patched_versions |
| 2026-04-09 | advisory (medium) | GHSA-3p68-rc4w-qgx5, CVE-2025-62718 | [NO_PROXY Hostname Normalization Bypass Leads to SSRF](https://github.com/axios/axios/security/advisories/GHSA-3p68-rc4w-qgx5) | v1.15.0 | 2026-04-07 | advisory patched_versions |
| 2026-04-07 | advisory (medium) | GHSA-qj83-cq47-w5f8, CVE-2026-39865 | [Axios HTTP/2 Session Cleanup State Corruption Vulnerability](https://github.com/axios/axios/security/advisories/GHSA-qj83-cq47-w5f8) | v1.13.2 | 2025-11-04 | advisory patched_versions |
| 2026-02-08 | advisory (high) | GHSA-43fc-jf86-j433, CVE-2026-25639 | [Denial of Service via __proto__ Key in mergeConfig](https://github.com/axios/axios/security/advisories/GHSA-43fc-jf86-j433) | v1.13.5 | 2026-02-08 | advisory patched_versions |
| 2025-09-11 | advisory (high) | GHSA-4hjh-wcwx-xvwj, CVE-2025-58754 | [Axios DoS via data: URL decode (CVE-2025-58754)](https://github.com/axios/axios/security/advisories/GHSA-4hjh-wcwx-xvwj) | v1.12.0 | 2025-09-11 | advisory patched_versions |
| 2025-07-23 | advisory (high) | GHSA-rm8p-cx58-hcvx, CVE-2025-54371 | [Transitive Critical Vulnerability via form-data@4.0.0 in axios@1.10.0 — Predictable Boundary Values (CVE-2025-7783)](https://github.com/axios/axios/security/advisories/GHSA-rm8p-cx58-hcvx) | v1.11.0 | 2025-07-23 | advisory patched_versions |
| 2025-03-07 | advisory (medium) | GHSA-jr5f-v2jv-69x6, CVE-2025-27152 | [Possible SSRF and Credential Leakage via Absolute URL in axios Requests](https://github.com/axios/axios/security/advisories/GHSA-jr5f-v2jv-69x6) | v1.8.2 | 2025-03-07 | advisory patched_versions |

## Dependency updates by bots (newest first)

| Merged | Bot | Update | Security? | Shipped in |
|---|---|---|---|---|
| 2026-10-08 | dependabot[bot] | [chore(deps-dev): bump proxy-addr from 2.0.7 to 2.0.8](https://github.com/axios/axios/pull/11306) | yes | _unreleased_ |
| 2026-10-08 | dependabot[bot] | [chore(deps-dev): bump source-map-js from 1.2.1 to 1.2.2](https://github.com/axios/axios/pull/11305) | yes | _unreleased_ |
| 2026-10-08 | dependabot[bot] | [chore(deps): bump @vue/server-renderer and vue in /docs](https://github.com/axios/axios/pull/11304) |  | _unreleased_ |
| 2026-10-08 | dependabot[bot] | [chore(deps-dev): bump brace-expansion from 2.1.4 to 2.1.7 in /tests/smoke/cjs](https://github.com/axios/axios/pull/11303) |  | _unreleased_ |
| 2026-10-08 | dependabot[bot] | [chore(deps-dev): bump source-map-js from 1.2.1 to 1.2.2 in /tests/module/esm](https://github.com/axios/axios/pull/11302) | yes | _unreleased_ |
| 2026-10-07 | dependabot[bot] | [chore(deps-dev): bump lint-staged from 17.5.1 to 17.6.0 in the development_dependencies group](https://github.com/axios/axios/pull/11298) |  | _unreleased_ |
| 2026-10-02 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group across 1 directory with 6 updates](https://github.com/axios/axios/pull/11271) |  | _unreleased_ |
| 2026-10-02 | dependabot[bot] | [chore(deps-dev): bump brace-expansion from 1.1.12 to 1.1.21 in /tests/module/cjs](https://github.com/axios/axios/pull/11270) |  | _unreleased_ |
| 2026-10-02 | dependabot[bot] | [chore(deps-dev): bump brace-expansion from 5.0.7 to 5.0.12](https://github.com/axios/axios/pull/11269) |  | _unreleased_ |
| 2026-10-02 | dependabot[bot] | [chore(deps): bump axios from 1.18.1 to 1.20.0 in /docs](https://github.com/axios/axios/pull/11268) | yes | _unreleased_ |
| 2026-09-22 | dependabot[bot] | [chore(deps): bump zizmorcore/zizmor-action from 0.6.3 to 0.6.4 in the github-actions group](https://github.com/axios/axios/pull/11245) |  | _unreleased_ |
| 2026-09-22 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 3 updates](https://github.com/axios/axios/pull/11244) | yes | _unreleased_ |
| 2026-09-16 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 4 updates](https://github.com/axios/axios/pull/11234) |  | _unreleased_ |
| 2026-09-13 | dependabot[bot] | [chore(deps): bump nanoid from 3.3.17 to 3.3.19 in /docs](https://github.com/axios/axios/pull/11230) |  | _unreleased_ |
| 2026-09-09 | dependabot[bot] | [chore(deps-dev): bump js-yaml from 4.3.1 to 4.3.2](https://github.com/axios/axios/pull/11221) |  | v0.34.0 |
| 2026-09-09 | dependabot[bot] | [chore(deps): bump @vitest/mocker and vitest in /tests/smoke/esm](https://github.com/axios/axios/pull/11220) |  | v0.34.0 |
| 2026-09-09 | dependabot[bot] | [chore(deps-dev): bump js-yaml from 4.1.0 to 4.3.2 in /tests/smoke/cjs](https://github.com/axios/axios/pull/11218) |  | v0.34.0 |
| 2026-09-08 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 3 updates](https://github.com/axios/axios/pull/11212) | yes | v0.34.0 |
| 2026-09-08 | dependabot[bot] | [chore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 in the github-actions group](https://github.com/axios/axios/pull/11213) |  | v0.34.0 |
| 2026-09-04 | dependabot[bot] | [chore(deps-dev): bump fast-uri from 3.1.5 to 3.1.7](https://github.com/axios/axios/pull/11195) | yes | v0.34.0 |
| 2026-09-01 | dependabot[bot] | [chore(deps-dev): bump browserslist from 4.28.4 to 4.28.8](https://github.com/axios/axios/pull/11189) |  | v0.34.0 |
| 2026-09-01 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 5 updates](https://github.com/axios/axios/pull/11188) |  | v0.34.0 |
| 2026-08-26 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group across 1 directory with 4 updates](https://github.com/axios/axios/pull/11169) |  | v0.34.0 |
| 2026-08-11 | dependabot[bot] | [chore(deps): bump zizmorcore/zizmor-action from 0.6.1 to 0.6.2 in the github-actions group](https://github.com/axios/axios/pull/11144) |  | v1.20.0 |
| 2026-08-11 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 4 updates](https://github.com/axios/axios/pull/11143) |  | v1.20.0 |
| 2026-08-11 | dependabot[bot] | [chore(deps): bump js-yaml and mocha in /tests/smoke/cjs](https://github.com/axios/axios/pull/11133) |  | v1.20.0 |
| 2026-08-11 | dependabot[bot] | [chore(deps-dev): bump js-yaml from 4.3.0 to 4.3.1](https://github.com/axios/axios/pull/11140) |  | v1.20.0 |
| 2026-08-04 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group across 1 directory with 7 updates](https://github.com/axios/axios/pull/11123) |  | v1.20.0 |
| 2026-08-04 | dependabot[bot] | [chore(deps-dev): bump fast-uri from 3.1.4 to 3.1.5](https://github.com/axios/axios/pull/11126) | yes | v1.20.0 |
| 2026-08-04 | dependabot[bot] | [chore(deps): bump postcss from 8.5.12 to 8.5.25 in /docs](https://github.com/axios/axios/pull/11127) |  | v1.20.0 |
| 2026-08-04 | dependabot[bot] | [chore(deps): bump zizmorcore/zizmor-action from 0.6.0 to 0.6.1 in the github-actions group](https://github.com/axios/axios/pull/11122) |  | v1.20.0 |
| 2026-07-29 | dependabot[bot] | [chore(deps): bump the github-actions group with 2 updates](https://github.com/axios/axios/pull/11107) |  | v1.20.0 |
| 2026-07-29 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 2 updates](https://github.com/axios/axios/pull/11106) |  | v1.20.0 |
| 2026-07-26 | dependabot[bot] | [chore(deps-dev): bump postcss from 8.5.10 to 8.5.23 in /tests/module/esm](https://github.com/axios/axios/pull/11099) |  | v1.20.0 |
| 2026-07-26 | dependabot[bot] | [chore(deps-dev): bump postcss from 8.5.16 to 8.5.23](https://github.com/axios/axios/pull/11098) |  | v1.20.0 |
| 2026-07-26 | dependabot[bot] | [chore(deps-dev): bump fast-uri from 3.1.3 to 3.1.4](https://github.com/axios/axios/pull/11092) | yes | v1.20.0 |
| 2026-07-21 | dependabot[bot] | [chore(deps): bump axios from 1.16.1 to 1.18.1 in /docs](https://github.com/axios/axios/pull/11088) |  | v1.19.0 |
| 2026-07-21 | dependabot[bot] | [chore(deps): bump actions/setup-node from 6.4.0 to 7.0.0 in the github-actions group](https://github.com/axios/axios/pull/11090) |  | v1.19.0 |
| 2026-07-21 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 3 updates](https://github.com/axios/axios/pull/11089) |  | v1.19.0 |
| 2026-07-14 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 3 updates](https://github.com/axios/axios/pull/11079) |  | v1.19.0 |
| 2026-07-14 | dependabot[bot] | [chore(deps): bump denoland/setup-deno from 2.0.4 to 2.0.5 in the github-actions group](https://github.com/axios/axios/pull/11080) |  | v1.19.0 |
| 2026-06-30 | dependabot[bot] | [chore(deps-dev): bump the development_dependencies group with 3 updates](https://github.com/axios/axios/pull/11055) |  | v1.19.0 |
| 2026-06-17 | dependabot[bot] | [chore(deps): bump form-data from 4.0.5 to 4.0.6](https://github.com/axios/axios/pull/11015) |  | v1.18.1 |

## Releases

| Release | Date | Pre-release |
|---|---|---|
| [v0.34.0](https://github.com/axios/axios/releases/tag/v0.34.0) | 2026-09-13 |  |
| [v1.20.0](https://github.com/axios/axios/releases/tag/v1.20.0) | 2026-08-24 |  |
| [v1.19.0](https://github.com/axios/axios/releases/tag/v1.19.0) | 2026-07-26 |  |
| [v1.18.1](https://github.com/axios/axios/releases/tag/v1.18.1) | 2026-06-21 |  |
| [v1.18.0](https://github.com/axios/axios/releases/tag/v1.18.0) | 2026-06-13 |  |
| [v0.33.0](https://github.com/axios/axios/releases/tag/v0.33.0) | 2026-06-13 |  |
| [v1.17.0](https://github.com/axios/axios/releases/tag/v1.17.0) | 2026-06-03 |  |
| [v1.16.1](https://github.com/axios/axios/releases/tag/v1.16.1) | 2026-05-13 |  |
| [v0.32.0](https://github.com/axios/axios/releases/tag/v0.32.0) | 2026-05-04 |  |
| [v1.16.0](https://github.com/axios/axios/releases/tag/v1.16.0) | 2026-05-02 |  |
| [v1.15.2](https://github.com/axios/axios/releases/tag/v1.15.2) | 2026-04-21 |  |
| [v0.31.1](https://github.com/axios/axios/releases/tag/v0.31.1) | 2026-04-19 |  |
| [v1.15.1](https://github.com/axios/axios/releases/tag/v1.15.1) | 2026-04-19 |  |
| [v0.31.0](https://github.com/axios/axios/releases/tag/v0.31.0) | 2026-04-12 |  |
| [v1.15.0](https://github.com/axios/axios/releases/tag/v1.15.0) | 2026-04-07 |  |
| [v1.14.0](https://github.com/axios/axios/releases/tag/v1.14.0) | 2026-03-27 |  |
| [v1.13.6](https://github.com/axios/axios/releases/tag/v1.13.6) | 2026-02-27 |  |
| [v0.30.3](https://github.com/axios/axios/releases/tag/v0.30.3) | 2026-02-18 |  |
| [v1.13.5](https://github.com/axios/axios/releases/tag/v1.13.5) | 2026-02-08 |  |
| [v1.13.4](https://github.com/axios/axios/releases/tag/v1.13.4) | 2026-01-27 |  |
| [v1.13.3](https://github.com/axios/axios/releases/tag/v1.13.3) | 2026-01-20 |  |
| [v1.13.2](https://github.com/axios/axios/releases/tag/v1.13.2) | 2025-11-04 |  |
| [v1.13.1](https://github.com/axios/axios/releases/tag/v1.13.1) | 2025-10-28 |  |
| [v1.13.0](https://github.com/axios/axios/releases/tag/v1.13.0) | 2025-10-27 |  |
| [v0.30.2](https://github.com/axios/axios/releases/tag/v0.30.2) | 2025-09-27 |  |
| [v1.12.2](https://github.com/axios/axios/releases/tag/v1.12.2) | 2025-09-14 |  |
| [v1.12.1](https://github.com/axios/axios/releases/tag/v1.12.1) | 2025-09-12 |  |
| [v1.12.0](https://github.com/axios/axios/releases/tag/v1.12.0) | 2025-09-11 |  |
| [v0.30.1](https://github.com/axios/axios/releases/tag/v0.30.1) | 2025-08-04 |  |
| [v1.11.0](https://github.com/axios/axios/releases/tag/v1.11.0) | 2025-07-23 |  |
| [v1.10.0](https://github.com/axios/axios/releases/tag/v1.10.0) | 2025-06-14 |  |
| [v1.9.0](https://github.com/axios/axios/releases/tag/v1.9.0) | 2025-04-24 |  |
| [v0.30.0](https://github.com/axios/axios/releases/tag/v0.30.0) | 2025-03-26 |  |
| [v1.8.4](https://github.com/axios/axios/releases/tag/v1.8.4) | 2025-03-19 |  |
| [v1.8.3](https://github.com/axios/axios/releases/tag/v1.8.3) | 2025-03-12 |  |
| [v1.8.2](https://github.com/axios/axios/releases/tag/v1.8.2) | 2025-03-07 |  |
| [v1.8.1](https://github.com/axios/axios/releases/tag/v1.8.1) | 2025-02-26 |  |
| [v1.8.0](https://github.com/axios/axios/releases/tag/v1.8.0) | 2025-02-26 |  |
| [v1.7.9](https://github.com/axios/axios/releases/tag/v1.7.9) | 2024-12-04 |  |
| [v1.7.8](https://github.com/axios/axios/releases/tag/v1.7.8) | 2024-11-25 |  |
| [v0.29.0](https://github.com/axios/axios/releases/tag/v0.29.0) | 2024-11-21 |  |
| [v1.7.7](https://github.com/axios/axios/releases/tag/v1.7.7) | 2024-08-31 |  |
| [v1.7.6](https://github.com/axios/axios/releases/tag/v1.7.6) | 2024-08-30 |  |
| [v1.7.5](https://github.com/axios/axios/releases/tag/v1.7.5) | 2024-08-23 |  |
| [v1.7.4](https://github.com/axios/axios/releases/tag/v1.7.4) | 2024-08-13 |  |
| [v1.7.3](https://github.com/axios/axios/releases/tag/v1.7.3) | 2024-08-01 |  |
| [v1.7.2](https://github.com/axios/axios/releases/tag/v1.7.2) | 2024-05-21 |  |
| [v1.7.1](https://github.com/axios/axios/releases/tag/v1.7.1) | 2024-05-20 |  |
| [v1.7.0](https://github.com/axios/axios/releases/tag/v1.7.0) | 2024-05-19 |  |
| [v1.7.0-beta.2](https://github.com/axios/axios/releases/tag/v1.7.0-beta.2) | 2024-05-19 | yes |

## Gaps in this record

- pull requests: stopped after 2 pages (raise max_pages for full history)
- commits: stopped after 2 pages (raise max_pages for full history)

---
Mapping notes: "advisory patched_versions" matches the advisory's patched version to a release tag. "date heuristic" picks the first stable release published on or after the fix date, which can be wrong for backports or multi-branch repos. Commit detection uses message keywords (CVE-, GHSA-, security, vuln…) and will miss silent fixes and include some false positives.
