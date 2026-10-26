<script lang="ts">
import type { Snippet } from 'svelte';
import { cn } from '#lib/utils/cn';
import Icon from './Icon.svelte';

interface Props {
  href?: string;
  variant?: 'outline' | 'solid';
  icon?: 'arrow-insert' | 'arrow-right' | 'arrow-outward';
  type?: 'button' | 'submit';
  class?: string;
  external?: boolean;
  children: Snippet;
}
let {
  href,
  variant = 'outline',
  icon,
  type = 'button',
  class: className = '',
  external = false,
  children,
}: Props = $props();
</script>

{#if href}
	<a
		{href}
		class={cn('btn', variant === 'solid' && 'btn-solid', className)}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		{@render children()}
		{#if icon}<Icon name={icon} size={14} />{/if}
	</a>
{:else}
	<button {type} class={cn('btn', variant === 'solid' && 'btn-solid', className)}>
		{@render children()}
		{#if icon}<Icon name={icon} size={14} />{/if}
	</button>
{/if}
