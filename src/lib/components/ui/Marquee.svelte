<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  /** seconds for one full loop */
  duration?: number;
  /** number of repeated copies — needs >=2 for a seamless loop */
  repeat?: number;
  children: Snippet;
}
let { duration = 28, repeat = 3, children }: Props = $props();
</script>

<div class="marquee overflow-hidden" aria-hidden="true">
	<div class="marquee-track flex w-max" style:--marquee-duration="{duration}s">
		{#each Array(repeat) as _, i (i)}
			<div class="marquee-group flex shrink-0 items-center">
				{@render children()}
			</div>
		{/each}
	</div>
</div>

<style>
	.marquee-track {
		animation: marquee var(--marquee-duration, 28s) linear infinite;
	}
	.marquee:hover .marquee-track {
		animation-play-state: paused;
	}
	@keyframes marquee {
		to {
			transform: translateX(-33.333%);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
		}
	}
</style>
