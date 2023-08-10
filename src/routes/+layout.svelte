<script lang="ts">
  import "$src/app.postcss";

  import ActionButtons from "$components/molecules/ActionButtons.svelte";
  import Navbar from "$components/organisms/Navbar.svelte";

  import { Toaster } from "svelte-french-toast";
  import { QueryClientProvider } from "@tanstack/svelte-query";

  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<svelte:head>
  <link rel="preload" as="image" href="/images/Logo-Round.webp" />
  <link rel="preload" as="image" href="/images/Graduation-Event.webp" />
</svelte:head>

<QueryClientProvider client={data.queryClient}>
  <Toaster />
  <Navbar />
  <ActionButtons />
  <slot />
</QueryClientProvider>
