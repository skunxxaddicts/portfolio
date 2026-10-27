<script lang="ts">
import Seo from '#lib/components/layout/Seo.svelte';
import Cta from '#lib/components/sections/Cta.svelte';
import Experience from '#lib/components/sections/Experience.svelte';
import GithubRepos from '#lib/components/sections/GithubRepos.svelte';
import Hero from '#lib/components/sections/Hero.svelte';
import HomeAbout from '#lib/components/sections/HomeAbout.svelte';
import Process from '#lib/components/sections/Process.svelte';
import SelectedWork from '#lib/components/sections/SelectedWork.svelte';
import Services from '#lib/components/sections/Services.svelte';
import Testimonials from '#lib/components/sections/Testimonials.svelte';
import type { PageProps } from './$types';

let { data }: PageProps = $props();
</script>

<Seo />

<Hero />
<HomeAbout />
<SelectedWork index="02" />
<Experience />
<Process />
<GithubRepos result={data.reposResult} />
<Services index="06" />
<Testimonials />
<Cta />
