<script lang="ts" module>
export interface AccordionEntry {
  id: string;
  title: string;
  meta?: string;
}
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { cn } from '#lib/utils/cn';

	interface Props {
		items: AccordionEntry[];
		/** which item content to render, keyed by item id */
		children: Snippet<[AccordionEntry]>;
	}
	let { items, children }: Props = $props();

	// first item open by default; once the user interacts, their choice wins
	let openId = $state<string | null>(null);
	let touched = $state(false);
	const isOpen = (id: string) => (touched ? openId === id : id === items[0]?.id);
</script>

<div class="border-t border-border">
	{#each items as item (item.id)}
		{@const open = isOpen(item.id)}
		<div class="border-b border-border">
			<h3 class="m-0">
				<button
					type="button"
					id="acc-btn-{item.id}"
					aria-expanded={open}
					aria-controls="acc-panel-{item.id}"
					class="flex w-full cursor-pointer items-baseline justify-between gap-4 py-6 text-left"
					onclick={() => {
						touched = true;
						openId = open ? null : item.id;
					}}
				>
					<span class="mono-label">-{item.id}</span>
					<span class="flex-1 font-display text-h4 font-semibold uppercase tracking-tight">
						{item.title}
					</span>
					{#if item.meta}<span class="mono-label hidden sm:inline">{item.meta}</span>{/if}
					<span
						class={cn(
							'font-mono text-lg leading-none transition-transform duration-300',
							open && 'rotate-45',
						)}
						aria-hidden="true">+</span
					>
				</button>
			</h3>
			{#if open}
				<div
					id="acc-panel-{item.id}"
					role="region"
					aria-labelledby="acc-btn-{item.id}"
					transition:slide={{ duration: 300 }}
				>
					<div class="pb-8 pl-10 md:pl-14">
						{@render children(item)}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
