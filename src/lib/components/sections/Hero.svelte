<script lang="ts">
import { disciplines, heroFacts, site } from '#lib/data/site';
import { reveal } from '#lib/utils/reveal';
import Marquee from '../ui/Marquee.svelte';
import Num from '../ui/Num.svelte';
import WordmarkStack from '../ui/WordmarkStack.svelte';

const leadLine1 =
  'Production sites, internal tools, and the design system underneath them'.split(' ');
const leadLine2 = 'built and operated end-to-end.'.split(' ');
</script>

<section aria-labelledby="hero-title" class="relative overflow-hidden border-b border-border">
	<div class="content-shell relative">
		<div class="flex min-h-(--spacing-shell) flex-col">
			<div class="relative flex-1 overflow-hidden bg-paper [container-type:inline-size]">
				<div class="absolute inset-x-0 top-(--spacing-hero-anchor)">
					<WordmarkStack id="hero-title" class="text-hero" />
				</div>
				<img
					src="/images/morkie.png"
					alt="morkie"
					loading="eager"
					class="absolute top-0 left-0 h-full w-auto object-cover object-top"
				/>
				<!-- one flowed block: no z-index/transform on the wrapper, so line 1's
				     mix-blend-difference composites against the band (bg-paper + photo)
				     and line 2 can never collide when line 1 wraps -->
				<div class="absolute inset-x-0 top-(--spacing-hero-anchor) text-hero">
					<div class="mt-(--spacing-hero-lead)">
						<p use:reveal class="text-right text-h3 text-paper mix-blend-difference">
							{#each leadLine1 as word, i (word + i)}<span
									class="stagger-word"
									style:--d="{i * 40}ms">{word}</span
								>{' '}{/each}
						</p>
						<p use:reveal class="mt-3 text-right text-h3 text-accent">
							{#each leadLine2 as word, i (word + i)}<span
									class="stagger-word"
									style:--d="{(leadLine1.length + i) * 40}ms">{word}</span
								>{' '}{/each}
						</p>
					</div>
				</div>
				<div
					class="mono-label absolute inset-x-0 top-0 z-(--z-overlay) flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
				>
					<span><Num text={site.coordinates} /></span>
					<span>- FOLIO/<span class="text-accent">02</span></span>
					<span>{site.name} — independent dev practice, <Num text={site.established} /></span>
				</div>
				<div class="absolute inset-x-0 bottom-0 z-(--z-overlay) border-t border-border" aria-hidden="true"></div>
			</div>
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

	<div class="flex h-22 items-center border-t border-border bg-accent">
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
