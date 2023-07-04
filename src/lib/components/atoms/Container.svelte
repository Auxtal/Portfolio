<script lang="ts">
  export let flexContainer = true;
  export let centerInContainer = false;
  export let noMobileFlex = false;

  let flex = noMobileFlex ? "lg:flex" : "flex";
  $: flexClasses = flexContainer ? `${flex} items-center justify-center` : "";
  $: centerClasses = centerInContainer ? `${flex} justify-center` : "";
</script>

<main
  class="absolute top-[65px] h-[calc(100vh-65px)] w-full lg:top-[81px] lg:h-[calc(100vh-81px)] {flexClasses}"
>
  <div class="max-h-[calc(100vh-65px)] w-full lg:max-h-[calc(100vh-81px)] {centerClasses}">
    <slot />
  </div>
</main>
