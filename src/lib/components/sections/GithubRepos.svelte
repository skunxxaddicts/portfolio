<script lang="ts">
import { site } from '#lib/data/site';
import type { ReposResult } from '#lib/github';
import Icon from '../ui/Icon.svelte';
import Reveal from '../ui/Reveal.svelte';
import Tag from '../ui/Tag.svelte';

interface Props {
  result: ReposResult;
}
let { result }: Props = $props();

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
</script>

<div class="border-b border-border">
	<Tag index="05" label="github" />
	<div class="py-section">
		<Reveal>
			<h2 class="font-display text-h2 font-semibold tracking-tight">
				Public <span class="accent-serif">repos.</span>
			</h2>
			<p class="mt-4 max-w-xl text-lead text-ink-soft">
				Live from the GitHub API at build time{#if result.isFallback}&nbsp;— currently
				showing the bundled snapshot{/if}.
			</p>
		</Reveal>

		<ol class="mt-12 border-t border-border">
			{#each result.repos as repo (repo.name)}
				<li>
					<a
						href={repo.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group grid items-baseline gap-1 border-b border-border py-5 transition-colors hover:bg-surface md:grid-cols-[14rem_1fr_auto] md:gap-8 md:px-4"
					>
						<span class="inline-flex items-center gap-2 font-display text-h5 font-semibold">
							{repo.name}
							<Icon name="arrow-outward" size={13} />
						</span>
						<span class="text-base text-ink-soft">{repo.description ?? '—'}</span>
						<span class="mono-label">
							{repo.language ?? 'mixed'} · ★ {repo.stars} · {fmt(repo.updatedAt)}
						</span>
					</a>
				</li>
			{/each}
		</ol>

		<p class="mono-label mt-6">
			<a
				href="https://github.com/{site.owner}"
				target="_blank"
				rel="noopener noreferrer"
				class="text-foreground underline underline-offset-4"
			>
				github.com/{site.owner} →
			</a>
		</p>
	</div>
</div>
