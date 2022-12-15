<script>
	import { t } from "$lib/locales/i18n";

	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center sm:flex-row md:px-8 lg:max-w-full">
	{#if animate}
		<div class="px-4">
			<img
				transition:fade|local={{ delay: 100, duration: 300 }}
				class="mr-20 rounded-lg shadow-md transition-all duration-300 sm:max-w-sm lg:grayscale lg:hover:grayscale-0"
				src="/Graduation Event.jpg"
				alt="Graduation Event"
			/>
		</div>
		<div class="flex max-w-md flex-col flex-wrap items-center justify-center lg:items-start">
			<h1
				transition:fade|local={{ delay: 250, duration: 800 }}
				class="my-5 text-3xl font-bold text-neutral backdrop-blur-sm lg:mb-10 lg:text-6xl"
			>
				{$t("name")}
			</h1>
			<p
				transition:fade|local={{ delay: 500, duration: 1000 }}
				class="font-secondary px-8 text-center text-sm text-accent backdrop-blur-sm md:text-left lg:text-xl"
			>
				{$t("about.description")}
			</p>
		</div>
	{/if}
</div>
