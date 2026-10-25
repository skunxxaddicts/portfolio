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

## Accessibility & motion

All animation is transform/opacity, honors `prefers-reduced-motion`, and shares one timing source per pattern.
