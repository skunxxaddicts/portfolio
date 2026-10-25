export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  detail: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "2026",
    title: "Freelance Frontend Developer",
    org: "Client work — 7Ocean Tour & Travel, Sinergi Warrior",
    detail:
      "Design, build, deploy, and operate production sites end-to-end: Next.js frontends, PocketBase backends, VPS + Cloudflare infrastructure, security hardening.",
  },
  {
    period: "2025–now",
    title: "Builder — Agent Tooling",
    org: "Hermes / Vexxa ecosystem",
    detail:
      "Web workspace and plugins for a self-hosted AI agent: chat UI, swarm jobs, content pipeline, Supabase persona injection.",
  },
  {
    period: "2025",
    title: "Fullstack Bootcamp",
    org: "WPH — Batch Shanghai",
    detail:
      "Intensive program covering React, TypeScript, API integration, and shipping real projects: e-commerce storefront, component library, design slicing.",
  },
];
