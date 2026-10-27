<script lang="ts">
import { processSteps } from '#lib/data/content';
import Num from '../ui/Num.svelte';
import Reveal from '../ui/Reveal.svelte';
import Tag from '../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="04" label="process" />
	<div class="px-(--spacing-container) py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				How the <span class="accent-serif">work</span> gets made.
			</h2>
		</Reveal>

		<ol class="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as step (step.index)}
				<li
					class="flex min-h-64 flex-col justify-between gap-6 border-b border-border px-6 py-8 sm:border-l sm:first:border-l-0 lg:border-b-0"
				>
					<span class="font-display text-h2 font-semibold text-accent">{step.index}</span>
					<p class="text-base text-ink-soft">{step.body}</p>
					<div class="flex flex-col gap-1">
						<span class="mono-label"><Num text={step.weeks} /></span>
						<span class="font-display text-h4 font-semibold">{step.title}</span>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</div>
