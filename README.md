# morkie portfolio

Personal portfolio for **skunxxaddicts** — [morkie.is-a.dev](https://morkie.is-a.dev).

SvelteKit rebuild on the `lequon` base from the `web-template` family — editorial/brutalist, fully static, mobile-first, semantic. Styles run on the shared **css-kit** spine (`src/lib/kit/` + repo-owned `skin.css`).

## Stack

- Bun (package manager + runtime — scripts run via `bun --bun`)
- SvelteKit + Svelte 5, prerendered static (`adapter-static`)
- Tailwind v4 via `@tailwindcss/vite` + css-kit tokens/utilities
- Bricolage Grotesque / Instrument Serif / JetBrains Mono (self-hosted woff2)
- GitHub repo feed fetched at build time, static fallback snapshot in `src/lib/data/repos.ts`

## Content model

| File | Holds |
|---|---|
| `src/lib/data/works.ts` | Case studies + projects (slug → `/work/[slug]`) |
| `src/lib/data/site.ts` | Identity, nav, socials, hero facts, marquee |
| `src/lib/data/content.ts` | Process, services, stats, journey, principles, now |
| `src/lib/data/experience.ts` | Home experience timeline |
| `src/lib/data/repos.ts` | GitHub fallback snapshot |

## Commands

```sh
bun dev           # dev server
bun run build     # static build → build/
bun run check     # svelte-check
```
