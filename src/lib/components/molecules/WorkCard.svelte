<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";

  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let title: string;
  export let footer: string;
  export let current: boolean;
</script>

<Animate>
  <div
    class="indicator flex w-full flex-col justify-between rounded-xl border border-secondary/20 bg-secondary/5 p-4 shadow-md backdrop-blur-sm transition-transform duration-200 dark:bg-secondary/10 lg:hover:-translate-y-0.5"
    transition:fly|local={{ y: 50, duration: 500, easing: quintOut }}
  >
    {#if current}
      <span class="badge-neutral badge indicator-item" />
    {/if}
    <div>
      {#if title}
        <h2 class="underline-offset-7 text-md mb-3 font-bold leading-6 text-neutral">
          {title}
        </h2>
      {/if}
      <div
        class={`flex flex-wrap justify-center text-sm leading-6 text-secondary`}
        transition:fade|local={{ delay: 150, duration: 800, easing: quintOut }}
      >
        <slot />
      </div>
    </div>
    {#if footer}
      <div class="mt-2" in:fade={{ delay: 200, duration: 800, easing: quintOut }}>
        <!-- prettier-ignore -->
        <div class="divider m-0 before:h-[1px] before:bg-secondary/20 after:h-[1px] after:bg-secondary/20"/>
        <p class="pt-1 text-xs font-semibold text-secondary/80">
          {footer}
        </p>
      </div>
    {/if}
  </div>
</Animate>
