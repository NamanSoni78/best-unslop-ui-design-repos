# skills/ — four original agent skills

Written for this repo (2026-11-24), informed by deep-reading the 30 repos ranked
in [../repos/RANKING.md](../repos/RANKING.md) — but the text is original: no
third-party skill content was copied. **Untested in a live A/B against a
baseline** (see [../research/evidence/qa-log.md](../research/evidence/qa-log.md));
the scanner and frontmatter are what we verified.

| Skill | What it does | When it fires |
|---|---|---|
| [ai-slop-self-awareness](ai-slop-self-awareness/SKILL.md) | Pre-flight defaults check, tell catalog, second-order slop, post-flight audits, `slop-scan.mjs` | Before any UI work; "too generic / too AI" |
| [creative-ui-designer](creative-ui-designer/SKILL.md) | Brief → 3 directions → tokens → real content → states → critique loop | Building or redesigning any interface |
| [find-best-skills](find-best-skills/SKILL.md) | Search, vet, safely adopt skills from the whole internet | "Find/install skills", skill gaps |
| [ui-slop-audit](ui-slop-audit/SKILL.md) | Ranked P0–P3 evidence-backed fixes | Reviewing or gating existing UI |

## Install

```bash
# everything, via the skills.sh CLI (works in Claude Code, Codex, Cursor, …)
npx skills add NamanSoni78/best-unslop-ui-design-repos
```

Manual (no Node needed): copy a skill folder into your agent's skills
directory and keep the folder name identical to the frontmatter `name`:

- Claude Code: `.claude/skills/` (project) or `~/.claude/skills/`
- Codex CLI / Replit Agent: `.agents/skills/` or `~/.agents/skills/`
- Cursor: `.cursor/skills/` · Gemini CLI: `.gemini/skills/`
- OpenCode `.opencode/skills/` · Grok Build `~/.grok/skills/`

`ui-slop-audit` references the catalog and scanner inside
`ai-slop-self-awareness/` by relative path — install both together. The
scanner is zero-dependency Node: `node ai-slop-self-awareness/scripts/slop-scan.mjs <paths>`.
