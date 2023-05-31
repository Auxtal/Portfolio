<script lang="ts">
  export let classes: string | null = null;
  export let rel = "noreferrer";
  export let target: null = null;
  export let href = "";
  export let download: string | null = null;
  export let loading = false;
  export let onClickEvent = new Function();
</script>

{#if href}
  <a
    class={`no-animation btn rounded-md border-none bg-secondary/20 normal-case text-secondary no-underline outline-none !ring-0 backdrop-blur-sm transition-colors duration-200 hover:bg-neutral hover:text-primary focus:text-primary focus:outline-none active:bg-neutral hover:dark:text-secondary focus:dark:text-secondary md:focus:bg-neutral
     ${classes}`}
    class:loading
    {rel}
    {target}
    {href}
    {download}
  >
    <slot />
  </a>
{:else}
  <button
    class={`no-animation btn rounded-md border-none bg-secondary/20 normal-case text-secondary outline-none !ring-0 backdrop-blur-sm transition-colors duration-200 hover:bg-neutral hover:text-primary focus:text-primary focus:outline-none active:bg-neutral hover:dark:text-secondary focus:dark:text-secondary md:focus:bg-neutral
     ${classes}`}
    class:loading
    on:click={onClickEvent()}
  >
    <slot />
  </button>
{/if}

<style>
  .btn .loading {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
</style>
