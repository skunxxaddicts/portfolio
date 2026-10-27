<script lang="ts">
import { homeStats } from '#lib/data/content';
import { site } from '#lib/data/site';
import Button from '../ui/Button.svelte';
import Reveal from '../ui/Reveal.svelte';
import Stat from '../ui/Stat.svelte';
import Tag from '../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="01" label="about" />
	<div class="px-(--spacing-container) py-section">
		<Reveal>
			<h2 class="max-w-4xl font-display text-h2 font-semibold tracking-tight">
				One operator. Sites, tools, and the <span class="accent-serif">system</span> that
				ties them together.
			</h2>
		</Reveal>

		<div class="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
			<div class="flex flex-col gap-4">
				<h3 class="font-display text-h4 font-semibold">{site.owner}</h3>
				<blockquote class="border-l-2 border-foreground pl-5 font-serif text-lead italic text-ink-soft">
					"Ship it, verify it, then make the next one cheaper to build — that's the whole
					practice."
				</blockquote>
			</div>
			<div class="flex flex-col gap-8">
				<p class="text-lead text-ink-soft">
					Client sites that run on real servers, case-study apps with real state machines,
					and a shared CSS kit that keeps 65 repos honest.
				</p>
				<div class="grid grid-cols-3 gap-6">
					{#each homeStats as stat (stat.label)}
						<Stat value={stat.value} label={stat.label} />
					{/each}
				</div>
				<div class="border border-border bg-surface p-6">
					<span class="mono-label">[ MORKIE ]</span>
					<p class="mt-3 text-base text-ink-soft">
						Independent dev practice — frontend, tooling, infrastructure.
					</p>
					<div class="mt-5">
						<Button href="/about" icon="arrow-right">more about me</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
