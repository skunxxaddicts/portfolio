<script lang="ts">
import Wordmark from './Wordmark.svelte';

let { class: cls = '', id }: { class?: string; id?: string } = $props();
const layer = 'absolute inset-0 flex justify-end px-(--spacing-wordmark-inset)';
</script>

<h1 {id} class="relative h-(--wordmark-box-h) {cls}">
	<span class="{layer}"><Wordmark /></span>
	<span class="{layer} z-(--z-sticky)" aria-hidden="true"><Wordmark outline /></span>
</h1>
