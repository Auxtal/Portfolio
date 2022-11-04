<script>
	import Button from "$lib/components/Button.svelte";
	import { t } from "$lib/locales/i18n";

	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	let banner = false;
	onMount(() => {
		banner = true;
	});
</script>

{#if banner}
	<div
		transition:fade|local={{ delay: 500, duration: 800 }}
		class="flex w-full flex-col items-center justify-center px-5 lg:items-end lg:px-32"
	>
		<small class="font-secondary mb-2 text-xl text-accent backdrop-blur-sm">Hi, my name is</small>
		<h1
			class="font-primary mt-5 mb-10 text-3xl font-bold text-neutral backdrop-blur-sm lg:text-7xl"
		>
			{$t("banner.name")}
		</h1>
		<h2 class="line-1 p-1 text-3xl text-base-100 backdrop-blur-sm lg:text-5xl 2xl:text-7xl">
			I'm an {$t("banner.profession")}
		</h2>

		<div class="my-12" in:fly|local={{ x: 1000, duration: 1500 }}>
			<Button href="/work">Check Out My Work</Button>
		</div>
	</div>
{/if}
