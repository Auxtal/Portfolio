<script>
	import Animate from "$components/Animate.svelte";
	import Button from "$components/Button.svelte";
	import { t } from "$lib/locales/i18n";

	import { fade, fly } from "svelte/transition";
</script>

<svelte:head>
	<title>{$t("banner.name")}'s Portfolio</title>
</svelte:head>

<Animate>
	<div
		transition:fade|local={{ delay: 500, duration: 800 }}
		class="flex h-screen w-full flex-col items-center justify-center px-5 lg:items-end lg:px-32"
	>
		<small
			class="font-secondary mb-0 text-2xl font-bold text-accent backdrop-blur-sm sm:mb-2 sm:text-4xl sm:font-bold"
			>Hi, my name is</small
		>
		<h1
			class="font-primary mt-5 mb-2 text-3xl font-bold text-neutral backdrop-blur-sm sm:text-5xl lg:text-7xl"
		>
			{$t("name")}
		</h1>
		<h2 class="line-1 p-1 text-3xl text-neutral backdrop-blur-sm lg:text-5xl">
			I'm an {$t("banner.profession")}
		</h2>
		<div class="my-5" in:fly|local={{ x: 1000, duration: 1500 }}>
			<Button href="/work">Check Out My Work</Button>
		</div>
	</div>
</Animate>
