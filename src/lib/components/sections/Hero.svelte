<script lang="ts">
import { disciplines, heroFacts, site } from '#lib/data/site';
import { reveal } from '#lib/utils/reveal';
import Marquee from '../ui/Marquee.svelte';
import Num from '../ui/Num.svelte';

const leadWords =
  'Production sites, internal tools, and the design system underneath them — built and operated end-to-end.'.split(
    ' ',
  );
</script>

<section aria-labelledby="hero-title" class="relative overflow-hidden border-b border-border">
	<div class="content-shell relative">
		<div class="flex min-h-[calc(100svh-var(--spacing-header))] flex-col">
			<div
				class="mono-label flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-center sm:justify-between"
			>
				<span><Num text={site.coordinates} /></span>
				<span>- FOLIO/<span class="text-accent">02</span></span>
				<span>{site.name} — independent dev practice, <Num text={site.established} /></span>
			</div>

			<div class="relative flex-1 overflow-hidden">
				<img
					src="/images/morkie.png"
					alt="morkie"
					loading="eager"
					class="absolute bottom-8 left-0 h-[calc(100%-2rem)] w-auto object-cover object-top"
				/>
				<div
					class="absolute inset-x-0 bottom-0 pb-8"
				>
					<h1
						id="hero-title"
						class="flex w-full items-end justify-between font-display text-hero font-extrabold uppercase leading-none"
						aria-label="morkie."
					>
						<span class="logo-mark align-baseline" aria-hidden="true"></span>
						<span aria-hidden="true" class="flex flex-1 items-end justify-between"
							>{#each 'morkie'.split('') as ch (ch)}<span>{ch}</span>{/each}</span
						>
						<span class="text-accent" aria-hidden="true">.</span>
					</h1>
					<div class="mt-4 border-t border-border" aria-hidden="true"></div>
				</div>
			</div>
		</div>

		<div class="py-16 md:py-28">
			<p use:reveal class="text-lead text-ink-soft text-right">
				{#each leadWords as word, i (word + i)}<span class="stagger-word" style:--d="{i * 40}ms"
						>{word}</span
					>{' '}{/each}
			</p>
		</div>

		<div class="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
			{#each heroFacts as fact (fact.index)}
				<div class="flex flex-col gap-2 border-b border-border py-6 pr-6 sm:border-b-0 sm:border-l sm:pl-6 first:sm:border-l-0">
					<span class="mono-label">[<span class="text-accent">{fact.index}</span>] {fact.label}</span>
					<p class="font-display text-h5 font-semibold"><Num text={fact.title} /></p>
					<p class="text-base text-ink-soft"><Num text={fact.body} /></p>
				</div>
			{/each}
		</div>
	</div>

	<div class="border-t border-border bg-accent py-8">
		<Marquee duration={30}>
			{#each disciplines as d (d)}
				<span class="mx-8 font-display text-h3 font-semibold uppercase tracking-tight md:mx-12">
					<Num text={d} />
				</span>
				<span class="size-3.5 shrink-0 rounded-full bg-paper md:size-4" aria-hidden="true"
				></span>
			{/each}
		</Marquee>
	</div>
</section>
