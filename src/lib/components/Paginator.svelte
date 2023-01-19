<script lang="ts">
	import Animate from "$components/Animate.svelte";

	import { PaginationNav } from "svelte-paginate";
	import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
</script>

<Animate>
	<div id="paginator" transition:fade|local={{ duration: 800, easing: quintOut }}>
		<PaginationNav {...$$props} on:setPage />
	</div>
</Animate>

<style lang="postcss">
	#paginator {
		z-index: 30;
	}

	#paginator :global(.pagination-nav) {
		@apply shadow-lg;

		background: rgba(var(--secondary-rgb), 0.1);
		backdrop-filter: blur(4px);
		justify-content: center;
		max-width: fit-content;
		align-items: center;
		border-radius: 5px;
		flex-wrap: wrap;
		display: flex;
	}

	#paginator :global(.option) {
		transition: all 200ms ease-out;
		color: var(--secondary);
		justify-content: center;
		align-items: center;
		user-select: none;
		padding: 10px;
		display: flex;
	}

	#paginator :global(.option svg path) {
		fill: var(--secondary);
	}

	#paginator :global(.option:first-child) {
		border-radius: 3px 0 0 3px;
	}

	#paginator :global(.option:last-child) {
		border-radius: 0 3px 3px 0;
	}

	#paginator :global(.option.number),
	#paginator :global(.option.ellipsis) {
		padding: 14px 15px;
	}

	#paginator :global(.option:hover) {
		background: rgba(var(--secondary-rgb), 0.4);
		cursor: pointer;
	}

	#paginator :global(.option.active) {
		color: var(--neutral);
	}
</style>
