<script>
	import Tag from "$lib/components/Tag.svelte";

	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	export let data;

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>Blog Posts</title>
</svelte:head>

{#if animate}
	<div class="absolute left-0 top-16 h-screen w-full px-6 sm:relative sm:top-5 sm:px-0 lg:top-0">
		<h1 class="text-3xl font-bold text-neutral sm:text-4xl" in:fade={{ delay: 300, duration: 800 }}>
			Blog Posts
		</h1>
		<div class="divider before:bg-secondary/20 after:bg-secondary/20" />
		{#each data?.posts as post}
			<a
				href="blog/{post.path.replace('.svelte.md', '').replace('+page', '')}"
				class="m-1 no-underline"
			>
				<div
					class="flex h-min w-full items-center justify-between rounded border border-secondary/20 bg-secondary/10 backdrop-blur-sm transition hover:-translate-y-1"
					in:fly={{ x: 400, duration: 1000 }}
				>
					<div>
						<p class="m-0 p-2 text-3xl font-bold text-secondary/80">
							{post.metadata.title}
						</p>
						<div class="p-2">
							{#if post.metadata?.tags}
								{#each post.metadata?.tags as tag}
									<Tag name={tag} />
								{/each}
							{/if}
						</div>
					</div>
					<div>
						<p class="pr-2 text-secondary">{new Date(post.metadata.date).toDateString()}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
{/if}
