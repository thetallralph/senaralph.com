import { getContentItem } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const project = getContentItem('projects', params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
}
