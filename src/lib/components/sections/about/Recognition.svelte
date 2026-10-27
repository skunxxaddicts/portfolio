<script lang="ts">
import { recognition } from '#lib/data/content';
import Reveal from '../../ui/Reveal.svelte';
import Tag from '../../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="06" total="06" label="milestones" />
	<div class="px-(--spacing-container) py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				Press, talks, <span class="accent-serif">mentions.</span>
			</h2>
		</Reveal>

		<ul class="mt-12 grid border-t border-border sm:grid-cols-2">
			{#each recognition as r (r.item)}
				<li
					class="flex items-baseline gap-6 border-b border-border py-4 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
				>
					<span class="mono-label shrink-0">{r.year}</span>
					<span class="text-base">{r.item}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
