# lequon — INVENTORY

components: 30 · utils: 7 · routes: 5 · extras: 11

## Components

### layout
- **BgLines**
- **Seo** `title, description = site.description, path = '/', image = '/images/og-image.png',`
- **SiteFooter**
- **SiteHeader**

### sections
- **Background**
- **Collaborators**
- **Cta**
- **Disciplines**
- **Hero**
- **HomeAbout**
- **Journey**
- **Now**
- **Principles**
- **Process**
- **Recognition**
- **SelectedWork**
- **Services**
- **Testimonials**

### ui
- **Accordion** `items, children`
- **Button** `href, variant = 'outline', icon, type = 'button', class: className = '', external = false, children,`
- **Field** `id, name, label, type = 'text', placeholder, required = false, autocomplete, hint,`
- **Icon** `name, size = 16`
- **Marquee** `duration = 28, repeat = 3, children`
- **ProductCard** `href, image, imageAlt, name, price, tag, meta`
- **Rating**
- **Reveal** `delay = 0, y = 24, class: className = '', children`
- **Section** `id, labelledby, class: className = '', children`
- **Stat** `value, label, index`
- **Tag** `index, total = '06', label, class: className = ''`
- **Textarea** `id, name, label, rows = 5, placeholder, required = false`

## Utils
- `data/content.ts` — collaborators, processSteps, services, serviceIncludes, testimonials, aboutStats, homeStats, principles, journey, disciplinesSplit, recognition, nowItems
- `data/site.ts` — site, navItems, socialLinks, disciplines, heroFacts
- `data/works.ts` — works
- `index.ts` — (no named exports)
- `types.ts` — NavItem, SocialLink, Work, Collaborator, ProcessStep, Service, Testimonial, JourneyEntry, Principle
- `utils/cn.ts` — cn
- `utils/reveal.ts` — reveal

## Motion / fx
- css @keyframes, marquee util, svelte transition:/animate:, use:reveal

## Routes
- /, /about/, /contact/, /work/, /work/[slug]/

## Site @utility recipes
- bg-lines, btn, btn-solid, content-shell, mono-label

## Site-extra tokens (identity — not in kit)
- --color-cream, --color-ink-soft, --color-line-strong, --color-paper, --color-sand, --color-slate, --font-skin-display, --font-skin-mono, --spacing-container, --text-cta, --text-cta--line-height
