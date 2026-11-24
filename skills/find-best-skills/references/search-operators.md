# Search operators cookbook

Vary the query, not the search engine. Run 8–12 of these per hunt; collect 10+
candidates before judging anything.

## Web search (any engine)

- `site:github.com "SKILL.md" <topic>` — finds real skills, not articles.
- `site:github.com <topic> skill OR rules OR playbook`
- `site:github.com "anti-slop" <topic>` / `site:github.com "AI slop" <topic>`
- `"<exact problem phrase>" skill` — the user's words, quoted.
- `<topic> agent skill awesome` — then treat awesome lists as leads only.
- Blogs, HN, Reddit threads: leads to repos, never evidence themselves.

## GitHub search (API or UI)

- Repo search: `https://api.github.com/search/repositories?q=<query>&per_page=100`
  — each result carries stars, license, `pushed_at`, default branch. Free quota
  is ~10 queries/min unauthenticated.
- Qualifiers that matter: `topic:agent-skills`, `topic:<your-topic>`,
  `in:readme`, `pushed:>2026-01-01` (alive), `license:mit`.
- Code search: `path:SKILL.md <phrase>` — finds skills by their content.
- `gh search repos <query> --sort stars` if the CLI is authenticated.

## Registries and directories

- `npx skills find <query>` — the skills.sh registry (ranks by installs/stars;
  verify everything yourself).
- skills.sh, agent marketplaces, awesome lists — mine for names, then go to the
  source repo and verify it exists and is alive. Link rot is real: this project's
  research found a vendored skill whose upstream was archived months earlier.

## Snowballing (highest-yield step)

- Open the credits: "inspired by", "based on", `NOTICE.md`, `THIRD_PARTY_NOTICES.md`,
  vendored `references/vendor/` folders. Rate the **original**, not the copy.
- Check forks of a good repo — occasionally a fork fixes the flaw you found.
- Follow the author: people who write one good skill often wrote two more.

## Verification commands

- Metadata: `curl -s https://api.github.com/repos/<owner>/<repo>`
  → `stargazers_count`, `license.spdx_id`, `pushed_at`, `default_branch`.
- Whole snapshot (no API quota): download
  `https://codeload.github.com/<owner>/<repo>/tar.gz/refs/heads/<branch>`,
  extract into its own empty directory, read only, never execute.
- Single file: `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<path>`.
- Pin an adoption to a commit hash (SHA), not a branch or tag that can move.

## Query variation matrix

Rotate at least three axes so results don't converge: the noun the field uses
(skill / rules / playbook / checklist / system), the problem's phrasing
(unslop / anti-slop / de-AI / taste / craft / polish), and the layer
(typography / motion / copy / a11y / audit). If ten queries return the same five
repos, stop — you've saturated the niche; deep-read those five.
