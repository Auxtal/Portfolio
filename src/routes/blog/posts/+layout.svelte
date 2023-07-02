<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import BackButton from "$components/molecules/BackButton.svelte";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  // @ts-expect-error Resolve declaration issue
  import dateformat from "dateformat";
  import type { Post } from "$utils/types";

  export let data: {
    post: Post;
    streams: any;
  };

  let { post, streams } = data;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Animate>
  <article
    class="article prose mx-auto w-full max-w-[50.5rem] lg:pt-7"
    transition:fade|local={{ duration: 800, easing: quintOut }}
  >
    <BackButton href="/blog" />
    <div class="mb-10 mt-5 flex flex-col items-center justify-center lg:mt-0">
      <h1 class="my-2 p-0 text-center text-5xl font-bold">{post.title}</h1>
      <p class="m-0 mt-3 p-0 text-center">
        Published On The {dateformat(post.published, "UTC:dd mmmm yyyy")}
      </p>
      {#await streams.readingTime.text}
        <p class="m-0 p-0 text-center capitalize">Loading Reading Time...</p>
      {:then value}
        <p class="m-0 p-0 text-center capitalize">{value}</p>
      {:catch error}
        <p class="m-0 p-0 text-center capitalize">{error.message}</p>
      {/await}
    </div>
    <slot />
  </article>
</Animate>
