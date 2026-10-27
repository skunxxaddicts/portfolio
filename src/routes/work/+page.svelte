<script lang="ts">
import BgLines from '#lib/components/layout/BgLines.svelte';
import Seo from '#lib/components/layout/Seo.svelte';
import Cta from '#lib/components/sections/Cta.svelte';
import SelectedWork from '#lib/components/sections/SelectedWork.svelte';
</script>

<Seo title="Work" path="/work" description="Selected projects — client platforms, case-study apps, and tooling from the morkie archive." />

<section aria-labelledby="work-hero" class="relative overflow-hidden border-b border-border">
	<BgLines />
	<div class="content-shell relative py-16 md:py-24">
		<p class="mono-label">[ work ] — collection of my best work</p>
		<h1
			id="work-hero"
			class="mt-4 font-display text-h1 font-extrabold uppercase tracking-tight"
		>
			My <span class="accent-serif">Projects.</span>
		</h1>
	</div>
</section>

<SelectedWork />
<Cta />
