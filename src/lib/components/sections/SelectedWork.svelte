<script lang="ts">
import { works } from '#lib/data/works';
import { cn } from '#lib/utils/cn';
import Reveal from '../ui/Reveal.svelte';
import Tag from '../ui/Tag.svelte';

interface Props {
  index?: string;
}
let { index = '02' }: Props = $props();
</script>

<div class="border-b border-border">
	<Tag {index} label="selected work" />
	<div class="py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				Selected <span class="accent-serif">Work.</span>
			</h2>
		</Reveal>

		<div class="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
			{#each works as work (work.slug)}
				<a
					href="/work/{work.slug}"
					class={cn(
						'group relative block overflow-hidden',
						work.dark ? 'bg-foreground text-paper' : 'bg-surface text-foreground',
					)}
				>
					{#if work.image}
						<div class="aspect-[4/3] overflow-hidden">
							<img
								src={work.image}
								alt={work.imageAlt}
								loading="lazy"
								class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							/>
						</div>
					{:else}
						<div class="flex aspect-[4/3] flex-col justify-between p-6">
							<div class="flex items-start justify-between">
								<span class={cn('mono-label', work.dark && 'text-paper/50')}>
									[ {work.index} ]
								</span>
								<span class={cn('mono-label', work.dark && 'text-paper/50')}>
									{work.status}
								</span>
							</div>
							<p
								class="font-display text-h2 font-extrabold uppercase leading-none tracking-tight transition-transform duration-700 ease-out group-hover:-translate-y-1"
							>
								{work.title}
							</p>
							<p class={cn('mono-label', work.dark && 'text-paper/50')}>
								{work.stack.slice(0, 3).join(' · ')}
							</p>
						</div>
					{/if}
					<div class="flex items-start justify-between gap-4 border-t border-border p-5">
						<div>
							<p class="font-display text-h5 font-semibold">
								{work.image ? work.title : work.tagline}
							</p>
							<p class={cn('mono-label mt-1', work.dark && 'text-paper/50')}>{work.sector}</p>
						</div>
						<span class={cn('mono-label', work.dark && 'text-paper/50')}>{work.year}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
