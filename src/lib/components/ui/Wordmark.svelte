<script lang="ts">
import { site } from '#lib/data/site';

let { class: cls = '', outline = false }: { class?: string; outline?: boolean } = $props();
</script>

<span
	class="inline-flex items-baseline gap-[0.06em] whitespace-nowrap font-display font-extrabold uppercase tracking-display {cls} {outline
		? 'text-transparent [-webkit-text-stroke:2px_color-mix(in_srgb,var(--color-paper)_50%,transparent)]'
		: ''}"
>
	<span
		class="logo-mark ms-[-0.008em] {outline ? 'logo-mark-outline text-paper' : ''}"
		aria-hidden="true"
		>{#if outline}<span class="mark-crop"><span class="mark-ring"></span></span>{/if}</span
	>
	<span
		>{site.name.slice(0, -1)}<span
			class={outline
				? '[-webkit-text-stroke:2px_color-mix(in_srgb,var(--color-foreground)_50%,transparent)]'
				: ''}>{site.name.slice(-1)}</span
		><span
			class={outline
				? '[-webkit-text-stroke:2px_color-mix(in_srgb,var(--color-accent)_60%,transparent)]'
				: 'text-accent'}
			>.</span
		></span
	>
</span>
