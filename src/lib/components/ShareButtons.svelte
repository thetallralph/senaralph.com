<script>
	export let title = "Ralph Sena - Product Designer";
	export let url = "";
	export let description = "Product designer who likes to build and make useful things";

	let shareUrl = '';
	let showCopied = false;

	$: {
		if (typeof window !== 'undefined') {
			shareUrl = url || window.location.href;
		}
	}

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(shareUrl);
			showCopied = true;
			setTimeout(() => {
				showCopied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<div class="share-container">
	<div class="share-buttons">
		<button class="share-btn" on:click={copyLink} aria-label="Copy link" title="Copy link">
			{#if showCopied}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			{:else}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
				</svg>
			{/if}
		</button>
	</div>
</div>

<style>
	.share-container {
		position: fixed;
		left: 2rem;
		bottom: 2rem;
		z-index: 100;
		/* CRITICAL: This prevents the container from blocking clicks */
		pointer-events: none;
	}

	.share-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		/* Re-enable pointer events only on the buttons */
		pointer-events: auto;
	}

	.share-btn {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 50%;
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.2s;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.share-btn:hover {
		background: var(--text);
		color: var(--bg);
		border-color: var(--text);
		transform: scale(1.1);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.share-btn:active {
		transform: scale(0.95);
	}

	@media (max-width: 640px) {
		.share-container {
			left: 1rem;
			bottom: 1rem;
		}

		.share-btn {
			width: 44px;
			height: 44px;
		}
	}
</style>
