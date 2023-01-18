<script lang="ts">
	import Animate from "$components/Animate.svelte";

	import { fade, fly } from "svelte/transition";

	export let styles = "";
	export let title: string;
	export let footer: string;
</script>

<Animate>
	<div
		class="max-h-max w-full rounded-xl border flex flex-col justify-between border-secondary/20 bg-secondary/10 p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 sm:max-h-[15rem] md:max-h-[23rem] md:max-w-[25rem] lg:min-h-full"
		in:fly|local={{ x: 100, duration: 800 }}
	>
		<div>
			{#if title}
				<h2 class="text-md underline-offset-7 mb-2 font-bold leading-6 text-neutral">
					{title}
				</h2>
			{/if}
			<div
				class={`flex flex-wrap justify-center text-sm leading-6 text-secondary ${styles}`}
				transition:fade|local={{ delay: 250, duration: 800 }}
			>
				<slot />
			</div>
		</div>
		{#if footer}
			<div class="mt-2" in:fade={{ delay: 500, duration: 800 }}>
				<div class="divider m-0 before:bg-secondary/20 after:bg-secondary/20" />
				<p class="pt-1 text-xs font-bold">
					{footer}
				</p>
			</div>
		{/if}
	</div>
</Animate>
