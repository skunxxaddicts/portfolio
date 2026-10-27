<script lang="ts">
import Num from './Num.svelte';

interface Props {
  value: string;
  label: string;
  index?: string;
}
let { value, label, index }: Props = $props();
</script>

<div class="flex flex-col gap-2 border-l border-border pl-5">
	{#if index}<span class="mono-label">[ <span class="text-accent">{index}</span> / {label} ]</span>{/if}
	<p class="font-display text-h3 font-semibold tracking-tight"><Num text={value} /></p>
	{#if !index}<p class="mono-label">{label}</p>{/if}
</div>
