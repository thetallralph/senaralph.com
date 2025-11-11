# Ralph Sena's Personal Website

A minimal, dark-mode personal website built with SvelteKit.

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Editing Content

All content is managed through markdown files in the `content/` directory. No coding required!

### Projects

Add a new project by creating a markdown file in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description"
tags: ["Tag1", "Tag2"]
year: "2024"
url: "https://example.com"
order: 1
---

Full project description here. You can use markdown formatting.

## Sections work

- Bullet points
- Also work
```

### Work Experience

Add work experience in `content/work/`:

```markdown
---
title: "Job Title"
company: "Company Name"
period: "2020 - Present"
url: "https://company.com"
order: 1
---

Description of your role and achievements.
```

### Thoughts/Blog Posts

Add new thoughts in `content/thoughts/`:

```markdown
---
title: "Post Title"
date: "2025-01-10"
description: "Brief summary"
order: 1
---

Your full post content here with markdown support.

## You can use headings

And all standard markdown features.
```

## Structure

```
senaralph.com/
├── content/              # All your content (edit these!)
│   ├── projects/        # Project markdown files
│   ├── work/            # Work experience markdown files
│   └── thoughts/        # Blog post markdown files
├── src/
│   ├── routes/          # Page components
│   ├── lib/             # Utilities
│   ├── app.css          # Global styles (change colors here)
│   └── app.html         # HTML template
└── static/              # Static assets
```

## Customization

### Colors

Edit colors in `src/app.css`:

```css
:root {
	--bg: #0a0a0a;              /* Background */
	--text: #e5e5e5;            /* Main text */
	--text-secondary: #a0a0a0;  /* Secondary text */
	--accent: #ffffff;          /* Accent color */
	--border: #1a1a1a;          /* Border color */
}
```

### Personal Info

Update the home page bio in `src/routes/+page.svelte`.

## Deployment

This site can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

Just connect your git repository and it will auto-deploy on push.
