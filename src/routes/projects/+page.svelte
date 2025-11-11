<script>
	export let data;
</script>

<svelte:head>
	<title>Projects - Ralph Sena</title>
	<meta name="description" content="Projects by Ralph Sena" />
</svelte:head>

<h1>Projects</h1>
<p class="description">Things I've built and am building.</p>

<div class="projects">
	{#each data.projects as project}
		<article class="project">
			<h3>
				<a href="/projects/{project.slug}">{project.title}</a>
			</h3>
			<p class="project-description">{project.description}</p>
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

	.projects {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.project {
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}

	.project:last-child {
		border-bottom: none;
	}

	.project h3 {
		margin-bottom: 0.5rem;
	}

	.project h3 a {
		color: var(--text);
	}

	.project h3 a:hover {
		opacity: 0.7;
	}

	.project-description {
		color: var(--text-secondary);
		line-height: 1.6;
	}
</style>
