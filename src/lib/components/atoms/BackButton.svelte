<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  export let href: HTMLAnchorAttributes["href"];
</script>

<a
  {href}
  class="group flex h-9 w-24 items-center justify-center rounded-md bg-secondary/20 text-secondary no-underline backdrop-blur-sm transition-colors duration-150 hover:bg-neutral hover:text-primary focus-visible:bg-neutral focus-visible:text-primary focus-visible:outline-none hover:dark:text-secondary focus-visible:dark:text-secondary"
  tabindex="0"
>
  <div class="transition-transform group-hover:-translate-x-1 group-focus-visible:-translate-x-1">
    <Icon height="30" width="30" icon="eva:arrow-back-outline" />
  </div>
  <div>
    <p
      class="-translate-y-[1px] text-sm font-semibold text-secondary transition-colors group-hover:text-primary group-focus-visible:text-primary group-hover:dark:text-secondary group-focus-visible:dark:text-secondary"
    >
      Back
    </p>
  </div>
</a>
