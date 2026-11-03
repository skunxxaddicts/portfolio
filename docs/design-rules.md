# Design rules — the long-form companion to `AGENTS.md`

`AGENTS.md` carries the terse hard rules. This doc is the why — each rule,
the bug that earned it, the measured values, and wrong-vs-right pairs.
When you change a rule, change both files.

## 1. Structure tiers

| Tier | Pattern | Used by |
|---|---|---|
| Content section | `<SectionShell>` → `section` + `section-pad` | all numbered homepage + about sections |
| Section header | `<SectionHeader>` → Tag stack + Reveal + h2 | every numbered section |
| Boxed header cell | `frame-head` (`border-b` + `p-6 md:p-8`) | Experience, HomeAbout |
| Page hero | `page-hero` (`content-shell` + `relative` + `py-16 md:py-24`) inside `band` | about, work, contact intros + work/[slug] hero |
| Hero / band | `band` + `content-shell|inset`, hand markup | Hero |
| Special band | raw `<section>` + `content-inset` | CTA (custom 48px rhythm) |
| Detail page | raw `<section class="hairline">` + `content-shell` | work/[slug] body sections |

Named border/layout utilities (single source for each idiom):
`frame` (perimeter), `frame-head` (boxed header cell), `content-shell`
(inset + L/R borders), `content-inset` (inset only), `bleed-x` (full-bleed
escape inside an inset), `collide-t` (overlap a previous hairline),
`hairline` (border-b), `divider-t` (border-t + mt-8), `hairline-grid`
(gap-px + frame), `band` (bottom hairline section), `page-hero` (above),
`trim-cap` (glyph-edge text trim), `cell-foot` (escaped cell footer band).

Extending structure = props or a named utility. Reimplementing section
structure per-page is how double borders and padding drift shipped twice.

## 2. Boxed vs unboxed — headings only

The alternating treatment (01, 03, 05 boxed · 02, 04, 06 unboxed) applies to
the **header**: boxed means `SectionHeader` sits inside the `frame`; unboxed
means the header is bare while the content keeps its own borders.

Wrong: removing outer borders from card grids to "unbox" a section — that
broke content borders and had to be reverted. Right: move the header, leave
the grid.

```
boxed:   <div class="frame"><div class="border-b p-6 md:p-8"><SectionHeader/></div><content/></div>
unboxed: <SectionHeader/><content with its own borders/>
```

## 3. Border collision rules

Two adjacent same-axis borders render as a 2px double — always a bug.
Resolve by **colliding** (overlap via 1px offset) or **removing** one side:

- `collide-t` — pulls a frame up past `mt-8` + 1px so its top border
  overlaps the previous band's `border-b` (hero→About seam).
- `last:border-b-0` — last row inside a `frame`, the frame's edge closes it.
- `nth-last-child(-n+N)` — multi-col grids: bottom row borders off where the
  grid's own edge supplies the line.
- A full-bleed hairline is a section-level element or a `bleed-x` escape —
  an inset child can never reach the viewport edge.

## 4. Rhythm — measure glyphs, not boxes

`section-pad` is `px-(--spacing-container) pt-section` — top rhythm only;
a section's bottom edge is its last element's own border. Never re-add a
bottom pad; section gaps already come from the next section's `pt`.
`SectionShell`'s `hairline` defaults to false: sections separate by
whitespace (+ inset content edges), full-bleed rules exist only in the
`band`/detail tiers — never between two SectionShell sections.

Header → content: `mt-8`. Interior pads: boxed surfaces `p-6 md:p-8`;
list rows and card footer bars `px-6 py-5 md:px-8`; small cells `p-6`.

### Glyph-edge measurement

Equal box margins do not produce equal visual gaps — leading lives inside
the line box and font metrics differ per family/size. Measure the glyph
edges the eye actually reads:

