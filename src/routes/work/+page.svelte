<script lang="ts">
	import Animate from "$components/Animate.svelte";
	import Card from "$components/Card.svelte";
	import Work from "$json/Work.json";
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<div
	class="flex h-full justify-center pt-[5rem] pb-4 lg:h-screen lg:pb-0 xl:pt-0 lg:ml-24 lg:mr-8 mx-2 sm:mx-0 overflow-x-hidden"
>
	<div
		class="grid max-w-md grid-cols-1 place-items-center justify-items-center gap-0 gap-y-5 md:my-auto md:max-w-full md:gap-x-10 lg:grid-cols-3 lg:gap-y-10"
	>
		<Animate>
			{#each Work as Work}
				<Card title={Work.place} footer={Work.role}>
					<p>{Work.description}</p>
				</Card>
			{/each}
		</Animate>
	</div>
</div>
