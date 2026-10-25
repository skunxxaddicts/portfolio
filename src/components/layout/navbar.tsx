"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "work", href: "/#work" },
  { label: "repos", href: "/#repos" },
  { label: "path", href: "/#path" },
  { label: "contact", href: "/#contact" },
];

export function Navbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY.get() > 8);
    const unsub = scrollY.on("change", onScroll);
    onScroll();
    return () => unsub();
  }, [scrollY]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-void/85 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      {/* scroll progress — transform only */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
          style={{ scaleX: progress }}
        />
      )}

      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="group font-mono text-sm tracking-tight text-text"
        >
          <span className="text-faint">~/</span>morkie
          <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-accent" />
        </Link>

        <div className="hidden items-center gap-7 sm:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-sweep font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest text-accent link-sweep uppercase"
          >
            github ↗
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center border border-line font-mono text-xs text-muted sm:hidden"
        >
          {open ? "×" : "≡"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", bounce: 0, visualDuration: 0.25 }}
            className="border-t border-line bg-void/95 backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 py-3 font-mono text-sm tracking-widest text-muted uppercase last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="py-3 font-mono text-sm tracking-widest text-accent uppercase"
              >
                github ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
