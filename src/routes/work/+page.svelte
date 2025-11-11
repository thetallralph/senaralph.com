<script>
	export let data;
</script>

<svelte:head>
	<title>Work - Ralph Sena</title>
	<meta name="description" content="Professional experience of Ralph Sena" />
</svelte:head>

<h1>Work</h1>
<p class="description">My professional journey.</p>

<div class="timeline">
	{#each data.work as job}
		<div class="experience">
			<div class="period">{job.period}</div>
			<div class="details">
				<h3>{job.title}</h3>
				<p class="company">
					{#if job.url}
						<a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
					{:else}
						{job.company}
					{/if}
				</p>
				<p class="work-description">{job.description}</p>
			</div>
		</div>
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

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.experience {
		display: grid;
		gap: 1.5rem;
	}

	.period {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-variant-numeric: tabular-nums;
	}

	.details h3 {
		margin-bottom: 0.3rem;
	}

	.company {
		color: var(--text-secondary);
		margin-bottom: 1rem;
	}

	.company a {
		color: var(--text-secondary);
	}

	.company a:hover {
		color: var(--text);
	}

	.work-description {
		color: var(--text-secondary);
		line-height: 1.6;
	}

	@media (min-width: 640px) {
		.experience {
			grid-template-columns: 140px 1fr;
		}
	}
</style>
