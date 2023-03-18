<script lang="ts">
  import "$src/app.postcss";

  import ActionButtons from "$components/ActionButtons.svelte";
  import Navbar from "$components/Navbar.svelte";

  import { Toaster } from "svelte-french-toast";
</script>

<Toaster />
<Navbar />
<ActionButtons />
<slot />
