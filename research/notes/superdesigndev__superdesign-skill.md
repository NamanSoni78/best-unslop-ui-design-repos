# superdesigndev/superdesign-skill — deep-read notes
- Verified: 1060★, license MIT, last push 2026-08-21, branch main (source: GitHub API search 2026-11-24)
- What it is: A single skill (skills/superdesign) that wires any coding agent (Claude Code/Cursor/Codex/70+ via vercel-labs/skills) to Superdesign's commercial cloud design agent at superdesign.dev: login-gated CLI, infinite canvas, design drafts, presentations, graphics. The repo is the agent-side protocol/SOP layer; the design generation itself is closed-source and remote.
- Scope: UI (plus presentations/graphics) — but an aggregator/front-end to a proprietary SaaS, not standalone anti-slop rules
- Key files read: README.md, skills/superdesign/SKILL.md, references/SUPERDESIGN.md (L1-180), references/INIT.md, references/RESUME.md, dsh/index.js, package.json, LICENSE
- Mechanics:
  - Everything runs through `npx --yes @superdesign/cli@latest` (on-demand remote package, run every session as "preflight"); a bare run prints an `auth:` line and recent projects; `login` is required before any real command.
  - Six-file init contract: `.superdesign/init/` must contain components.md, layouts.md, routes.md, theme.md, pages.md, extractable-components.md, all non-empty — "init-complete test" is one decidable rule used everywhere; HARD GATE blocks all generation commands until init completes.
  - SOP routing by UI target kind: A existing rendered page (mandatory pixel-perfect reproduction draft FIRST as ground truth, then branch variations), B new page in existing codebase, C brand-new project (conversational brief). Mixed tasks handled A→B.
  - PAYLOAD BUDGET: context files are line-range-trimmed at ~900-line threshold to avoid API 400s; explicit rule "on 400 trim to render sections and retry the SAME faithful call — NEVER retry with thinned context" because thin context makes the model invent a generic page.
  - `.superdesign/resume.json` warm-resume state: per-route project/draft ids, selected `--context-file` set with SHA-256 fingerprints, brand-asset records; unchanged sessions resume without re-discovery; stale fingerprints trigger incremental refresh, not cold re-scan.
  - Component extraction converts React components to Petite-Vue HTML templates (`<sd-component>` tags) before drafting; Logo invariant + LOGO RENDER POSTCONDITION verify the real logo URL is actually embedded in draft HTML (reject initials/emoji/invented SVG).
- 3 non-obvious ideas worth adopting:
  1. Reproduction-before-redesign: a mandatory 100% pixel-perfect "current UI" draft as ground truth before any variation, so iterations diff against reality instead of a hallucinated baseline.
  2. Warm-resume with content fingerprints: persist the exact context-file selection + SHA-256s per route; matching hashes skip rediscovery, mismatches do incremental repair — request wording never decides warm vs cold.
  3. "Budget before call, never thin-retry": treat payload-size 400s as a fidelity failure mode — a successful call on stripped context produces confident garbage; stop and tell the user instead.
- Flaws / weaknesses:
  - Not really an open anti-slop toolkit: the actual design engine is a proprietary cloud service; this repo is a marketing + integration surface. "Powered by superdesign.dev, the AI product design agent."
  - Requires account login; every generation spends credits (README/skill say so explicitly); code context and assets are uploaded to their servers.
  - `npx --yes @superdesign/cli@latest` always pulls latest — unpinned remote code executed every session.
  - Very long, imperative prompt-engineering (433-line SOP) — brittle to CLI drift, and no evals anywhere in the repo to validate that the SOP works.
  - README's "70+ agents" claims rest on the vercel-labs/skills installer, not tested per-harness here.
- Safety & license: MIT for the skill text (© 2026 Superdesign). The CLI it drives is closed and runs on demand via npx (remote code). Network+auth required: login flow, canvas URLs, uploads of source context and images to superdesign.dev. No telemetry statement in repo beyond the account system itself. No attribution obligations.
- Lineage: Distributes via vercel-labs/skills (`npx skills add`); explicitly distances itself from the archived open-source superdesigndev/superdesign VS Code extension ("Not the legacy IDE extension", README L25). Also packaged as a DeepSeek Harness (dsh) plugin via dsh/index.js. No borrowed content from impeccable/taste-skill found.
- Install (from README): `npx skills add superdesigndev/superdesign-skill` (+ `npm install -g @superdesign/cli@latest; superdesign login`), or Claude Code `/plugin marketplace add superdesigndev/superdesign-skill`
- Tier suggestion: B — engineering discipline in the SOP layer is genuinely good (reproduction-first, warm resume, payload budgeting), but the anti-slop substance lives behind a login/credits SaaS, which makes it a poor fit for an open-tools ranking.
