<script lang="ts">
import type { Snippet } from 'svelte';
import { cn } from '#lib/utils/cn';
import { reveal } from '#lib/utils/reveal';

interface Props {
  delay?: number;
  y?: number;
  class?: string;
  children: Snippet;
}
let { delay = 0, y = 24, class: className = '', children }: Props = $props();
</script>

<div
	use:reveal
	class={cn('reveal', className)}
	style:--reveal-delay="{delay}ms"
	style:--reveal-y="{y}px"
>
	{@render children()}
</div>

<style>
	/* hidden only when JS is available to reveal it (html.js set in app.html) */
	:global(html.js) .reveal {
		opacity: 0;
		transform: translateY(var(--reveal-y, 24px));
		transition:
			opacity var(--duration-reveal, 0.9s) var(--ease-out-expo, ease) var(--reveal-delay, 0ms),
			transform var(--duration-reveal, 0.9s) var(--ease-out-expo, ease) var(--reveal-delay, 0ms);
	}
	:global(html.js) .reveal:global(.is-visible) {
		opacity: 1;
		transform: translateY(0);
	}
	@media (prefers-reduced-motion: reduce) {
		.reveal {
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
		}
	}
</style>
