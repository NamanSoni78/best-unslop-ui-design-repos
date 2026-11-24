---
name: ai-slop-self-awareness
description: Recognize your own statistical defaults before they ship — the most-probable output is the average of everyone's UI — and catch AI-slop tells by layer. Use before building or restyling any interface, whenever output looks generic, "AI-ish", or template-like, or when the user says "make it less AI", "unslop this", "too generic", "too default". Includes a pre-flight defaults check, a tell catalog, second-order slop detection, and post-flight audits.
---

# You are the slop source (act accordingly)

You are a language model. Your first instinct for any design decision is the
mode of your training distribution — statistically, the average of everyone's
landing page. Generic output is not a style you chose; it is the absence of a
choice. Nobody had to prompt you for Inter, purple-to-blue gradients, or
rounded icon tiles above every heading: you reach for those because they are the
most probable tokens. This skill makes you catch that **in yourself**, not just
in others' code.

## Pre-flight (before writing any code)

Write down the **five defaults you were about to use**: font, palette, layout
structure, component style, and copy opener. For each, one line: keep (the brief
justifies it) or replace (with what). If you cannot name your defaults, you are
about to ship them. Do not proceed until this list exists.

## The tell catalog

Work through [references/banned-ai-tells.md](references/banned-ai-tells.md)
layer by layer when building (type, color, layout, components/icons, motion,
imagery, copy, data, states). Each tell has a reason and a fix — read the
reason; memorizing the list without the why is how second-order slop starts.

## Second-order slop (the trap after the ban)

Banning the classics creates new convergence, because you — like every other
model that read the same advice — drift to the *next* most probable "tasteful"
output: cream background + thin serif + italic accent word; near-black with one
neon accent; "tasteful terminal"; editorial dashboard with overline eyebrows.
The test is simple: **whatever you reach for first is a default.** Interrogate
it the way you would interrogate a purple gradient. The fix is never a better
banned list; it is choosing from the brief (audience, job, domain, constraint)
instead of from the distribution. Conventions — nav bars, focus rings, WCAG
contrast, platform patterns — are **not slop**: predictability that helps the
user is design; sameness that decorates is slop.

## Post-flight audits (before claiming done)

- **Swap-the-logo test:** would this screen look identical with any of ten
  competitors' logos? If yes, it's the average.
- **Ten-clients test:** could this exact page be sold to ten different clients
  unchanged? Same failure.
- **Squint test:** blur your eyes — is there one clear focal point, or a uniform
  card grid?
- **Grayscale test:** does hierarchy survive without color? If everything is
  the same weight, color was doing the work of structure.
- **Deterministic scan:** run
  `node scripts/slop-scan.mjs <paths>` (this folder) and fix or waive every
  finding — a waiver is `<!-- slop-scan-disable <RULE-ID> reason -->` and must
  carry a real reason.
- **Real-content test:** no lorem, no "Trusted by 10,000+", no fake team photos
  in placeholder blocks.

## Self-check

- Pre-flight list written, with a replacement for every unjustified default?
- Second-order check: named the *one* "tasteful" move you were about to make
  reflexively, and either justified it or dropped it?
- All five post-flight audits run and their outcomes stated?
- Scan run, findings fixed or waived with reasons?
