# Yu-369/VibeCurb — deep-read notes
- Verified: 1012★, license MIT, last push 2026-08-05, branch main (source: GitHub API search 2026-11-24)
- What it is: A pack of 7 large prompt-only SKILL.md files (587-1771 lines each) that force agents through read→build→verify pipelines for "Awwwards-tier" output: awwwards-hero, awwwards-motion, awwwards-sections, pixel-perfect, visual-redesign, imagegen-frontend, brandkit-gen. Ships a tiny npx CLI that copies the chosen SKILL.md files into `.agents/skills/`. Thesis: "AI defaults to the mean... VibeCurb is the constraint."
- Scope: UI (hero/sections/motion/redesign/image-prompt pipelines; not prose)
- Key files read: README.md, index.js, package.json, skills/awwwards-hero/SKILL.md, skills/visual-redesign/SKILL.md, skills/pixel-perfect/SKILL.md (grep of gates), skills/llm.txt, LICENSE
- Mechanics:
  - Every skill runs the same pipeline: Phase 1 "Design Read" (extract 8 signals — mode, focal element, typography style, text/image relationship, layout gravity, color count, nav style, micro-details — and state a 2-3 line "Hero Extraction"), Phase 2 pick ONE of six fixed architectures ("Do not blend two architectures. Commit fully to one."), Phase 3 build with concrete code blueprints, Phase 4 Visual Diff with PASS/FAIL table; "failing a gate blocks the next" (LLM self-enforced, not executed).
  - pixel-perfect: 7-layer extraction sheet (grid/type/color/spacing/components/atmosphere/interaction) before code, plus per-topic "Drift Warnings" (e.g. don't round 15px to 1rem, don't assume py-24 when reference shows pt-20 pb-28, don't default to #FFFFFF).
  - visual-redesign: Sacred/Slop classification — JS logic (state, effects, API calls, handlers) is sacred and never touched; className/inline styles/CSS/Tailwind are "slop" to upgrade; a Gray Zone table for mixed cases (e.g. keep the ternary, change only class values).
  - Drift rejection list: CSS keyword easings, AI-purple gradients, icon-in-chip clichés, placeholder patterns are named and banned inline.
  - CLI (index.js) is a pure local copier: inquirer checkbox → copies SKILL.md files from its own directory into cwd/.agents/skills/; no network calls found.
- 3 non-obvious ideas worth adopting:
  1. Sacred/Slop element classification for redesigns: an explicit pre-flight table of what may and may not change (logic vs visual), with a gray-zone protocol — the cleanest answer to "AI redesign broke my app" I've seen in prompt form.
  2. Named micro-drift warnings at each extraction step ("do not round 15px to 1rem", "padding often optically asymmetric") — encoding expert measurement habits as inline warnings where the error actually occurs.
  3. Commit-to-one-architecture constraint: six fixed hero architectures with "do not blend" — fights the averaging effect of models mixing patterns.
- Flaws / weaknesses:
  - Zero executable verification: all "Quality Gates" and "Visual Diff... Any FAIL blocks delivery" are LLM self-assessment; no screenshots, no scripts, no scorer. The README's "verify" claim is prompt aspiration.
  - Taste ceiling is a single aesthetic: deliberately biased toward dark-cinematic/Awwwards "award-winning" look; README itself warns "Do not use VibeCurb if you are looking for safe, generic layouts" — for admin/b2b/enterprise UIs this is the wrong prior.
  - CLI is cosmetic (inquirer + chalk + spinner, artificial 1500ms setTimeout) and only installs 5 of 7 skills in the checkbox list; README's `npx vibecurb-cli` refers to a different published package than the repo's `vibecurb` bin name — confusing.
  - brandkit-gen at 1771 lines is closer to an image-prompt cookbook than an agent skill.
  - No tests, no evals, no versioning; skill sizes will stress smaller context windows.
- Safety & license: MIT (© 2026 Yu-369). CLI executes locally, no network calls found in index.js; skills are pure markdown read as context. No hooks, no telemetry found. No attribution obligations.
- Lineage: Not found in repo — no derived-from credits, no vendored content; self-styled "Anti-Slop Skills | by Lohit". Distribution: npx CLI copy, or manual drop into `.cursor/rules/` / `.agents/skills/`.
- Install (from README): `npx vibecurb-cli add visual-redesign` (or `npx vibecurb` from repo; manual copy documented)
- Tier suggestion: B — excellent prompt craftsmanship (Sacred/Slop, drift warnings, architecture commitment) but nothing executable behind the gates, and one narrow aesthetic.
