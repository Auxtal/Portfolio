<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Paginator from "$components/organisms/Paginator.svelte";
  import Tag from "$components/atoms/Tag.svelte";

  import { paginate } from "svelte-paginate";
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { goto } from "$app/navigation";

  import type { Post } from "$utils/types";

  export let data: {
    posts: Post[];
  };

  let pageSize = 4;
  let currentPage = 1;
  let searchTerm = "";

  let { posts } = data;

  const handleClick = async (post: Post, event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.classList.contains("tag")) {
      await goto(`blog/posts/${post.slug}`);
    }
  };

  $: filteredPosts = posts.filter((post: Post) => {
    return (
      post?.hidden === false &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post?.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  });

  $: items = filteredPosts.sort((post1: Post, post2: Post) => {
    return new Date(post2.published).valueOf() - new Date(post1.published).valueOf();
  });

  $: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
  <title>Blog Posts</title>
  <meta name="description" content="Auxtal's Portfolio site blog post page." />
</svelte:head>

<Animate>
  <div class="absolute left-0 top-16 w-full px-6 sm:relative sm:top-5 sm:px-0 lg:top-0">
    <div
      class="flex flex-wrap items-center justify-between"
      transition:fade|local={{ duration: 800, easing: quintOut }}
    >
      <h1 class="mr-4 text-3xl font-bold text-neutral sm:mr-0 sm:text-4xl">Blog Posts</h1>
      <input
        placeholder="Search"
        type="text"
        class="search input my-2 mt-4 w-72 !rounded-md bg-transparent text-sm text-secondary shadow-lg outline outline-1 outline-secondary/20 backdrop-blur-sm transition-all focus:outline-[2.5px] focus:outline-neutral sm:mt-0"
        bind:value={searchTerm}
      />
    </div>
    <div class="divider before:bg-secondary/20 after:bg-secondary/20" />
    {#if paginatedPosts.length}
      {#each paginatedPosts as post, i (post.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="my-4 flex h-min w-full cursor-pointer items-center justify-between rounded-md border border-secondary/20 bg-secondary/5 backdrop-blur-sm transition first:mt-0 last:mb-0 hover:-translate-y-0.5 dark:bg-secondary/10"
          on:click={(event) => handleClick(post, event)}
          in:fade={{ delay: 150 * i, duration: 800, easing: quintOut }}
        >
          <div>
            <p class="m-0 p-2 text-xl font-bold text-secondary/80 sm:text-3xl">
              {post.title}
            </p>
            <div class="hidden p-2 sm:block">
              {#if post?.tags}
                {#each post?.tags as tag}
                  <Tag name={tag} bind:selectedTag={searchTerm} />
                {/each}
              {/if}
            </div>
          </div>
          <div>
            <p class="pr-4 text-secondary">{new Date(post.published).toDateString()}</p>
          </div>
        </div>
      {/each}
      <Paginator
        totalItems={items.length}
        {pageSize}
        {currentPage}
        limit={1}
        showStepOptions={true}
        on:setPage={(e) => (currentPage = e.detail.page)}
      />
    {:else}
      <div class="flex items-center justify-center">
        <p
          class="m-12 max-w-fit text-center text-4xl font-bold backdrop-blur-sm"
          in:fade={{ duration: 800, easing: quintOut }}
        >
          No Posts Found
        </p>
      </div>
    {/if}
  </div>
</Animate>
