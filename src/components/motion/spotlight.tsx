"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect } from "react";

/**
 * Cursor-tracked warm spotlight for the hero. A fixed-size radial layer
 * translated via springed motion values — pure transform, no paint cost.
 * Under reduced-motion it renders a static ambient glow.
 */
export function Spotlight() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-800);
  const y = useMotionValue(-800);
  const springX = useSpring(x, { stiffness: 55, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 55, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  if (reduce) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ x: springX, y: springY }}
    >
      <div className="h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent)/12%,transparent_65%)]" />
    </motion.div>
  );
}
