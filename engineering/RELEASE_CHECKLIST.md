# Release Checklist — portfolio

Run top to bottom before shipping. A blocked item is a finding, not a footnote.

## Gates

- [ ] Check/lint green — `bun run check`
- [ ] Tests green — `TODO`
- [ ] Production build succeeds — `bun run build`
- [ ] Dependency audit clean or accepted — `bun audit`
- [ ] Repo-specific gates — `node ../css-kit/tools/kit.mjs check .` (local only — css-kit not on the runner)

## Integrity

- [ ] `git status`/`git diff` reviewed — no unrelated changes
- [ ] Repo audit (RIO) status: ___ (run `/audit-repo` or repo-auditor)
- [ ] No secrets/env values committed
- [ ] Docs synced (AGENTS.md, DEVELOPMENT_STATUS, contracts, CHANGELOG)

## Deploy

- [ ] Migration plan + rollback path known (if schema changed)
- [ ] Env vars documented for target env
- [ ] Rollback procedure identified
- [ ] Post-deploy verification steps defined (health, key flows, logs)

## Result

- Deployed: version/commit ___, env ___, verified ___
- Outstanding risks:
