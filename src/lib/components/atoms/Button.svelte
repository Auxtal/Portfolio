<script lang="ts">
  import { twMerge } from "tailwind-merge";

  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

  export let type: HTMLButtonAttributes["type"] = undefined;
  export let href: HTMLAnchorAttributes["href"] = undefined;
  export let rel: HTMLAnchorAttributes["rel"] = "noreferrer";
  export let target: HTMLAnchorAttributes["target"] = undefined;
  export let download: HTMLAnchorAttributes["download"] = undefined;

  export let classes: string | undefined = undefined;
  export let loading = false;
</script>

<svelte:element
  this={href ? "a" : "button"}
  type={href ? undefined : type}
  {href}
  class={twMerge(
    "group btn no-animation relative rounded-md border-none bg-secondary/20 normal-case text-secondary outline-none !ring-0 backdrop-blur-sm transition-[background-color] duration-150 after:hidden after:opacity-0 active:bg-neutral lg:hover:bg-neutral lg:hover:text-primary lg:focus-visible:bg-neutral lg:focus-visible:text-primary lg:focus-visible:outline-none lg:hover:dark:text-secondary lg:focus-visible:dark:text-secondary [&.load]:after:absolute [&.load]:after:bottom-0 [&.load]:after:left-0 [&.load]:after:right-0 [&.load]:after:top-[35%] [&.load]:after:mx-auto [&.load]:after:block [&.load]:after:h-4 [&.load]:after:w-4 [&.load]:after:animate-spin [&.load]:after:rounded-full [&.load]:after:border-4 [&.load]:after:border-transparent [&.load]:after:border-t-secondary [&.load]:after:opacity-100 [&.load]:after:transition-[visibility_opacity] [&.load]:after:duration-200 [&.load]:after:content-['']",
    classes
  )}
  {rel}
  {target}
  {download}
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:mouseenter
  on:mouseleave
  class:load={loading}
  class:pointer-events-none={loading}
>
  <span
    class="flex items-center transition-[visibility_opacity] duration-200 group-[&.load]:invisible group-[&.load]:opacity-0"
  >
    <slot />
  </span>
</svelte:element>
