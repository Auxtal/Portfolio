<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Container from "$components/atoms/Container.svelte";
  import BackButton from "$components/atoms/BackButton.svelte";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

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
  <Container itemsCenter={false}>
    <article
      class="prose mx-auto mt-6 w-full max-w-[40.6rem] px-6 lg:mt-10 lg:px-0"
      transition:fade|local={{ duration: 500, easing: quintOut }}
    >
      <BackButton href="/blog" />
      <div class="mb-5 mt-7 flex flex-col items-center justify-center">
        <h1 class="mb-2 p-0 text-center text-5xl font-bold">{post.title}</h1>
        <p class="m-0 p-0 text-center font-semibold">
          Published On The {dateformat(post.published, "UTC:dd mmmm yyyy")}
        </p>
        <p class="m-0 p-0 text-center font-semibold capitalize">{post.readingTime.text}</p>
      </div>
      {@html post.content.html}
    </article>
  </Container>
</Animate>
