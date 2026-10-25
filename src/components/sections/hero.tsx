"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Spotlight } from "@/components/motion/spotlight";
import { TerminalCard } from "@/components/terminal-card";
import { site } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const MARQUEE = [
  "next.js 16",
  "react 19",
  "typescript",
  "tailwind v4",
  "motion",
  "pocketbase",
  "caddy",
  "nginx",
  "cloudflare",
  "self-hosted",
];

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section className="grain relative overflow-hidden">
      <div className="texture-dots absolute inset-0 opacity-60" aria-hidden />
      <Spotlight />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-12 px-5 pt-14 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-xl flex-1">
          <motion.p {...enter(0)} className="kicker mb-6">
            {`//`} {site.handle} · portfolio
          </motion.p>

          <motion.h1
            {...enter(0.08)}
            className="font-serif text-[clamp(2.8rem,7vw,4.8rem)] leading-[1.02] tracking-tight text-text"
          >
            Interfaces that feel
            <br />
            <em className="text-accent italic">inevitable.</em>
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mt-6 max-w-md leading-relaxed text-muted"
          >
            I&apos;m {site.name} — a frontend developer shipping production
            sites end-to-end: design, build, deploy, operate. Real clients, real
            servers, no hand-waving.
          </motion.p>

          <motion.div
            {...enter(0.24)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-widest text-void uppercase transition-colors duration-300 hover:bg-transparent hover:text-accent"
            >
              view work
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="link-sweep inline-flex items-center gap-2 px-1 py-2.5 font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-text"
            >
              github ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.32)}
          className="flex flex-1 justify-center lg:justify-end"
        >
          <TerminalCard />
        </motion.div>
      </div>

      {/* stack marquee — track duplicated once so -50% translate loops seamlessly */}
      <div className="relative border-t border-line">
        <div className="overflow-hidden py-3">
          <div className="marquee-track flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex gap-10 pr-10"
              >
                {MARQUEE.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[0.65rem] tracking-[0.25em] text-faint uppercase"
                  >
                    {item}
                    <span className="ml-10 text-line-bright">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
