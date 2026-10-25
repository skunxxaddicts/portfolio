import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";
import { getRepos } from "@/lib/github";

const LANG_COLOR: Record<string, string> = {
  TypeScript: "text-sky-400",
  JavaScript: "text-yellow-300",
  Python: "text-emerald-400",
  HTML: "text-orange-400",
  CSS: "text-violet-300",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function GithubRepos() {
  const { repos, isFallback } = await getRepos();

  return (
    <section id="repos" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="idx mb-3">03 / open source</p>
            <h2 className="font-serif text-4xl tracking-tight text-text md:text-5xl">
              Public <em className="text-accent italic">repos.</em>
            </h2>
          </div>
          <p className="hidden font-mono text-xs tracking-widest text-faint md:block">
            {isFallback ? "cached snapshot" : "live from github.com"} ↻ 1h
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.slice(0, 9).map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.06} className="h-full">
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="card-lift panel group flex h-full flex-col p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate font-mono text-sm text-text">
                    {r.name}
                  </p>
                  <span
                    aria-hidden
                    className="text-faint transition-colors group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-relaxed text-muted">
                  {r.description ?? "—"}
                </p>

                <div className="mt-auto flex items-center gap-4 pt-4 font-mono text-[0.65rem] tracking-wider text-faint">
                  {r.language && (
                    <span className={LANG_COLOR[r.language] ?? "text-muted"}>
                      {r.language}
                    </span>
                  )}
                  {r.stars > 0 && <span>★ {r.stars}</span>}
                  <span className="ml-auto">{formatDate(r.updatedAt)}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs tracking-wider text-faint">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="link-sweep text-muted hover:text-text"
          >
            all repositories ↗
          </a>
        </p>
      </div>
    </section>
  );
}
