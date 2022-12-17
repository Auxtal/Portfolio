<script>
	import Animate from "$components/Animate.svelte";
	import { t } from "$lib/locales/i18n";

	import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div
	class="flex h-screen flex-col items-center justify-center md:px-8 lg:ml-11 lg:max-w-full lg:flex-row xl:ml-0"
>
	<Animate>
		<div class="px-4">
			<img
				transition:fade|local={{ delay: 100, duration: 300 }}
				class="aspect-auto rounded-lg shadow-md transition-all duration-300 sm:max-w-sm lg:mr-10 lg:grayscale lg:hover:grayscale-0"
				src="/Graduation Event.jpg"
				alt="Graduation Event"
			/>
		</div>
		<div class="flex max-w-md flex-col flex-wrap items-center justify-center lg:items-start">
			<h1
				transition:fade|local={{ delay: 250, duration: 800 }}
				class="my-5 text-3xl font-bold text-neutral backdrop-blur-sm lg:mb-10 lg:text-5xl xl:text-6xl"
			>
				{$t("name")}
			</h1>
			<p
				transition:fade|local={{ delay: 500, duration: 1000 }}
				class="font-secondary text-md px-8 text-center text-accent backdrop-blur-sm lg:px-0 lg:text-left lg:text-lg xl:text-xl"
			>
				{$t("about.description")}
			</p>
		</div>
	</Animate>
</div>
