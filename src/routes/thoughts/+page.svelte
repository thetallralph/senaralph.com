<script>
	export let data;

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>Thoughts - Ralph Sena</title>
	<meta name="description" content="Thoughts on tech and life by Ralph Sena" />
</svelte:head>

<h1>Thoughts</h1>
<p class="description">What I think about tech and life in general.</p>

<div class="thoughts">
	{#each data.thoughts as thought}
		<article class="thought">
			<h3>
				<a href="/thoughts/{thought.slug}">{thought.title}</a>
			</h3>
			{#if thought.date}
				<p class="date">{formatDate(thought.date)}</p>
			{/if}
			<p class="excerpt">{thought.description || thought.excerpt}</p>
		</article>
	{/each}
</div>

<style>
	h1 {
		margin-bottom: 0.5rem;
	}

	.description {
		color: var(--text-secondary);
		margin-bottom: 3rem;
	}

	.thoughts {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.thought {
		padding-bottom: 2.5rem;
		border-bottom: 1px solid var(--border);
	}

	.thought:last-child {
		border-bottom: none;
	}

	.thought h3 {
		margin-bottom: 0.5rem;
	}

	.thought h3 a {
		color: var(--text);
	}

	.thought h3 a:hover {
		opacity: 0.7;
	}

	.date {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 0.75rem;
	}

	.excerpt {
		color: var(--text-secondary);
		line-height: 1.6;
	}
</style>
