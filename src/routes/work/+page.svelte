<script>
	import Animate from "$components/Animate.svelte";
	import Card from "$components/Card.svelte";
	import Work from "$json/Work.json";
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<div class="flex h-full justify-center pt-[5rem] pb-4 md:h-screen lg:my-0 lg:ml-14 xl:ml-0">
	<div
		class="grid max-w-md grid-cols-1 place-items-center justify-items-center gap-0 gap-y-5 px-5 md:my-auto md:max-w-full md:gap-x-20 md:px-24 lg:grid-cols-2 lg:gap-y-10 lg:px-10"
	>
		<Animate>
			{#each Work as Work}
				<Card title={Work.place} footer={Work.role}>
					<p class="text-sm leading-6 text-secondary">
						{Work.description}
					</p>
				</Card>
			{/each}
		</Animate>
	</div>
</div>
