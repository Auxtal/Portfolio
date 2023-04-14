<script lang="ts">
  import Animate from "$components/Animate.svelte";
  import BackButton from "$components/BackButton.svelte";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  // @ts-expect-error Resolve declaration issue
  import Readotron from "@untemps/svelte-readotron";
</script>

<Animate>
  <div class="inline-block">
    <BackButton href="/blog" />
    <Readotron selector=".article" lang="en">
      <span slot="content" let:time>•&nbsp&nbsp&nbsp{time} Min Read</span>
    </Readotron>
  </div>
  <article
    class="article prose w-full max-w-full pt-7"
    transition:fade|local={{ duration: 800, easing: quintOut }}
  >
    <slot />
  </article>
</Animate>
