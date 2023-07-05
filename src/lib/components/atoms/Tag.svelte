<script lang="ts">
  import { clsx } from "clsx";

  export let selectedTag: string | null = null;
  export let name: string;

  $: highlightTag = clsx({ "!bg-neutral": name.toLowerCase() === selectedTag?.toLowerCase() });
  const handleTagClick = () => (selectedTag = name);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="tag mx-1 mt-2 inline-block cursor-pointer rounded bg-secondary/10 p-2 px-4 text-secondary transition-colors first:ml-0 hover:bg-neutral sm:mt-0 {highlightTag}"
  on:click={handleTagClick}
>
  {name}
</div>
