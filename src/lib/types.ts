export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface WorkLinks {
  live?: string;
  github?: string;
}

export interface Work {
  slug: string;
  index: string;
  title: string;
  year: string;
  /** discipline bucket shown on cards, e.g. "Client work" */
  sector: string;
  role: string;
  /** one-line scope, shown in the case meta row */
  scope: string;
  status: string;
  tagline: string;
  stack: string[];
  links: WorkLinks;
  highlights: string[];
  brief: { lead: string; body: string };
  image?: string;
  imageAlt?: string;
  /** inverted card treatment in the work grid */
  dark?: boolean;
  featured?: boolean;
  quote?: { text: string; author: string };
}

export interface ProcessStep {
  index: string;
  weeks: string;
  title: string;
  body: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  /** substring of `quote` rendered in the accent serif */
  accent: string;
  quote: string;
}

export interface Service {
  index: string;
  title: string;
  description: string;
  price: string;
  timeline: string;
  tools: string;
}

export interface JourneyEntry {
  year: string;
  title: string;
  subtitle: string;
  tag: string;
  body: string;
}

export interface Principle {
  index: string;
  title: string;
  traits: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  detail: string;
}
