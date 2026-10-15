# fixledger

A free GitHub Action that writes down what your repo already knows: **when you fixed each security issue and which release shipped the fix.**

On each run it reads your repository's:
- releases and tags
- published GitHub security advisories (GHSA) for the repo
- merged Dependabot and Renovate PRs
- commits whose messages look like security fixes (`CVE-…`, `GHSA-…`, "security", "vuln", XSS/SSRF/RCE…)

It then generates:
- **`SECURITY-RECORD.md`**: a dated log of security fixes, each mapped to the release that shipped it, plus bot dependency updates and a release list
- **`security-record.json`**: the same data, machine-readable (`schema: fixledger/v1`)
- **`SUPPORT.md`**: a support-period policy built from your inputs (`support_period_months`, `eol_date`, `contact`), with a per-release "supported until" table

See [`examples/`](examples/) for real output from axios/axios, fastify/fastify and vitejs/vite.

## Usage
```yaml
permissions:
  contents: write        # commit mode; artifact mode needs only contents: read
  pull-requests: read
steps:
  - uses: actions/checkout@v4
  - uses: itulo/fixledger@v0
    with:
      support_period_months: 24
      eol_date: '2030-12-31'
      contact: security@example.com
      mode: commit                    # artifact (default) | commit | none
```
Full example: [`examples/workflow.yml`](examples/workflow.yml) (runs on release, weekly, and on demand).

| Input | Default | Notes |
|---|---|---|
| `token` | `github.token` | GITHUB_TOKEN is enough |
| `repo` | current repo | `owner/name` |
| `support_period_months` | `12` | security-update window per release |
| `eol_date` | — | caps every window (YYYY-MM-DD) |
| `contact` | — | where to report vulnerabilities |
| `product_name` | repo name | |
| `output_dir` | `.` | |
| `max_pages` | `10` | 100 items/page per source |
| `mode` | `artifact` | `artifact`, `commit` or `none` |
| `fail_on_gaps` | `false` | fail if any source was unreadable |

Outputs: `record_file`, `json_file`, `support_file`, `fix_count`, `gap_count`.

**Missing permissions:** if a source returns 401/403/404 (or the rate limit is hit), that section is skipped, a workflow warning is printed, and the gap is listed in the record under "Gaps in this record". The run still succeeds unless `fail_on_gaps: true`. In commit mode, a failed push (no `contents: write`, branch protection) becomes a warning, not a failure.

## How fixes are mapped to releases
1. **Advisory:** its `patched_versions` are matched to a release tag (`1.2.3` ↔ `v1.2.3`).
2. **Commit or PR whose SHA is a release tag's commit:** exact match.
3. **Otherwise:** the first stable release published on or after the fix date ("date heuristic"). The record says which method was used for every row.

## Known limits
- The date heuristic can be wrong for backports, maintenance branches and monorepos with per-package tags.
- Commit detection is keyword-based: silent fixes are missed, and some false positives get in. Review the record.
- Only *published* repository advisories are read. Global advisories that affect your dependencies are not, and Dependabot alerts need a token with `security_events` access that GITHUB_TOKEN usually lacks.
- "Security?" on bot PRs is strict: it needs a CVE/GHSA ID, a security label, or a security word in the title.
- History depth is bounded by `max_pages`.

## Why (context, not a promise)
The EU Product Liability Directive **(EU) 2024/2853** treats software as a product for products placed on the market from 9 Dec 2026. In a dispute, courts can order disclosure of relevant evidence (Art. 9), and some presumptions apply if it isn't produced (Art. 10). The Cyber Resilience Act **(EU) 2024/2847** will expect manufacturers to state a support period and provide security updates (main obligations from Dec 2027). A dated, versioned record of fixes and a published support policy is ordinary engineering hygiene that is useful in either setting.

> **Not legal advice.** fixledger is an engineering tool. It does not make any product "compliant" or "certified" with the PLD, the CRA or anything else, does not limit liability, and its output may be incomplete or wrong. Check it yourself and ask a lawyer about your situation.

## Development
```bash
npm test                                          # unit tests + a real-data fixture
bash scripts/live-test.sh axios/axios             # live run against the public API (anonymous OK; GITHUB_TOKEN raises limits)
```
Zero runtime dependencies; Node 20+.

## License
MIT. See [LICENSE](LICENSE).
