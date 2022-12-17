<script>
	import { onMount } from "svelte";

	let animate = false;
	onMount(() => (animate = true));
</script>

{#if animate}
	<slot />
{/if}
