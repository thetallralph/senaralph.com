import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x',
			external: ['gray-matter', 'marked'],
			// Include content directory in the deployment
			includeFiles: ['content/**/*.md']
		})
	}
};

export default config;
