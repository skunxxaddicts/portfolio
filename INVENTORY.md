# lequon — INVENTORY

components: 23 · utils: 2 · routes: 6 · extras: 8

## Components

### layout

- **BgLines**
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

### ui

- **Accordion** `items, children` (`AccordionEntry` type exported)
- **Button** `href, variant = 'outline', icon, type = 'button', class: className = '', external = false, children,`
- **Field** `id, name, label, type = 'text', placeholder, required = false, autocomplete, hint,`
- **Icon** `name, size = 16`
- **Marquee** `duration = 28, repeat = 3, children`
- **Reveal** `delay = 0, y = 24, class: className = '', children`
- **Stat** `value, label, index`
- **Tag** `index, total = '06', label, class: className = ''`
- **Textarea** `id, name, label, rows = 5, placeholder, required = false`

## Utils / data

- `data/content.ts` — processSteps, services, serviceIncludes, aboutStats, homeStats, principles, journey, disciplinesSplit, recognition, nowItems
- `data/experience.ts` — experience
- `data/repos.ts` — fallbackRepos
- `data/site.ts` — site, navItems, socialLinks, disciplines, heroFacts
- `data/works.ts` — works, getWork
- `github.ts` — getRepos, ReposResult, RepoCard
- `index.ts` — cn, reveal (re-exports)
- `types.ts` — NavItem, SocialLink, WorkLinks, Work, ProcessStep, Service, JourneyEntry, Principle, ExperienceItem
- `utils/cn.ts` — cn
- `utils/reveal.ts` — reveal

## Motion / fx

- css @keyframes, marquee util, svelte transition:/animate:, use:reveal, Lenis (reduced-motion gated, `anchors: true`)

## Routes

- /, /about/, /contact/, /work/, /work/[slug]/, /sitemap.xml

## Site @utility recipes

- bg-lines, btn, btn-solid, content-shell, mono-label

## Site-extra tokens (identity — not in kit)

- --color-cream, --color-ink-soft, --color-line-strong, --color-paper, --color-sand, --color-slate, --font-skin-display, --font-skin-mono, --spacing-container, --text-cta, --text-cta--line-height
