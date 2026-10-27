<script lang="ts">
import { testimonials } from '#lib/data/content';
import Num from '../ui/Num.svelte';
import Reveal from '../ui/Reveal.svelte';
import Tag from '../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="07" label="testimonials" />
	<div class="px-(--spacing-container) py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				What clients <span class="accent-serif">say.</span>
			</h2>
		</Reveal>

		<ul class="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
			{#each testimonials as t (t.quote)}
				{@const i = t.quote.indexOf(t.accent)}
				<li class="flex flex-col justify-between gap-8 bg-paper px-6 py-8">
					<blockquote class="font-serif text-lead italic text-ink-soft">
						"{#if i >= 0}{t.quote.slice(0, i)}<span class="accent-serif">{t.accent}</span
							>{t.quote.slice(i + t.accent.length)}{:else}{t.quote}{/if}"
					</blockquote>
					<div class="flex items-center gap-4">
						<span
							class="mono-label inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground text-paper"
							aria-hidden="true">{t.initials}</span
						>
						<div class="flex-1">
							<p class="font-display text-h5 font-semibold">{t.name}</p>
							<p class="mono-label mt-1">{t.role}</p>
						</div>
						<span class="mono-label"><Num text="05/05" /></span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