| Edge | Measure to |
|---|---|
| label top | cap-top (text-box-trim'd box top, or baseline − cap-height) |
| text top | cap-top |
| text bottom | baseline — NOT descender ink (a lone serif descender is excursion, not the edge) |
| element bottom | its box border |

CTA chain (all ≈48px at 1646px): border→label-caps `pt-12` ·
label-baseline→text-caps `--spacing-cta-gap` (27px + ~21px line-box space
above the cap = 48) · text-baseline→buttons `mt-3` (12 + ~36px space below
baseline = 48) · buttons→footer `pb-12` + footer `py-12`.

### Dead-equal gaps — `trim-cap` instead of font math

Hand-tuning margins against font metrics is fragile (the metric model
keeps missing rendered reality). `trim-cap` (`text-box-trim: trim-both` +
`text-box-edge: cap alphabetic`) makes each text box's edges land exactly
on cap-top and baseline — then **equal margins are dead-equal visual
gaps** at any font, weight, or size. HomeAbout stats strip: `pt-6` top ·
`mt-6` number→label · `pb-6` bottom → 24/24/24 by construction.

Use trim-both only on all-caps/digit text — descenders clip by design.
Two trimmed idioms coexist: `accent-serif` display numerals (stats,
Process indices) vs inline `Num` accent digits (every other number) —
display-size numerals are accent-serif; body-size are Num.

Measured compact variants (keep, don't "fix" to scale):
- FlipBoard card footer: `py-1` + `-mt-2` → ~16px equal zones (the
  `-mt-2` overlaps empty half-leading, never glyph ink)
- About stats strip: `trim-cap` + 24px margins (above)

### text-box-trim — where it's safe

`base.css` trims h1–h3 (`trim-start; cap alphabetic`) so heading boxes =
cap-top → descender ≈ `fs × 0.904` (Bricolage; measured 58.0@64px,
54.1@60px). Safe on free-flow text. **Never inside `overflow-hidden`** —
marquee tracks clip the box's edges, so trim there cuts glyph ink
(serif italic "SHIP" lost its top). The CTA label is trimmed (free-flow);
the marquee text is not — its line-box space is compensated in
`--spacing-cta-gap` instead.

## 5. Header alignment — `items-baseline-last`

Tag stack and heading align on the **last baseline**, not box edges —
box-bottom alignment leaves mono caps floating ~7px above the heading
baseline. Two requirements:

1. `items-baseline-last` on the header row.
2. Baseline-bearing elements in block layout — a `flex flex-col` container
   does not propagate a usable last baseline in Chromium (measured −6.9px);
   `Tag` stack is a `<p>` with `block` spans + `mt-0.5` on line 2.

`--leading-tag-stack = max(13px, (h2 × 0.904 − 0.125rem) / 2)` keeps the
2-line tag exactly the trimmed-h2 height at every width.

`text-balance` lives on the SectionHeader wrapper — `text-wrap` is
inherited, so every header h2 balances for free. Never re-add it per
instance (two headings already shipped unbalanced that way).

## 6. Identity

- Palette: `#f2efe6` / `#1a1a1a` / `#e53935` — semantic tokens only.
- Numerals/indices: `<Num>` splits digits into accent spans — handles
  `+7`, `05/05`, ranges. Raw `text-accent-ink` spans on numbers = drift.
- Fonts: Bricolage display, Newsreader italic serif (one accent word per
  heading via `accent-serif`), JetBrains mono labels.
- Numbering sequential per page; `Now` + CTA unnumbered by design.

## 7. Svelte 5 idioms

- Runes mode: `$props`, `$derived`, `$state`, `$effect`, `Snippet`.
- `{@attach}` collects element refs into non-reactive arrays — `bind:this`
  on `arr[i]` warns (10 warnings shipped once, now 0).
- Reveal/marquee honor `prefers-reduced-motion`.

## 8. Verified breakpoints

Measure at 390 / 480 / 640 / 768 / 1024 / 1646 (+ 1920 ultrawide when
touching the shell). Wrap zones (~330–680px) are where headings go
multi-line — tag anchors to the last baseline, header stacks via
flex-wrap below ~480px.

## Exception ledger

| Place | Exception | Why |
|---|---|---|
| Services header | vertical stack (tag above heading), not SectionHeader | approved reference layout |
| Now | no index/total | closing journal block, intentionally unnumbered |
| CTA | custom pt-12/pb-12 + `--spacing-cta-gap`, not section-pad | glyph-edge 48 rhythm needs font-offset compensation |
| Hero | `content-inset` (no side borders) + section-level `hairline` divs | approved: sides removed; top/bottom edges full-bleed like navbar |
| `--spacing-cta-gap: 27px` | non-scale value | measured compensation, not tuned — don't round to scale |
| `--spacing-hero-lead-r: 0.261em` | non-scale em inset | font-measured (Bricolage wght 800): lands hero-lead right edge on the E's ink edge, not the period |
| `/about` sections | whitespace rhythm between sections; content framed (`frame`/`hairline-grid`) like home | matched home idiom — ledger-line + bare-list variants reverted (2026-10 sweep) |
