---
name: creative-ui-designer
description: A working product designer's process instead of a template — brief, three genuinely different directions, tokens before components, one focal point, real content, all states, and a critique loop with refinement passes. Use when building or redesigning any interface: landing pages, dashboards, app screens, components, hero sections. Triggers on "design", "redesign", "landing page", "make it pop / bolder / distinctive", "hero section", any new UI task, or when the user wants something "not generic".
---

# Design like a designer, not like a sampler

Templates are what you reach for; a process is what you choose. This skill is
the process. It assumes you have already read `ai-slop-self-awareness` (its
pre-flight is step 0 here).

## 1. Brief before pixels

Answer, in writing, from the user's message (ask nothing you can infer; mark
assumptions as assumptions):
- **Audience** — who arrives, knowing what, wanting what?
- **Job** — the one action this screen must get them to.
- **Tone** — three adjectives that would survive contact with the client.
- **Constraints** — brand, platform, performance, accessibility, deadline.
- **Real content** — actual headlines, prices, names. If none exist, write
  domain-true placeholders and label them as drafts.

## 2. Three directions (genuinely different)

Sketch three directions that vary **at least** type personality, color logic,
layout structure, density, and motion. The
[references/design-directions.md](references/design-directions.md) catalog gives
axes and archetypes — vary the axes, don't shuffle the same look three times.
Then pick one and write **one sentence why** (e.g. "dense and utilitarian: the
users are operators who scan, not shoppers who browse"). Two directions that
feel similar means you generated two, not three.

## 3. One memorable idea

Each screen gets one idea you could describe to a friend over the phone ("the
menu reads like a railroad timetable"). Steal structure from the domain's real
world — a bakery borrows menu boards, labels, receipt tape; a logging tool
borrows timeline density from DAWs — not from other landing pages. If you can't
name the idea, the screen doesn't have one yet.

## 4. Tokens before components

Decide before styling: type scale (one ratio, stated), spacing scale, color
roles (surface/ink/primary/accent with contrast checked now, not later), radius,
motion timings. Then components inherit. This is also where the swap-the-logo
test gets won: at token level, ask "which competitor would choose exactly these?"

## 5. Build with content and states

- Real copy in the domain's voice (see the copy layer of the tell catalog).
- Every interactive element: default, hover **and** focus-visible, active,
  disabled; every data surface: empty, loading, error, partial.
- Responsive checked at ~390 / 768 / 1440 px; WCAG AA contrast at token level.
- One focal point per screen: when everything is emphasized, nothing is.

## 6. Critique loop

Render, screenshot, and critique like an art director: squint test, grayscale
test, one-thing-per-screen test. Fix the biggest problem. Repeat **twice** — no
more: a third pass without new input starts converging back to the average.

## Guardrails

- Randomness is not originality. A lucky gradient is still a gradient.
- Usability and accessibility are hard constraints; originality operates inside
  them, never around them.
- Don't add decoration to fix boredom — change the structure.
- When the brief is genuinely minimal, restraint *is* the idea; say so and stop.

## Self-check

- Brief written, assumptions labeled, real (or labeled-draft) content?
- Three directions that differ on the named axes, one picked with a reason?
- Tokens defined before components? Contrast verified?
- All states present; focus styling exists; 390/768/1440 checked?
- Two critique passes done, and the memorable idea is nameable?
- Ends with a 5-line design rationale (direction, type, color, structure,
  motion — each with its because)?
