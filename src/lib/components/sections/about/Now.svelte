<script lang="ts">
import { nowItems } from '#lib/data/content';
import { site } from '#lib/data/site';
import Icon from '../../ui/Icon.svelte';
import Reveal from '../../ui/Reveal.svelte';

const iconMap = {
  triangle: 'triangle',
  pencil: 'pencil',
  circle: 'circle',
  star: 'star-outline',
  cross: 'cross',
} as const;
</script>

<div class="border-b border-border">
	<div class="py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				What I'm doing this <span class="accent-serif">month.</span>
			</h2>
		</Reveal>
		<p class="mt-6 max-w-2xl text-lead text-ink-soft">
			An always-current snapshot of what's on the desk. Closer to a journal than a portfolio —
			updated whenever it stops being true.
		</p>
		<p class="mono-label mt-4">Last updated · {site.lastUpdated}</p>

		<ul class="mt-10 border-t border-border">
			{#each nowItems as item (item.text)}
				<li class="flex items-center gap-4 border-b border-border py-4">
					<Icon name={iconMap[item.icon]} size={18} />
					<span class="text-base">{item.text}</span>
				</li>
			{/each}
		</ul>

		<p class="mt-12 font-display text-h3 font-semibold tracking-tight">
			Now You<br />Know <span class="accent-serif">me.</span>
		</p>
	</div>
</div>
