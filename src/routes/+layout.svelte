<script lang="ts">
  import "$src/app.postcss";

  import ActionButtons from "$components/ActionButtons.svelte";
  import Navbar from "$components/Navbar.svelte";

  import { Toaster } from "svelte-french-toast";
</script>

<svelte:head>
  <link rel="preload" as="image" href="/images/Logo-Round.webp" />
  <link rel="preload" as="image" href="/images/Graduation-Event.webp" />
  <link rel="preload" as="image" href="/images/Counter-Point-Episode-1.webp" />
  <link rel="preload" as="image" href="/images/Fringe-Festival-2023.webp" />
</svelte:head>

<Toaster />
<Navbar />
<ActionButtons />
<slot />
