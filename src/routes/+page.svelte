<script lang="ts">
	import Animate from "$components/Animate.svelte";
	import Button from "$components/Button.svelte";

	import { fade, fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";
</script>

<svelte:head>
	<title>Ethan's Portfolio</title>
</svelte:head>

<Animate>
	<div
		transition:fade|local={{ duration: 800, easing: quintOut }}
		class="flex h-screen w-full flex-col items-center justify-center px-5 lg:items-end lg:px-32"
	>
		<h2
			class="font-secondary mb-0 text-center text-2xl font-bold text-accent backdrop-blur-sm sm:mb-1 sm:text-4xl sm:font-bold md:text-right"
		>
			Hi, my name is
		</h2>
		<h1
			class="font-primary z-20 mt-1 mb-2 text-center text-3xl font-bold text-neutral backdrop-blur-sm sm:text-5xl md:text-right lg:text-7xl"
		>
			Ethan Murphy
		</h1>
		<h1
			class="line-1 p-1 text-center text-3xl text-neutral backdrop-blur-sm md:text-right lg:text-5xl"
		>
			I'm an AV Technician
		</h1>
		<div class="mt-5" transition:fly|local={{ x: 50, delay: 100, duration: 500, easing: quintOut }}>
			<Button href="/work">Check Out My Work</Button>
		</div>
	</div>
</Animate>
