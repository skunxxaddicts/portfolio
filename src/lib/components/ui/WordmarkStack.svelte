<script lang="ts">
import Wordmark from './Wordmark.svelte';

let { class: cls = '', id }: { class?: string; id?: string } = $props();
const layer = 'absolute inset-0 flex justify-end px-[0.03em]';
</script>

<h1 {id} class="relative h-[0.8em] {cls}">
	<span class="{layer}"><Wordmark /></span>
	<span class="{layer} z-20" aria-hidden="true"><Wordmark outline /></span>
</h1>
