<script lang="ts">
  import Tag from "$components/atoms/Tag.svelte";
  import { searchTerm } from "$lib/utils/stores";

  import { quintOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  export let title: string;
  export let tags: string[];
  export let published: string;
  export let i: number;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  class="mb-4 flex h-min w-full cursor-pointer items-center justify-between rounded-md border border-secondary/20 bg-secondary/5 py-8 shadow-md ring-neutral backdrop-blur-sm transition first:mt-0 last:mb-0 focus-visible:outline-none focus-visible:ring-2 dark:bg-secondary/10 lg:py-0 lg:hover:-translate-y-0.5 lg:focus-visible:-translate-y-0.5"
  tabindex="0"
  in:fade={{ delay: 150 * i, duration: 500, easing: quintOut }}
  on:click
  on:keydown
>
  <div>
    <p class="text-1xl m-0 p-2 font-bold text-secondary sm:text-3xl">
      {title}
    </p>
    <div class="hidden p-2 lg:block">
      {#if tags}
        {#each tags as tag}
          <Tag name={tag} bind:selectedTag={$searchTerm} />
        {/each}
      {/if}
    </div>
  </div>
  <div>
    <p class="pr-4 text-right text-secondary">
      {new Date(published).toDateString()}
    </p>
  </div>
</div>
