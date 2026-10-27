<script lang="ts">
import { site } from '#lib/data/site';

let { class: cls = '', outline = false }: { class?: string; outline?: boolean } = $props();
</script>

<span class="wordmark-cluster {cls} {outline ? 'text-transparent text-outline-paper' : ''}">
	<span class="logo-mark {outline ? 'logo-mark-outline text-paper' : ''}" aria-hidden="true"
		>{#if outline}<span class="mark-crop"><span class="mark-ring"></span></span>{/if}</span
	>
	<span
		>{site.name.slice(0, -1)}<span class={outline ? 'text-outline-ink' : ''}
			>{site.name.slice(-1)}</span
		><span class={outline ? 'text-outline-accent' : 'text-accent'}>.</span></span
	>
</span>
