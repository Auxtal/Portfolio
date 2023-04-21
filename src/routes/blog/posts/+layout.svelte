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
  };

  let { post } = data;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Animate>
  <article
    class="article prose mx-auto w-full max-w-[50.5rem] pt-7"
    transition:fade|local={{ duration: 800, easing: quintOut }}
  >
    <BackButton href="/blog" />
    <div class="mb-10 flex flex-col items-center justify-center">
      <h1 class="my-2 p-0 text-center text-5xl font-bold">{post.title}</h1>
      <p class="m-0 p-0 text-center">Published: {dateformat(post.published, "UTC:dd mmmm yyyy")}</p>
      <p class="m-0 p-0 text-center capitalize">{post.readingTime}</p>
    </div>
    <slot />
  </article>
</Animate>
