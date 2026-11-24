# RANKING — the best unslop-UI design repos

Last verified: 2026-11-24. Every entry was deep-read from a full source snapshot
(`research/notes/<owner>__<repo>.md`); scores computed by `scripts/score_repos.py`
(rubric in [methodology.md](methodology.md)). Stars are session snapshots.
Install commands are copied from each repo's own README. Dropped repos:
[rejected.md](rejected.md). Out-of-scope neighbors: [adjacent.md](adjacent.md).

## 1. pbakaus/impeccable — 9.2/10 (A)
**115,853★ · Apache-2.0 · pushed 2026-11-23 · read-in-depth**
The heavyweight: 24 steering/review commands (bolder, quieter, critique, audit…),
a 62-rule **deterministic** Rust slop detector with SARIF/CI output, comp-fidelity
SSIM scoring that replaces model self-judgment, and a multi-harness installer with
a design hook that catches slop before the agent calls work done. Started from
Anthropic's frontend-design skill.
**Best for:** teams that want real gates in CI, not vibes. **Avoid if:** you need a
small read-only skill or zero external calls. **Watch out:** live-mode "Apply" can
spawn `codex`/`claude` with approvals and sandbox off (disclosed, but review it);
the catalog fetch and telemetry run by default.
**Install:** `npx impeccable install`

## 2. Leonxlnx/taste-skill — 8.5/10 (A)
**120,822★ · MIT · pushed 2026-11-24 · read-in-depth**
Art direction through reference images and a 1,663-file kit (assets, effects,
objects), with the strongest finish gate in the field: a Stop hook that verifies
the build in a browser, supports waivers, and detects gaming (kit edits,
headless-browser hunting).
**Best for:** agentic builds that should look art-directed, with hard completion
checks. **Watch out:** heavy lock-in to its kit; the Stop hook auto-executes an
891-line script — review before unattended runs.
**Install:** `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`

## 3. Nutlope/hallmark — 8.3/10 (A)
**60,265★ · MIT · pushed 2026-11-11 · read-in-depth**
The best rule *governance*: three gate tiers — Floor (non-waivable), Reflex
(waivable only with re-derived guard evidence), Finish (never blocking) — plus a
real eval harness that includes "temptation briefs" designed to bait the model
into slop. Credits impeccable, taste-skill, anthropics, emilkowalski.
**Best for:** teams that want enforceable rules with evals. **Watch out:** ~50
hardcoded theme palettes are themselves a convergence risk; Together AI
affiliation (the author founded it).
**Install:** `npx skills add nutlope/hallmark -g`

