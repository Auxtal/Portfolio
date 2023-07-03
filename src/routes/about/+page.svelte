<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";

  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import { yearDiff } from "$lib/utils/functions";

  const birthday = import.meta.env.VITE_BIRTHDAY;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="Auxtal's Portfolio site about me page." />
</svelte:head>

<Animate>
  <div
    class="flex h-[calc(100vh-65px)] flex-col items-center justify-center md:px-8 lg:ml-11 lg:h-[calc(100vh-88px)] lg:max-w-full lg:flex-row"
  >
    <div
      class="overflow-hidden px-10 lg:px-0"
      transition:fade|local={{ duration: 500, easing: quintOut }}
    >
      <img
        transition:fly|local={{ x: 50, duration: 500, easing: quintOut }}
        class="aspect-auto rounded-lg drop-shadow-md sm:max-w-sm lg:mr-10 lg:grayscale lg:transition-all lg:duration-200 lg:hover:grayscale-0"
        src="/images/Graduation-Event.webp"
        alt="Graduation Event"
      />
    </div>
    <div class="flex max-w-md flex-col flex-wrap items-center justify-center lg:items-start">
      <h1
        transition:fade|local={{ duration: 500, easing: quintOut }}
        class="my-5 text-center text-3xl font-bold text-neutral backdrop-blur-sm lg:my-0 lg:mb-5 lg:text-left lg:text-6xl"
      >
        Ethan Murphy
      </h1>
      <p
        transition:fade|local={{ duration: 500, easing: quintOut }}
        class="font-secondary text-md px-8 text-center leading-6 text-accent backdrop-blur-sm lg:px-0 lg:text-left lg:text-xl lg:leading-normal"
      >
        Hey, I'm Ethan, {birthday ? `I'm ${yearDiff(birthday)} years old and` : ""} I go by Auxtal online.
        In my spare time, I'm a hobbyist developer who likes full-stack development. I love to fly real
        and simulated aircraft I also love flying my drone everywhere.
      </p>
    </div>
  </div>
</Animate>
