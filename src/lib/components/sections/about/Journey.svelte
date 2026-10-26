<script lang="ts">
import { journey } from '#lib/data/content';
import Reveal from '../../ui/Reveal.svelte';
import Tag from '../../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="03" label="journey" />
	<div class="py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				Eight years, six chapters.
			</h2>
		</Reveal>

		<ol class="mt-10 border-t border-border">
			{#each journey as entry (entry.year + entry.title)}
				<li
					class="grid gap-3 border-b border-border py-6 md:grid-cols-[6rem_1.2fr_2fr] md:gap-8"
				>
					<span class="font-display text-h4 font-semibold">{entry.year}</span>
					<div>
						<h3 class="font-display text-h5 font-semibold">{entry.title}</h3>
						<p class="mono-label mt-1">{entry.tag}</p>
					</div>
					<p class="text-base text-ink-soft">{entry.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</div>
