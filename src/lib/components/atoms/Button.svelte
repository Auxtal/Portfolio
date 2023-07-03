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
    class={`no-animation btn rounded-md border-none bg-secondary/20 normal-case text-secondary no-underline outline-none !ring-0 backdrop-blur-sm transition-colors duration-75 active:bg-neutral md:hover:bg-neutral md:hover:text-primary md:focus-visible:bg-neutral md:focus-visible:text-primary md:focus-visible:outline-none md:hover:dark:text-secondary md:focus-visible:dark:text-secondary lg:duration-200
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
    class={`no-animation btn rounded-md border-none bg-secondary/20 normal-case text-secondary outline-none !ring-0 backdrop-blur-sm transition-colors duration-75 active:bg-neutral md:hover:bg-neutral md:hover:text-primary md:focus-visible:bg-neutral md:focus-visible:text-primary md:focus-visible:outline-none md:hover:dark:text-secondary md:focus-visible:dark:text-secondary lg:duration-200
     ${classes}`}
    class:loading
    on:click={onClickEvent()}
  >
    <slot />
  </button>
{/if}
