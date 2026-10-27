<script lang="ts">
import { serviceIncludes, services } from '#lib/data/content';
import Accordion, { type AccordionEntry } from '../ui/Accordion.svelte';
import Num from '../ui/Num.svelte';
import Reveal from '../ui/Reveal.svelte';
import Tag from '../ui/Tag.svelte';

const entries: AccordionEntry[] = services.map((s) => ({
  id: s.index,
  title: s.title,
}));

interface Props {
  index?: string;
}
let { index = '06' }: Props = $props();
</script>

<div class="border-b border-border">
	<Tag {index} label="services" />
	<div class="grid gap-10 px-(--spacing-container) py-section lg:grid-cols-[1fr_1.6fr]">
		<div class="flex flex-col gap-8">
			<Reveal>
				<h2 class="font-display text-h2 font-semibold tracking-tight">
					What I <span class="accent-serif">offer.</span>
				</h2>
			</Reveal>
			<p class="max-w-md text-lead text-ink-soft">
				A focused menu — not a hypermarket. Each service is delivered end-to-end by me, with a
				single point of contact for the duration.
			</p>
			<p class="mono-label inline-flex w-fit border border-foreground px-3 py-2 text-foreground">
				Now booking
			</p>
			<div>
				<p class="mono-label pb-3">Every engagement includes</p>
				<ul class="divide-y divide-border border-y border-border">
					{#each serviceIncludes as item (item)}
						<li class="flex items-center gap-3 py-2.5 text-base">
							<span class="mono-label" aria-hidden="true">+</span>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div>
			<Accordion items={entries}>
				{#snippet children(item)}
					{@const s = services.find((x) => x.index === item.id)}
					{#if s}
						<div class="flex flex-col gap-4">
							<p class="max-w-lg text-base text-ink-soft">{s.description}</p>
							<p class="mono-label flex flex-wrap gap-x-6 gap-y-1">
								<span class="text-foreground"><Num text={s.price} /></span>
								<span><Num text={s.timeline} /></span>
								<span><Num text={s.tools} /></span>
							</p>
						</div>
					{/if}
				{/snippet}
			</Accordion>
		</div>
	</div>
</div>
