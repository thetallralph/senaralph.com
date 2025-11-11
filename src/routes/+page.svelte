<script>
	import ShareButtons from '$lib/components/ShareButtons.svelte';

	export let data;

	let selectedProject = null;
	let showProjectDetails = false;
	let showNavMenu = false;
	let currentGreeting = '';
	let lastGreetingChange = 0;

	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'work', label: 'Work history' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	const greetings = [
		'Hi 👋',
		'Hello 😊',
		'Coucou 🙋‍♂️',
		'Hey 👋',
		'Salut 🤙',
		'Bonjour ☀️',
		'Hola 👋',
		'Akpé 🙏', // Ewe (Togo/Benin) - Thank you/Hello
		'Fo 👋', // Fon (Benin) - Hello
		'Azé 🌟', // Ewe (Togo/Benin) - Welcome
		'Mignonhué 💫', // Fon (Benin) - Welcome
		'Akwaaba 🌍', // Akan (Ivory Coast/Ghana) - Welcome
		'Proudly Beninese 🇧🇯'
	];

	function getRandomGreeting() {
		const randomIndex = Math.floor(Math.random() * greetings.length);
		currentGreeting = greetings[randomIndex];
	}

	function handleMouseMove() {
		const now = Date.now();
		// Only change greeting every 300ms (adjust this value to control speed)
		if (now - lastGreetingChange > 300) {
			getRandomGreeting();
			lastGreetingChange = now;
		}
	}

	async function handleProjectClick(project) {
		try {
			// Load full project details
			const response = await fetch(`/api/projects/${project.slug}`);
			if (!response.ok) {
				console.error('Failed to fetch project details');
				return;
			}
			const fullProject = await response.json();
			selectedProject = fullProject;
			showProjectDetails = true;
		} catch (error) {
			console.error('Error loading project:', error);
		}
	}

	function closeProjectDetails() {
		showProjectDetails = false;
		selectedProject = null;
	}

	function toggleNavMenu() {
		showNavMenu = !showNavMenu;
	}

	function scrollToSection(sectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		showNavMenu = false;
	}
</script>

<svelte:head>
	<title>Ralph Sena - Product Designer CV</title>
	<meta name="description" content="Product designer who likes to build and make useful things" />
</svelte:head>

