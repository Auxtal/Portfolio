<script lang="ts">
	import Icon from "@iconify/svelte";

	export let classes: string | null = null;
	export let rel = "noreferrer";
	export let target: null = null;
	export let href = "";
	export let download: string | null = null;
	export let loading = false;
	export let onClickEvent = new Function();
</script>

{#if href}
	<a
		class={`btn border-none bg-secondary/20 normal-case text-secondary no-underline backdrop-blur-sm transition-all duration-200 hover:bg-neutral hover:text-secondary ${classes}`}
		{rel}
		{target}
		{href}
		{download}
	>
		<slot />
	</a>
{:else if loading}
	<button
		class={`btn border-none bg-secondary/20 normal-case text-secondary backdrop-blur-sm transition-all duration-200 hover:bg-neutral hover:text-secondary ${classes}`}
		class:btn-disabled={loading}
		on:click={onClickEvent()}
	>
		<Icon
			height="30"
			width="30"
			icon="eos-icons:loading"
			style="display: inline-block; margin-right: 5px;"
		/>
	</button>
{:else}
	<button
		class={`btn border-none bg-secondary/20 normal-case text-secondary backdrop-blur-sm transition-all duration-200 hover:bg-neutral hover:text-secondary ${classes}`}
		on:click={onClickEvent()}
	>
		<slot />
	</button>
{/if}
