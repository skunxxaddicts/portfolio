export interface Project {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  links: { live?: string; github?: string };
  highlights: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "7ocean-tour",
    index: "01",
    title: "7Ocean Tour & Travel",
    tagline: "Production travel platform — live client work",
    description:
      "Full production website for a Bali-based tour operator. Public catalog, trip detail pages, and a private admin panel backed by PocketBase — deployed to a dedicated VPS behind nginx and Cloudflare with a hardened security posture.",
    role: "Design, build, deploy, operate",
    year: "2026",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind v4",
      "PocketBase",
      "nginx",
      "pm2",
      "Cloudflare",
    ],
    links: { live: "https://7oceantour.com" },
    highlights: [
      "Bilingual content model (EN/ID) resolved at the data layer",
      "Self-hosted PocketBase admin, edge-gated with Cloudflare Access",
      "VPS deploy pipeline: nginx + pm2 + Let's Encrypt + CF cache rules",
      "Security pass: rate-limited auth, admin UI lockdown, HSTS",
    ],
    featured: true,
  },
  {
    slug: "vexxa-space",
    index: "02",
    title: "Vexxa Space",
    tagline: "Agent workspace — chat, swarm jobs, orchestration",
    description:
      "A web workspace for the Hermes agent: chat UI, content pipeline, swarm job dispatch, scraping orchestration, and social-media automation. De-bloated fork rebuilt for a single-operator workflow.",
    role: "Architecture, frontend, BFF integration",
    year: "2025–2026",
    stack: [
      "TypeScript",
      "Next.js",
      "Postiz API fork",
      "Docker Compose",
      "Better-Auth",
    ],
    links: { github: "https://github.com/skunxxaddicts/vexxa-space" },
    highlights: [
      "Byte-verified review gate on release branches",
      "Dashboard aggregating sessions, model mix, and cost ledger",
      "Talks to a self-hosted Hermes agent gateway over LAN/Tailscale",
    ],
    featured: true,
  },
  {
    slug: "sinergi-warrior",
    index: "03",
    title: "Sinergi Warrior",
    tagline: "Company profile site",
    description:
      "Marketing site for Sinergi Warrior — responsive company profile with service pages and contact flow.",
    role: "Frontend build",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: {},
    highlights: [
      "Responsive marketing pages",
      "Client-ready content structure",
    ],
  },
  {
    slug: "e-comm",
    index: "04",
    title: "E-comm",
    tagline: "E-commerce storefront — WPH bootcamp project",
    description:
      "Storefront built during the WPH program: product listing, detail views, cart flow, and checkout UI.",
    role: "Frontend build",
    year: "2025",
    stack: ["React", "TypeScript", "REST API", "Tailwind"],
    links: { github: "https://github.com/skunxxaddicts/e-comm" },
    highlights: ["Product catalog + cart state", "API-driven catalog pages"],
  },
  {
    slug: "mvp-library",
    index: "05",
    title: "MVP Library",
    tagline: "Component & pattern library",
    description:
      "Reusable component library assembled across projects — primitives, sections, and motion patterns ready to drop into new builds.",
    role: "Design system",
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    links: { github: "https://github.com/skunxxaddicts/MVP-Library" },
    highlights: ["Composable primitives", "Shared motion + layout patterns"],
  },
  {
    slug: "portfolio-slicing",
    index: "06",
    title: "Portfolio Slicing",
    tagline: "Figma→code slicing — WPH-13-Shanghai",
    description:
      "Pixel-faithful implementation of a designer portfolio: hero, services, carousel portfolio, experience timeline, testimonials, FAQ, and CTA — with scroll-triggered animation throughout.",
    role: "Frontend build",
    year: "2025",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion", "Radix"],
    links: { github: "https://github.com/skunxxaddicts/portfolio-slicing" },
    highlights: [
      "Full landing structure: 10 sections, carousels, accordions",
      "Performance pass documented (PERFORMANCE_OPTIMIZATIONS.md)",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
