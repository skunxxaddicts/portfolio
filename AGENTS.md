# Portfolio — SvelteKit

This repo is a **SvelteKit + Svelte 5** static site (prerendered via `adapter-static`), rebuilt on the `lequon` base from `web-template`. It is no longer a Next.js project.

## Conventions

- Styling runs on **css-kit**: tokens/utilities in `src/lib/kit/`, identity in `src/lib/kit/skin.css` (repo-owned — never overwrite from kit pulls; verify with `node ../css-kit/tools/kit.mjs check`).
- Content is data-driven from `src/lib/data/` — add/edit projects in `works.ts`, identity in `site.ts`.
- Runes-mode Svelte (`$props`, `$derived`, `$state`) — match existing component style.
- Mobile-first Tailwind; design tokens only, no hardcoded hex/px in components.

## Commands

- `bun dev` / `bun run build` / `bun run check` (Bun is the package manager and runtime — scripts run via `bun --bun`)
