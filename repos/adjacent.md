# Adjacent — often confused with UI unslop, but out of scope for the ranking

Last verified: 2026-11-24. These are real, sometimes excellent, tools — just not
UI/unslop-UI design skills. Do not rank them against the main list; rate their
originals, not their vendored copies.

## Prose & copy unslop (the name collision)

- **theclaymethod/unslop** — 1,216★, **no license file** (frontmatter says MIT;
  with no LICENSE file this is all-rights-reserved in practice), pushed
  2026-11-14. De-AIs English prose. Admirable benchmark honesty: its README
  headline is its own failure (v9 gained recall but added false positives and one
  damaging edit).
- **backnotprop/pstack** — general 59-skill coding-workflow pack (actively synced
  mirror of Poteto/Lauren Tan's cursor plugin, MIT). Its `unslop` skill is a
  34-rule prose-editing list (banned vocab, em-dash ban, hedge limits) —
  **writing, not UI**. Good idea worth noting: stable rule IDs with numbering
  gaps so other skills can cite them.
- **petergyang/no-ai-slop** — 13,750★, MIT, pushed 2026-09-02. Removes 20+ prose
  slop patterns. The most-starred prose option.
- **seyedehsanhadi/sloptrim** — 432★, Apache-2.0. Local detector that scores every
  prose file your agent saves; Python stdlib only, no network.
- Also in this family (verified via search metadata only): hexiecs/talk-normal,
  mshumer/unslop, jalaalrd/anti-ai-slop-writing, MrGeDiao/shuorenhua
  (Chinese-first), iKora128/stop-ai-slop-jp (Japanese),
  alexgreensh/attention-span (output styles), realrossmanngroup rules.

## Aggregators & registries (rate originals, not vendors)

- **molveau/skills** — aggregator. Its value is curation plumbing: 13
  commit-pinned vendored upstreams with weekly drift checks and a "ratchet" CI
  tell-count, plus a "second-order defaults" list. But the substance is mostly
  other people's skills (heydamir/unslop — CC-BY-4.0, Leonxlnx/taste-skill,
  emilkowalski, ibelick, impeccable, gsap, LottieFiles…). One vendored source
  (raphaelsalaja) was archived upstream in Oct 2026 — link rot is real. Metadata
  not re-verified this session.
- **ComposioHQ/awesome-claude-skills** — ~864 skills re-hosted; a Composio
  lead-gen funnel in an awesome-list costume (~242 visible entries vs "1000+"
  marketing). Inline per-entry author attribution is the one good idea. Metadata
  not re-verified.
- **vercel-labs/skills** — the skills.sh CLI (`npx skills …`): the distribution
  rail most repos above install through. Ships its own `find-skills` meta-skill
  with a clear 6-step procedure — but its quality bar is installs/stars and brand
  bias, it never reads the SKILL.md it recommends, and its `-g -y` flow pipes
  unreviewed third-party instructions into global agent context. Our
  `find-best-skills` skill was written to fix exactly these gaps. Metadata not
  re-verified.
- **anthropics/skills** — the origin of the genre (frontend-design) — ranked in
  the main list as a reference entry, not here.

## Native / niche

- **Wholiver/swiftui-design-skill** — 215★, MIT, pushed 2026-05-01. Ranked #19
  in the main list; SwiftUI-native angle (Brand Asset Protocol with hex
  verification against official sources).

## Code-quality "anti-slop" (different niche entirely)

dmmulroy/anti-slop (Oxlint rules), scanaislop/aislop (dead code, unsafe casts),
peakoss/anti-slop (GitHub Action closing low-quality PRs). Useful neighbors —
none of them look at pixels.
