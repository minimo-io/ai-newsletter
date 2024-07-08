<script lang="ts">
	import { page } from '$app/stores';
	import * as PageHeader from '$lib/components/page-header';
	import { error } from '@sveltejs/kit';
</script>

<div class="container relative">
	<PageHeader.Root class="pb-8">
		<PageHeader.Heading>{$page.status} {$page.error?.message}</PageHeader.Heading>

		<span style="font-size:10em">🫠</span>
	</PageHeader.Root>
</div>
