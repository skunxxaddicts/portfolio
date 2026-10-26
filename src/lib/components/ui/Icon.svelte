<script lang="ts">
interface Props {
  name:
    | 'arrow-insert'
    | 'arrow-right'
    | 'arrow-outward'
    | 'star'
    | 'close'
    | 'triangle'
    | 'pencil'
    | 'circle'
    | 'star-outline'
    | 'cross';
  size?: number;
}
let { name, size = 16 }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	aria-hidden="true"
	class="shrink-0"
>
	{#if name === 'arrow-insert'}
		<path
			d="M7 17 17 7M17 7H9M17 7v8"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{:else if name === 'arrow-right'}
		<path
			d="M4 12h15M13 6l6 6-6 6"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{:else if name === 'arrow-outward'}
		<path
			d="M6 18 18 6M18 6h-9M18 6v9"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{:else if name === 'star'}
		<path
			d="M12 2.5 14.9 8.6l6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9L12 2.5Z"
			fill="currentColor"
		/>
	{:else if name === 'close'}
		<path
			d="m6 6 12 12M18 6 6 18"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
		/>
	{:else if name === 'triangle'}
		<path d="M12 4.5 21 19.5H3L12 4.5Z" stroke="currentColor" stroke-width="1.6" />
	{:else if name === 'pencil'}
		<path
			d="m14.5 5 4.5 4.5L7.5 21H3v-4.5L14.5 5Z"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
	{:else if name === 'circle'}
		<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6" />
	{:else if name === 'star-outline'}
		<path
			d="M12 2.5 14.9 8.6l6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9L12 2.5Z"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-linejoin="round"
		/>
	{:else if name === 'cross'}
		<path
			d="M12 3v18M3 12h18"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linecap="round"
		/>
	{/if}
</svg>
