<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	export let title;
	export let animation = false;
	export let styles = "";

	onMount(() => {
		animation = !animation;
	});
</script>

{#if animation}
	<div
		class="max-h-[23rem] w-full max-w-[25rem] rounded-xl bg-secondary/20 p-6 shadow-lg shadow-accent/30 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-2"
		in:fly|local={{ x: 100, duration: 1500 }}
	>
		{#if title}
			<h2
				class="text-md underline-offset-7 mb-5 text-center font-bold leading-6 text-neutral underline"
			>
				{title}
			</h2>
		{/if}
		<div
			class={`flex flex-wrap justify-center ${styles}`}
			transition:fade|local={{ delay: 600, duration: 800 }}
		>
			<slot />
		</div>
	</div>
{/if}
