# Landing page changelog

## Unreleased (v0.1.2)

- Advisory `patched_versions` lists of several versions, separated by whitespace, commas, or `||` (for example `11.5.15 12.3.3`, or a bound such as `>= 1.2.3`), are parsed as separate versions. Each one maps to its own release tag. They are not concatenated into one bogus version such as `11.5.1512.3.3`.
- Commits whose subject is a `docs` conventional commit (any scope, with or without a colon) are not counted as security fixes. That includes `docs(cra): ...`, `docs(security): ...`, `docs: update SECURITY.md`, and `docs(cra) #1474`. `fix(security): ...` still counts. A docs commit that cites a CVE or GHSA id still counts.

## 2026-10-29 (v0.1.1 mapping)

- Rows whose commit SHA or bot PR merge SHA is the commit a release tag points at are labelled `tag commit match`. Annotated tags use the peeled commit. A short SHA counts only when it is a unique prefix of one tag commit.
- Advisory `patched_versions` ranges are parsed (bounds, comma and space separators, backport ranges) and matched to the earliest fetched release tag that satisfies each range.
- Markdown lists every matched release. `release` and `release_date` remain the first match. Added `matched_releases`.

## 2026-10-26 (fixdossier Pro launch)

- Replaced pre-launch `#waitlist` interest section with `#pro` (**fixdossier Pro** hosted workspace, OIDC ingestion, human review sign-off, Ed25519-signed PDF + ZIP Evidence Packs, and the €69 one-time Founding Licence for the first 50 GitHub organizations).
- Updated contact email to `contact@fixdossier.dev`.

## 2026-10-15 (framing + go-live)

Light copy/framing before push to `main` (`docs/`):

- Reframed as **evidence collection and review support**, not a complete security-fix inventory.
- Added a **Coverage** card: advisory-derived vs heuristic-derived, unmatched/unreleased, permission gaps.
- Kept honesty on misses/backports; kept **not legal advice**.
- Kept UX improvements (mobile nav, workflow Copy button, EUR-Lex links).
