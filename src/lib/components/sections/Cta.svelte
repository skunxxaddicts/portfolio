<script lang="ts">
import { site } from '#lib/data/site';
import BgLines from '../layout/BgLines.svelte';
import Button from '../ui/Button.svelte';
import Reveal from '../ui/Reveal.svelte';
</script>

<section aria-labelledby="cta-title" class="relative overflow-hidden">
	<BgLines />
	<div class="content-shell relative py-section text-center">
		<Reveal>
			<p class="mono-label">{site.coordinates}</p>
			<h2
				id="cta-title"
				class="mx-auto mt-4 font-display text-cta font-extrabold uppercase leading-none tracking-tight"
			>
				Ready to<br />Create Magic?
			</h2>
			<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
				<Button href="/contact" variant="solid" icon="arrow-insert">Start a project</Button>
				<Button href="mailto:{site.email}">{site.email}</Button>
			</div>
		</Reveal>
	</div>
</section>
