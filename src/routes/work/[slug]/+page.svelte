<script lang="ts">
import Seo from '#lib/components/layout/Seo.svelte';
import Cta from '#lib/components/sections/Cta.svelte';
import Button from '#lib/components/ui/Button.svelte';
import Icon from '#lib/components/ui/Icon.svelte';
import Num from '#lib/components/ui/Num.svelte';
import type { PageProps } from './$types';

let { data }: PageProps = $props();
const { work, next } = $derived(data);

const meta = $derived([
  { label: 'Project Name', value: work.title },
  { label: 'Year', value: work.year },
  { label: 'Sector', value: work.sector },
  { label: 'Role', value: work.role },
  { label: 'Scope', value: work.scope },
  { label: 'Status', value: work.status },
]);
</script>

<Seo title={work.title} path="/work/{work.slug}" description={work.tagline} image={work.image} />

<section aria-labelledby="work-title" class="border-b border-border">
	<div class="content-shell py-16 md:py-24">
		<a
			href="/work"
			class="mono-label inline-flex min-h-11 items-center gap-2 hover:text-foreground"
		>
			<Icon name="arrow-right" size={12} /> all work
		</a>
		<h1
			id="work-title"
			class="mt-6 font-display text-h1 font-extrabold uppercase tracking-display"
		>
			<Num text={work.title} /><span class="text-accent">.</span>
		</h1>
		<dl class="mt-12 grid grid-cols-2 border-t border-border sm:grid-cols-3 lg:grid-cols-6">
			{#each meta as m (m.label)}
				<div class="flex flex-col gap-1 border-b border-border py-5 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0 lg:border-b-0">
					<dt class="mono-label">[ {m.label} ]</dt>
					<dd class="text-base font-medium"><Num text={m.value} /></dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<section aria-labelledby="brief" class="border-b border-border">
	<div class="content-shell grid gap-10 py-14 md:grid-cols-2 md:py-20">
		<div>
			<h2 id="brief" class="font-display text-h3 font-semibold tracking-tight">
				The <span class="accent-serif">Brief</span>
			</h2>
			<p class="mt-5 font-display text-h5 font-medium leading-snug">{work.brief.lead}</p>
			<p class="mt-4 text-base text-ink-soft">{work.brief.body}</p>
		</div>
		<div>
			<h2 class="font-display text-h3 font-semibold tracking-tight">
				<span class="accent-serif">Highlights</span>
			</h2>
			<ul class="mt-5 divide-y divide-border border-y border-border">
				{#each work.highlights as h, i (h)}
					<li class="flex items-baseline gap-4 py-3">
						<span class="mono-label text-accent">{String(i + 1).padStart(2, '0')}</span>
						<span class="text-base text-ink-soft">{h}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

{#if work.image}
	<div class="overflow-hidden border-b border-border">
		<img
			src={work.image}
			alt={work.imageAlt}
			class="mx-auto max-h-128 w-full object-cover"
		/>
	</div>
{/if}

<section aria-labelledby="stack" class="border-b border-border">
	<div class="content-shell py-14 md:py-20">
		<h2 id="stack" class="mono-label">[ stack ]</h2>
		<ul class="mt-6 flex flex-wrap gap-2">
			{#each work.stack as tech (tech)}
				<li class="border border-border px-4 py-2 font-display text-h5 font-medium">
					{tech}
				</li>
			{/each}
		</ul>

		{#if work.links.live || work.links.github}
			<div class="mt-8 flex flex-wrap gap-4">
				{#if work.links.live}
					<Button href={work.links.live} icon="arrow-outward">Live site</Button>
				{/if}
				{#if work.links.github}
					<Button href={work.links.github} icon="arrow-outward">Source</Button>
				{/if}
			</div>
		{/if}

		{#if work.quote}
			<figure class="mt-16 max-w-3xl">
				<span class="font-display text-h2 leading-none" aria-hidden="true">"</span>
				<blockquote class="font-serif text-lead italic text-ink-soft">
					{work.quote.text}
				</blockquote>
				<figcaption class="mono-label mt-4">{work.quote.author}</figcaption>
			</figure>
		{/if}
	</div>
</section>

<a
	href="/work/{next.slug}"
	class="group block border-b border-border transition-colors hover:bg-surface"
>
	<div class="content-shell flex items-center justify-between gap-4 py-10">
		<div>
			<p class="mono-label">That Was</p>
			<p class="mt-1 font-display text-h2 font-semibold tracking-tight"><Num text={work.title} /></p>
		</div>
		<div class="text-right">
			<p class="mono-label">Next</p>
			<p
				class="mt-1 inline-flex items-center gap-2 font-display text-h4 font-semibold tracking-tight"
			>
				<Num text={next.title} />
				<Icon name="arrow-right" size={18} />
			</p>
		</div>
	</div>
</a>

<Cta />
