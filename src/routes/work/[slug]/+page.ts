import { error } from '@sveltejs/kit';
import { works } from '#lib/data/works';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => works.map((w) => ({ slug: w.slug }));

export const load: PageLoad = ({ params }) => {
  const work = works.find((w) => w.slug === params.slug);
  if (!work) error(404, 'Project not found');
  const idx = works.indexOf(work);
  const next = works[(idx + 1) % works.length];
  return { work, next };
};
