<script>
	import Animate from "$components/Animate.svelte";
	import Button from "$components/Button.svelte";

	import { fade } from "svelte/transition";
	import { page } from "$app/stores";

	if ($page?.status === 404) {
		window.location.replace("/");
	}
</script>

<svelte:head>
	<title>{$page?.status ? $page?.status : ""} Error</title>
</svelte:head>

<Animate>
	<div
		class="flex h-screen w-full flex-col items-center justify-center px-5 lg:px-32"
		in:fade={{ delay: 500, duration: 800 }}
	>
		<h1
			class="font-primary mt-5 mb-10 text-center text-3xl font-bold text-neutral backdrop-blur-sm sm:text-3xl lg:text-4xl"
		>
			Looks Like An Error Has Occurred
		</h1>
		<Button href="/contact/form">Contact Auxtal</Button>
	</div>
</Animate>
