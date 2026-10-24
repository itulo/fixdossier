#!/usr/bin/env node
'use strict';
// Entrypoint: reads inputs from env (INPUT_* in Actions, or CLI flags), writes files.
const fs = require('fs');
const path = require('path');
const core = require('./core');

function arg(name, def = '') {
  const flag = process.argv.find((a) => a.startsWith(`--${name}=`));
  if (flag) return flag.split('=').slice(1).join('=');
  const v = process.env[`INPUT_${name.toUpperCase()}`];
  return v !== undefined && v !== '' ? v : def;
}

(async () => {
  const repo = arg('repo', process.env.GITHUB_REPOSITORY || '');
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) { console.error('fixdossier: repo must be owner/name'); process.exit(1); }
  const outDir = arg('output_dir', '.');
  const api = new core.Api({ token: arg('token', process.env.GITHUB_TOKEN || ''), repo, apiUrl: process.env.GITHUB_API_URL || 'https://api.github.com', maxPages: Number(arg('max_pages', '5')) });
  const raw = await core.collect(api);
  const rec = core.build(raw, { repo, gaps: api.gaps });
  if (arg('dump_raw')) fs.writeFileSync(arg('dump_raw'), JSON.stringify(raw));
  const months = Number(arg('support_period_months', '12'));
  fs.mkdirSync(outDir, { recursive: true });
  const files = {
    md: path.join(outDir, arg('record_file', 'SECURITY-RECORD.md')),
    json: path.join(outDir, arg('json_file', 'security-record.json')),
    support: path.join(outDir, arg('support_file', 'SUPPORT.md')),
  };
  fs.writeFileSync(files.md, core.renderRecord(rec));
  fs.writeFileSync(files.json, JSON.stringify(rec, null, 2) + '\n');
  fs.writeFileSync(files.support, core.renderSupport(rec, { supportMonths: months, eolDate: arg('eol_date'), contact: arg('contact'), product: arg('product_name') }));
  console.log(`fixdossier: ${repo} — ${JSON.stringify(rec.summary)} — ${api.calls} API calls`);
  rec.gaps.forEach((g) => console.log(`::warning title=fixdossier gap::${g}`));
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `record_file=${files.md}\njson_file=${files.json}\nsupport_file=${files.support}\nfix_count=${rec.security_fixes.length}\ngap_count=${rec.gaps.length}\n`);
  }
  if (arg('fail_on_gaps', 'false') === 'true' && rec.gaps.length) process.exit(2);
})().catch((e) => { console.error(`fixdossier failed: ${e.stack || e}`); process.exit(1); });
