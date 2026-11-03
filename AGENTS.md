<!-- agent-framework:start -->
> **Framework:** ~/Documents/DEV/agent-framework — constitution, rules, specialists, and ops auto-load globally. Status + gates: `engineering/DEVELOPMENT_STATUS.md`.
<!-- agent-framework:end -->

# Portfolio — SvelteKit

This repo is a **SvelteKit + Svelte 5** static site (prerendered via `adapter-static`), rebuilt on the `lequon` base from `web-template`. It is no longer a Next.js project.

## Conventions

- Styling runs on **css-kit**: tokens/utilities in `src/lib/kit/`, identity in `src/lib/kit/skin.css` (repo-owned — never overwrite from kit pulls; verify with `node ../css-kit/tools/kit.mjs check`).
- Content is data-driven from `src/lib/data/` — identity in `site.ts`; **projects live in the `cms/` PocketBase `works` collection** (edit via admin UI → `bun run cms:publish`; `src/lib/data/works.snapshot.json` is generated — never hand-edit).
- Runes-mode Svelte (`$props`, `$derived`, `$state`) — match existing component style.
- Mobile-first Tailwind; design tokens only, no hardcoded hex/px in components.

## Layout invariants — hard rules, do not regress

These are established structure rules, each earned by a shipped bug. Layout changes must preserve them — if a design seems to need an exception, extend via props or a named utility, never bypass. The long-form rationale lives in `docs/design-rules.md`.

### Structure

- **SectionShell is canonical** for content sections; **SectionHeader** (Tag stack + h2) for section headers. Raw `<section>` markup is allowed only in the documented tiers: hero/band blocks (`band` + `content-shell|inset`), page heroes (`band` + `page-hero`), CTA, and detail-page `hairline`/`band` sections.
- **Sections separate by whitespace by default** — `SectionShell`'s `hairline` defaults to false; the bottom edge comes from the last element's own border (frame edge, list row). Full-bleed separators exist only in the `band`/detail-page tiers, never between SectionShell sections.
- **Boxed vs unboxed is a heading treatment only** — boxed = `SectionHeader` inside the `frame`; unboxed = bare header while content keeps its own borders. Never touch content/card borders to change it.
- **A framed box is a child of the padded container** — edges land at the container inset, never edge-to-edge. `frame` = 1px perimeter; `content-shell` = inset + L/R borders; `content-inset` = inset only.
- **Numbering is sequential per page** (`/` 01–06, `/about` 01–05, `/work` 01–01). `Now` + CTA are intentionally unnumbered.

### Borders

- **Never two adjacent same-axis borders** — they either collide (overlap via 1px offset, e.g. `collide-t`) or one side is removed (`last:border-b-0`, `nth-last-child(-n+N)` for grid bottom rows). Adjacent `B`+`T` or `T`+`T` = a 2px double, always a bug.
- **Full-bleed hairlines come from section-level elements** (outside `content-inset`/`content-shell`, like the navbar bottom border) or the `bleed-x` escape — never from an inset child.
- **Rows inside a framed box** keep `last:border-b-0` — the box's own edge closes the list.

### Rhythm

- **`section-pad` is top-only by design** — a section's bottom edge comes from its own last element's border, never padding. Gaps between sections come from the next section's top pad.
- **Header→content gap is `mt-8`**; interior pads: boxed surfaces `p-6 md:p-8`, rows/bars `px-6 py-5 md:px-8`, grid cells `p-6`.
- **Symmetry is measured glyph-edge to glyph-edge** (cap-top → baseline → ink bottom), never border-box to border-box — leading lives inside the line box, so equal box margins ≠ equal visual gaps.
- **Equal glyph-edge gaps use `trim-cap`, not metric-tuned margins** — trim both text boxes to cap-top/baseline, then equal margins produce dead-equal visual gaps at any font/size (HomeAbout stats: `pt-6`/`mt-6`/`pb-6` → 24/24/24). Don't hand-tune px against font metrics when trim makes it structural.
- **`text-box-trim`/`text-box-edge` only on free-flow text** — NEVER inside `overflow-hidden` (marquees, clipped panels); it clips glyph ink.
- **Inset-escape footer band = `cell-foot`** — negative-margin + top-hairline strip inside `p-6`/`md:p-8` cells (HomeAbout stats, Services includes). Don't re-derive the `-mx-6`/`md:-mx-8` escape per call site.
- **Tag↔heading alignment is `items-baseline-last`**; baseline-bearing elements must be block layout — column-flex doesn't propagate last-baseline in Chromium.

### Identity & code

- **Palette**: `#f2efe6` / `#1a1a1a` / `#e53935` only via semantic tokens — no new grays; opacity variants of the three allowed.
- **Numerals and indices render accent via `<Num>`** — never raw `text-accent-ink` spans for numbers.
- **Invariants live at the source** (utility/component), never opt-in per call site — `text-balance` on SectionHeader, `frame` for perimeters, recipe classes for repeated combos.
- **Svelte 5 runes**; `{@attach}` for non-reactive ref collection (not `bind:this` into an array index); `prefers-reduced-motion` honored everywhere.
- **Verify visually** — measure rendered L/R edges and rhythm against neighbors (screenshot/probe); never claim alignment from markup alone.

## Commands

- `bun dev` / `bun run build` / `bun run check` (Bun is the package manager and runtime — scripts run via `bun --bun`)
- `bun run cms` — local PocketBase (:8090, admin UI `/_`); `bun run cms:publish` — sync snapshot + push (CI deploys). See `cms/README.md`.