## 4. emilkowalski/skills — 8.2/10 (A)
**59.2k★ (repo page) · MIT · read-in-depth**
Twenty skills from a working design engineer (author of sonner and vaul).
Concrete where others are vague: frequency-gated motion ("interacted with
100+/day = no animation, ever"), exact durations and easing curves, a Never-Ship
table. Original source for much of the ecosystem (molveau vendors it wholesale).
**Best for:** motion and interaction polish with numbers attached.
**Watch out:** single-author taste presented as law; overlap between `animate` and
`emil-design-eng`; no evals.
**Install:** `npx skills@latest add emilkowalski/skills`

## 5. agiwhitelist/auteur — 8.1/10 (A)
**936★ · MIT · pushed 2026-08-06 · read-in-depth**
"Directs a website like a film": commit-sheet, generated assets, build, then an
executable anti-slop gate. Two ideas worth stealing: a **house-tells field** (the
skill names its own recurring tics and forces each build to break two) and a
second-order reflex check.
**Best for:** distinctive marketing/landing builds with a rigorous process.
**Watch out:** regex linter, not a parser; the "system" register for admin UIs is
the least proven part; single-author cinematic taste.
**Install:** `npx skills add agiwhitelist/auteur`

## 6. educlopez/ui-craft — 8.0/10 (A)
**473★ · MIT · pushed 2026-11-20 · read-in-depth**
Impeccable-*inspired* (openly credited in VERSIONS.md), not a fork: 246
sub-skills with the same command vocabulary but rewritten content, plus a tested
MCP gate stack and a 0–100 scorer. Best single idea: `ux_coverage` returns
**markers, not a score** — the docs argue a number converts "not needed" into a
failure.
**Best for:** cross-harness craft-level workflow with deterministic gates.
**Watch out:** the default install is `curl | bash` — use the `npx skills add`
route instead; sprawl; the impeccable credit is buried.
**Install:** `npx skills add educlopez/ui-craft`

## 7. bitjaru/styleseed — 7.9/10 (B)
**1,045★ · MIT · pushed 2026-11-23 · read-in-depth**
A render→score→revise engine that **published its own negative result** (raw
rules alone: Codex +1.6, Claude −3.7) to justify the gate. Stable detector IDs,
SARIF, blocking severities.
**Watch out:** sprawl (22 workflows, 74 rules, 119 scripts); benchmark raw cells
live off-repo; the update preflight phones home.
**Install:** `npx -y skills add bitjaru/styleseed -a codex claude-code -y --copy`

## 8. felipebasurto/unslop-ui — 7.9/10 (B)
**811★ · MIT · pushed 2026-11-22 · read-in-depth**
The quality underdog: UI-copy/dashboard tells (eyebrows, decorative numbering,
botsplaining) with the best eval discipline per line — byte-identical clean
screens, a `no_new_numbers` check, i18n-at-source, and a prompt-injection fixture
that the skill must report.
**Watch out:** copy-and-charts scope only; model-applied rules, no scanner.
**Install:** `npx skills add felipebasurto/unslop-ui -g`

## 9. AThevon/genjutsu — 7.8/10 (B)
**860★ · MIT + third-party appendix (NOASSERTION on GitHub) · pushed 2026-11-16 · read-in-depth**
Twenty creative-coding skills (motion, canvas, Compose, SwiftUI, desktop, mobile).
Best lineage hygiene in the field: a CI script checks no 10-word run is shared
with taste-skill at a pinned commit — making "inspired, not copied" verifiable.
**Watch out:** persona overhead; Compose/SwiftUI claims exceed recorded evidence.
**Install:** `npx skills add https://genjutsu.athevon.dev -g`

## 10. heydamir/unslop — 7.8/10 (B)
**21,001★ · CC-BY-4.0 · pushed 2026-11-15 · read-in-depth**
The most-adopted dedicated UI-unslop skill: audit the screen, pick a direction
from the product itself, then fix it pass by pass — with morphing before/after
story videos as proof. **CC-BY-4.0: attribution required in any copy/adaptation.**
**Watch out:** no deterministic enforcement; prose passes only.
**Install:** `claude plugin install unslop --marketplace heydamir/unslop`

## 11. anthropics/skills — 7.8/10 (B)
**199.6k★ (repo page) · many skills Apache-2.0 per README; no repo-level license entry visible · read-in-depth**
The origin of the genre: `frontend-design` is 71 lines of pure direction —
studio-lead persona, subject-matter grounding, and a five-trait AI-look
calibration list (cream+terracotta, acid-green-on-black, broadsheet, SaaS-card
kit, template chrome). Impeccable is its productionized descendant.
**Best for:** a trusted, minimal baseline. **Watch out:** demo-only, zero evals —
direction, not enforcement.
**Install:** `/plugin marketplace add anthropics/skills`

## 12. ibelick/ui-skills — 7.7/10 (B)
**11.4k★ (repo page) · MIT · read-in-depth**
Ten skills from the Belick (motion/components) world. `improve-ui`'s three-proof
gate (contract/runtime/correction) plus a falsification pass is the standout;
`create-design-md` keeps DESIGN.md as lint-validated persistent design context.
**Watch out:** process-heavy, taste-light; one skill hard-depends on an external
`@google/design.md` tool.
**Install:** `npx ui-skills start`

## 13. yetone/kill-ai-slop — 7.6/10 (B)
**1,474★ · Apache-2.0 · pushed 2026-09-15 · read-in-depth**
"Evolved slop" catalog of second-wave defaults (tasteful terminal, editorial
dashboard) + a zero-dependency, read-only, tested scanner with id-scoped
suppressions. **Watch out:** regex-only, no rendered checks; stale since Sep 2026.
**Install:** `npx skills add yetone/kill-ai-slop`

## 14. smokeeaasd/flawless-ui-ux — 7.6/10 (B)
**264★ · MIT · pushed 2026-11-16 · read-in-depth**
The eval-honesty pick: recorded unfavorable results and an "Unobserved ≠ pass"
rubric; harness gaps stay labeled as harness gaps. **Watch out:** small,
unblinded, self-run 9-vs-9 eval; conservative guidance; Node 22.12+ and a browser
required. **Install:** `npx flawless-ui-ux@latest install`

## 15. MrSpideyNihal/FixMySlop — 7.2/10 (B)
**55★ · MIT · pushed 2026-10-28 · read-in-depth**
A real, precision-benchmarked slop detector (95% precision, seed 2026, false
positives turned into regression tests); theme-aware color rules resolve project
CSS vars. A detector, not a design teacher. **Install:** `pipx install fixmyslop`

## 16. miqdadbadjuber/anti-slop — 7.1/10 (B)
**9,989★ · MIT · pushed 2026-11-21 · read-in-depth**
Despite the positioning, 39.5 of its 40 rules are prose; the UI skill is thin.
Real ideas: filter-not-style-guide contract (DESIGN.md supplies direction) and an
audit approval ledger. Parts derive from Addy Osmani's web-quality-skills (MIT
file in-tree). **Install:** `npx skills add miqdadbadjuber/anti-slop`

## 17. codeswithroh/tastemaker — 7.1/10 (B)
**603★ · MIT · pushed 2026-10-11 · read-in-depth**
Grounds designs in real reference images with a per-developer taste profile;
palette pairing-matrix contract (which colors may touch which); `_netguard.py`
re-checks an https/host allowlist after redirects — the best small security
pattern seen in this audit. **Watch out:** the verified part is contrast math
only; the taste core is LLM judgment, which the README admits.
**Install:** `/plugin marketplace add codeswithroh/tastemaker`

## 18. Laith0003/ux-skill — 6.9/10 (B)
**112★ · MIT · pushed 2026-11-12 · read-in-depth**
171 linter rules as auditable JSON data + a WCAG gate inside the generator.
**Watch out:** 580 md files and 349 scripts are an unauditable surface; marketing
overclaims ("strongest UX plugin", unverifiable test counts).
**Install:** `pip install uxskill`

## 19. Wholiver/swiftui-design-skill — 6.9/10 (B)
**215★ · MIT · pushed 2026-05-01 · read-in-depth**
Best-in-slot for SwiftUI: a Brand Asset Protocol that hex-verifies colors against
official sources, with a numeric sufficiency threshold. **Watch out:** its own
fallback recipe (warm neutrals + coral accent + serif display) is itself a
second-order default. **Install:** `npx skills add wholiver/swiftui-design-skill -g -y`

## 20. avivgerz-hue/unslop — 6.5/10 (B)
**73★ · MIT · pushed 2026-11-16 · read-in-depth**
A real 72-rule regex+WCAG-math linter, and a committed-dist CI check
(`git diff --exit-code` on dist/) for npm binary trust. **Watch out:** brand
lookalike presets (linear/stripe/vercel) recreate the convergence problem; a
star-link badge is baked into the CLI output. **Install:** `npx -y unslop-mcp@latest init`
