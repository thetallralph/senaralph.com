<script>
	export let data;
</script>

<svelte:head>
	<title>{data.project.title} - Ralph Sena</title>
	<meta name="description" content={data.project.description || data.project.title} />
</svelte:head>

<article class="project-detail">
	<header>
		<a href="/projects" class="back-link">← Back to projects</a>
		<h1>{data.project.title}</h1>
		{#if data.project.url}
			<p class="project-link">
				<a href={data.project.url} target="_blank" rel="noopener noreferrer">View project →</a>
			</p>
		{/if}
	</header>

	<div class="content">
		{@html data.project.content}
	</div>
</article>

<style>
	.project-detail {
		max-width: 680px;
	}

	.back-link {
		display: inline-block;
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 2rem;
	}

	.back-link:hover {
		color: var(--text);
	}

	header {
		margin-bottom: 3rem;
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	.project-link {
		margin-top: 1rem;
	}

	.project-link a {
		color: var(--text-secondary);
		font-size: 0.95rem;
	}

	.project-link a:hover {
		color: var(--text);
	}

	.content :global(h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.content :global(h3) {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.content :global(p) {
		margin-bottom: 1rem;
		line-height: 1.7;
		color: var(--text-secondary);
	}

	.content :global(ul),
	.content :global(ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
		line-height: 1.7;
		color: var(--text-secondary);
	}

	.content :global(li) {
		margin-bottom: 0.5rem;
	}

	.content :global(code) {
		background: var(--border);
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-size: 0.9em;
	}

	.content :global(pre) {
		background: var(--border);
		padding: 1rem;
		border-radius: 4px;
		overflow-x: auto;
		margin-bottom: 1rem;
	}

	.content :global(pre code) {
		background: none;
		padding: 0;
	}

	.content :global(a) {
		color: var(--text);
		text-decoration: underline;
	}

	.content :global(a:hover) {
		opacity: 0.7;
	}
</style>
