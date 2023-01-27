<script>
  import { tick } from "svelte";

  export let toggleOnce = false;
  export let relative = true;

  let active = false;

  const handleClick = async () => {
    if (toggleOnce) {
      active = !active;
      return;
    }

    active = false;
    await tick();
    active = true;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={handleClick} class:relative>
  <slot name="content" />
  {#if active}
    <div class="absolute top-1/2 left-1/2">
      <slot />
    </div>
  {/if}
</span>
