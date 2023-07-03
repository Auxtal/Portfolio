<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Button from "$components/atoms/Button.svelte";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Auxtal's Portfolio site contact page." />
</svelte:head>

<Animate>
  <div
    class="flex h-[calc(100vh-88px)] flex-col items-center justify-center px-8 lg:px-0"
    transition:fade|local={{ duration: 800, easing: quintOut }}
  >
    <h1 class="mb-4 text-center text-5xl font-bold text-neutral backdrop-blur-sm">Get In Touch</h1>
    <p class="font-secondary mb-6 max-w-md text-center leading-6 text-secondary backdrop-blur-sm">
      If you want to say hello or if you have any questions, my inbox is always open for queries!
    </p>
    <div>
      <Button href="/contact/form" classes="px-14">Send Me An Email</Button>
    </div>
  </div>
</Animate>
