<script lang="ts">
	export let selectedTag: string | null = null;
	export let name: string;

	const handleTagClick = () => (selectedTag = name);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="mx-1 mt-2 inline-block cursor-pointer rounded bg-secondary/40 p-2 px-4 text-secondary transition-colors first:ml-0 hover:bg-neutral sm:mt-0"
	on:click={handleTagClick}
>
	{name}
</div>
