<script lang="ts">
import { site } from '#lib/data/site';

let { class: cls = '', outline = false }: { class?: string; outline?: boolean } = $props();
</script>

<span
	class="inline-flex items-baseline gap-[0.06em] whitespace-nowrap font-display font-extrabold uppercase tracking-display {cls} {outline
		? 'text-transparent [-webkit-text-stroke:2px_var(--color-foreground)]'
		: ''}"
>
	<span
		class="logo-mark ms-[-0.008em] {outline ? 'logo-mark-outline text-foreground' : ''}"
		aria-hidden="true"
	></span>
	<span
		>{site.name}<span
			class={outline ? '[-webkit-text-stroke:2px_var(--color-accent)]' : 'text-accent'}
			>.</span
		></span
	>
</span>
