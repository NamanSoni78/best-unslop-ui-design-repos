# AI-slop tells by layer (with reasons and fixes)

Read the reason, not just the rule. Every tell below is a *symptom of
averaging*; the fix is always to choose from the brief instead.

## Type

- **Inter/Roboto/system-ui as the identity font.** Most probable font tokens.
  Fix: pick a typeface whose personality matches the product's actual voice; a
  default font is fine for *body* if the display face carries identity — but
  then say so in the direction brief.
- **Thin serif display + italic accent word.** The post-2024 "tasteful default".
  Fix: if you use a serif, commit (weight, scale, punctuation) because the brief
  asks for editorial, not because it feels upscale.
- `tracking-widest uppercase` eyebrows above every heading. Fix: one eyebrow
  per page maximum, and only with a real label to show.
- Text at 16px/1.5 everywhere, 400 weight. Fix: build a real scale (e.g. 1.25
  ratio) with weights that create hierarchy without color.

## Color

- **Purple→blue (indigo/violet) gradients.** The single most flagged tell.
  Fix: derive the palette from the domain — a brand, a material, a season — and
  check contrast at the token level.
- **Tailwind default blue #3B82F6 as primary.** Fix: any deliberate hue beats
  the unchosen one.
- **Near-black + one neon accent on everything.** Second-order default. Fix:
  the accent must point at the one primary action; if it decorates more than it
  directs, drop it.
- Gray-on-gray body text on tinted backgrounds at low contrast. Fix: verify AA
  (4.5:1 body) in the token sheet, not in the browser later.

## Layout

- **Hero → logo cloud → 3-card features → testimonial → CTA.** The SaaS scroll.
  Fix: choose a structure that serves the one job of the page (one screen, one
  idea), even if that means no hero at all.
- **Bento grids and card-in-card nesting** (`rounded-2xl` × 6+ per file).
  Fix: containers group *related* things; if everything is boxed, nothing is.
- **Centered everything.** Fix: asymmetry is allowed; alignment is a tool.

## Components & icons

- **A gradient/rounded icon tile above every heading.** Fix: icons when they
  label something functional, not as decoration for section titles.
- **Pill buttons with gradient fills.** Fix: one primary button shape, decided
  once in tokens.
- **Glassmorphism (`backdrop-blur`) on multiple surfaces.** Fix: at most one
  layered surface, where depth is real (over media), not simulated.

## Motion

- **Everything fades up on scroll.** Fix: motion exists to show cause and
  effect — feedback at 120–180 ms ease-out, reveals at 200–350 ms; nothing
  bounces unless the brand demands it. Frequency-gate: an interaction used
  100+ times a day deserves no animation at all.

## Imagery & data

- **Abstract 3D blobs / faux-3D gradient meshes.** Fix: real product, real
  place, real people, or an intentional absence.
- **Fake stats and social proof** ("Trusted by 10,000+ teams", invented logo
  walls). Fix: real numbers the client can defend, or none — an unproven claim
  is worse than a quiet page.
- **Lorem ipsum, `John Doe`, `test@test.com`.** Fix: domain-true content in the
  domain's voice, even in drafts.

## Copy

- **Openers:** "In today's fast-paced world…", "Unlock the power of…",
  "Elevate your…", "Seamlessly…", "Effortlessly…", "Supercharge…".
  Fix: write the sentence the user would say about their problem.
- **Botsplaining:** restating the feature after showing it. Fix: cut the
  restatement; keep the interface.
- **Decorative numbering** ("01 — Our Process") with no navigational purpose.
  Fix: numbers only when order is the content.

## States (the tell that's actually a bug)

- Hover-only feedback, no `:focus-visible`. Fix: keyboard and touch users
  exist in every brief; ship empty/loading/error/focus states with the feature.
- `alt=""` or missing alt on content images; aria-labels copied from the
  placeholder. Fix: alt text describes the content, written once, correctly.

## Second-order watchlist

Cream+thin-serif+italic; editorial overlines everywhere; terminal-chic;
duotone stock photos; "swiss" grids with the same three photos; one rounded
sans (Geist/General Sans) as the new Inter. Any of these chosen *reflexively*
is the same failure with better taste.
