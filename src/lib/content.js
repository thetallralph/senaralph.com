import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Try multiple possible locations for content directory
let contentDir;
const possiblePaths = [
	path.join(__dirname, '..', '..', 'content'),           // Dev/build location
	path.join(process.cwd(), 'content'),                   // Current working directory
	path.join(__dirname, 'content'),                        // Same directory as this file
	path.join(__dirname, '..', '..', '..', 'content')      // Parent of server bundle
];

for (const testPath of possiblePaths) {
	if (fs.existsSync(testPath)) {
		contentDir = testPath;
		break;
	}
}

if (!contentDir) {
	console.error('Content directory not found. Tried:', possiblePaths);
	contentDir = possiblePaths[0]; // Fallback
}

// Configure marked to open all links in new tab
const renderer = new marked.Renderer();
const originalLinkRenderer = renderer.link;
renderer.link = function(href, title, text) {
	const html = originalLinkRenderer.call(this, href, title, text);
	return html.replace(/^<a /, '<a target="_blank" rel="noopener noreferrer" ');
};

marked.setOptions({
	renderer: renderer
});

export function getContentList(type, includeContent = false) {
	const dir = path.join(contentDir, type);

	if (!fs.existsSync(dir)) {
		return [];
	}

	const files = fs.readdirSync(dir).filter(file => file.endsWith('.md'));

	const items = files.map(file => {
		const filePath = path.join(dir, file);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const { data, content } = matter(fileContents);

		const item = {
			slug: file.replace('.md', ''),
			...data,
			excerpt: content.slice(0, 200).replace(/\n/g, ' ').trim() + '...'
		};

		if (includeContent) {
			item.content = marked(content);
		}

		return item;
	});

	// Sort by order if available, otherwise by title
	return items.sort((a, b) => {
		if (a.order !== undefined && b.order !== undefined) {
			return a.order - b.order;
		}
		return (a.title || '').localeCompare(b.title || '');
	});
}

export function getContentItem(type, slug) {
	const filePath = path.join(contentDir, type, `${slug}.md`);

	if (!fs.existsSync(filePath)) {
		return null;
	}

	const fileContents = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContents);

	return {
		slug,
		...data,
		content: marked(content)
	};
}
