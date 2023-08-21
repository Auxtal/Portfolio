<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";

  import { PaginationNav } from "svelte-paginate";
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<Animate>
  <div
    id="paginator"
    class="[&>.pagination-nav]:bg-secondary/5 dark:[&>.pagination-nav]:bg-secondary/10"
    transition:fade|local={{ duration: 500, easing: quintOut }}
  >
    <!-- Background Colors are set here due to the dark selector in raw css not working. -->
    <PaginationNav {...$$props} on:setPage />
  </div>
</Animate>

<style lang="postcss">
  #paginator :global(.pagination-nav) {
    @apply border-secondary/20;
    @apply backdrop-blur-sm;
    @apply justify-center;
    @apply items-center;
    @apply rounded-md;
    @apply flex-wrap;
    @apply max-w-fit;
    @apply shadow-md;
    @apply border;
    @apply flex;
    @apply mb-4;

    @screen lg {
      @apply m-0;
    }
  }

  #paginator :global(.option) {
    @apply justify-center;
    @apply text-secondary;
    @apply transition-all;
    @apply items-center;
    @apply select-none;
    @apply p-[10px];
    @apply flex;
  }

  #paginator :global(.option:first-child) {
    @apply rounded-tl-md;
    @apply rounded-bl-md;
  }

  #paginator :global(.option:last-child) {
    @apply rounded-tr-md;
    @apply rounded-br-md;
  }

  #paginator :global(.option.number),
  #paginator :global(.option.ellipsis) {
    @apply p-3;
  }

  #paginator :global(.option svg path) {
    @apply fill-secondary;
  }

  #paginator :global(.option:focus) {
    @apply bg-transparent;
  }

  #paginator :global(.option:active) {
    @apply bg-primary/40;
  }

  #paginator :global(.option.active) {
    @apply text-neutral;
  }

  #paginator :global(.option:hover) {
    @screen lg {
      @apply bg-primary/40;
      @apply cursor-pointer;
    }
  }
</style>
