<script>
	export let selectedTag;
	export let name;

	const handleTagClick = () => (selectedTag = name);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="mx-1 mt-2 inline-block cursor-pointer rounded bg-secondary/40 p-1 px-3 text-secondary transition-colors first:ml-0 hover:bg-neutral sm:mt-0"
	on:click={handleTagClick}
>
	{name}
</div>
