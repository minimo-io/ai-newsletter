<script lang="ts">
	import { Icons } from '../icons/index.js';
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site.js';
	import { cn } from '$lib/utils.js';
	import { docsConfig } from '$lib/config/docs.js';
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<Icons.logo class="h-6 w-6" />
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		{#each docsConfig.mainNav as navItem, index (navItem + index.toString())}
			{#if navItem.href}
				<a
					href={navItem.href}
					class={cn(
						'transition-colors hover:text-foreground/80',
						$page.url.pathname.startsWith(navItem.href) ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					{navItem.title}
				</a>
			{/if}
		{/each}

		<a
			href="https://www.linkedin.com/in/nicolas-erramuspe/"
			target="_blank"
			rel="nofollow noreferrer"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/b2b') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			<span>Consultorias</span>
			<Icons.external class=" inline h-3 w-3 align-middle" />
		</a>
		<!-- <a
			href="/sponsors"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/sponsors') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			<Icons.medal class=" inline h-3 w-3 align-middle" />
			<span>Sponsors</span>
		</a> -->
	</nav>
</div>
