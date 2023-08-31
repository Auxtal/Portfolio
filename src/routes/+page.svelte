<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Container from "$components/atoms/Container.svelte";
  import Button from "$components/atoms/Button.svelte";

  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<svelte:head>
  <title>Ethan's Portfolio</title>
  <meta name="description" content="Auxtal's Portfolio site home page." />
</svelte:head>

<Animate>
  <Container>
    <div
      class="my-4 flex w-full flex-col items-center justify-center px-5 lg:items-end lg:px-32"
      transition:fade|local={{ duration: 500, easing: quintOut }}
    >
      <h2
        class="text-center text-4xl font-bold text-accent backdrop-blur-sm sm:font-bold md:text-right"
      >
        Hi, my name is
      </h2>
      <h1
        class="font-primary z-10 mb-2 mt-1 text-center text-5xl font-bold text-neutral backdrop-blur-sm md:text-right lg:text-7xl"
      >
        Ethan Murphy
      </h1>
      <h1
        class="py-1 text-center text-3xl text-neutral backdrop-blur-sm md:text-right lg:text-[3.05rem]"
      >
        I'm an AV Technician
      </h1>
      <div class="mt-5 pb-4" transition:fly|local={{ x: 50, duration: 500, easing: quintOut }}>
        <Button href="/work">Check Out My Work</Button>
      </div>
    </div>
  </Container>
</Animate>
