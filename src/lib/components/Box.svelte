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
		class="dark:bg-stone-900/10 max-h-[23rem] w-full max-w-[25rem] rounded-xl border border-accent p-6 shadow-sm shadow-accent backdrop-blur-sm transition-transform duration-200 hover:-translate-y-2"
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
