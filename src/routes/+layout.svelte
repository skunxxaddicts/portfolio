<script lang="ts">
import Lenis from 'lenis';
import { onMount } from 'svelte';
import favicon from '#lib/assets/favicon.svg';
import SiteFooter from '#lib/components/layout/SiteFooter.svelte';
import SiteHeader from '#lib/components/layout/SiteHeader.svelte';
import type { LayoutProps } from './$types';
import '../app.css';

let { children }: LayoutProps = $props();

onMount(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lenis = new Lenis({ lerp: 0.1, anchors: true });
  let frame: number;
  const raf = (time: number) => {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);
  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
  };
});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-paper"
>
	Skip to content
</a>

<SiteHeader />
<main id="main">
	{@render children()}
</main>
<SiteFooter />
