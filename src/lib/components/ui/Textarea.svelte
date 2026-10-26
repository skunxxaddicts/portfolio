<script lang="ts">
interface Props {
  id: string;
  name: string;
  label?: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
}
let { id, name, label, rows = 5, placeholder, required = false }: Props = $props();
</script>

<div class="flex flex-col gap-2">
	{#if label}<label for={id} class="mono-label">{label}</label>{/if}
	<textarea
		{id}
		{name}
		{rows}
		{placeholder}
		{required}
		style:min-height="calc({rows} * 1.5em + 1.75rem)"
		class="w-full resize-none border border-border bg-surface px-4 py-3 font-display text-base text-foreground transition-colors [field-sizing:content] placeholder:text-muted focus:border-foreground focus:outline-none"
	></textarea>
</div>
