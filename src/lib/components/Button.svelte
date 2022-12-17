<script>
	export let href = "";
	export let download = false;
	export let loading = false;
	export let onClickEvent = new Function();
	export let classes;
</script>

{#if href}
	{#if download}
		<a
			class={`btn border-none bg-secondary/20 normal-case text-secondary no-underline backdrop-blur-sm transition-all duration-200 hover:bg-neutral hover:text-secondary focus:bg-neutral ${classes}`}
			class:loading
			{href}
			target="_blank"
			rel="noreferrer"
			download
		>
			<slot />
		</a>
	{:else}
		<a
			class={`btn border-none bg-secondary/20 normal-case text-secondary no-underline backdrop-blur-sm transition-all duration-200 hover:bg-neutral hover:text-secondary focus:bg-neutral ${classes}`}
			class:loading
			{href}
		>
			<slot />
		</a>
	{/if}
{:else}
	<button
		class={`btn border-none bg-secondary/20 normal-case text-secondary backdrop-blur-sm transition-all duration-200 hover:bg-neutral hover:text-secondary focus:bg-neutral ${classes}`}
		class:loading
		on:click={onClickEvent()}
	>
		<slot />
	</button>
{/if}
