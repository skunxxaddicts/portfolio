# Technical Debt — portfolio

Debt that isn't written down doesn't exist. Record what was deferred, why, and what it costs.

| ID | Date | Area | Debt | Why deferred | Impact | Suggested resolution |
|---|---|---|---|---|---|---|
| TD-001 | 2026-11-03 | content | `testimonials` (4 items) + `7ocean-tour` quote ship literal TODO/placeholder text on production pages (`content.ts:82-112`, `works.snapshot.json:36-39`) | needs real client copy — not derivable from code | Public-facing placeholder text on a live site (RIO H1) | Real copy, or unmount `Testimonials`/`quote` until real |
| TD-002 | 2026-11-03 | docs | `INVENTORY.md` stale (phantom GithubRepos/repos.ts/github.ts, wrong prop defaults, missing components/utilities); `README.md` stale (Newsreader font, removed GitHub-feed feature) | regeneration task | Front-door docs mislead agents + reviewers (RIO M1/M2) | Regenerate INVENTORY vs `src/`; fix README |
