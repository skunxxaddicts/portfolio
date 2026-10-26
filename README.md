# morkie.is-a.dev

Personal portfolio — interactive showcases, live GitHub feed, engineered-noir design.

**Stack:** Next.js 16 (App Router, Cache Components, standalone output) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Biome

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| command              | does                              |
| -------------------- | --------------------------------- |
| `npm run dev`        | dev server (Turbopack)            |
| `npm run build`      | production build (`standalone`)   |
| `npm run lint`       | biome check                       |
| `npm run format`     | biome format --write              |
| `npx tsc --noEmit`   | typecheck                         |

## Structure

```
src/
├── app/                 layout, page, /work/[slug], sitemap, robots, OG image
├── components/
│   ├── layout/          navbar (scroll progress, mobile menu), footer
│   ├── motion/          Reveal (whileInView), Spotlight (spring-tracked cursor)
│   ├── sections/        hero, about, work, github-repos, experience, contact
│   └── terminal-card    self-typing terminal
├── data/                projects, experience, site meta, GH fallback snapshot
└── lib/                 github.ts ('use cache' + cacheLife('hours')), utils
```

## Data

- **Featured projects**: `src/data/projects.ts` (manual case studies — private client work can't come from the public API).
- **Repos feed**: GitHub REST API, server-side, cached 1h via `'use cache'`. Set `GITHUB_TOKEN` (see `.env.example`) to raise rate limits; falls back to `src/data/fallback-repos.ts` on failure — update that snapshot when repos change.
- `output: "standalone"` keeps the self-host/VPS path open (see `docs/`).

## Interactive cases

`src/data/projects.ts` rows `case-*` point at sibling case repos under `~/Documents/DEV/` — each a different FE/BE stack, all local-runnable:

| Case | Stack | Ports (web/api) |
|---|---|---|
| demo-lab (store+CMS) | Next.js + Server Actions + Drizzle | :3100 |
| queue-demo | SvelteKit + Hono + node:sqlite + SSE | :5173 / :3111 |
| pawn-demo | Nuxt + Go REST + sqlc | :3102 / :3101 |
| cinema-demo | Astro + React island + Go GraphQL | :3104 / :3103 |
| bengkel-demo | Go templ + HTMX + pgx | :3105 |
| parking-demo | Web Components + Bun.serve + bun:sqlite + SSE | :3106 |
| teleconsult-demo | React/Vite + Go chi/pgx + WebSocket | :3108 / :3107 |
| fieldservice-demo | Expo web + Go + modernc/sqlite | :3110 / :3109 |
| booking-demo | SvelteKit + Elysia + bun:sqlite + SSE | :5174 / :3112 |

Each case repo has its own README with run commands. The repeatable build/extract/
maintain workflow lives in the global **`case-factory`** agent skill
(`~/.agents/skills/case-factory/` — catalog, strip, and smoke scripts included).

## Accessibility & motion

All animation is transform/opacity, honors `prefers-reduced-motion`, and shares one timing source per pattern.
