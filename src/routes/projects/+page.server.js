import { getContentList } from '$lib/content.js';

export async function load() {
	const projects = getContentList('projects');

	return {
		projects
	};
}
