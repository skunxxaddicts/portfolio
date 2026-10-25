import type { RepoCard } from "@/lib/github";

/**
 * Static snapshot of public repos — rendered when the GitHub API is
 * unreachable or rate-limited. Update when the repo set changes.
 */
export const fallbackRepos: RepoCard[] = [
  {
    name: "portfolio",
    description: "Personal portfolio — Next.js 16, Tailwind v4, Motion",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/skunxxaddicts/portfolio",
    updatedAt: "2026-10-25T00:00:00Z",
  },
  {
    name: "e-comm",
    description: "WPH ecomm — storefront with cart and checkout flow",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/skunxxaddicts/e-comm",
    updatedAt: "2026-07-10T00:00:00Z",
  },
  {
    name: "hermes-workspace",
    description:
      "Native web workspace for Hermes Agent — chat, terminal, memory, skills",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/skunxxaddicts/hermes-workspace",
    updatedAt: "2026-05-24T00:00:00Z",
  },
  {
    name: "portfolio-slicing",
    description: "portfolio-slicing -1- WPH-13-Shanghai",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/skunxxaddicts/portfolio-slicing",
    updatedAt: "2025-11-10T00:00:00Z",
  },
  {
    name: "MVP-Library",
    description: "Reusable component & pattern library",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/skunxxaddicts/MVP-Library",
    updatedAt: "2025-11-20T00:00:00Z",
  },
  {
    name: "batch-shanghai",
    description: "WPH bootcamp — Batch Shanghai exercises",
    language: null,
    stars: 0,
    url: "https://github.com/skunxxaddicts/batch-shanghai",
    updatedAt: "2025-07-07T00:00:00Z",
  },
];
