<script lang="ts">
  import Animate from "$components/Animate.svelte";

  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div
  class="flex h-screen flex-col items-center justify-center md:px-8 lg:ml-11 lg:max-w-full lg:flex-row xl:ml-0"
>
  <Animate>
    <div class="overflow-hidden px-4 md:overflow-auto">
      <img
        transition:fly|local={{ x: 50, duration: 500, easing: quintOut }}
        class="aspect-auto rounded-lg shadow-md transition-all duration-300 sm:max-w-sm lg:mr-10 lg:grayscale lg:hover:grayscale-0"
        src="/images/Graduation Event.webp"
        alt="Graduation Event"
      />
    </div>
    <div class="flex max-w-md flex-col flex-wrap items-center justify-center lg:items-start">
      <h1
        transition:fade|local={{ delay: 100, duration: 800, easing: quintOut }}
        class="my-5 text-3xl font-bold text-neutral backdrop-blur-sm lg:my-0 lg:mb-5 lg:text-5xl xl:text-6xl"
      >
        Ethan Murphy
      </h1>
      <p
        transition:fade|local={{ delay: 100, duration: 800, easing: quintOut }}
        class="font-secondary text-md px-8 text-center leading-6 text-accent backdrop-blur-sm lg:px-0 lg:text-left lg:text-lg lg:leading-normal xl:text-xl"
      >
        Hey, I'm Ethan, I'm 18 years old and I go by Auxtal online. In my spare time, I'm a hobbyist
        developer who likes full-stack development. I love to fly real and simulated aircraft I also
        love flying my drone everywhere.
      </p>
    </div>
  </Animate>
</div>
