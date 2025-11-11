import { getContentList } from '$lib/content.js';

export async function load() {
	const work = getContentList('work', true); // Include full content
	const projects = getContentList('projects');

	return {
		work,
		projects
	};
}
