<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	export let title;
	export let footer;
	export let animation = false;
	export let styles = "";

	onMount(() => {
		animation = !animation;
	});
</script>

{#if animation}
	<div
		class="max-h-max w-full rounded-xl border border-secondary/20 bg-secondary/10 p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-2 sm:max-h-[15rem] md:max-h-[23rem] md:max-w-[25rem]"
		in:fly|local={{ x: 100, duration: 1500 }}
	>
		{#if title}
			<h2 class="text-md underline-offset-7 mb-2 font-bold leading-6 text-neutral">
				{title}
			</h2>
		{/if}
		<div
			class={`flex flex-wrap justify-center ${styles}`}
			transition:fade|local={{ delay: 600, duration: 800 }}
		>
			<slot />
		</div>
		{#if footer}
			<div in:fade={{ delay: 1000, duration: 800 }}>
				<div class="divider m-0 before:bg-secondary/20 after:bg-secondary/20" />
				<p class="pt-1 text-xs font-bold">
					{footer}
				</p>
			</div>
		{/if}
	</div>
{/if}
