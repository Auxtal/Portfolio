<script>
	import BackButton from "$lib/components/BackButton.svelte";

	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<BackButton href="/blog" />
	<article class="prose w-full max-w-full pt-14" in:fade|local={{ delay: 200, duration: 800 }}>
		<slot />
	</article>
{/if}
