<script>
	export let href = "";
	export let onClickEvent = new Function();
	export let loading = false;
</script>

{#if href}
	<a
		class={`btn border-2 border-accent bg-transparent text-accent backdrop-blur-sm transition-all duration-200 hover:border-neutral hover:bg-accent hover:text-primary`}
		href={`${href}`}
		class:loading
	>
		<slot />
	</a>
{:else}
	<button
		class={`btn border-2 border-accent bg-transparent leading-[3.3] text-accent backdrop-blur-sm transition-all duration-200 hover:border-neutral hover:bg-accent hover:text-primary`}
		on:click={onClickEvent()}
		class:loading
	>
		<slot />
	</button>
{/if}
