import type { Action } from 'svelte/action';

/**
 * IntersectionObserver reveal — adds `is-visible` once the node scrolls
 * into view. Pair with CSS transitions (see Reveal.svelte).
 */
export const reveal: Action<HTMLElement, { threshold?: number; once?: boolean } | undefined> = (
  node,
  options,
) => {
  const { threshold = 0.15, once = true } = options ?? {};
  if (
    typeof IntersectionObserver === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    node.classList.add('is-visible');
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          if (once) io.disconnect();
        } else if (!once) {
          node.classList.remove('is-visible');
        }
      }
    },
    { threshold },
  );
  io.observe(node);
  return {
    destroy() {
      io.disconnect();
    },
  };
};
