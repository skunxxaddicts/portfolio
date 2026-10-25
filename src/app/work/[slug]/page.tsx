import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Mörkié`,
      description: project.tagline,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="texture-dots">
      <article className="mx-auto max-w-4xl px-5 pt-32 pb-24">
        <Reveal y={12}>
          <Link
            href="/#work"
            className="link-sweep font-mono text-xs tracking-widest text-faint uppercase transition-colors hover:text-text"
          >
            ← all work
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="idx mt-10 mb-4">{project.index} / case study</p>
          <h1 className="font-serif text-5xl tracking-tight text-text md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {[
              ["role", project.role],
              ["year", project.year],
              ["status", project.links.live ? "live" : "repo"],
              [
                "links",
                project.links.live || project.links.github ? "below" : "—",
              ],
            ].map(([k, v]) => (
              <div key={k} className="bg-panel px-4 py-4">
                <dt className="font-mono text-[0.6rem] tracking-[0.2em] text-faint uppercase">
                  {k}
                </dt>
                <dd className="mt-1.5 text-xs text-text">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 space-y-5 leading-relaxed text-muted">
            <p>{project.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <h2 className="mt-14 mb-5 font-mono text-xs tracking-[0.25em] text-faint uppercase">
            highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-muted">
                <span aria-hidden className="mt-0.5 text-accent">
                  ▸
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.22}>
          <h2 className="mt-14 mb-5 font-mono text-xs tracking-[0.25em] text-faint uppercase">
            stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li
                key={t}
                className="border border-line px-3 py-1.5 font-mono text-[0.65rem] tracking-widest text-muted uppercase"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        {(project.links.live || project.links.github) && (
          <Reveal delay={0.26}>
            <div className="mt-14 flex flex-wrap gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-widest text-void uppercase transition-colors duration-300 hover:bg-transparent hover:text-accent"
                >
                  visit live ↗
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs tracking-widest text-muted uppercase transition-colors duration-300 hover:border-line-bright hover:text-text"
                >
                  source ↗
                </a>
              )}
            </div>
          </Reveal>
        )}
      </article>
    </main>
  );
}
