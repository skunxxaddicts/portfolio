# lequon — INVENTORY

components: 24 · utils: 2 · routes: 6 · extras: 8

## Components

### layout

- **Seo** `title, description = site.description, path = '/', image = ${site.url}/images/og-image.png,`
- **SiteFooter**
- **SiteHeader**

### sections

- **Background** (about)
- **Cta**
- **Disciplines** (about)
- **Experience**
- **GithubRepos** `result`
- **Hero**
- **HomeAbout**
- **Journey** (about)
- **Now** (about)
- **Principles** (about)
- **Process**
- **Recognition** (about)
- **SelectedWork** `index = '02'`
- **Services** `index = '06'`
- **Testimonials**

### ui

- **Accordion** `items, children` (`AccordionEntry` type exported)
- **Button** `href, variant = 'outline', icon, type = 'button', class: className = '', external = false, children,`
- **Field** `id, name, label, type = 'text', placeholder, required = false, autocomplete, hint,`
- **Icon** `name, size = 16`
- **Marquee** `duration = 28, repeat = 3, children`
- **Num** `text` — renders digit runs in accent
- **Reveal** `delay = 0, y = 24, class: className = '', children`
- **Stat** `value, label, index`
- **Tag** `index, total = '07', label, class: className = ''`
- **Textarea** `id, name, label, rows = 5, placeholder, required = false`

## Utils / data

- `data/content.ts` — processSteps, services, serviceIncludes, testimonials, aboutStats, homeStats, principles, journey, disciplinesSplit, recognition, nowItems
- `data/experience.ts` — experience
- `data/repos.ts` — fallbackRepos
- `data/site.ts` — site, navItems, socialLinks, disciplines, heroFacts
- `data/works.ts` — works, getWork
- `github.ts` — getRepos, ReposResult, RepoCard
- `index.ts` — cn, reveal (re-exports)
- `types.ts` — NavItem, SocialLink, WorkLinks, Work, ProcessStep, Testimonial, Service, JourneyEntry, Principle, ExperienceItem
- `utils/cn.ts` — cn
- `utils/reveal.ts` — reveal

## Motion / fx

- css @keyframes, marquee util, svelte transition:/animate:, use:reveal, hero word-stagger (`.stagger-word` + `--d` delay var, `html.js`-gated), Lenis (reduced-motion gated, `anchors: true`)

## Routes

- /, /about/, /contact/, /work/, /work/[slug]/, /sitemap.xml

## Site @utility recipes

- accent-serif, btn, btn-solid, content-shell, content-inset, logo-mark, logo-mark-outline, mono-label (overrides kit recipe), nav-label, stagger-word, text-outline-accent, text-outline-ink, text-outline-paper, tracking-display, wordmark-cluster

## Site-extra tokens (identity — not in kit)

- --aspect-card, --color-accent, --color-ink-soft, --color-paper, --color-slate, --font-skin-display, --font-skin-mono, --grid-{footer,repo-row,services,about,background,journey,experience}, --spacing-container, --spacing-hero-anchor, --spacing-hero-lead, --spacing-mark-gap, --spacing-mark-shift, --spacing-wordmark-inset, --text-cta, --text-cta--line-height, --text-h5, --text-nav, --wordmark-box-h
- :root --header-h — binds kit's --spacing-shell to --spacing-header (base.css :root defaults 4rem/5rem beat @theme emissions)
- Kit aliases: --color-brand → foreground, --color-onbrand → paper, --color-focus → brand (= ink, identical render)
