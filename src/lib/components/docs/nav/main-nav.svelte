<script lang="ts">
	import { Icons } from '../icons/index.js';
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site.js';
	import { cn } from '$lib/utils.js';
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<!-- <Icons.logo class="h-6 w-6" /> -->
		🧠&nbsp;
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		<!-- <a
			href="/docs"
			class={cn(
				"transition-colors hover:text-foreground/80",
				$page.url.pathname === "/docs" ? "text-foreground" : "text-foreground/60"
			)}
		>
			Docs
		</a> -->
		<a
			href="/ferramentas-ia"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/docs/components') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Ferramentas
		</a>
		<a
			href="/cursos"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/cursos') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Cursos
		</a>
		<a
			href="/patrocinadores"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/patrocinadores') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Patrocinadores
		</a>
		<a
			href={siteConfig.links.author}
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/sobre-nos') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Sobre nós
		</a>
		<!-- <a
			href="/blocks"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/blocks') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Blocks
		</a> -->
		<!-- <a
			href={siteConfig.links.github}
			target="_blank"
			rel="noopener noreferrer"
			class={cn('hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block')}
		>
			GitHub
		</a> -->
	</nav>
</div>
