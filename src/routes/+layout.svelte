<script lang="ts">
  import "$src/app.postcss";

  import ActionButtons from "$components/molecules/ActionButtons.svelte";
  import Navbar from "$components/organisms/Navbar.svelte";

  import { Toaster } from "svelte-french-toast";
</script>

<svelte:head>
  <link rel="preload" as="image" href="/images/Logo-Round.webp" />
  <link rel="preload" as="image" href="/images/Graduation-Event.webp" />
</svelte:head>

<Toaster />
<Navbar />
<ActionButtons />
<div class="absolute top-[65px] w-full overflow-y-scroll lg:top-20">
  <slot />
</div>
