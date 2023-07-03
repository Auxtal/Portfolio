<script lang="ts">
  import Animate from "$components/atoms/Animate.svelte";
  import Paginator from "$components/organisms/Paginator.svelte";
  import Tag from "$components/atoms/Tag.svelte";

  import { paginate } from "svelte-paginate";
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { goto } from "$app/navigation";

  import Icon from "@iconify/svelte";

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
  <div class="mx-6 mt-6 flex flex-col justify-center lg:mx-0 lg:mt-10 lg:pb-4 lg:pl-36 lg:pr-20">
    <div
      class="mb-2 flex flex-wrap items-center justify-between"
      transition:fade|local={{ duration: 800, easing: quintOut }}
    >
      <input
        placeholder="Search"
        type="text"
        class="search input w-72 !rounded-md bg-transparent text-sm text-secondary placeholder-secondary shadow-md outline outline-2 outline-secondary/20 backdrop-blur-sm transition-all focus-visible:outline-[2.5px] focus-visible:outline-neutral"
        bind:value={searchTerm}
      />
    </div>
    <div
      class="divider m-0 mb-2 before:h-[1px] before:bg-secondary/20 before:shadow-md after:h-[1px] after:bg-secondary/20 after:shadow-md"
    />
    {#if paginatedPosts.length}
      {#each paginatedPosts as post, i (post.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="mb-4 flex h-min w-full cursor-pointer items-center justify-between rounded-md border border-secondary/20 bg-secondary/5 py-8 shadow-md ring-neutral backdrop-blur-sm transition first:mt-0 last:mb-0 focus-visible:outline-none focus-visible:ring-2 dark:bg-secondary/10 lg:py-0 lg:hover:-translate-y-0.5 lg:focus-visible:-translate-y-0.5"
          in:fade={{ delay: 150 * i, duration: 800, easing: quintOut }}
          on:click={(event) => handleClick(post, event)}
        >
          <div>
            <p class="text-1xl m-0 p-2 font-bold text-secondary sm:text-3xl">
              {post.title}
            </p>
            <div class="hidden p-2 lg:block">
              {#if post?.tags}
                {#each post?.tags as tag}
                  <Tag name={tag} bind:selectedTag={searchTerm} />
                {/each}
              {/if}
            </div>
          </div>
          <div>
            <p class="pr-4 text-right text-secondary">
              {new Date(post.published).toDateString()}
            </p>
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
      <div
        class="flex flex-wrap items-center justify-center"
        in:fade={{ duration: 800, easing: quintOut }}
      >
        <Icon height="35" width="35" icon="ic:round-filter-none" />
        <p
          class="mx-6 my-12 max-w-fit text-center text-4xl font-bold text-secondary backdrop-blur-sm"
        >
          No Posts Found
        </p>
      </div>
    {/if}
  </div>
</Animate>
