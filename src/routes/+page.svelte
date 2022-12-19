<script>
	import Animate from "$components/Animate.svelte";
	import Button from "$components/Button.svelte";
	import { t } from "$lib/locales/i18n";

	import { fade, fly } from "svelte/transition";
</script>

<svelte:head>
	<title>{$t("name")}'s Portfolio</title>
</svelte:head>

<Animate>
	<div
		transition:fade|local={{ delay: 250, duration: 800 }}
		class="flex h-screen w-full flex-col items-center justify-center px-5 lg:items-end lg:px-32"
	>
		<small
			class="font-secondary mb-0 text-center text-2xl font-bold text-accent backdrop-blur-sm sm:mb-2 sm:text-4xl sm:font-bold md:text-right"
			>Hi, my name is</small
		>
		<h1
			class="font-primary mt-5 mb-2 text-center text-3xl font-bold text-neutral backdrop-blur-sm sm:text-5xl md:text-right lg:text-7xl"
		>
			{$t("fullName")}
		</h1>
		<h2
			class="line-1 p-1 text-center text-3xl text-neutral backdrop-blur-sm md:text-right lg:text-5xl"
		>
			I'm an {$t("profession")}
		</h2>
		<div class="my-5" in:fly|local={{ x: 100, duration: 1000 }}>
			<Button href="/work">Check Out My Work</Button>
		</div>
	</div>
</Animate>
