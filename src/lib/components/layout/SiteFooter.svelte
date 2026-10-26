<script lang="ts">
import { navItems, site, socialLinks } from '#lib/data/site';
import Icon from '../ui/Icon.svelte';
</script>

<footer class="border-t border-border bg-foreground text-paper">
	<div class="content-shell border-ink-soft/40 py-12 md:py-16">
		<div class="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
			<div class="flex flex-col gap-4">
				<span class="font-display text-h3 font-bold tracking-tight">{site.name}.</span>
				<p class="max-w-xs text-base text-paper/70">{site.tagline}</p>
				<p class="mono-label text-paper/50">{site.edition}</p>
			</div>

			<nav aria-label="Pages" class="flex flex-col gap-2">
				<p class="mono-label pb-2 text-paper/50">Pages</p>
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						class="group flex items-baseline gap-2 text-h5 text-paper transition-colors hover:text-paper/60"
					>
						{item.label}
						<sup class="mono-label text-paper/50">{item.index}</sup>
					</a>
				{/each}
				<a
					href="/contact"
					class="group flex items-baseline gap-2 text-h5 text-paper transition-colors hover:text-paper/60"
				>
					Contact <sup class="mono-label text-paper/50">04</sup>
				</a>
			</nav>

			<nav aria-label="Elsewhere" class="flex flex-col gap-2">
				<p class="mono-label pb-2 text-paper/50">Elsewhere</p>
				{#each socialLinks as link (link.label)}
					<a
						href={link.href}
						class="group inline-flex items-center gap-2 text-h5 text-paper transition-colors hover:text-paper/60"
						target={link.href.startsWith('http') ? '_blank' : undefined}
						rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
					>
						{link.label}
						<Icon name="arrow-insert" size={12} />
					</a>
				{/each}
			</nav>

			<div class="flex flex-col gap-2 md:items-end">
				<p class="mono-label text-paper/50">{site.coordinates}</p>
				<p class="mono-label text-paper/50">Last updated {site.lastUpdated}</p>
			</div>
		</div>

		<div
			class="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 md:flex-row md:items-center md:justify-between"
		>
			<p class="mono-label text-paper/50">{site.copyright}</p>
			<p class="mono-label text-paper/50">Built with SvelteKit</p>
		</div>
	</div>
</footer>
