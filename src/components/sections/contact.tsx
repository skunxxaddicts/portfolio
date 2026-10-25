import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="texture-grid">
      <div className="mx-auto max-w-6xl px-5 py-28 text-center">
        <Reveal>
          <p className="kicker mb-6">05 / contact</p>
          <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05] tracking-tight text-text">
            Have something worth
            <br />
            <em className="text-accent italic">building?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
            Sites, storefronts, dashboards, weird ideas that need a frontend.{" "}
            {site.location} — remote friendly.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}?subject=Project%20inquiry`}
              className="group inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-xs font-medium tracking-widest text-void uppercase transition-colors duration-300 hover:bg-transparent hover:text-accent"
            >
              {site.email}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-xs tracking-widest text-muted uppercase transition-colors duration-300 hover:border-line-bright hover:text-text"
            >
              github ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
