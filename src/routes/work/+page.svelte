<script>
	import Card from "$lib/components/Card.svelte";
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

<div class="mb-[5rem] flex h-screen justify-center py-[5rem] md:my-[2rem] lg:my-0 lg:ml-14 xl:ml-0">
	<div
		class="grid max-w-md grid-cols-1 place-items-center justify-items-center gap-0 gap-y-5 px-5 md:my-auto md:max-w-full md:gap-x-20 md:px-24 lg:grid-cols-2 lg:gap-y-10 lg:px-10"
	>
		{#if animate}
			{#each Work as Work}
				<Card title={Work.place} footer={Work.role}>
					<p class="text-sm leading-6 text-secondary">
						{Work.description}
					</p>
				</Card>
			{/each}
		{/if}
	</div>
</div>
