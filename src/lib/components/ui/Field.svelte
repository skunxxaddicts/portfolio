<script lang="ts">
import type { HTMLInputAttributes } from 'svelte/elements';

interface Props {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  autocomplete?: HTMLInputAttributes['autocomplete'];
  hint?: string;
}
let {
  id,
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  autocomplete,
  hint,
}: Props = $props();
</script>

<div class="flex flex-col gap-2">
	<label for={id} class="mono-label">{label}</label>
	<input
		{id}
		{name}
		{type}
		{placeholder}
		{required}
		{autocomplete}
		class="w-full border border-border bg-surface px-4 py-3 font-display text-base text-foreground transition-colors placeholder:text-muted focus:border-foreground focus:outline-none"
	/>
	{#if hint}<p id="{id}-hint" class="mono-label text-muted">{hint}</p>{/if}
</div>
