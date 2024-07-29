<script lang="ts">
	import { Announcement } from '$lib/components/index.js';
	import * as PageHeader from '$lib/components/page-header/index.js';
	import { Icons } from '$lib/components/icons/index.js';

	import * as Card from '$lib/registry/new-york/ui/card/index.js';
	import { siteConfig } from '$lib/config/site.js';

	// export let data;
	// $: ({ countries } = data);
	// export let data;
</script>

<div class="container relative">
	<PageHeader.Root class="pb-8">
		<Announcement class="z-10 text-xs md:text-sm" />
		<a href="/" class="mt-2 flex items-center text-sm md:text-xl">
			<span class=" mr-2 font-bold sm:inline-block"> {siteConfig.name} </span>
			<Icons.logo class="mr-2 h-6 w-6" />
			<span class=" font-bold sm:inline-block"> NEWSLETTER </span>
		</a>
		<PageHeader.Heading class="w-full leading-none md:w-3/4 lg:leading-none">
			Impulsione o seu negócio com o <span class="partial-border">poder da IA</span>
		</PageHeader.Heading>
		<PageHeader.Description class="pt-2 text-muted-foreground">
			Junte-se a mais de 1200 empresários e aprenda como aproveitar a inteligência artificial para
			aumentar sua produtividade.
			<!-- e a de sua empresa. -->
			<!-- O newsletter de Inteligência Artificial para empresários do 🇧🇷 Brasil! -->
		</PageHeader.Description>
		<PageHeader.Description class="pt-0 text-muted-foreground">
			E veja como outras empresas estão usando IA, <br />
			<span class="partial-border partial-border-sm">toda terça-feira</span>
			no se Inbox.
		</PageHeader.Description>
		<div class="z-10 flex w-full items-center justify-center space-x-4 pb-5 pt-4 md:w-3/4 md:pb-5">
			<iframe
				title="Inscreva-se"
				src="https://embeds.beehiiv.com/a4e57abb-ef8e-4d65-b939-ca8d2ca7d243?slim=true"
				data-test-id="beehiiv-embed"
				height="52"
				frameborder="0"
				scrolling="no"
				style="margin: 0; border-radius: 6px !important; background-color: transparent;width:90%;"
			></iframe>
		</div>
		<div class="z-10 grid w-full grid-cols-2 gap-4 px-4 pb-4 md:w-auto md:gap-4 xl:grid-cols-4">
			<div>
				<Card.Root
					class="border-chineseX2 dark:bg-chinese z-10 w-full bg-white text-center uppercase"
				>
					<Card.Header class="p-4 md:p-6">
						<Card.Title class="text-chinese text-2xl font-light dark:text-white md:text-3xl"
							>+1200</Card.Title
						>
						<Card.Description class="text-oslo text-xs ">empresários</Card.Description>
					</Card.Header>
				</Card.Root>
			</div>
			<div>
				<Card.Root
					class="border-chineseX2 dark:bg-chinese z-10 w-full bg-white text-center uppercase"
				>
					<Card.Header class="p-4 md:p-6">
						<Card.Title class="text-chinese text-2xl font-light dark:text-white md:text-3xl"
							>50</Card.Title
						>
						<Card.Description class="text-oslo text-center text-xs ">ferramentas</Card.Description>
					</Card.Header>
				</Card.Root>
			</div>
			<div>
				<Card.Root
					class="border-chineseX2 dark:bg-chinese z-10 w-full bg-white text-center uppercase"
				>
					<Card.Header class="p-4 md:p-6">
						<Card.Title class="text-chinese text-2xl font-light dark:text-white md:text-3xl"
							>12</Card.Title
						>
						<Card.Description class="text-oslo text-center text-xs">cursos</Card.Description>
					</Card.Header>
				</Card.Root>
			</div>
			<div>
				<Card.Root
					class="border-chineseX2 dark:bg-chinese z-10 w-full bg-white text-center uppercase"
				>
					<Card.Header class="p-4 md:p-6">
						<Card.Title class="text-chinese text-2xl font-light dark:text-white md:text-3xl"
							>3151</Card.Title
						>
						<Card.Description class="text-oslo text-center text-xs ">notícias</Card.Description>
					</Card.Header>
				</Card.Root>
			</div>
		</div>
		<div class="text-md hidden text-center text-muted-foreground">
			<!-- Lido <span class="partial-border partial-border-sm">toda terça-feira</span> pelos executivos de: -->
			Veja como as empresas estão usando AI, toda
			<span class="partial-border partial-border-sm">toda terça-feira</span>
			no se Inbox.
		</div>
	</PageHeader.Root>
</div>
