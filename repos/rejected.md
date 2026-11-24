# Rejected — evaluated and dropped

Last verified: 2026-11-24. All entries below were deep-read from full snapshots
(notes in `research/notes/`). C-tier scores from `repos/scores.csv`.

## License-blocked (rejected before scoring)

- **gustavo-henriq/antislop-ui-ux-skill** (56★, pushed 2026-11-16) —
  interesting "outside look" method (fresh agent, image-only, blurred-first
  questions), but the LICENSE is all-rights-reserved and **forbids the copying its
  own README instructs you to perform**. It also embeds third-party screenshots.
  Do not use; read the concept, write your own.

## Scored C-tier (dropped from ranking)

- **wwewtech/anti-slop-design** — 4.8/10. 5★, MIT, pushed 2026-10-21. Zero
  enforcement: the "7-axis gate" is self-graded, all three evals are unrun, fixed
  hex palettes contradict its own token advice, and a leftover
  `zzprobe-in-working-repo-5e18` skill looks like an install-count-gaming
  artifact. The "audit of 100+ skills" is a 122-line narrative, not a benchmark.
- **Yu-369/VibeCurb** — 6.4/10. 1,012★, MIT, pushed 2026-08-05. Nice
  sacred/slop classification for redesigns (JS logic untouchable, className
  upgradeable), but every "Quality Gate" is LLM self-assessment — nothing
  executable — and it pushes one narrow Awwwards-dark aesthetic.
- **superdesigndev/superdesign-skill** — 6.2/10. 1,060★, MIT, pushed
  2026-08-21. The reproduction-before-redesign idea is good, but the anti-slop
  core is a login/credits SaaS: your code context is uploaded, and every session
  runs an unpinned `npx @superdesign/cli@latest`.
- **h3nryprod01/design-taste** — 6.2/10. 104★, MIT, pushed 2026-11-09. A
  derivative compilation of three parents (emilkowalski and others) with excellent
  NOTICE-grade provenance (per-file upstream commit+line maps), but no new
  methodology and no evals; an em-dash HARD-fail rule is overreach.

## Screened out at triage (not UI-scope; see adjacent.md)

Prose/copy unslop tools that share the name: petergyang/no-ai-slop (13,750★),
mshumer/unslop (573★), hexiecs/talk-normal (1,885★), jalaalrd/anti-ai-slop-writing,
MrGeDiao/shuorenhua, iKora128/stop-ai-slop-jp, seyedehsanhadi/sloptrim,
alexgreensh/attention-span. Code-quality "anti-slop" (a different niche):
dmmulroy/anti-slop (Oxlint rules, 6,323★), scanaislop/aislop, peakoss/anti-slop
(GitHub Action that closes slop PRs). Video/motion: Tejashmakwana/motionmaxxing,
Alisa0808/vox-director. Site builder: HugoBlox/kit (9,799★).

## Metadata caveat

Star counts above come from `research/candidates.csv` (GitHub search API,
2026-11-24). Four adjacent entries in [adjacent.md](adjacent.md) are marked
"not re-verified" — the sandbox's shared IP exhausted the unauthenticated API
quota mid-session.
