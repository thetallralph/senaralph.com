<script>
	import '../app.css';
</script>

<div class="container">
	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} Ralph Sena - Product Designer</p>
	</footer>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}

	footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
		color: var(--text-secondary);
		font-size: 0.9rem;
		text-align: center;
	}

	@media (max-width: 640px) {
		.container {
			padding: 1.5rem 1rem;
		}
	}
</style>
