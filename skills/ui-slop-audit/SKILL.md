---
name: ui-slop-audit
description: Audit existing UI — code files, a screenshot, or a rendered page — and return ranked, evidence-backed fixes from P0 (usability/accessibility blockers) to P3 (polish). Use when asked to review, critique, or audit a UI, when something "looks AI-generated" or "too generic", or as the final gate before shipping an interface the agent built. Complements ai-slop-self-awareness, whose tell catalog and scanner this skill reuses.
---

# UI slop audit — ranked fixes, not opinions

Audits that end in "looks good!" are useless. This one ends in a ranked fix
list with file:line evidence and a verification step.

## Procedure

1. **Inventory.** What surfaces exist (screens/sections/components)? What does
   the product actually do, and who is it for? One sentence each.
2. **Deterministic scan first** (cheap, catches file-level tells):
   `node ../ai-slop-self-awareness/scripts/slop-scan.mjs <paths>`
   Record every finding; you will rank, not reflexively fix.
3. **Layered manual pass** with the catalog in
   [../ai-slop-self-awareness/references/banned-ai-tells.md](../ai-slop-self-awareness/references/banned-ai-tells.md):
   type → color → layout → components/icons → motion → imagery → copy → data →
   states. For each finding: file:line, the tell, *why* it's a tell here, the
   concrete fix. Screenshots: squint, grayscale, swap-the-logo, ten-clients.
4. **Rank** (fix P0 and P1 before anything else):
   - **P0 — blockers:** broken states, keyboard traps, missing focus, contrast
     failures, missing alt, anything a user cannot complete.
   - **P1 — first-order slop:** gradient clichés, default fonts as identity,
     bento nesting, filler copy, fake proof, placeholder data.
   - **P2 — second-order slop:** reflexive "tasteful" defaults (cream+serif
     italic, near-black+neon, eyebrow overlines) that no brief justifies.
   - **P3 — polish:** motion timing, spacing rhythm, hierarchy fine-tuning.
5. **Report.** Per finding: `Pn · file:line · tell · why · fix`. Group by
   surface. End with the top three fixes, in order, and the scan summary line.
6. **Fix and verify.** Apply fixes (never touching business logic, API calls,
   form state, or a11y attributes unless asked). Re-run the scan and re-check
   P0s. Report what changed and what you chose to waive, with reasons
   (`slop-scan-disable <RULE-ID> reason`).

## Calibration

- One instance of a tell is a data point; three is a pattern; report patterns
  prominently and singles quietly.
- A deliberate, justified use is not a finding — audit the reason, not the regex.
- If everything is P3, the audit was too gentle; if everything is P0, the
  product has bigger problems than slop — say so.

## Self-check

- Every finding has file:line (or screenshot region) and a one-line fix?
- P0 list complete (states, focus, contrast, alt)?
- Scan re-run after fixes; result stated?
- The report names the three fixes you would do first?
