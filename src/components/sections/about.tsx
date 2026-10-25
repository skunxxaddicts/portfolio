import { Reveal } from "@/components/motion/reveal";

const STATS = [
  { k: "3+", v: "prod deploys operated" },
  { k: "26", v: "repositories maintained" },
  { k: "10+", v: "technologies in rotation" },
];

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <div>
            <p className="idx mb-3">01 / about</p>
            <h2 className="font-serif text-4xl tracking-tight text-text md:text-5xl">
              Engineer of small,
              <br />
              fast, <em className="text-accent italic">real</em> sites.
            </h2>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <div className="space-y-5 leading-relaxed text-muted">
              <p>
                I work across the whole surface of a web project — the interface
                people see, and the infrastructure that keeps it alive at 3am.
                Most of my work lives in the{" "}
                <span className="text-text">
                  Next.js + TypeScript + Tailwind
                </span>{" "}
                triangle, deployed to whatever fits the budget: Vercel, or a VPS
                I administer myself.
              </p>
              <p>
                Bootcamp-trained (WPH, Batch Shanghai), production-tested. I
                care about the boring things that make sites feel expensive: no
                layout shifts, no hydration flashes, animations that respect
                reduced motion, and code another developer can actually pick up.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-10 grid grid-cols-3 gap-px border border-line bg-line">
              {STATS.map((s) => (
                <div key={s.v} className="bg-panel px-4 py-5">
                  <dt className="font-serif text-3xl text-accent">{s.k}</dt>
                  <dd className="mt-1 font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
