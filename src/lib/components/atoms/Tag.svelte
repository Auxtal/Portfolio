<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { clsx } from "clsx";

  export let selectedTag: string | undefined = undefined;
  export let name: string;

  $: highlightTag = clsx({
    "bg-neutral text-primary font-bold dark:text-secondary":
      name.toLowerCase() === selectedTag?.toLowerCase()
  });
  const handleTagClick = () => (selectedTag = name);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={twMerge(
    "tag mx-1 mt-2 inline-block cursor-pointer rounded bg-secondary/10 p-2 px-4 text-secondary transition-colors first:ml-0 hover:bg-neutral hover:text-primary hover:dark:text-secondary sm:mt-0",
    highlightTag
  )}
  on:click={handleTagClick}
>
  {name}
</div>
