<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Container from "$components/atoms/Container.svelte";
  import BlogPost from "$components/molecules/BlogPost.svelte";
  import Paginator from "$components/molecules/Paginator.svelte";

  import { currentPage } from "$lib/utils/stores";
  import { searchTerm } from "$lib/utils/stores";
  import { trpc } from "$lib/trpc/client";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import { createQuery } from "@tanstack/svelte-query";
  import { paginate } from "svelte-paginate";
  import Icon from "@iconify/svelte";

  import type { Post } from "$utils/types";

  // This data is cached by prefetchQuery in +page.ts so no fetch actually happens here
  $: postQuery = createQuery({
    queryFn: () => trpc($page).posts.fetchPosts.query(),
    queryKey: ["posts"]
  });

  $: posts = $postQuery.data ?? [];
  let pageSize = 4;

  const handleClick = async (post: Post, event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.classList.contains("tag")) {
      await goto(post.slug);
    }
  };

  const handleKeyDown = async (post: Post, event: KeyboardEvent) => {
    if (event.key != "Enter") {
      return;
    }

    const target = event.target as Element;
    if (!target.classList.contains("tag")) {
      await goto(post.slug);
    }
  };

  $: filteredPosts = posts.filter((post: Post) => {
    return (
      post?.hidden === false &&
      (post.title.toLowerCase().includes($searchTerm.toLowerCase()) ||
        post?.tags.some((tag) => tag.toLowerCase().includes($searchTerm.toLowerCase())))
    );
  });

  $: items = filteredPosts;
  $: paginatedPosts = paginate({ items, pageSize, currentPage: $currentPage });
</script>

<svelte:head>
  <title>Blog Posts</title>
  <meta name="description" content="Auxtal's Portfolio site blog post page." />
</svelte:head>

<Animate>
  <Container flexContainer={false}>
    <div class="mx-6 mt-6 flex flex-col justify-center lg:mx-0 lg:mt-10 lg:pb-4 lg:pl-36 lg:pr-20">
      <div
        class="mb-2 flex flex-wrap items-center justify-between"
        transition:fade|local={{ duration: 500, easing: quintOut }}
      >
        <input
          placeholder="Search"
          type="text"
          class="input outline w-72 !rounded-md bg-transparent text-sm text-secondary placeholder-secondary shadow-md outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral"
          bind:value={$searchTerm}
        />
      </div>
      <div
        class="divider m-0 mb-2 before:h-[1px] before:bg-secondary/20 before:shadow-md after:h-[1px] after:bg-secondary/20 after:shadow-md"
      />
      {#if $postQuery.isLoading}
        <div
          class="flex flex-wrap items-center justify-center"
          in:fade={{ duration: 500, easing: quintOut }}
        >
          <Icon height="35" width="35" icon="ic:round-filter-none" />
          <!-- prettier-ignore -->
          <p class="mx-6 my-12 max-w-fit text-center text-4xl font-bold text-secondary backdrop-blur-sm">
            Loading Posts...
          </p>
        </div>
      {:else if $postQuery.isSuccess}
        {#if paginatedPosts.length}
          {#each paginatedPosts as post, i}
            <BlogPost
              {i}
              title={post.title}
              tags={post?.tags}
              published={post.published}
              on:click={(event) => handleClick(post, event)}
              on:keydown={(event) => handleKeyDown(post, event)}
            />
          {/each}
          <Paginator
            {pageSize}
            currentPage={$currentPage}
            totalItems={items.length}
            limit={1}
            showStepOptions={true}
            on:setPage={(e) => ($currentPage = e.detail.page)}
          />
        {:else}
          <div
            class="flex flex-wrap items-center justify-center"
            in:fade={{ duration: 500, easing: quintOut }}
          >
            <Icon height="35" width="35" icon="ic:round-filter-none" />
            <!-- prettier-ignore -->
            <p class="mx-6 my-12 max-w-fit text-center text-4xl font-bold text-secondary backdrop-blur-sm">
              No Posts Found
            </p>
          </div>
        {/if}
      {/if}
    </div>
  </Container>
</Animate>
