<script lang="ts">
import { principles } from '#lib/data/content';
import Reveal from '../../ui/Reveal.svelte';
import Tag from '../../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="02" total="06" label="principles" />
	<div class="px-(--spacing-container) py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				Four <span class="accent-serif">beliefs</span> the studio runs on.
			</h2>
		</Reveal>

		<ol class="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
			{#each principles as p (p.index)}
				<li
					class="flex min-h-44 flex-col justify-between gap-6 border-b border-border px-6 py-8 sm:border-l sm:first:border-l-0 lg:border-b-0"
				>
					<span class="mono-label text-accent">{p.index}</span>
					<div>
						<p class="font-display text-h4 font-semibold">{p.title}</p>
						<p class="mono-label mt-2">{p.traits.join(' · ')}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</div>
