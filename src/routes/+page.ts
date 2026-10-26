import { getRepos } from '#lib/github';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => ({
  reposResult: await getRepos(fetch),
});
