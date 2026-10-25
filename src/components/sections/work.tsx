import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="idx mb-3">02 / selected work</p>
              <h2 className="font-serif text-4xl tracking-tight text-text md:text-5xl">
                Things I&apos;ve{" "}
                <em className="text-accent italic">shipped.</em>
              </h2>
            </div>
            <p className="hidden font-mono text-xs tracking-widest text-faint md:block">
              {projects.length} projects · incl. private client work
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 0.07}
              className={cn(p.featured && "md:col-span-2")}
            >
              <Link
                href={`/work/${p.slug}`}
                className="card-lift panel group flex h-full flex-col p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="idx">{p.index}</p>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </div>

                <h3
                  className={cn(
                    "mt-5 font-serif tracking-tight text-text",
                    p.featured ? "text-3xl md:text-4xl" : "text-2xl",
                  )}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.tagline}</p>

                {/* variable middle block fills so rows stay equal-height */}
                <div className="flex-1" />

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
                  {p.stack.slice(0, p.featured ? 7 : 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.65rem] tracking-widest text-faint uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
