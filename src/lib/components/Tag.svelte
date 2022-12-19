<script>
	export let name;
	export let selectedTag;

	const handleTagClick = () => (selectedTag = name);
</script>

<div
	class="mx-1 mt-2 inline-block cursor-pointer rounded bg-secondary/40 p-1 px-3 text-secondary transition-colors first:ml-0 hover:bg-neutral sm:mt-0"
	on:click={handleTagClick}
>
	{name}
</div>