<!-- Navigate Button -->
<div class="nav-container">
	<button class="nav-button" on:click={toggleNavMenu}>
		Navigate ▾
	</button>
	{#if showNavMenu}
		<div class="nav-popup">
			{#each sections as section}
				<button class="nav-item" on:click={() => scrollToSection(section.id)}>
					{section.label}
				</button>
			{/each}
		</div>
	{/if}
</div>

<!-- Header -->
<section class="cv-header">
	<div class="profile-pic-wrapper" on:mouseenter={getRandomGreeting} on:mousemove={handleMouseMove}>
		<img src="/profile-picture-ralph.png" alt="Ralph Sena" class="profile-pic" />
		<div class="greeting-tooltip">{currentGreeting}</div>
	</div>
	<h1>Hi, I'm Ralph!</h1>
	<p class="title">I design and build thoughtful products.</p>
</section>

<!-- About -->
<section class="cv-section" id="about">
	<p class="bio">
		Right now, I'm at Beans, where I've been since January 2019, building the future of retention for ecommerce. I joined as the first product designer at an early stage and helped expand the product from a simple Loyalty program plugin on Shopify to a full-fledged platform. We're now focused on scaling for enterprise customers while keeping simplicity at the core.
	</p>
	<p class="bio">
		Before Beans, I learned the basics of layout and aesthetic in design at Atelier Paon, a design and advertising agency where I cut my teeth from 2016 to 2018.
	</p>
	<p class="bio">
		Outside of work, I love side projects. I'm currently experimenting with how to apply product thinking to build a brick-and-mortar bike business: <a href="https://koinkoinvelo.com" target="_blank" rel="noopener noreferrer">koinkoinvelo.com</a>. With this side project I'm learning marketing and a bit of coding (with Svelte).
	</p>
</section>

<!-- Work Experience -->
<section class="cv-section" id="work">
	<h2>Work history</h2>
	<div class="timeline">
		{#each data.work as job}
			<div class="experience">
				<div class="period">{job.period}</div>
				<div class="details">
					<h3>
						{#if job.url}
							<a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
						{:else}
							{job.company}
						{/if}
					</h3>
					<div class="work-content">
						{@html job.content}
					</div>

				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Projects -->
<section class="cv-section" id="projects">
	<h2>Projects</h2>
	<p class="section-description">A selection of freelance and personal projects done through the time.</p>
	<div class="projects-list">
		{#each data.projects as project}
			<button class="project-item" on:click={() => handleProjectClick(project)}>
				<div class="project-content">
					<div class="project-header">
						<h3>{project.title}</h3>
						{#if project.year}
							<span class="project-year">{project.year}</span>
						{/if}
					</div>
					<p class="project-description">{project.description}</p>
				</div>
				<span class="arrow">→</span>
			</button>
		{/each}
	</div>
</section>

<!-- Contact -->
<section class="cv-section" id="contact">
	<h2>Contact</h2>
	<div class="contact-info">
		<p><strong>Email:</strong> <a href="mailto:ralphorie@gmail.com">ralphorie@gmail.com</a></p>
		<p><strong>WhatsApp:</strong> <a href="https://wa.me/22967232443">+229 01 67 23 24 43</a></p>
	</div>
</section>

<!-- Project Details Modal -->
{#if showProjectDetails && selectedProject}
	<div class="modal-overlay" on:click={closeProjectDetails} on:keydown={(e) => e.key === 'Escape' && closeProjectDetails()} role="button" tabindex="0">
		<div class="modal-content" on:click={(e) => e.stopPropagation()} role="dialog">
			<div class="modal-header">
				<h2>{selectedProject.title}</h2>
				<button class="close-btn" on:click={closeProjectDetails} aria-label="Close project details">✕</button>
			</div>
			<div class="modal-body">
				{#if selectedProject.images && selectedProject.images.length > 0}
					<div class="project-images">
						{#each selectedProject.images as image}
							<img src={image} alt={selectedProject.title} class="project-image" />
						{/each}
					</div>
				{/if}
				{@html selectedProject.content}
			</div>
		</div>
		<!-- Share buttons for the specific project -->
		<ShareButtons
			title={selectedProject.title}
			url={`https://senaralph.com/projects/${selectedProject.slug}`}
			description={selectedProject.description}
		/>
	</div>
{:else}
	<!-- Share buttons for the main portfolio page -->
	<ShareButtons />
{/if}

<style>
	/* Navigate Button */
	.nav-container {
		position: fixed;
		top: 2rem;
		right: 2rem;
		z-index: 200;
	}

	.nav-button {
		background: var(--bg);
		border: 1px solid var(--border);
		padding: 0.75rem 1.25rem;
		border-radius: 6px;
		font-size: 0.95rem;
		cursor: pointer;
		color: var(--text);
		font-family: inherit;
		transition: all 0.2s;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.nav-button:hover {
		border-color: var(--text-secondary);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.nav-popup {
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 6px;
		min-width: 180px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		animation: slideDown 0.2s ease-out;
		overflow: hidden;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.nav-item {
		width: 100%;
		padding: 0.75rem 1.25rem;
		background: none;
		border: none;
		border-bottom: 1px solid var(--border);
		text-align: left;
		cursor: pointer;
		color: var(--text-secondary);
		font-family: inherit;
		font-size: 0.95rem;
		transition: all 0.2s;
	}

	.nav-item:last-child {
		border-bottom: none;
	}

	.nav-item:hover {
		background: rgba(0, 0, 0, 0.03);
		color: var(--text);
	}

	@media (max-width: 640px) {
		.nav-container {
			top: 1rem;
			right: 1rem;
		}

		.nav-button {
			padding: 0.6rem 1rem;
			font-size: 0.9rem;
		}
	}

	.cv-header {
		padding: 2rem 0 3rem;
		border-bottom: 2px solid var(--border);
		margin-bottom: 3rem;
	}

	.profile-pic-wrapper {
		position: relative;
		margin-bottom: 2rem;
		cursor: pointer;
	}

	.profile-pic {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		object-fit: cover;
		border: 4px solid var(--border);
		transition: transform 0.3s ease, border-color 0.3s ease;
	}

	.profile-pic-wrapper:hover .profile-pic {
		transform: scale(1.05);
		border-color: var(--text-secondary);
	}

	.greeting-tooltip {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		color: var(--text);
		padding: 2rem 3rem;
		border-radius: 30px;
		font-size: 5rem;
		font-weight: 700;
		white-space: nowrap;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s ease, transform 0.3s ease;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
		z-index: 1000;
	}

	.profile-pic-wrapper:hover .greeting-tooltip {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1.05);
	}

	.cv-header h1 {
		margin-bottom: 0.5rem;
		font-size: 6rem;
	}

	.cv-header .title {
		color: var(--text-secondary);
		font-size: 1.2rem;
	}

	.cv-section {
		margin-bottom: 3rem;
	}

	.cv-section h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--text);
	}

	.section-description {
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 2rem;
		max-width: 650px;
	}

	.bio {
		color: var(--text-secondary);
		line-height: 1.7;
		max-width: 650px;
		margin-bottom: 1rem;
	}

	.bio:last-child {
		margin-bottom: 0;
	}

	.bio a {
		color: var(--text);
		text-decoration: underline;
	}

	.bio a:hover {
		opacity: 0.7;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.experience {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.period {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-variant-numeric: tabular-nums;
		font-weight: 500;
	}

	.details h3 {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-family: var(--font-sans);
		font-weight: 600;
	}

	.details h3 a {
		color: var(--text);
	}

	.details h3 a:hover {
		opacity: 0.7;
	}

	.work-content {
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.work-content :global(p) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.work-content :global(strong) {
		color: var(--text);
		font-weight: 600;
		display: block;
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		padding-left: 0;
	}

	.work-content :global(p:first-child) {
		margin-top: 0;
	}

	.figma-link {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.75rem 1.5rem;
		background: var(--text);
		color: var(--bg);
		text-decoration: none;
		border-radius: 6px;
		font-weight: 500;
		transition: opacity 0.2s;
	}

	.figma-link:hover {
		opacity: 0.8;
	}

	.contact-info {
		color: var(--text-secondary);
		line-height: 1.8;
	}

	.contact-info a {
		color: var(--text);
	}

	.contact-info a:hover {
		opacity: 0.7;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.project-item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 1.5rem 1rem;
		border: none;
		border-bottom: 1px solid var(--border);
		background: none;
		color: inherit;
		font-family: inherit;
		text-align: left;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.project-item:hover {
		background-color: rgba(0, 0, 0, 0.02);
	}

	.project-item:last-child {
		border-bottom: none;
	}

	.project-content {
		flex: 1;
		font-size: 18px;
	}

	.project-header {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
	}

	.project-header h3 {
		margin: 0;
		font-size: 18px;
		color: var(--text);
		font-family: var(--font-sans);
		font-weight: 600;
	}

	.project-year {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-variant-numeric: tabular-nums;
	}

	.project-description {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.arrow {
		font-size: 1.5rem;
		color: var(--text-secondary);
		flex-shrink: 0;
		transition: transform 0.2s;
	}

	.project-item:hover .arrow {
		transform: translateX(4px);
	}

	/* Modal Styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		animation: fadeIn 0.2s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.modal-content {
		background: var(--bg);
		border-radius: 8px;
		max-width: 800px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		animation: slideUp 0.3s ease-out;
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.modal-header {
		position: sticky;
		top: 0;
		background: var(--bg);
		border-bottom: 1px solid var(--border);
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		z-index: 10;
	}

	.modal-header h2 {
		margin: 0;
		font-size: 1.8rem;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 1.8rem;
		cursor: pointer;
		color: var(--text-secondary);
		padding: 0;
		line-height: 1;
		transition: color 0.2s;
		flex-shrink: 0;
	}

	.close-btn:hover {
		color: var(--text);
	}

	.modal-body {
		padding: 2rem;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.project-images {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.project-image {
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
	}

	.project-image:hover {
		transform: scale(1.02);
	}

	.modal-body :global(h2) {
		color: var(--text);
		font-size: 1.3rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.modal-body :global(h2:first-child) {
		margin-top: 0;
	}

	.modal-body :global(p) {
		margin-bottom: 1rem;
	}

	.modal-body :global(ul) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.modal-body :global(li) {
		margin-bottom: 0.5rem;
	}

	.modal-body :global(a) {
		color: var(--text);
		text-decoration: underline;
	}

	.modal-body :global(a:hover) {
		opacity: 0.7;
	}

	@media (max-width: 767px) {
		.cv-header h1 {
			font-size: 3.5rem;
		}
	}

	@media (max-width: 640px) {
		.modal-overlay {
			padding: 1rem;
		}

		.modal-header {
			padding: 1.5rem;
		}

		.modal-header h2 {
			font-size: 1.4rem;
		}

		.modal-body {
			padding: 1.5rem;
		}
	}
</style>
