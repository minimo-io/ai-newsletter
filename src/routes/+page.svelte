<script lang="ts">
	import { Announcement } from '$lib/components/index.js';
	import * as PageHeader from '$lib/components/page-header/index.js';
	// import { Icons } from '$lib/components/icons/index.js';
	// import { buttonVariants } from '$lib/registry/new-york/ui/button/index.js';
	// import { cn } from '$lib/utils.js';

	// export let data;
	// $: ({ countries } = data);
	// export let data;
</script>

<div class="container relative">
	<PageHeader.Root class="pb-8">
		<Announcement class="z-10" />
		<PageHeader.Heading>
			<!-- IA para alavancar a sua empresa -->
			O maior newsletter <br /> de IA para empresas <br /> do 🇧🇷 Brasil!
		</PageHeader.Heading>
		<PageHeader.Description class="text-muted-foreground">
			Entenda cómo impulsionar o seu negócio (e sua vida) com o poder da IA!
		</PageHeader.Description>
		<PageHeader.Description class="text-muted-foreground">
			Ferramentas e recursos de produtividade + Consultorías!
			<!-- Vamos além do medo? -->
		</PageHeader.Description>

		<div class="z-10 flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<iframe
				title="Inscreva-se"
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
