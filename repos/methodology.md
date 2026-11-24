# Methodology

Last verified: 2026-11-24. Every star count, license, push date, feature claim and
install command in this repo was observed in this session, from the live GitHub API,
GitHub pages, or the repos' own files. Nothing is recalled from memory.

## Scope gate

"Unslop" is also the name of a family of prose-writing tools. This list ranks repos
whose subject is **UI/UX and visual design**. Prose/writing unslop tools, general
coding-workflow packs, aggregators and registries are covered separately in
[adjacent.md](adjacent.md), not ranked here.

## Discovery

Four GitHub search queries were saved raw to `research/raw/` (`unslop`,
`anti-slop`, `ai-slop`, `topic:agent-skills`). They returned **369 unique repos**
with API-verified metadata (stars, license, `pushed_at`, default branch) — merged
into `research/candidates.csv`. Twelve seed and ecosystem repos that those queries
missed were fetched directly. Nine were verified through the `/repos` API or their
GitHub pages; four adjacent entries could not be re-verified because this sandbox's
shared egress IP exhausted the unauthenticated API quota mid-session — those are
marked "not re-verified" wherever the gap matters.

Triage kept 31 candidates: reachable, real content, in or near scope, license
visible, recent activity, not a copy. Full source snapshots (codeload tarballs) were
taken for all 31 into `research/raw/tarballs/` (excluded from git; see
`.gitignore`). No script from any of them was ever executed.

## Deep read

Every ranked repo was read from its **full snapshot, not its README**: README, main
`SKILL.md`(s), reference files, and a skim of every script and hook. Notes per repo
live in `research/notes/<owner>__<repo>.md`. Evidence label for every ranked entry:
`read-in-depth`. No ranked entry is README-only.

No repo here was A/B-tested against a baseline in this session (no browser
rendering was available), so no entry carries a "tested" label. The ranking
measures the artifact and its evidence, not a measured output delta. Ratings of our
own skills state this plainly: they are **untested**.

## Scoring rubric (0–5 per dimension, weighted)

| Dimension | Weight | What earns a 5 |
|---|---|---|
| Insight & specificity | 25% | Concrete, non-obvious rules that change output; not "make it clean" |
| Proof it works | 20% | Evals, before/after, benchmarks — honest negative results count *in favor* |
| Agent-readiness | 15% | Valid SKILL.md, trigger-rich description, progressive disclosure, multi-harness install |
| Coverage | 10% | Type, color, layout, motion, copy, states, a11y, responsive |
| Originality | 10% | New ideas vs repackaging (lineage mapped from credits/vendored files) |
| Maintenance | 10% | Recent commits, issue handling |
| Safety & license | 10% | Permissive license, no risky hooks/telemetry/agent-spawning |

Penalized: fixed fonts/palettes sold as defaults (the next cliché), unconditional
ALWAYS/NEVER rules without reasons, claims without evidence, install friction like
`curl | bash`, and phone-home behavior.

Final score = weighted mean × 2 (out of 10). Tiers: **A ≥ 8.0**, **B 6.5–7.9**,
**C < 6.5**. All arithmetic is done by code: `scripts/score_repos.py` →
`repos/scores.csv` (sub-scores included, reproducible). Popularity is deliberately
**not** a rubric dimension; stars are reported as context only.

## Honesty rules

- Stars, licenses and push dates are session snapshots (2026-11-24); they move.
- A repo whose license blocks use is rejected before scoring, not scored low
  (gustavo-henriq/antislop-ui-ux-skill — see [rejected.md](rejected.md)).
- Published failed benchmarks *raised* proof scores (styleseed, theclaymethod,
  flawless-ui-ux): honest negative evidence beats unverifiable marketing.
- Unverifiable claims are labeled as claims, not facts.

## Limitations

- Single session; deep reads were subagent-assisted, scores human-curated.
- No rendered-output A/B testing was possible, so "proof" scores reflect the
  repo's own evidence, not our measurements.
- 4 adjacent entries carry "not re-verified" metadata (API quota exhaustion on a
  shared IP).
- Weighting is a judgment call; if you re-weight, use `scripts/score_repos.py`.
