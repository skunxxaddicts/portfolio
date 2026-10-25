import { cacheLife, cacheTag } from "next/cache";
import { fallbackRepos } from "@/data/fallback-repos";
import { site } from "@/data/site";

export interface RepoCard {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  url: string;
  updatedAt: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

/** Repos surfaced first in the feed, in this order. */
const PINNED = ["portfolio", "portfolio-slicing", "e-comm", "hermes-workspace"];

export interface ReposResult {
  repos: RepoCard[];
  /** true when data came from the static snapshot, not the API. */
  isFallback: boolean;
}

/**
 * Fetches public repos — cached for one hour (Cache Components).
 * Falls back to the bundled snapshot on any failure.
 */
export async function getRepos(): Promise<ReposResult> {
  "use cache";
  cacheTag("github-repos");
  cacheLife("hours");

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${site.handle}/repos?per_page=100&sort=pushed`,
      { headers },
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const data = (await res.json()) as GitHubRepo[];
    const repos = data
      .filter((r) => !r.fork && !r.archived)
      .map<RepoCard>((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
        updatedAt: r.pushed_at,
      }))
      .sort((a, b) => {
        const ai = PINNED.indexOf(a.name);
        const bi = PINNED.indexOf(b.name);
        if (ai !== -1 || bi !== -1)
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
        return b.updatedAt.localeCompare(a.updatedAt);
      });

    return { repos, isFallback: false };
  } catch {
    return { repos: fallbackRepos, isFallback: true };
  }
}
