<script lang="ts">
	import { Announcement } from '$lib/components/index.js';
	import * as PageHeader from '$lib/components/page-header/index.js';
	import { Icons } from '$lib/components/icons/index.js';
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
			Obrigado por se juntar <br />
			ao 🧠 Brainwaves
		</PageHeader.Heading>
		<PageHeader.Description class="text-muted-foreground">
			<!-- Beautifully designed components that you can copy and paste into your apps. Accessible.
			Customizable. Open Source. -->
			Fique ligado nas novas "waves" em sua caixa de entrada toda terças-feiras. Enquanto isso, acompanhe
			as novidades no nosso
			<a href="https://www.linkedin.com/in/nicolas-erramuspe/" target="_blank">LinkedIn</a>.
		</PageHeader.Description>

		<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<a href="https://www.linkedin.com/in/nicolas-erramuspe/" class={cn(buttonVariants())}>
				Vamos lá!
			</a>
			<!-- <a
				target="_blank"
				rel="noreferrer"
				href={siteConfig.links.linkedin}
				class={cn(buttonVariants({ variant: 'outline' }))}
			>
				<Icons.gitHub class="mr-2 h-4 w-4" />
				Quer mais?
			</a> -->
		</div>
	</PageHeader.Root>
</div>
