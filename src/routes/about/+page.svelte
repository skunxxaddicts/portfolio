<script lang="ts">
import BgLines from '#lib/components/layout/BgLines.svelte';
import Seo from '#lib/components/layout/Seo.svelte';
import Background from '#lib/components/sections/about/Background.svelte';
import Disciplines from '#lib/components/sections/about/Disciplines.svelte';
import Journey from '#lib/components/sections/about/Journey.svelte';
import Now from '#lib/components/sections/about/Now.svelte';
import Principles from '#lib/components/sections/about/Principles.svelte';
import Recognition from '#lib/components/sections/about/Recognition.svelte';
import Cta from '#lib/components/sections/Cta.svelte';
import { site } from '#lib/data/site';
</script>

<Seo title="About" path="/about" description="morkie — independent dev practice. Background, principles, journey and what's being built this month." />

<section aria-labelledby="about-hero" class="relative overflow-hidden border-b border-border">
	<BgLines />
	<div class="content-shell relative py-16 md:py-24">
		<p class="mono-label">{site.coordinates}</p>
		<h1
			id="about-hero"
			class="mt-4 font-display text-h1 font-extrabold uppercase tracking-tight"
		>
			Hello,<br />I'm morkie<span class="text-accent">.</span>
		</h1>
	</div>
</section>

<Background />
<Principles />
<Journey />
<Disciplines />
<Recognition />
<Now />
<Cta />
