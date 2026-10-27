import type { JourneyEntry, Principle, ProcessStep, Service, Testimonial } from '#lib/types';

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    weeks: 'Phase 01',
    title: 'Scope',
    body: 'Long calls, short docs. What you are actually buying, what success looks like, and what stays out — agreed before anything moves.',
  },
  {
    index: '02',
    weeks: 'Phase 02',
    title: 'Design + build',
    body: 'Designed in browser, built mobile-first. You watch it grow on a staging URL, not a Figma link.',
  },
  {
    index: '03',
    weeks: 'Phase 03',
    title: 'Harden',
    body: 'Checks, baselines, a11y, perf budget. The unglamorous pass that makes the work last past launch week.',
  },
  {
    index: '04',
    weeks: 'Phase 04',
    title: 'Ship + operate',
    body: 'Deploy, DNS, monitoring, backups — then a support window and docs so you own the thing.',
  },
];

export const services: Service[] = [
  {
    index: '01',
    title: 'Production websites',
    description:
      'Marketing sites and content platforms — designed in browser, built mobile-first, deployed and operated on real infrastructure.',
    price: 'Project-based',
    timeline: 'Timeline 2–6wk',
    tools: 'SvelteKit · Next.js · Tailwind v4',
  },
  {
    index: '02',
    title: 'Internal tools & dashboards',
    description:
      'Booking engines, dispatch boards, admin panels — fullstack builds with realtime updates, guarded state machines, and audit trails.',
    price: 'Project-based',
    timeline: 'Timeline 4–10wk',
    tools: 'Go · Bun · SSE/WS · Postgres',
  },
  {
    index: '03',
    title: 'Design systems',
    description:
      'Token architecture, shared CSS kits, and component libraries — the kind of work behind the 65-repo css-kit estate.',
    price: 'Retainer / project',
    timeline: 'Timeline 3–8wk',
    tools: 'Tailwind v4 · tokens · CLI tooling',
  },
  {
    index: '04',
    title: 'Ongoing operations',
    description:
      'Deploy pipelines, monitoring, backups, and small iterations — the part most portfolios never show, kept running after launch.',
    price: 'Retainer',
    timeline: 'Monthly',
    tools: 'VPS · CI · Observability',
  },
];

export const serviceIncludes = [
  'Scope doc up front',
  'Design + build, one operator',
  'Tests and checks in the repo',
  'Deploy pipeline configured',
  'Docs + handoff notes',
  'Post-launch support window',
] as const;

// TODO: replace all four entries with real client quotes before launch.
export const testimonials: Testimonial[] = [
  {
    initials: '··',
    name: 'Client name',
    role: 'Role — Company',
    accent: 'client quote',
    quote: 'TODO — replace with a real client quote before launch.',
  },
  {
    initials: '··',
    name: 'Client name',
    role: 'Role — Company',
    accent: 'working relationship',
    quote: 'TODO — short sentence on the working relationship.',
  },
  {
    initials: '··',
    name: 'Client name',
    role: 'Role — Company',
    accent: 'outcome',
    quote: 'TODO — outcome or metric the client would highlight.',
  },
  {
    initials: '··',
    name: 'Client name',
    role: 'Role — Company',
    accent: 'work with morkie',
    quote: 'TODO — why they would work with morkie again.',
  },
];

export const aboutStats = [
  { index: '01', label: 'Projects', value: '15+' },
  { index: '02', label: 'Kit adopters', value: '65' },
  { index: '03', label: 'Frameworks', value: '08' },
  { index: '04', label: 'Live client', value: '01' },
] as const;

export const homeStats = [
  { value: '15+', label: 'Projects shipped' },
  { value: '65', label: 'Repos on css-kit' },
  { value: '08', label: 'Frameworks in production' },
] as const;

export const principles: Principle[] = [
  { index: '01', title: 'Ship', traits: ['Working', 'Deployed'] },
  { index: '02', title: 'Verify', traits: ['Checks', 'Baselines'] },
  { index: '03', title: 'Systematize', traits: ['Tokens', 'Recipes'] },
  { index: '04', title: 'Operate', traits: ['Logs', 'Backups'] },
];

export const journey: JourneyEntry[] = [
  {
    year: '2026',
    title: 'Freelance fullstack developer',
    subtitle: 'Client work — 7Ocean Tour & Travel, Sinergi Warrior',
    tag: 'Independent',
    body: 'Design, build, deploy, and operate production sites end-to-end: Next.js frontends, PocketBase backends, VPS + Cloudflare infrastructure, security hardening.',
  },
  {
    year: '2026',
    title: 'css-kit + web-template estate',
    subtitle: 'Design-system engineering',
    tag: 'Tooling',
    body: 'Built a shared Tailwind v4 kit — 159 tokens, skins, CLI tooling, verification gates — and migrated 65 repositories onto it across 8 frameworks.',
  },
  {
    year: '2025–now',
    title: 'Builder — agent tooling',
    subtitle: 'Hermes / Vexxa ecosystem',
    tag: 'Agent tooling',
    body: 'Web workspace and plugins for a self-hosted AI agent: chat UI, swarm jobs, content pipeline, Supabase persona injection.',
  },
  {
    year: '2025',
    title: 'Fullstack bootcamp',
    subtitle: 'WPH — Batch Shanghai',
    tag: 'Bootcamp',
    body: 'Intensive program covering React, TypeScript, API integration, and shipping real projects: e-commerce storefront, component library, design slicing.',
  },
];

export const disciplinesSplit = [
  {
    name: 'Fullstack builds',
    share: 45,
    engagement: 'SvelteKit · Next.js',
  },
  {
    name: 'Fullstack tooling',
    share: 30,
    engagement: 'Go · Bun · realtime',
  },
  {
    name: 'Design systems',
    share: 15,
    engagement: 'tokens · css-kit',
  },
  {
    name: 'Infra & ops',
    share: 10,
    engagement: 'VPS · Cloudflare',
  },
] as const;

export const recognition = [
  { year: "'26", item: 'css-kit v0.5.0 — 65 adopters, 8 frameworks, zero-drift gates' },
  { year: "'26", item: '7oceantour.com — first production client platform live' },
  { year: "'26", item: 'Case-study estate — 9 domain demos on a shared template taxonomy' },
  { year: "'25", item: 'WPH Batch Shanghai — fullstack bootcamp, shipped 3 projects' },
] as const;

export const nowItems = [
  {
    icon: 'triangle',
    text: 'Rebuilding this portfolio on a SvelteKit base from the web-template family.',
  },
  {
    icon: 'pencil',
    text: 'Running css-kit across 65 repos — tokens, skins, smoke + baseline gates.',
  },
  { icon: 'circle', text: 'Preparing the VPS redeploy for the case-study demos.' },
  { icon: 'star', text: 'Open for freelance — production sites and internal tools.' },
] as const;
