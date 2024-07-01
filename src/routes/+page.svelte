<script lang="ts">
	import { Announcement } from '$lib/components/docs/index.js';
	import * as PageHeader from '$lib/components/docs/page-header/index.js';
	import { Icons } from '$lib/components/docs/icons/index.js';
	import { buttonVariants } from '$lib/registry/new-york/ui/button/index.js';
	import { siteConfig } from '$lib/config/site.js';
	import { cn } from '$lib/utils.js';
</script>

<div class="container relative z-10">
	<PageHeader.Root class="pb-8">
		<Announcement />
		<PageHeader.Heading>
			<!-- Build your component library -->
			<!-- IA para alavancar a sua empresa -->
			O maior newsletter <br /> de IA do 🇧🇷 Brasil!
		</PageHeader.Heading>
		<PageHeader.Description class="text-muted-foreground">
			<!-- Beautifully designed components that you can copy and paste into your apps. Accessible.
			Customizable. Open Source. -->
			Vamos impulsionar o seu negócio (e sua vida) com o poder da IA! Ferramentas, recursos e notícias
			de produtividade.
		</PageHeader.Description>
		<PageHeader.Description class="text-muted-foreground">
			<!-- Beautifully designed components that you can copy and paste into your apps. Accessible.
			Customizable. Open Source. -->
			Vamos além do medo?
		</PageHeader.Description>

		<!-- <p class="text-center text-sm text-orange-700 dark:text-orange-400">
			This is an unofficial port of <a
				href={siteConfig.links.shadGithub}
				target="_blank"
				rel="noreferrer"
				class="font-medium underline underline-offset-4">shadcn/ui</a
			>
			to Svelte, and is not affiliated with
			<a
				href={siteConfig.links.shadTwitter}
				target="_blank"
				rel="noreferrer"
				class="font-medium underline underline-offset-4">@shadcn</a
			>.
		</p> -->
		<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<iframe
				title="Suscribase"
				src="https://embeds.beehiiv.com/a4e57abb-ef8e-4d65-b939-ca8d2ca7d243?slim=true"
				data-test-id="beehiiv-embed"
				height="52"
				frameborder="0"
				scrolling="no"
				style="margin: 0; border-radius: 6px !important; background-color: transparent;width:90%;"
			></iframe>

			<!-- <a href="/assine" class={cn(buttonVariants())}> Começar agora </a>
			<a
				target="_blank"
				rel="noreferrer"
				href={siteConfig.links.github}
				class={cn(buttonVariants({ variant: 'outline' }))}
			>
				<Icons.gitHub class="mr-2 h-4 w-4" />
				GitHub
			</a> -->
		</div>
	</PageHeader.Root>
</div>
