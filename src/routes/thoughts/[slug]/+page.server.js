import { getContentItem } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const thought = getContentItem('thoughts', params.slug);

	if (!thought) {
		throw error(404, 'Thought not found');
	}

	return {
		thought
	};
}
