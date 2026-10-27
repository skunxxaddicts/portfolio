<script lang="ts">
import { navItems, site } from '#lib/data/site';
import { cn } from '#lib/utils/cn';
import { page } from '$app/state';
import Button from '../ui/Button.svelte';
import Icon from '../ui/Icon.svelte';

let menuOpen = $state(false);
let menuBtn: HTMLButtonElement | undefined = $state();
const currentPath = $derived(page.url.pathname);

function isActive(href: string): boolean {
  return href === '/' ? currentPath === '/' : currentPath.startsWith(href);
}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && menuOpen) {
			menuOpen = false;
			menuBtn?.focus();
		}
	}}
/>

<header class="sticky top-0 z-40 border-b border-border bg-paper">
	<div class="content-shell flex items-center justify-between bg-paper">
		<a
			href="/"
			class="flex items-center gap-3 py-4 font-display text-logo font-bold tracking-tight"
			aria-label="{site.name} — home"
		>
			{site.name}<span class="text-muted">.</span>
		</a>

		<nav aria-label="Primary" class="hidden items-center gap-8 md:flex">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class={cn(
						'mono-label py-4 transition-colors hover:text-foreground',
						isActive(item.href) && 'text-foreground',
					)}
					aria-current={isActive(item.href) ? 'page' : undefined}
				>
					<span class="text-muted">{item.index}</span>&nbsp;&nbsp;{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden md:block">
			<Button href="/contact" variant="solid">Get in touch</Button>
		</div>

		<button
			type="button"
			bind:this={menuBtn}
			class="mono-label flex items-center gap-2 py-4 md:hidden"
			aria-expanded={menuOpen}
			aria-controls="mobile-nav"
			onclick={() => (menuOpen = !menuOpen)}
		>
			{menuOpen ? 'Close' : 'Menu'}
			<Icon name={menuOpen ? 'close' : 'arrow-insert'} size={14} />
		</button>
	</div>

	{#if menuOpen}
		<nav
			id="mobile-nav"
			aria-label="Mobile"
			class="border-t border-border bg-paper md:hidden"
		>
			<div class="content-shell flex flex-col py-4">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						class="flex items-baseline justify-between border-b border-border py-4 font-display text-h4 font-semibold uppercase"
						aria-current={isActive(item.href) ? 'page' : undefined}
						onclick={() => (menuOpen = false)}
					>
						{item.label}
						<span class="mono-label">{item.index}</span>
					</a>
				{/each}
				<div class="py-4">
					<Button href="/contact" variant="solid" class="w-full" >Get in touch</Button>
				</div>
			</div>
		</nav>
	{/if}
</header>
