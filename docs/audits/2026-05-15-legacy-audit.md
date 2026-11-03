# Audit — morkie portfolio

> **Status 2026-11-03:** fix plan verified landed (RIO re-audit — `docs/audits/2026-11-03-rio-audit.md`). Findings below kept as the original record; H1–M5, L1–L11 confirmed fixed in code.

**Date:** 2026-10-26 · **Scope:** all aspects (code health, perf, motion, a11y, SEO, security, content, tooling) · **Method:** static analysis + measured audit on production build (`bun run preview`, headless Chrome, mobile + desktop emulation, Lighthouse).

## Verified clean

- **Routes:** all 21 prerendered routes 200 (`/`, `/about`, `/work`, `/work/*` ×15, `/contact`, `/sitemap.xml`, `/robots.txt`), bogus route → 404.
- **Perf:** ~175KB total on `/` (10KB HTML, 97KB CSS, ~66KB fonts). Only the 3 actually-used woff2 subsets fetched (unicode-range working). CLS **0.00**. Render-blocking = 3 tiny CSS files, ~10ms. Console: zero errors/warnings, hydration clean.
- **Reduced motion:** emulated `prefers-reduced-motion: reduce` → Lenis skipped (no `lenis` class), marquee `animation: none`, zero stranded hidden reveals. Kit motion.css + app.css global kill-switch both engaged.
- **A11y:** Lighthouse 100 on `/contact` and `/work/[slug]`; 96 on `/` (one contrast finding below). Labels wired on Field/Textarea, skip link present, `aria-current`/`aria-expanded`/`aria-controls` on nav + accordion, `rel="noopener noreferrer"` on all external links, honeypot correct.
- **SEO:** Lighthouse 100 all routes; unique titles, canonical + og:url per route, sitemap complete and valid.
- **Security:** `bun audit` — 0 vulnerabilities (111 pkgs). No `{@html}`/`innerHTML`. Env var via PUBLIC_ prefix (client-visible by design).
- **Kit:** `kit check` — all kit files OK, `skin.css` correctly repo-owned.
- **Tokens:** no hardcoded hex/px/inline-style in components; no downward `max-*` overrides; `grid-cols-[…]`/`aspect-[4/3]` arbitrary values are grandfathered layout values.

## Motion scorecard

```
S ██████████████████████░░░ ~14 · 88%
A ██░░░░░░░░░░░░░░░░░░░░░░░  1 ·  6%   Lenis rAF smoothing (gated by reduced-motion)
D █░░░░░░░░░░░░░░░░░░░░░░░░  1 ·  6%   Accordion transition:slide (height → layout/frame)
```
All keyframes are transform/opacity (compositor). Lenis is the only JS-driven driver — A-tier is expected. The one D is a 300ms height animation on small panels — acceptable, upgrade only if jank observed.

## Findings

### High

**H1 — Horizontal scrollbar on `/` (desktop + mobile)**
`documentElement.scrollWidth` exceeds `clientWidth` by 7px (desktop 2148/2141) and 6px (mobile 397/393). Culprit: the Accordion `+` icon in Services — the section grid is full-bleed (no `content-shell` padding), the button row is flush at the viewport edge, and the icon's `rotate-45` open state widens its bounding box ~6px past the edge. Transforms contribute to scrollable overflow → real horizontal scroll on scrollbar-visible platforms.
Evidence: `src/lib/components/ui/Accordion.svelte:44-50` (icon), `src/lib/components/sections/Services.svelte:18` (grid without `content-shell`).

### Medium

