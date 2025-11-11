import { getContentList } from '$lib/content.js';

export async function load() {
	const thoughts = getContentList('thoughts');

	// Sort by date, newest first
	thoughts.sort((a, b) => {
		const dateA = new Date(a.date || 0);
		const dateB = new Date(b.date || 0);
		return dateB - dateA;
	});

	return {
		thoughts
	};
}
