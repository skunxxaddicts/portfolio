<script lang="ts">
import { site } from '#lib/data/site';

interface Props {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}
let {
  title,
  description = site.description,
  path = '/',
  image = `${site.url}/images/og-image.png`,
}: Props = $props();

const fullTitle = $derived(title ? `${title} — ${site.name}` : `${site.name} — ${site.owner}`);
const canonical = $derived(`${site.url}${path}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
