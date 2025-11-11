import { json } from '@sveltejs/kit';
import { getContentItem } from '$lib/content.js';

export async function GET({ params }) {
	const project = getContentItem('projects', params.slug);

	if (!project) {
		return json({ error: 'Project not found' }, { status: 404 });
	}

	return json(project);
}
