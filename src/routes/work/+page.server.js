import { getContentList } from '$lib/content.js';

export async function load() {
	const work = getContentList('work');

	return {
		work
	};
}
