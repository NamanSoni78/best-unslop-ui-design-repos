# Vetting checklist

Work top to bottom; any hard ✗ drops the candidate. Evidence beats vibes.

## 1. Scope (30 seconds)

- [ ] Does it actually do the job? (⚠ "unslop" collides across prose, code
      quality, and UI — read what the rules touch: pixels or paragraphs?)
- [ ] Is it a skill/procedure, or an unrelated product with a skill-shaped README?

## 2. Life signs

- [ ] Pushed in the last ~6 months (verify `pushed_at`, don't recall it).
- [ ] Issues get answers; releases or commits exist beyond the launch week.
- [ ] Not archived; not a vendored copy of an archived original.

## 3. License

- [ ] License file present and permissive (MIT/Apache-2.0) → safe to adopt/adapt.
- [ ] **No license = all rights reserved** — distill ideas only, never copy text.
- [ ] CC-BY → attribution required in every copy/adaptation.
- [ ] "NOASSERTION" → open the LICENSE file and read what it actually says.

## 4. Content quality (the deep read)

- [ ] README claims match the files (a "100-rule linter" should have 100 rules).
- [ ] Rules are specific and reasoned — durations, thresholds, file:line — not
      "make it clean".
- [ ] Evidence: evals, before/after, benchmarks. **Published negative results
      count in favor** (honesty is rare); unrun "evals" and self-graded gates
      count against.
- [ ] Progressive disclosure: short SKILL.md, catalogs in `references/`, checks in
      `scripts/` — a 5,000-token front door is a design flaw.
- [ ] Frontmatter: `name` matches the folder, description says what it does and
      when to trigger it.
- [ ] Lineage: who did they copy/vendor/extend? Would the original serve better?
      Is "inspired by" verifiable?

## 5. Security audit (before ANY install)

- [ ] Read every file in `scripts/`, hooks, and installers. You are looking for:
      credential or env access, exfiltration URLs, obfuscated strings, `eval`,
      piping downloads into shells, spawning other agents with approvals or
      sandbox off, telemetry phoning home by default.
- [ ] Hooks that run outside the model's approval flow: understand *when* they
      fire. Anything auto-executing at Stop/Edit time gets extra scrutiny.
- [ ] Prefer read-only adoption (distill) when anything smells.
- [ ] Pin to a commit SHA after review; never `@latest` on every run.

## 6. Red flags (any one → probably drop)

- Fixed hex palettes or brand-lookalike presets sold as "taste".
- Star-count badges or install-count gaming baked into CLI output.
- Test/probe artifacts (`zzprobe…`) committed to the skill tree.
- Claims without numbers ("audit of 100+ skills" with no audit artifact).
- `curl | bash` as the *only* install path.
- Marketing multilingual READMEs far outpacing actual content.

## Decision

Keep ≤ 3. For each, record in `LEARNED.md`: repo URL, pinned commit, license,
what you adopted (distilled / installed / forked), and the one flaw you accept.
Everything else: one-line rejection reason — future hunts start there.
