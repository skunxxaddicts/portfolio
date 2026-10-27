<script lang="ts">
import BgLines from '#lib/components/layout/BgLines.svelte';
import Seo from '#lib/components/layout/Seo.svelte';
import Button from '#lib/components/ui/Button.svelte';
import Field from '#lib/components/ui/Field.svelte';
import Textarea from '#lib/components/ui/Textarea.svelte';
import { site } from '#lib/data/site';
import { PUBLIC_FORM_ENDPOINT as endpoint } from '$app/env/public';

let sent = $state<'idle' | 'success' | 'error'>('idle');
</script>

<Seo title="Contact" path="/contact" description="Get in touch with morkie — production sites, internal tools, design systems. Replies within 24 hours." />

<section aria-labelledby="contact-title" class="relative overflow-hidden">
	<BgLines />
	<div class="content-shell relative grid gap-12 py-16 md:py-24 lg:grid-cols-2">
		<div>
			<p class="mono-label">[ Contact ] — Let's talk</p>
			<h1
				id="contact-title"
				class="mt-4 font-display text-h1 font-extrabold uppercase tracking-tight"
			>
				Get in touch.
			</h1>
			<p class="mt-6 max-w-md text-lead text-ink-soft">
				Open for freelance — production sites, internal tools, design-system work. Tell me
				what you're building — I reply within 24 hours.
			</p>
			<div class="mono-label mt-10 flex flex-col gap-2">
				<span>{site.coordinates}</span>
				<a href="mailto:{site.email}" class="text-foreground underline underline-offset-4"
					>{site.email}</a
				>
			</div>
		</div>

		<div>
			{#if sent === 'success'}
				<div role="status" class="border border-foreground bg-surface p-8">
					<p class="font-display text-h4 font-semibold">Message sent.</p>
					<p class="mt-2 text-base text-ink-soft">
						Thank you — I'll get back to you within 24 hours.
					</p>
				</div>
			{:else}
				<form
					method="POST"
					action={endpoint ?? `mailto:${site.email}`}
					class="flex flex-col gap-6"
					onsubmit={(e) => {
						e.preventDefault();
						const form = e.currentTarget;
						if (!endpoint) {
							const data = new FormData(form);
							const v = (k: string) => String(data.get(k) ?? '');
							const subject = `Portfolio inquiry — ${v('name')}`;
							const body = [
								`Name: ${v('name')}`,
								`Email: ${v('email')}`,
								`Phone: ${v('phone') || '—'}`,
								'',
								v('details'),
							].join('\n');
							window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
							return;
						}
						fetch(endpoint, {
							method: 'POST',
							body: new FormData(form),
							headers: { Accept: 'application/json' },
						})
							.then((r) => (sent = r.ok ? 'success' : 'error'))
							.catch(() => (sent = 'error'));
					}}
				>
					<Field id="name" name="name" label="Name" placeholder="John Smith" autocomplete="name" required />
					<Field
						id="email"
						name="email"
						label="Email"
						type="email"
						placeholder="Email address"
						autocomplete="email"
						required
					/>
					<Field
						id="phone"
						name="phone"
						label="Phone"
						type="tel"
						placeholder="Phone number"
						autocomplete="tel"
					/>
					<Textarea
						id="details"
						name="details"
						label="Details"
						rows={5}
						placeholder="Please describe your project"
						required
					/>
					<input
						type="text"
						name="company_website"
						tabindex="-1"
						autocomplete="off"
						class="hidden"
						aria-hidden="true"
					/>
					{#if sent === 'error'}
						<p role="alert" class="mono-label text-foreground">
							Oops! Something went wrong — please email {site.email} directly.
						</p>
					{/if}
					{#if !endpoint}
						<p class="mono-label text-muted">Submitting opens your mail app.</p>
					{/if}
					<Button type="submit" variant="solid" icon="arrow-right">Send message</Button>
				</form>
			{/if}
		</div>
	</div>
</section>
