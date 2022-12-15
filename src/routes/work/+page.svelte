<script>
	import Box from "$lib/components/Box.svelte";
	import Work from "$json/Work.json";

	import { onMount } from "svelte";

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<div class="my-[5rem] flex h-screen justify-center md:my-0">
	<div
		class="my-auto grid grid-cols-1 place-items-center justify-items-center gap-0 gap-y-5 px-5 md:grid-cols-2 md:gap-x-20 md:gap-y-10 md:px-24 lg:px-10"
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
