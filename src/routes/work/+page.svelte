<script>
	import Box from "$lib/components/Box.svelte";
	import Work from "$json/Work.json";
	import { t } from "$lib/locales/i18n";

	import { onMount } from "svelte";

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<div class="mb-5 flex h-full items-center justify-center">
	<div
		class="grid grid-cols-1 place-items-center items-center justify-items-center gap-20 md:grid-cols-2 md:px-24 lg:px-10"
	>
		{#if animate}
			{#each Work as Work}
				<Box title={Work.place}>
					<p class="text-center text-sm leading-6 text-secondary">
						{Work.description}
					</p>
				</Box>
			{/each}
		{/if}
	</div>
</div>
