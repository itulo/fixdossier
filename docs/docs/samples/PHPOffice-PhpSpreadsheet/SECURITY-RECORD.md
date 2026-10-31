# Security record — PHPOffice/PhpSpreadsheet

_Generated 2026-10-31T13:29:41.317Z by fixdossier from GitHub data (releases, tags, security advisories, merged Dependabot/Renovate PRs, commit messages). Automatically compiled; review before relying on it. Not legal advice._

## Summary

| Item | Count |
|---|---|
| Published GitHub security advisories | 32 |
| Commits that look like security fixes | 1 |
| Merged bot dependency updates (security-flagged) | 87 (9) |
| Releases | 145 |
| Fixes not yet in a release | 1 |

## Security fixes (newest first)

| Date | Type | IDs | Fix | Shipped in | Release date | How mapped |
|---|---|---|---|---|---|---|
| 2026-10-12 | advisory (high) | GHSA-j2w7-387v-m2rq, CVE-2026-108359 | [ODS Reader: Unbounded number-rows-repeated → CPU & Memory Exhaustion (DoS)](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-j2w7-387v-m2rq) | 5.10.0, 3.10.8, 2.4.8, 2.1.19, 1.30.7 | 2026-09-17, 2026-09-17, 2026-09-17, 2026-09-17, 2026-09-17 | advisory patched_versions |
| 2026-10-12 | advisory (medium) | GHSA-2phh-27fw-q4gc, CVE-2026-108360 | [SSRF whitelist bypass via unre-validated HTTP redirect in Drawing::setPath external image loading](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-2phh-27fw-q4gc) | 5.10.0, 3.10.8, 2.4.8, 2.1.19, 1.30.7 | 2026-09-17, 2026-09-17, 2026-09-17, 2026-09-17, 2026-09-17 | advisory patched_versions |
| 2026-10-12 | advisory (high) | GHSA-rxj4-h86g-25gc, CVE-2026-108357 | [XmlScanner Bypass via Double-Encoded unentity() TOCTOU Allows XXE and Denial of Service](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-rxj4-h86g-25gc) | 5.10.0, 3.10.8 | 2026-09-17, 2026-09-17 | advisory patched_versions |
| 2026-10-12 | advisory (high) | GHSA-3x94-m842-937c, CVE-2026-108358 | [XmlScanner Bypass via ISO-2022 Escape Sequences Allows XXE and Denial of Service](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-3x94-m842-937c) | 5.10.0, 3.10.8, 2.4.8, 2.1.19, 1.30.7 | 2026-09-17, 2026-09-17, 2026-09-17, 2026-09-17, 2026-09-17 | advisory patched_versions |
| 2026-09-23 | commit | — | [Security Policy Updates](https://github.com/PHPOffice/PhpSpreadsheet/commit/b03f7f3371e1dd1adafa41e4d0e47335f2d782f9) | _unreleased_ | — | unreleased |
| 2026-07-19 | advisory (high) | GHSA-6hq5-7373-42rg, CVE-2026-59931 | [SSRF bypass via HTTP redirect in WEBSERVICE() domain whitelist](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-6hq5-7373-42rg) | 5.8.1, 3.10.7, 2.4.7, 2.1.18, 1.30.6 | 2026-07-12, 2026-07-12, 2026-07-12, 2026-07-12, 2026-07-12 | advisory patched_versions |
| 2026-07-19 | advisory (high) | GHSA-2mrg-gjxq-2gvr, CVE-2026-59932 | [Gnumeric reader unbounded gzip expansion causes memory exhaustion](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-2mrg-gjxq-2gvr) | 5.8.1, 3.10.7, 2.4.7, 2.1.18, 1.30.6 | 2026-07-12, 2026-07-12, 2026-07-12, 2026-07-12, 2026-07-12 | advisory patched_versions |
| 2026-07-19 | advisory (high) | GHSA-xh5m-36r6-47m3, CVE-2026-59933 | [XLS/OLE sector-chain self-loop causes memory exhaustion](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-xh5m-36r6-47m3) | 5.8.1, 3.10.7, 2.4.7, 2.1.18, 1.30.6 | 2026-07-12, 2026-07-12, 2026-07-12, 2026-07-12, 2026-07-12 | advisory patched_versions |
| 2026-06-07 | advisory (high) | GHSA-87m4-826x-3crx, CVE-2026-45034 | [CVE-2026-34084 patch bypass](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-87m4-826x-3crx) | 1.30.5 | 2026-05-31 | advisory patched_versions |
| 2026-04-28 | advisory (high) | GHSA-84wq-86v6-x5j6, CVE-2026-40863 | [CPU Denial of Service via Unbounded Row Index in SpreadsheetML XML Reader](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-84wq-86v6-x5j6) | 5.7.0, 3.10.5, 2.4.5, 2.1.16, 1.30.6 | 2026-04-20, 2026-04-20, 2026-04-20, 2026-04-20, 2026-07-12 | advisory patched_versions |
| 2026-04-28 | advisory (high) | GHSA-7c6m-4442-2x6m, CVE-2026-40902 | [CPU Denial of Service via Unbounded Row Number in XLSX Row Dimensions](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-7c6m-4442-2x6m) | 5.7.0, 3.10.5, 2.4.5, 2.1.16, 1.30.4 | 2026-04-20, 2026-04-20, 2026-04-20, 2026-04-20, 2026-04-20 | advisory patched_versions |
| 2026-04-28 | advisory (high) | GHSA-q4q6-r8wh-5cgh, CVE-2026-34084 | [SSRF/RCE in IOFactory::load when $filename is user controlled](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-q4q6-r8wh-5cgh) | 5.6.0, 3.10.4, 2.4.4, 2.1.15, 1.30.3 | 2026-04-10, 2026-04-10, 2026-04-10, 2026-04-10, 2026-04-10 | advisory patched_versions |
| 2026-04-26 | advisory (medium) | GHSA-hrmw-qprp-wgmc, CVE-2026-40296 | [XSS via number format code with @ text placeholder bypasses htmlspecialchars in HTML writer](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-hrmw-qprp-wgmc) | 5.7.0, 3.10.5, 2.4.5, 2.1.16, 1.30.4 | 2026-04-20, 2026-04-20, 2026-04-20, 2026-04-20, 2026-04-20 | advisory patched_versions |
| 2026-04-26 | advisory (medium) | GHSA-6wpp-88cp-7q68, CVE-2026-35453 | [XSS via NumberFormat @ Text Substitution in HTML Writer](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-6wpp-88cp-7q68) | 5.7.0, 3.10.5, 2.4.5, 2.1.16, 1.30.4 | 2026-04-20, 2026-04-20, 2026-04-20, 2026-04-20, 2026-04-20 | advisory patched_versions |
| 2025-08-23 | advisory (high) | GHSA-rx7m-68vc-ppxh, CVE-2025-54370 | [SSRF when reading and displaying a processed HTML document in the browser](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-rx7m-68vc-ppxh) | 1.30.0, 2.1.12, 2.4.0, 3.10.0, 5.0.0 | 2025-08-10, 2025-08-10, 2025-08-10, 2025-08-10, 2025-08-10 | advisory patched_versions |
| 2025-02-01 | advisory (medium) | GHSA-r57h-547h-w24f, CVE-2025-23210 | [Bypass XSS sanitizer using the javascript protocol and special characters](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-r57h-547h-w24f) | 3.9.0, 1.29.9, 2.3.7, 2.1.8 | 2025-01-26, 2025-01-26, 2025-01-26, 2025-01-26 | advisory patched_versions |
| 2025-01-18 | advisory (medium) | GHSA-79xx-vf93-p7cx, CVE-2025-22131 | [Cross-Site Scripting (XSS) vulnerability in generateNavigation() function](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-79xx-vf93-p7cx) | 3.8.0, 1.29.8, 2.1.7, 2.3.6 | 2025-01-12, 2025-01-12, 2025-01-12, 2025-01-12 | advisory patched_versions |
| 2025-01-03 | advisory (medium) | GHSA-q9jv-mm3r-j47r, CVE-2024-56412 | [Bypass XSS sanitizer using the javascript protocol and special characters](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-q9jv-mm3r-j47r) | 3.7.0, 1.29.7, 2.1.6, 2.3.5 | 2024-12-27, 2024-12-27, 2024-12-27, 2024-12-27 | advisory patched_versions |
| 2025-01-03 | advisory (medium) | GHSA-hwcp-2h35-p66w, CVE-2024-56411 | [Cross-Site Scripting (XSS) vulnerability of the hyperlink base in the HTML page header](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-hwcp-2h35-p66w) | 3.7.0, 1.29.7, 2.1.6, 2.3.5 | 2024-12-27, 2024-12-27, 2024-12-27, 2024-12-27 | advisory patched_versions |
| 2025-01-03 | advisory (medium) | GHSA-wv23-996v-q229, CVE-2024-56410 | [Cross-Site Scripting (XSS) vulnerability in custom properties](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-wv23-996v-q229) | 3.7.0, 1.29.7, 2.1.6, 2.3.5 | 2024-12-27, 2024-12-27, 2024-12-27, 2024-12-27 | advisory patched_versions |
| 2025-01-03 | advisory (high) | GHSA-j2xg-cjcx-4677, CVE-2024-56409 | [Unauthorized Reflected XSS in Currency.php file](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-j2xg-cjcx-4677) | 3.7.0, 1.29.7, 2.1.6, 2.3.5 | 2024-12-27, 2024-12-27, 2024-12-27, 2024-12-27 | advisory patched_versions |
| 2025-01-03 | advisory (high) | GHSA-c6fv-7vh8-2rhr, CVE-2024-56366 | [Unauthorized Reflected XSS in the Accounting.php file](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-c6fv-7vh8-2rhr) | 3.7.0, 1.29.7, 2.1.6, 2.3.5 | 2024-12-27, 2024-12-27, 2024-12-27, 2024-12-27 | advisory patched_versions |
| 2025-01-03 | advisory (high) | GHSA-jmpx-686v-c3wx, CVE-2024-56365 | [Unauthorized Reflected XSS in the constructor of the Downloader class](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-jmpx-686v-c3wx) | 3.7.0, 1.29.7, 2.1.6, 2.3.5 | 2024-12-27, 2024-12-27, 2024-12-27, 2024-12-27 | advisory patched_versions |
| 2025-01-03 | advisory (high) | GHSA-x88g-h956-m5xg, CVE-2024-56408 | [Unauthorized Reflected XSS in `Convert-Online.php` file](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-x88g-h956-m5xg) | 3.7.0, 1.29.7, 2.1.6, 2.3.5 | 2024-12-27, 2024-12-27, 2024-12-27, 2024-12-27 | advisory patched_versions |
| 2024-11-16 | advisory (high) | GHSA-7cc9-j4mv-vcjp, CVE-2024-48917 | [XXE in PHPSpreadsheet's XLSX reader](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-7cc9-j4mv-vcjp) | 1.29.4, 2.1.3, 2.3.2, 3.4.0 | 2024-11-10, 2024-11-10, 2024-11-10, 2024-11-10 | advisory patched_versions |
| 2024-11-16 | advisory (high) | GHSA-jw4x-v69f-hh5w, CVE-2024-47873 | [XmlScanner bypass leads to XXE](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-jw4x-v69f-hh5w) | 1.29.4, 2.1.3, 2.3.2, 3.4.0 | 2024-11-10, 2024-11-10, 2024-11-10, 2024-11-10 | advisory patched_versions |
| 2024-10-07 | advisory (medium) | GHSA-r8w8-74ww-j4wh, CVE-2024-45292 | [PhpSpreadsheet HTML writer is vulnerable to Cross-Site Scripting via JavaScript hyperlinks](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-r8w8-74ww-j4wh) | 2.3.0, 1.29.2, 2.1.1 | 2024-09-29, 2024-09-29, 2024-09-29 | advisory patched_versions |
| 2024-10-07 | advisory (medium) | GHSA-w9xv-qf98-ccq4, CVE-2024-45291 | [Absolute path traversal and Server-Side Request Forgery in HTML writer when embedding images is enabled](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-w9xv-qf98-ccq4) | 2.3.0, 1.29.2, 2.1.1 | 2024-09-29, 2024-09-29, 2024-09-29 | advisory patched_versions |
| 2024-10-07 | advisory (high) | GHSA-5gpr-w2p5-6m37, CVE-2024-45290 | [Absolute path traversal and Server-Side Request Forgery when opening XLSX file](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-5gpr-w2p5-6m37) | 2.3.0, 1.29.2, 2.1.1 | 2024-09-29, 2024-09-29, 2024-09-29 | advisory patched_versions |
| 2024-10-07 | advisory (high) | GHSA-6hwr-6v2f-3m88, CVE-2024-45293 | [XXE in PHPSpreadsheet's XLSX reader](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-6hwr-6v2f-3m88) | 2.3.0, 1.29.1, 2.1.1 | 2024-09-29, 2024-09-04, 2024-09-29 | advisory patched_versions |
| 2024-10-06 | advisory (high) | GHSA-v66g-p9x6-v98p, CVE-2024-45060 | [Unauthenticated Cross-Site-Scripting (XSS) in sample file](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-v66g-p9x6-v98p) | 2.3.0, 1.29.2, 2.1.1 | 2024-09-29, 2024-09-29, 2024-09-29 | advisory patched_versions |
| 2024-08-28 | advisory (high) | GHSA-ghg6-32f9-2jp7, CVE-2024-45048 | [XXE in PHPSpreadsheet encoding is returned](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-ghg6-32f9-2jp7) | 2.2.1, 1.29.1, 2.1.1 | 2024-07-29, 2024-09-04, 2024-09-29 | advisory patched_versions |
| 2024-08-28 | advisory (medium) | GHSA-wgmf-q9vr-vww6, CVE-2024-45046 | [PhpSpreadsheet HTML writer is vulnerable to Cross-Site Scripting via style information](https://github.com/PHPOffice/PhpSpreadsheet/security/advisories/GHSA-wgmf-q9vr-vww6) | 2.1.0, 1.29.1 | 2024-05-11, 2024-09-04 | advisory patched_versions |

## Dependency updates by bots (newest first)

| Merged | Bot | Update | Security? | Shipped in | How mapped |
|---|---|---|---|---|---|
| 2026-09-02 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.95.17 to 3.95.23](https://github.com/PHPOffice/PhpSpreadsheet/pull/4979) |  | 1.30.7 | date heuristic (first release on/after merge) |
| 2026-08-08 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.13.5 to 3.13.6](https://github.com/PHPOffice/PhpSpreadsheet/pull/4955) | yes | 1.30.7 | date heuristic (first release on/after merge) |
| 2026-08-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.95.11 to 3.95.17](https://github.com/PHPOffice/PhpSpreadsheet/pull/4951) |  | 1.30.7 | date heuristic (first release on/after merge) |
| 2026-07-26 | dependabot[bot] | [Bump dompdf/dompdf from 3.1.5 to 3.1.6](https://github.com/PHPOffice/PhpSpreadsheet/pull/4940) | yes | 1.30.7 | date heuristic (first release on/after merge) |
| 2026-07-01 | dependabot[bot] | [Bump composer/pcre from 3.3.2 to 3.4.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4932) |  | 2.1.18 | date heuristic (first release on/after merge) |
| 2026-07-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.95.4 to 3.95.11](https://github.com/PHPOffice/PhpSpreadsheet/pull/4930) |  | 2.1.18 | date heuristic (first release on/after merge) |
| 2026-06-24 | dependabot[bot] | [Bump actions/cache from 5 to 6](https://github.com/PHPOffice/PhpSpreadsheet/pull/4924) |  | 2.1.18 | date heuristic (first release on/after merge) |
| 2026-06-21 | dependabot[bot] | [Bump actions/checkout from 6 to 7](https://github.com/PHPOffice/PhpSpreadsheet/pull/4921) |  | 2.1.18 | date heuristic (first release on/after merge) |
| 2026-06-07 | dependabot[bot] | [Bump peaceiris/actions-gh-pages from 3 to 4](https://github.com/PHPOffice/PhpSpreadsheet/pull/4903) |  | 5.8.0 | date heuristic (first release on/after merge) |
| 2026-06-07 | dependabot[bot] | [Bump actions/checkout from 4 to 6](https://github.com/PHPOffice/PhpSpreadsheet/pull/4902) |  | 5.8.0 | date heuristic (first release on/after merge) |
| 2026-06-07 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.95.3 to 3.95.4](https://github.com/PHPOffice/PhpSpreadsheet/pull/4900) |  | 5.8.0 | date heuristic (first release on/after merge) |
| 2026-05-19 | dependabot[bot] | [Bump setasign/fpdi from 2.6.6 to 2.6.7](https://github.com/PHPOffice/PhpSpreadsheet/pull/4879) |  | 1.30.5 | date heuristic (first release on/after merge) |
| 2026-04-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.11.0 to 6.11.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4849) |  | 2.1.15 | date heuristic (first release on/after merge) |
| 2026-04-01 | dependabot[bot] | [Bump dompdf/dompdf from 3.1.4 to 3.1.5](https://github.com/PHPOffice/PhpSpreadsheet/pull/4848) |  | 2.1.15 | date heuristic (first release on/after merge) |
| 2026-04-01 | dependabot[bot] | [Bump mpdf/mpdf from 8.2.7 to 8.3.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/4846) |  | 2.1.15 | date heuristic (first release on/after merge) |
| 2026-03-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.10.1 to 6.11.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4818) |  | 2.1.15 | date heuristic (first release on/after merge) |
| 2026-02-01 | dependabot[bot] | [Bump phpstan/phpstan-phpunit from 2.0.11 to 2.0.12](https://github.com/PHPOffice/PhpSpreadsheet/pull/4796) |  | 5.5.0 | date heuristic (first release on/after merge) |
| 2026-02-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.92.3 to 3.93.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/4795) |  | 5.5.0 | date heuristic (first release on/after merge) |
| 2026-02-01 | dependabot[bot] | [Bump phpstan/phpstan from 2.1.33 to 2.1.38](https://github.com/PHPOffice/PhpSpreadsheet/pull/4794) |  | 5.5.0 | date heuristic (first release on/after merge) |
| 2026-01-28 | dependabot[bot] | [Bump symfony/process from 6.4.26 to 6.4.33](https://github.com/PHPOffice/PhpSpreadsheet/pull/4792) | yes | 5.5.0 | date heuristic (first release on/after merge) |
| 2026-01-28 | dependabot[bot] | [Bump phpunit/phpunit from 10.5.60 to 10.5.62](https://github.com/PHPOffice/PhpSpreadsheet/pull/4790) |  | 5.5.0 | date heuristic (first release on/after merge) |
| 2025-11-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.88.2 to 3.89.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/4698) |  | 2.4.2 | date heuristic (first release on/after merge) |
| 2025-11-01 | dependabot[bot] | [Bump dompdf/dompdf from 3.1.2 to 3.1.4](https://github.com/PHPOffice/PhpSpreadsheet/pull/4700) |  | 2.4.2 | date heuristic (first release on/after merge) |
| 2025-10-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.85.1 to 3.88.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4671) |  | 1.30.1 | date heuristic (first release on/after merge) |
| 2025-10-01 | dependabot[bot] | [Bump dompdf/dompdf from 3.1.1 to 3.1.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4672) |  | 1.30.1 | date heuristic (first release on/after merge) |
| 2025-08-05 | dependabot[bot] | [Bump setasign/fpdi from 2.6.3 to 2.6.4](https://github.com/PHPOffice/PhpSpreadsheet/pull/4573) | yes | 1.30.0 | date heuristic (first release on/after merge) |
| 2025-07-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.75.0 to 3.76.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4525) |  | 1.29.12 | date heuristic (first release on/after merge) |
| 2025-07-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.13.0 to 3.13.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4526) |  | 1.29.12 | date heuristic (first release on/after merge) |
| 2025-06-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.9.3 to 6.10.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4496) |  | 1.29.11 | date heuristic (first release on/after merge) |
| 2025-06-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.12.2 to 3.13.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4494) |  | 1.29.11 | date heuristic (first release on/after merge) |
| 2025-05-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.12.0 to 3.12.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4457) |  | 4.3.0 | date heuristic (first release on/after merge) |
| 2025-05-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.9.0 to 6.9.3](https://github.com/PHPOffice/PhpSpreadsheet/pull/4458) |  | 4.3.0 | date heuristic (first release on/after merge) |
| 2025-04-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.70.0 to 3.75.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4430) |  | 4.2.0 | date heuristic (first release on/after merge) |
| 2025-04-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.11.3 to 3.12.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4432) |  | 4.2.0 | date heuristic (first release on/after merge) |
| 2025-04-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.8.2 to 6.9.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4434) |  | 4.2.0 | date heuristic (first release on/after merge) |
| 2025-03-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.68.5 to 3.70.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4387) |  | 4.1.0 | date heuristic (first release on/after merge) |
| 2025-02-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.66.0 to 3.68.5](https://github.com/PHPOffice/PhpSpreadsheet/pull/4338) |  | 1.29.10 | date heuristic (first release on/after merge) |
| 2025-02-01 | dependabot[bot] | [Bump dompdf/dompdf from 3.0.2 to 3.1.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4337) |  | 1.29.10 | date heuristic (first release on/after merge) |
| 2025-02-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.8.0 to 6.8.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4336) |  | 1.29.10 | date heuristic (first release on/after merge) |
| 2025-02-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.11.2 to 3.11.3](https://github.com/PHPOffice/PhpSpreadsheet/pull/4335) |  | 1.29.10 | date heuristic (first release on/after merge) |
| 2025-01-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.11.1 to 3.11.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4295) |  | 1.29.8 | date heuristic (first release on/after merge) |
| 2025-01-01 | dependabot[bot] | [Bump dompdf/dompdf from 3.0.1 to 3.0.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4294) |  | 1.29.8 | date heuristic (first release on/after merge) |
| 2024-12-28 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.7.7 to 6.8.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4291) |  | 1.29.8 | date heuristic (first release on/after merge) |
| 2024-12-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.10.3 to 3.11.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/4253) |  | 2.1.5 | date heuristic (first release on/after merge) |
| 2024-12-01 | dependabot[bot] | [Bump mitoteam/jpgraph from 10.4.1 to 10.4.3](https://github.com/PHPOffice/PhpSpreadsheet/pull/4254) |  | 2.1.5 | date heuristic (first release on/after merge) |
| 2024-12-01 | dependabot[bot] | [Bump mpdf/mpdf from 8.2.4 to 8.2.5](https://github.com/PHPOffice/PhpSpreadsheet/pull/4255) |  | 2.1.5 | date heuristic (first release on/after merge) |
| 2024-11-06 | dependabot[bot] | [Bump symfony/process from 6.4.8 to 6.4.14](https://github.com/PHPOffice/PhpSpreadsheet/pull/4216) | yes | 3.4.0 | date heuristic (first release on/after merge) |
| 2024-11-01 | dependabot[bot] | [Bump maennchen/zipstream-php from 3.1.0 to 3.1.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/4211) |  | 3.4.0 | date heuristic (first release on/after merge) |
| 2024-11-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.7.5 to 6.7.7](https://github.com/PHPOffice/PhpSpreadsheet/pull/4209) | yes | 3.4.0 | date heuristic (first release on/after merge) |
| 2024-10-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.10.2 to 3.10.3](https://github.com/PHPOffice/PhpSpreadsheet/pull/4177) |  | 3.4.0 | date heuristic (first release on/after merge) |
| 2024-09-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.61.1 to 3.64.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4155) |  | 1.29.1 | date heuristic (first release on/after merge) |
| 2024-07-01 | dependabot[bot] | [Bump phpstan/phpstan from 1.11.3 to 1.11.5](https://github.com/PHPOffice/PhpSpreadsheet/pull/4085) |  | 2.2.0 | date heuristic (first release on/after merge) |
| 2024-07-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.58.1 to 3.59.3](https://github.com/PHPOffice/PhpSpreadsheet/pull/4083) |  | 2.2.0 | date heuristic (first release on/after merge) |
| 2024-07-01 | dependabot[bot] | [Bump mpdf/mpdf from 8.2.3 to 8.2.4](https://github.com/PHPOffice/PhpSpreadsheet/pull/4084) |  | 2.2.0 | date heuristic (first release on/after merge) |
| 2024-07-01 | dependabot[bot] | [Bump phpunit/phpunit from 10.5.20 to 10.5.24](https://github.com/PHPOffice/PhpSpreadsheet/pull/4082) |  | 2.2.0 | date heuristic (first release on/after merge) |
| 2024-06-01 | dependabot[bot] | [Bump dompdf/dompdf from 2.0.8 to 3.0.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4054) |  | 2.2.0 | date heuristic (first release on/after merge) |
| 2024-06-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.9.2 to 3.10.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/4052) |  | 2.2.0 | date heuristic (first release on/after merge) |
| 2024-06-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.56.1 to 3.58.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/4051) |  | 2.2.0 | date heuristic (first release on/after merge) |
| 2024-05-01 | dependabot[bot] | [Bump phpstan/phpstan from 1.10.66 to 1.10.67](https://github.com/PHPOffice/PhpSpreadsheet/pull/4011) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-05-01 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.7.4 to 6.7.5](https://github.com/PHPOffice/PhpSpreadsheet/pull/4012) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-05-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.53.0 to 3.54.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/4010) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-05-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.9.1 to 3.9.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/4009) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-05-01 | dependabot[bot] | [Bump dompdf/dompdf from 2.0.4 to 2.0.8](https://github.com/PHPOffice/PhpSpreadsheet/pull/4008) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-04-15 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.51.0 to 3.53.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/3984) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-04-15 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.9.0 to 3.9.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/3970) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-04-15 | dependabot[bot] | [Bump mpdf/mpdf from 8.2.2 to 8.2.3](https://github.com/PHPOffice/PhpSpreadsheet/pull/3971) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-04-15 | dependabot[bot] | [Bump phpunit/phpunit from 9.6.17 to 9.6.19](https://github.com/PHPOffice/PhpSpreadsheet/pull/3983) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-04-15 | dependabot[bot] | [Bump phpstan/phpstan from 1.10.59 to 1.10.66](https://github.com/PHPOffice/PhpSpreadsheet/pull/3966) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-04-14 | dependabot[bot] | [Bump tecnickcom/tcpdf from 6.6.5 to 6.7.4](https://github.com/PHPOffice/PhpSpreadsheet/pull/3967) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-03-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.8.1 to 3.9.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/3929) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-03-01 | dependabot[bot] | [Bump phpstan/phpstan-phpunit from 1.3.15 to 1.3.16](https://github.com/PHPOffice/PhpSpreadsheet/pull/3928) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-03-01 | dependabot[bot] | [Bump phpstan/phpstan from 1.10.57 to 1.10.59](https://github.com/PHPOffice/PhpSpreadsheet/pull/3927) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-03-01 | dependabot[bot] | [Bump phpunit/phpunit from 9.6.16 to 9.6.17](https://github.com/PHPOffice/PhpSpreadsheet/pull/3926) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-03-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.48.0 to 3.51.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/3925) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-02-21 | dependabot[bot] | [Bump phenx/php-svg-lib from 0.5.1 to 0.5.2](https://github.com/PHPOffice/PhpSpreadsheet/pull/3914) | yes | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-02-01 | dependabot[bot] | [Bump phpstan/phpstan from 1.10.50 to 1.10.57](https://github.com/PHPOffice/PhpSpreadsheet/pull/3885) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-02-01 | dependabot[bot] | [Bump phpunit/phpunit from 9.6.15 to 9.6.16](https://github.com/PHPOffice/PhpSpreadsheet/pull/3884) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-02-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.8.0 to 3.8.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/3886) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-02-01 | dependabot[bot] | [Bump mitoteam/jpgraph from 10.3.2 to 10.4.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/3882) |  | 2.1.0 | date heuristic (first release on/after merge) |
| 2024-01-01 | dependabot[bot] | [Bump phpunit/phpunit from 9.6.14 to 9.6.15](https://github.com/PHPOffice/PhpSpreadsheet/pull/3851) |  | 2.0.0 | date heuristic (first release on/after merge) |
| 2024-01-01 | dependabot[bot] | [Bump squizlabs/php_codesniffer from 3.7.2 to 3.8.0](https://github.com/PHPOffice/PhpSpreadsheet/pull/3849) |  | 2.0.0 | date heuristic (first release on/after merge) |
| 2024-01-01 | dependabot[bot] | [Bump phpstan/phpstan from 1.10.46 to 1.10.50](https://github.com/PHPOffice/PhpSpreadsheet/pull/3848) |  | 2.0.0 | date heuristic (first release on/after merge) |
| 2023-12-14 | dependabot[bot] | [Bump dompdf/dompdf from 2.0.3 to 2.0.4](https://github.com/PHPOffice/PhpSpreadsheet/pull/3826) | yes | 2.0.0 | date heuristic (first release on/after merge) |
| 2023-12-13 | dependabot[bot] | [Bump phenx/php-svg-lib from 0.5.0 to 0.5.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/3824) | yes | 2.0.0 | date heuristic (first release on/after merge) |
| 2023-12-01 | dependabot[bot] | [Bump phpunit/phpunit from 9.6.13 to 9.6.14](https://github.com/PHPOffice/PhpSpreadsheet/pull/3806) |  | 2.0.0 | date heuristic (first release on/after merge) |
| 2023-09-01 | dependabot[bot] | [Bump phpstan/phpstan from 1.10.26 to 1.10.32](https://github.com/PHPOffice/PhpSpreadsheet/pull/3704) |  | 2.0.0 | date heuristic (first release on/after merge) |
| 2023-01-01 | dependabot[bot] | [Bump friendsofphp/php-cs-fixer from 3.13.0 to 3.13.1](https://github.com/PHPOffice/PhpSpreadsheet/pull/3272) |  | 1.27.0 | date heuristic (first release on/after merge) |

## Releases

| Release | Date | Pre-release |
|---|---|---|
| [5.10.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.10.0) | 2026-09-17 |  |
| [3.10.8](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.8) | 2026-09-17 |  |
| [2.4.8](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.8) | 2026-09-17 |  |
| [2.1.19](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.19) | 2026-09-17 |  |
| [1.30.7](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.7) | 2026-09-17 |  |
| [5.9.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.9.0) | 2026-07-12 |  |
| [5.8.1](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.8.1) | 2026-07-12 |  |
| [1.30.6](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.6) | 2026-07-12 |  |
| [3.10.7](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.7) | 2026-07-12 |  |
| [2.4.7](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.7) | 2026-07-12 |  |
| [2.1.18](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.18) | 2026-07-12 |  |
| [5.8.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.8.0) | 2026-06-07 |  |
| [3.10.6](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.6) | 2026-06-07 |  |
| [2.4.6](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.6) | 2026-06-07 |  |
| [2.1.17](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.17) | 2026-06-07 |  |
| [1.30.5](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.5) | 2026-05-31 |  |
| [5.7.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.7.0) | 2026-04-20 |  |
| [1.30.4](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.4) | 2026-04-20 |  |
| [3.10.5](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.5) | 2026-04-20 |  |
| [2.4.5](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.5) | 2026-04-20 |  |
| [2.1.16](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.16) | 2026-04-20 |  |
| [5.6.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.6.0) | 2026-04-10 |  |
| [1.30.3](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.3) | 2026-04-10 |  |
| [3.10.4](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.4) | 2026-04-10 |  |
| [2.4.4](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.4) | 2026-04-10 |  |
| [2.1.15](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.15) | 2026-04-10 |  |
| [5.5.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.5.0) | 2026-03-01 |  |
| [5.4.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.4.0) | 2026-01-11 |  |
| [3.10.3](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.3) | 2026-01-11 |  |
| [2.4.3](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.3) | 2026-01-11 |  |
| [2.1.14](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.14) | 2026-01-11 |  |
| [1.30.2](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.2) | 2026-01-11 |  |
| [5.3.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.3.0) | 2025-11-24 |  |
| [3.10.2](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.2) | 2025-11-24 |  |
| [2.4.2](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.2) | 2025-11-24 |  |
| [5.2.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.2.0) | 2025-10-26 |  |
| [2.1.13](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.13) | 2025-10-26 |  |
| [1.30.1](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.1) | 2025-10-26 |  |
| [5.1.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.1.0) | 2025-09-04 |  |
| [3.10.1](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.1) | 2025-09-04 |  |
| [2.4.1](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.1) | 2025-09-04 |  |
| [5.0.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/5.0.0) | 2025-08-10 |  |
| [3.10.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.10.0) | 2025-08-10 |  |
| [2.4.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.4.0) | 2025-08-10 |  |
| [2.1.12](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.12) | 2025-08-10 |  |
| [1.30.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/1.30.0) | 2025-08-10 |  |
| [4.5.0](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/4.5.0) | 2025-07-24 |  |
| [3.9.3](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/3.9.3) | 2025-07-24 |  |
| [2.3.10](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.3.10) | 2025-07-24 |  |
| [2.1.11](https://github.com/PHPOffice/PhpSpreadsheet/releases/tag/2.1.11) | 2025-07-24 |  |

## Gaps in this record

- pull requests: stopped after 10 pages (raise max_pages for full history)
- commits: stopped after 10 pages (raise max_pages for full history)

---
Mapping notes: `advisory patched_versions` means each advisory patched range was parsed and matched to the earliest fetched release tag that satisfies it; every matched release is listed. `tag commit match` means the commit SHA or bot PR merge SHA equals the commit a release tag points at (annotated tags use the peeled commit, not the tag object; a short SHA counts only when it is a unique prefix of one tag commit). `date heuristic (first release on/after publish)`, `date heuristic (first release on/after commit)`, and `date heuristic (first release on/after merge)` are the first stable release published on or after that date, used only when the methods above do not match. That heuristic can be wrong for backports and multi-branch repos. Commit detection uses message keywords (CVE-, GHSA-, security, vuln…) and will miss silent fixes and include some false positives. A docs conventional commit (any scope, with or without a colon) is not a fix candidate unless the message cites a CVE or GHSA.
