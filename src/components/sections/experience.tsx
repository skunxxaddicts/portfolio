import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="path" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="idx mb-3">04 / path</p>
          <h2 className="mb-14 font-serif text-4xl tracking-tight text-text md:text-5xl">
            How I got <em className="text-accent italic">here.</em>
          </h2>
        </Reveal>

        <ol className="relative ml-2 space-y-12 border-l border-line pl-8 md:ml-4">
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[41px] h-2.5 w-2.5 rounded-full border border-accent bg-void md:-left-[41.5px]"
                />
                <p className="font-mono text-[0.65rem] tracking-[0.25em] text-accent uppercase">
                  {e.period}
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-text">
                  {e.title}
                </h3>
                <p className="mt-1 font-mono text-xs tracking-wider text-faint">
                  {e.org}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {e.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
