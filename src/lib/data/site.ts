import type { NavItem, SocialLink } from '#lib/types';

export const site = {
  name: 'morkie',
  owner: 'morkie',
  descriptor: 'fullstack dev practice',
  github: 'dev-morkie',
  tagline: 'Fullstack developer — production sites, internal tools, design systems.',
  edition: 'v2.0 · 2026 edition.',
  description:
    'morkie is an independent fullstack dev practice — builds across Next.js and SvelteKit, internal tools, and a shared CSS kit run across a 65-repo estate.',
  email: 'dev.morkie@gmail.com',
  url: 'https://morkie.is-a.dev',
  coordinates: 'ID — Indonesia · UTC+7',
  established: 'est. 2025',
  lastUpdated: '10.26.2026',
  copyright: '© MORKIE 2026',
} as const;

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', index: '00' },
  { label: 'About', href: '/about', index: '01' },
  { label: 'Work', href: '/work', index: '02' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/dev-morkie' },
  { label: 'email', href: 'mailto:dev.morkie@gmail.com' },
];

export const disciplines = [
  'TypeScript',
  'Go',
  'Bun',
  'Node JS',
  'React JS',
  'Next JS',
  'SvelteKit',
  'Tailwind',
  'Postgres',
  'PocketBase',
  'Motion',
  'Figma',
] as const;

export const heroFacts = [
  {
    index: '01',
    label: 'Discipline',
    title: 'Fullstack + tooling',
    body: 'Interfaces, design systems, dev infrastructure. Built end-to-end.',
  },
  {
    index: '02',
    label: 'Practice',
    title: 'Fullstack builds',
    body: 'Web apps, realtime features, VPS deploys. One operator, whole stack.',
  },
  {
    index: '03',
    label: 'Currently',
    title: 'Open for freelance',
    body: 'Production sites and internal tools. Replies within 24h.',
  },
  {
    index: '04',
    label: 'Archive',
    title: 'The folio · 2025→2026',
    body: 'Client work, case studies, tooling. Open the index',
  },
] as const;
