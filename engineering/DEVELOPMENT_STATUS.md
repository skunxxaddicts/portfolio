# Development Status — portfolio

Last verified against code: 2026-11-03 (verify before trusting — docs drift)

## Current state

- Phase / milestone: agent-framework scaffold landed; portfolio live on SvelteKit static + local PocketBase snapshot
- Overall: green

## Gates — real commands for this repo

| Gate | Command | Last run | Result |
|---|---|---|---|
| check | `bun run check` | 2026-11-03 | green (0 errors, 0 warnings) |
| build | `bun run build` | 2026-11-03 | green (static build) |
| kit check (src/lib/kit) | `node ~/Documents/DEV/porto-plan/css-kit/tools/kit.mjs check .` | 2026-11-03 | green (all OK; `skin.css` CUSTOMIZED = expected, repo-owned) |
| dep audit | `bun audit` | | |

## Feature status

| Feature | Spec | Status | Verified? |
|---|---|---|---|
| Site (21 routes, CMS-driven works) | — | done | 2026-10-26 audit (`AUDIT.md`) |

## Active work

- In progress: —
- Blocked: —
- Next: —

## Notes for the next session

- `docs/design-rules.md` IS this repo's UI_DESIGN_SYSTEM equivalent — `docs/UI_DESIGN_SYSTEM.md` intentionally not generated.
- `works` content comes from `cms/` PocketBase → `bun run cms:publish` regenerates `src/lib/data/works.snapshot.json` (generated file, never hand-edit).
- Deploys via `.github/workflows/deploy.yml` (build → scp → atomic webroot swap on VPS).
