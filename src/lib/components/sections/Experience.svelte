<script lang="ts">
import { experience } from '#lib/data/experience';
import Reveal from '../ui/Reveal.svelte';
import Tag from '../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="03" label="experience" />
	<div class="py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">Where the reps happened.</h2>
		</Reveal>

		<ol class="mt-10 border-t border-border">
			{#each experience as item (item.title)}
				<li class="grid gap-2 border-b border-border py-6 md:grid-cols-[10rem_1fr_1.4fr] md:gap-8">
					<span class="mono-label">{item.period}</span>
					<div>
						<h3 class="font-display text-h5 font-semibold">{item.title}</h3>
						<p class="mono-label mt-1">{item.org}</p>
					</div>
					<p class="text-base text-ink-soft">{item.detail}</p>
				</li>
			{/each}
		</ol>
	</div>
</div>
