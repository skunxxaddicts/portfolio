<script lang="ts">
import { disciplines, heroFacts, site } from '#lib/data/site';
import { reveal } from '#lib/utils/reveal';
import Marquee from '../ui/Marquee.svelte';

const leadWords =
  'Production sites, internal tools, and the design system underneath them — built and operated end-to-end.'.split(
    ' ',
  );
</script>

<section aria-labelledby="hero-title" class="relative overflow-hidden border-b border-border">
	<div class="content-shell relative">
		<div
			class="mono-label -mx-6 flex flex-col gap-1 border-b border-border px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
		>
			<span>{site.coordinates}</span>
			<span>- FOLIO/02</span>
			<span>{site.name} — independent dev practice, {site.established}</span>
		</div>

		<div class="-mx-6 border-b border-border">
			<img
				src="/images/hero-visual.png"
				alt=""
				loading="eager"
				class="h-64 w-full object-cover md:h-80"
			/>
		</div>

		<div class="py-10 md:py-16">
			<h1
				id="hero-title"
				class="font-display text-hero font-extrabold uppercase tracking-display"
			>
				<span class="logo-mark me-2 align-baseline" aria-hidden="true"></span>morkie<span
					class="text-accent">.</span
				>
			</h1>
			<div class="-mr-6 mt-4 border-t border-foreground" aria-hidden="true"></div>
			<p use:reveal class="mt-6 max-w-xl text-lead text-ink-soft">
				{#each leadWords as word, i (word + i)}<span class="stagger-word" style:--d="{i * 40}ms"
						>{word}</span
					>{' '}{/each}
			</p>
		</div>

		<div class="-mx-6 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
			{#each heroFacts as fact (fact.index)}
				<div class="flex flex-col gap-2 border-b border-border px-6 pb-8 pt-5 sm:border-b-0 sm:border-l first:sm:border-l-0">
					<span class="mono-label">[{fact.index}] {fact.label}</span>
					<p class="font-display text-h5 font-semibold">{fact.title}</p>
					<p class="text-base text-ink-soft">{fact.body}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="border-t border-border py-8">
		<Marquee duration={30}>
			{#each disciplines as d (d)}
				<span class="mx-6 font-display text-h4 font-semibold uppercase tracking-tight md:mx-10">
					{d}
				</span>
				<span class="mono-label text-accent" aria-hidden="true">·</span>
			{/each}
		</Marquee>
	</div>
</section>
