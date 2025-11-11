<script>
	export let data;

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>{data.thought.title} - Ralph Sena</title>
	<meta name="description" content={data.thought.description || data.thought.title} />
</svelte:head>

<article class="thought-post">
	<header>
		<a href="/thoughts" class="back-link">← Back to thoughts</a>
		<h1>{data.thought.title}</h1>
		{#if data.thought.date}
			<p class="date">{formatDate(data.thought.date)}</p>
		{/if}
	</header>

	<div class="content">
		{@html data.thought.content}
	</div>
</article>

<style>
	.thought-post {
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

	.date {
		color: var(--text-secondary);
		font-size: 0.9rem;
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
	}

	.content :global(ul),
	.content :global(ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
		line-height: 1.7;
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
