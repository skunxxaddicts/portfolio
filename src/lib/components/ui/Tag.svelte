<script lang="ts">
interface Props {
  index?: string;
  total?: string;
  label: string;
  class?: string;
}
let { index, total = '07', label, class: className = '' }: Props = $props();
</script>

{#if index}
	<div class="flex items-baseline gap-4 border-b border-border px-(--spacing-container) py-6 {className}">
		<span class="mono-label"
			>[ <span class="text-accent">{index}</span> / <span class="text-accent">{total}</span> ]</span
		>
		<span class="mono-label text-foreground">{label}</span>
	</div>
{:else}
	<span class="mono-label text-foreground {className}">{label}</span>
{/if}
