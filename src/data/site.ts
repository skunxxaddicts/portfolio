export const site = {
  name: "Mörkié",
  handle: "skunxxaddicts",
  domain: "morkie.is-a.dev",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://morkie.is-a.dev",
  title: "Mörkié — Frontend Developer",
  description:
    "Frontend developer building production web experiences — Next.js, TypeScript, Tailwind. Sites shipped for real clients, infrastructure run on real servers.",
  location: "Indonesia",
  github: "https://github.com/skunxxaddicts",
  email: "skunxxaddicts@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/skunxxaddicts" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/skunxxaddicts" },
  ],
} as const;
