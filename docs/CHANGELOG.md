# Landing page changelog

## 2026-10-15 (framing + go-live)

Light copy/framing before push to `main` (`docs/`):

- Reframed as **evidence collection and review support**, not a complete security-fix inventory.
- Added a **Coverage** card: advisory-derived vs heuristic-derived, unmatched/unreleased, permission gaps; confidence scores called out as **roadmap** (Action shows mapping methods only).
- Kept honesty on misses/backports; kept **not legal advice**; no price.
- Kept the four UX improvements below (mobile nav, Copy, mailto form, EUR-Lex).

## 2026-10-15 (local UX draft)

1. **Mobile nav** — Hamburger toggle on ≤760px so “What it does”, “Install”, and “Sample” stay reachable (was `.hide-sm`). Desktop nav unchanged.
2. **Workflow Copy button** — Copy control on the install YAML block; clipboard API with textarea fallback. On small screens, slightly smaller mono font and touch-friendlier padding (still readable).
3. **Interest CTA** — Inline form (name optional, email required). Submit opens a prefilled `mailto:italo.armenti@gmail.com` via JS (no third-party signup). Visible Gmail fallback link kept. No Formspree/Web3Forms.
4. **EU law links** — Official EUR-Lex links for Directive (EU) 2024/2853 (PLD) and Regulation (EU) 2024/2847 (CRA): EN TXT CELEX + ELI oj URLs. Still framed as context, not compliance; **not legal advice**; no price.

Unchanged: MIT/free framing, disclaimer, no paid pack CTA.
