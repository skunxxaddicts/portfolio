<script lang="ts">
interface Props {
  text: string | number;
}
let { text }: Props = $props();
const parts = $derived(String(text).split(/(\d+)/).filter(Boolean));
</script>

{#each parts as part, i (i)}{#if /^\d+$/.test(part)}<span class="text-accent">{part}</span
		>{:else}{part}{/if}{/each}