**M1 — No OG image anywhere.** `Seo.svelte` only renders `og:image` when `image` prop is passed; no route passes a resolvable one (no work has `image`, `/images/` doesn't exist in `static/`). `twitter:card=summary_large_image` with no `twitter:image`. Social unfurls get no image. `Seo.svelte:29-33`, `work/[slug]/+page.svelte:21`.

**M2 — Dead code.** `ui/ProductCard.svelte`, `ui/Rating.svelte` — zero importers. `content.ts` exports `collaborators`, `testimonials` — zero consumers. `@sveltejs/adapter-auto` dep unused (adapter-static is used). `work.quote` — render branch exists (`[slug]/+page.svelte:96-105`), zero works use it. `INVENTORY.md` is stale — lists removed components (Collaborators/Testimonials/ProductCard/Rating) and wrong Seo defaults.

**M3 — Contrast:** `.text-line-strong` `#c8c8c8` on `#fafafa` = **1.6:1** on the Process section's 32px index numerals (01–04). Large-text needs 3:1. Either darken token or `aria-hidden` if decorative. `Process.svelte:19`, `skin.css:12`.

**M4 — Touch targets <44px:** 7 footer nav/social links are 21px tall; "all work" back link is 17px. `SiteFooter.svelte:15-45`, `work/[slug]/+page.svelte:23`.

**M5 — mailto POST fallback loses the message.** When `PUBLIC_FORM_ENDPOINT` is unset, native submit POSTs to `mailto:` — most clients drop the body. The user's composed message never arrives. `contact/+page.svelte:46-48`.

### Low

- **L1** `baseline.json` `__meta` lacks capture viewport/UA — fluid-type values can't be diffed reliably (body 15.36→18.08px observed is viewport scaling, not drift). Record viewport+UA in the fixture.
- **L2** `.gitignore` doesn't cover `JOURNAL.md` (untracked, one `git add .` from committed) or `.sixth/`.
- **L3** Biome configured but unenforced — no script/hook; 6 files have format drift (`README`, `INVENTORY`, `Seo.svelte`, `content.ts`, `works.ts`, `github.ts`). `files.includes` excludes `package-lock.json` but not `bun.lock`.
- **L4** `Field` hint renders `id="{id}-hint"` but input never sets `aria-describedby`.
- **L5** Sitemap `BASE` hardcodes `https://morkie.is-a.dev` separately from `site.url` — drift risk; also no `lastmod`.
- **L6** Mobile nav: no Esc-to-close, no focus return to trigger.
- **L7** `Services`/`GithubRepos` skip `content-shell` — full-bleed is the design language, but it's also why H1 happens; at minimum the right-edge elements need clearance.
- **L8** `import.meta.env.PUBLIC_FORM_ENDPOINT` works but is non-idiomatic — `$env/static/public` is the SvelteKit way.
- **L9** `placeholder="Jhon Smith"` typo → "John".
- **L10** Fonts: no `preload` on the display woff2 — `font-display: swap` keeps it acceptable; optional win for LCP.
- **L11** Skip link works under Lenis but jumps abruptly (Lenis `anchors` off); cosmetic.

### Info

- 10/15 works have empty `links: {}`; 0/15 have `image` — typographic tiles carry the design, but links/images are the cheapest credibility wins.
- `site.lastUpdated: '10.26.2026'` + `edition: 'v2.0 · 2026'` are hardcoded freshness fields — will silently go stale.
- `vite` re-resolved to 8.3.4 under `minimumReleaseAge=7d` (8.3.5 was <7d old) — intended behavior; `bun update` will hold this pattern.
- `typescript` stays on 6.x — `svelte-check` peers `^5 || ^6`; TS 7 is the tsgo rewrite, revisit when svelte-check supports it.
- Vite's "Run npm run preview" build hint is upstream text, not our scripts.

## Fix plan (proposed order)

1. **H1** — In `Services.svelte`, add right-edge clearance: `content-shell` on the grid or `pr-4`/padding on the accordion column. Also consider `overflow-x: clip` on the accordion `+` span wrapper as a belt-and-suspenders guard at the component level (source fix so it can't recur).
2. **M1** — Add `static/images/og-image.png` (1200×630) + default `image` in `Seo.svelte` → `${site.url}/images/og-image.png`; add `twitter:image`. Also lets works pass real images later.
3. **M2** — Delete `ProductCard.svelte`, `Rating.svelte`, `collaborators`, `testimonials`; `bun remove @sveltejs/adapter-auto`; decide `quote` (cut the branch or add a quote to one work); regenerate `INVENTORY.md`.
4. **M3** — Darken `--color-line-strong` to ≥#949494 (3:1 on #fafafa) or mark numerals `aria-hidden`.
5. **M4** — `py-` bump on footer links to ≥44px (e.g. `py-3` → `min-h-11` or block padding); same for "all work".
6. **M5** — When no endpoint: render a mailto `Button` (`mailto:?subject=…&body=…` prefilled via JS on submit) or swap the form for a direct email link — never POST to mailto.
7. L-batch — hint `aria-describedby` wiring; footer/menu Esc + focus return; sitemap `BASE` → `site.url` + `lastmod`; `.gitignore` += `JOURNAL.md`, `.sixth/`; biome `check`/`fix` script + `bun.lock` exclusion + `bunx biome check --write` the 6 drifted files; `$env/static/public`; fix "Jhon"; baseline `__meta` + viewport.
