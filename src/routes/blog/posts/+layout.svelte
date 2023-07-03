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
    class="article prose mx-auto mt-6 w-full max-w-[45rem] px-6 lg:mt-10 lg:px-0"
    transition:fade|local={{ duration: 800, easing: quintOut }}
  >
    <BackButton href="/blog" />
    <div class="my-5 flex flex-col items-center justify-center">
      <h1 class="mb-2 p-0 text-center text-5xl font-bold">{post.title}</h1>
      <p class="m-0 p-0 text-center">
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
