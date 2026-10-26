<script lang="ts">
interface Props {
  value: string;
  label: string;
  index?: string;
}
let { value, label, index }: Props = $props();
</script>

<div class="flex flex-col gap-2 border-l border-border pl-5">
	{#if index}<span class="mono-label">[ {index} / {label} ]</span>{/if}
	<p class="font-display text-h3 font-semibold tracking-tight">{value}</p>
	{#if !index}<p class="mono-label">{label}</p>{/if}
</div>
