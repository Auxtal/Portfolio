<script lang="ts">
	import Animate from "$components/Animate.svelte";

	import { fade, fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	export let styles = "";
	export let title: string;
	export let footer: string;
</script>

<Animate>
	<div
		class="flex max-h-max w-full flex-col justify-between rounded-xl border border-secondary/20 bg-secondary/5 p-4 backdrop-blur-sm transition-transform duration-200 dark:bg-secondary/10 sm:max-h-[15rem] md:max-h-[23rem] md:max-w-[25rem] md:hover:-translate-y-1 lg:min-h-full"
		transition:fly|local={{ x: 50, duration: 500, easing: quintOut }}
	>
		<div>
			{#if title}
				<h2 class="text-md underline-offset-7 mb-2 font-bold leading-6 text-neutral">
					{title}
				</h2>
			{/if}
			<div
				class={`flex flex-wrap justify-center text-sm leading-6 text-secondary ${styles}`}
				transition:fade|local={{ delay: 150, duration: 800, easing: quintOut }}
			>
				<slot />
			</div>
		</div>
		{#if footer}
			<div class="mt-2" in:fade={{ delay: 200, duration: 800, easing: quintOut }}>
				<div class="divider m-0 before:bg-secondary/20 after:bg-secondary/20" />
				<p class="pt-1 text-xs font-semibold">
					{footer}
				</p>
			</div>
		{/if}
	</div>
</Animate>
