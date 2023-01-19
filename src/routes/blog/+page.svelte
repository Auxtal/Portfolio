<script lang="ts">
	import Animate from "$components/Animate.svelte";
	import Paginator from "$components/Paginator.svelte";
	import Tag from "$components/Tag.svelte";

	import { paginate } from "svelte-paginate";
	import { fade } from "svelte/transition";
	import { goto } from "$app/navigation";

	import type { PageData } from "./$types";
	import type { Post } from "./+page";

	export let data: PageData;

	let pageSize = 4;
	let currentPage = 1;
	let searchTerm = "";

	const handleClick = async (post: Post) => {
		await goto(`blog/${post.path.replace(".svelte.md", "").replace("+page", "")}`);
	};

	$: filteredPosts = data.posts.filter((post: Post) => {
		return (
			post.metadata.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.metadata?.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
		);
	});

	$: items = filteredPosts.sort((post1: Post, post2: Post) => {
		return new Date(post2.metadata.date).valueOf() - new Date(post1.metadata.date).valueOf();
	});

	$: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
	<title>Blog Posts</title>
</svelte:head>

<Animate>
	<div class="absolute left-0 top-16 w-full px-6 sm:relative sm:top-5 sm:px-0 lg:top-0">
		<div class="flex flex-wrap items-center justify-between">
			<h1
				class="mr-4 text-3xl font-bold text-neutral sm:mr-0 sm:text-4xl"
				in:fade={{ delay: 100, duration: 800 }}
			>
				Blog Posts
			</h1>
			<input
				placeholder="Search"
				type="text"
				class="input my-2 mt-4 w-72 bg-transparent text-sm text-secondary shadow-lg outline outline-1 outline-secondary/20 backdrop-blur-sm transition-all focus:outline-[2.5px] focus:outline-neutral sm:mt-0"
				bind:value={searchTerm}
			/>
		</div>
		<div class="divider before:bg-secondary/20 after:bg-secondary/20" />
		{#if paginatedPosts.length}
			{#each paginatedPosts as post, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="my-3 flex h-min w-full cursor-pointer items-center justify-between rounded border border-secondary/20 bg-secondary/10 backdrop-blur-sm transition first:mt-0 last:mb-0 hover:-translate-y-1"
					on:click={() => handleClick(post)}
					in:fade={{ delay: 250 * i, duration: 800 }}
				>
					<div>
						<p class="m-0 p-2 text-3xl font-bold text-secondary/80">
							{post.metadata.title}
						</p>
						<div class="hidden p-2 sm:block">
							{#if post.metadata?.tags}
								{#each post.metadata?.tags as tag}
									<Tag name={tag} bind:selectedTag={searchTerm} />
								{/each}
							{/if}
						</div>
					</div>
					<div>
						<p class="pr-2 text-secondary">{new Date(post.metadata.date).toDateString()}</p>
					</div>
				</div>
			{/each}
			{#if paginatedPosts.length}
				<Paginator
					totalItems={items.length}
					{pageSize}
					{currentPage}
					limit={1}
					showStepOptions={true}
					on:setPage={(e) => (currentPage = e.detail.page)}
				/>
			{/if}
		{:else}
			<div class="flex items-center justify-center">
				<p class="m-12 max-w-fit text-center text-4xl font-bold backdrop-blur-sm" in:fade>
					No Posts Found
				</p>
			</div>
		{/if}
	</div>
</Animate>
