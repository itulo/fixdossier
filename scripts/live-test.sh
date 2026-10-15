#!/usr/bin/env bash
# Runs the real core logic against public repos via the GitHub API (anonymous works; set GITHUB_TOKEN for higher limits).
# Writes outputs to examples/<owner>-<repo>/ and the raw API data to test/live/ (git-ignored).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p test/live
for r in "${@:-axios/axios fastify/fastify vitejs/vite}"; do for repo in $r; do
  n=${repo//\//-}
  node src/index.js --repo="$repo" --max_pages="${MAX_PAGES:-2}" --output_dir="examples/$n" \
    --support_period_months=24 --eol_date=2030-12-31 --contact=security@example.com --dump_raw="test/live/$n.raw.json"
done; done
