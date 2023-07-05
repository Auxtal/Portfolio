<script lang="ts">
  import { clsx } from "clsx";

  export let flexContainer = true;
  export let centerInContainer = false;
  export let noMobileFlex = false;
  export let itemsCenter = true;

  $: outtaClasses = clsx({
    flex: flexContainer && !noMobileFlex,
    "lg:flex": flexContainer && noMobileFlex,
    "justify-center": flexContainer,
    "items-center": itemsCenter
  });

  $: innerClasses = clsx({
    flex: flexContainer && centerInContainer && !noMobileFlex,
    "lg:flex": flexContainer && centerInContainer && noMobileFlex,
    "justify-center": centerInContainer
  });
</script>

<main
  class="absolute top-[65px] h-[calc(100vh-65px)] w-full lg:top-[81px] lg:h-[calc(100vh-81px)] {outtaClasses}"
>
  <div class="max-h-[calc(100vh-65px)] w-full lg:max-h-[calc(100vh-81px)] {innerClasses}">
    <slot />
  </div>
</main>
