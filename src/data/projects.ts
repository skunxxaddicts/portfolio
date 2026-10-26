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
  {
    slug: "case-parking",
    index: "07",
    title: "Parking Ops",
    tagline: "Live-fee parking kiosk — zero-dependency Bun app",
    description:
      "Entry ticket → live ticking fee (shared tariff engine, server baseline + per-second client tick) → pay → exit. SSE occupancy board flips bays in real time, plus a full operator console: shifts, deposits, and a role-gated approval pipeline.",
    role: "Full stack",
    year: "2026",
    stack: [
      "Bun",
      "bun:sqlite",
      "Bun.serve",
      "Web Components",
      "SSE",
      "Tailwind v4 (css-kit/gate)",
    ],
    links: {},
    highlights: [
      "Tariff engine as one shared module — unit tests, API, and browser ticker all read it",
      "SSE occupancy grid + live fee ticker, printable ticket/receipt",
      "Deposit approval pipeline with actor role gate (requester ≠ decider)",
      "9/9 bun test — fee math + full session lifecycle on in-memory SQLite",
    ],
    featured: true,
  },
  {
    slug: "case-teleconsult",
    index: "08",
    title: "Teleconsult",
    tagline: "Book → pay → real Jitsi room → WebSocket lobby",
    description:
      "Practitioner booking with conflict-guarded slots, mock payment that mints a real meet.jit.si link, and a WebSocket waiting-room lobby — presence, persisted chat, typing relay, and a practitioner-ready signal that lights the join button. Intake forms, consent, and refund approvals included.",
    role: "Full stack",
    year: "2026",
    stack: [
      "Go 1.27",
      "chi",
      "pgx",
      "Postgres",
      "nhooyr/websocket",
      "React 19",
      "Vite",
      "Tailwind v4 (css-kit/clinic)",
    ],
    links: {},
    highlights: [
      "Bidirectional WS lobby — the realtime layer the source template didn't have",
      "Chat persists server-side; late joiners get full history",
      "Guarded lifecycle: book → pay → lobby → in_session → completed",
      "Refund approval enforces requester ≠ decider",
    ],
    featured: true,
  },
  {
    slug: "case-fieldservice",
    index: "09",
    title: "FieldOps",
    tagline: "Field-service dispatch — Expo web app + Go API",
    description:
      "Public service request → dispatch kanban → technician workflow (arrive → checklist → signature → complete) → public track-and-trace with job number + phone matching. One Expo codebase serves as technician app, dispatch board, and public intake — all web-previewable.",
    role: "Full stack + mobile",
    year: "2026",
    stack: [
      "Expo SDK 58",
      "React Native 0.88",
      "Expo Router",
      "Go 1.27",
      "modernc.org/sqlite",
    ],
    links: {},
    highlights: [
      "Completion gated server-side: all checklist items + captured SVG signature",
      "Dispatch rejects overlapping technician schedules",
      "Public status lookup whitelists output and requires phone match",
      "Single-binary Go API — pure-Go SQLite, zero infrastructure",
    ],
    featured: true,
  },
  {
    slug: "case-store",
    index: "10",
    title: "Store + CMS",
    tagline: "Online store with protected demo CMS",
    description:
      "Storefront + content management with draft/publish, moderation and audit behavior, tenant isolation, uploads, and snapshot/reset — no redeploy needed to demo editing.",
    role: "Full stack",
    year: "2026",
    stack: ["Next.js", "React", "Server Actions", "Drizzle"],
    links: {},
    highlights: [
      "Draft → publish lifecycle with audit trail",
      "Tenant-isolated content and uploads",
    ],
  },
  {
    slug: "case-queue",
    index: "11",
    title: "Queue Board",
    tagline: "SvelteKit + Hono live queue display",
    description:
      "Take-a-number public page and an SSE-driven display board — counter calls push to every screen live.",
    role: "Full stack",
    year: "2026",
    stack: ["SvelteKit", "Hono", "SSE", "Tailwind v4 (css-kit/studio)"],
    links: {},
    highlights: [
      "One-way SSE push to public display boards",
      "Public ticket flow",
    ],
  },
  {
    slug: "case-pawn",
    index: "12",
    title: "Pawn Ledger",
    tagline: "Nuxt + Go REST — loan simulator & auction board",
    description:
      "Pawn shop domain: loan simulation, interest accrual, item ledger, and auction board — wrapped in a ledger/cream + gold-stamp visual skin.",
    role: "Full stack",
    year: "2026",
    stack: ["Nuxt", "Vue", "Go REST", "sqlc", "Tailwind v4 (css-kit/ledger)"],
    links: {},
    highlights: [
      "Loan + interest engine",
      "Rotated stamp status marks on ledger cards",
    ],
  },
  {
    slug: "case-cinema",
    index: "13",
    title: "Cinema Seats",
    tagline: "Astro + React island over Go GraphQL",
    description:
      "SSR schedule page with an interactive 22-seat map React island — hold seats with a 15-minute countdown, pay, get a QR ticket, then check in at the gate.",
    role: "Full stack",
    year: "2026",
    stack: [
      "Astro",
      "React island",
      "Go",
      "gqlgen GraphQL",
      "Tailwind v4 (css-kit/theater)",
    ],
    links: {},
    highlights: [
      "Hold → countdown → pay → QR ticket → check-in, full loop",
      "Islands architecture: static Astro shell, one interactive seat-map island",
    ],
  },
  {
    slug: "case-bengkel",
    index: "14",
    title: "Bengkel WOs",
    tagline: "Go templ + HTMX work-order pipeline",
    description:
      "Server-driven repair work orders: draft → estimate → customer approval on a public tracking page → in_progress → done → picked_up. Approval atomically decrements parts stock.",
    role: "Full stack",
    year: "2026",
    stack: [
      "Go",
      "templ",
      "HTMX",
      "pgx",
      "Postgres",
      "Tailwind v4 (css-kit/workshop)",
    ],
    links: {},
    highlights: [
      "Customer approves estimate via public page — server decrements stock atomically",
      "Admin kanban auto-refreshes over HTMX, no JS framework",
    ],
  },
  {
    slug: "case-booking",
    index: "15",
    title: "Booking Ops",
    tagline: "SvelteKit + Elysia scheduling — slots, deposits, QR check-in",
    description:
      "Service/resource booking with a real slot engine — weekday availability rules produce a slot grid, booking holds for 15 minutes, deposit gates confirmation and issues a QR code, staff check-in by code, cancel fees by window policy, and a freed slot auto-offers the waitlist. Ops board live over SSE.",
    role: "Full stack",
    year: "2026",
    stack: [
      "SvelteKit",
      "Svelte 5",
      "Elysia",
      "Bun",
      "bun:sqlite",
      "SSE",
      "Tailwind v4 (css-kit/studio)",
    ],
    links: {},
    highlights: [
      "Slot engine: weekday rules → grid → date overrides → capacity minus overlaps",
      "Deposit-gated confirm mints claim-first QR check-in code",
      "Cancel inside window charges fee bps; freed slot offers earliest waitlist entry",
      "SSE ops board — public bookings flip staff rows live",
    ],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
