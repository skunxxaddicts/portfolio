<script lang="ts">
import { aboutStats } from '#lib/data/content';
import { site } from '#lib/data/site';
import Num from '../../ui/Num.svelte';
import Reveal from '../../ui/Reveal.svelte';
import Stat from '../../ui/Stat.svelte';
import Tag from '../../ui/Tag.svelte';
</script>

<div class="border-b border-border">
	<Tag index="01" total="06" label="background" />
	<div class="px-(--spacing-container) py-section">
		<Reveal>
			<h2 class="max-w-4xl font-display text-h2 font-semibold tracking-tight">
				Self-taught, bootcamp-sharpened, <span class="accent-serif">production-tested.</span>
			</h2>
		</Reveal>

		<div class="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
			<div class="flex flex-col gap-4">
				<span class="mono-label">© morkie</span>
				<h3 class="font-display text-h4 font-semibold">
					Developer of working systems, not demo screenshots.
				</h3>
				<p class="mono-label mt-auto"><Num text="{site.owner} · Indonesia" /></p>
			</div>
			<div class="flex flex-col gap-6 text-lead text-ink-soft">
				<p>
					I build web software that goes somewhere: client sites on real infrastructure,
					internal tools with real state machines, and the design system that keeps a <span
						class="text-accent">65</span
					>-repo estate consistent.
				</p>
				<p>
					The path ran through a fullstack bootcamp (WPH, Batch Shanghai), then straight into
					freelance — a production travel platform on a hardened VPS, a live company profile,
					and a growing family of domain demos ported from a <span class="text-accent"
						>70</span
					>-module template monorepo.
				</p>
				<p>
					The through-line is infrastructure-as-practice: shared tokens, CLI tooling, and
					verification gates so that "works on my machine" becomes "verified in the repo."
				</p>
			</div>
		</div>

		<div class="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
			{#each aboutStats as s (s.index)}
				<Stat value={s.value} label={s.label} index={s.index} />
			{/each}
		</div>
	</div>
</div>
