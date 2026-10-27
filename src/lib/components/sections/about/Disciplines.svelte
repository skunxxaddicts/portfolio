<script lang="ts">
import { disciplinesSplit } from '#lib/data/content';
import Num from '../../ui/Num.svelte';
import Reveal from '../../ui/Reveal.svelte';
import Tag from '../../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="04" total="06" label="disciplines" />
	<div class="px-(--spacing-container) py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				How <span class="accent-serif">time</span> gets split.
			</h2>
		</Reveal>
		<p class="mt-6 max-w-2xl text-lead text-ink-soft">
			A focused practice — most of the calendar lives in two or three disciplines, with the
			rest serving as connective tissue. These percentages shift each year.
		</p>

		<div class="mt-12 flex flex-col gap-8">
			{#each disciplinesSplit as d (d.name)}
				<div>
					<div class="mb-2 flex items-baseline justify-between gap-4">
						<h3 class="font-display text-h5 font-semibold">{d.name}</h3>
						<span class="mono-label"
							><Num text="{d.share}% · avg engagement {d.engagement}" /></span
						>
					</div>
					<div
						class="h-2 w-full border border-border bg-surface"
						role="img"
						aria-label="{d.name}: {d.share}% of time"
					>
						<div class="h-full bg-foreground" style:width="{d.share}%"></div>
					</div>
				</div>
			{/each}
		</div>
		<p class="mono-label mt-6">`rolling estimate`</p>
	</div>
</div>
