# Landing page changelog

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
