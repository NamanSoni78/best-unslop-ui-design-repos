# Contributing

- **Evidence or it didn't happen.** New repo ratings must cite what was actually
  read (file paths), and stars/license/push dates must be session-verified.
  Date-stamp every claim (`Last verified: YYYY-MM-DD`).
- **Scope:** UI/UX/visual-design repos only in the ranking. Prose unslop,
  aggregators, and registries belong in `repos/adjacent.md`; evaluated-and-
  dropped entries in `repos/rejected.md` with a one-line reason.
- **License gate:** repos with no license or a license that forbids the README's
  own install instructions are rejected before scoring.
- **Skills:** follow the open `SKILL.md` format — folder name = frontmatter
  `name` (lowercase, hyphens, ≤64 chars), trigger-rich `description` (≤1024
  chars), imperative body under ~5,000 tokens, catalogs in `references/`,
  deterministic checks in `scripts/`. No copying from third-party skills.
- **Scoring:** update `scripts/score_repos.py` sub-scores and re-run it; never
  hand-edit `repos/scores.csv`.
- Negative results (evals that failed, claims you couldn't verify) are welcome —
  they're the most useful rows in the file.
