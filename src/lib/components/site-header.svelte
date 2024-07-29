<script lang="ts">
	import { CommandMenu, Icons, MainNav, MobileNav, ModeToggle } from '$lib/components/index.js';
	import { buttonVariants } from '$lib/registry/new-york/ui/button/index.js';
	import { siteConfig } from '$lib/config/site.js';
	import { cn } from '$lib/utils.js';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-xl items-center">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<CommandMenu />
			</div>
			<!-- <ModeToggle /> -->
			<nav class="flex items-center">
				<a
					href="/inscreva-se"
					class="bg-turquoise inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				>
					Inscreva-se
				</a>

				<!-- <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: 'sm',
								variant: 'ghost'
							}),
							'w-9 px-0'
						)}
					>
						<Icons.twitter class="h-3 w-3 fill-current" />
						<span class="sr-only">X (formerly known as Twitter)</span>
					</div>
				</a> -->
			</nav>
		</div>
	</div>
</header>
