
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/projects" | "/api/projects/[slug]" | "/projects" | "/projects/[slug]" | "/thoughts" | "/thoughts/[slug]" | "/work";
		RouteParams(): {
			"/api/projects/[slug]": { slug: string };
			"/projects/[slug]": { slug: string };
			"/thoughts/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/api": { slug?: string };
			"/api/projects": { slug?: string };
			"/api/projects/[slug]": { slug: string };
			"/projects": { slug?: string };
			"/projects/[slug]": { slug: string };
			"/thoughts": { slug?: string };
			"/thoughts/[slug]": { slug: string };
			"/work": Record<string, never>
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/projects" | "/api/projects/" | `/api/projects/${string}` & {} | `/api/projects/${string}/` & {} | "/projects" | "/projects/" | `/projects/${string}` & {} | `/projects/${string}/` & {} | "/thoughts" | "/thoughts/" | `/thoughts/${string}` & {} | `/thoughts/${string}/` & {} | "/work" | "/work/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/1762507828850.png:Zone.Identifier" | "/beans-hero.jpg" | "/favicon.png" | "/pickit-hero.png" | "/pitch-box-2d.png" | "/pitch-box-3d.png" | "/pitch-box-back.png" | "/pitch-box-front.png" | "/pitch-cards-printed.png" | "/pitch-deck-1.jpg" | "/pitch-deck-2.jpg" | "/pitch-deck-3.jpg" | "/pitch-deck-4.jpg" | "/pitch-deck-5.jpg" | "/pitch-deck-6.jpg" | "/profile-picture-ralph.png" | string & {};
	}
}