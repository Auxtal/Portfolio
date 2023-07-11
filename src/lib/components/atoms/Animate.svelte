<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let animate = false;
  onMount(() => {
    animate = true;

    // Auto scrolls to blog post header Id.
    setTimeout(() => {
      const { hash } = $page.url;
      if (hash?.length > 1) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
      }
    }, 50);
  });
</script>

{#if animate}
  <slot />
{/if}
