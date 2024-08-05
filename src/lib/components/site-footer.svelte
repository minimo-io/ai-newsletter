<script lang="ts">
	import { Icons } from '$lib/components/icons/index.js';
	import { siteConfig } from '$lib/config/site.js';
</script>

<footer class="z-10 py-6 md:px-8 md:py-0">
	<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
		<div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				Desenvolvido por
				<a
					href={siteConfig.links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium underline underline-offset-4"
				>
					minimo-io</a
				>
				/
				<a href="/patrocinadores" class="font-medium underline underline-offset-4">
					<Icons.medal class=" inline h-3 w-3 align-middle" />
					Patrocinadores
				</a>

				<!-- Nos ombros de
				<a
					href="https://x.com/shadcn"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					shadcn</a
				>
				e
				<a
					href="https://x.com/huntabyte"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
				>
					huntabyte</a
				>. -->
			</p>
		</div>
	</div>
</footer>
