import type { ServerLoad } from "@sveltejs/kit";

interface Metadata {
	layout: string;
	id: number;
	title: string;
	date: Date;
	tags: string[];
}

export type Post = {
	path: string;
	metadata: Metadata;
};

export const load: ServerLoad = () => {
	const body = [];
	const allPosts = import.meta.glob("./**/*.svelte.md") as Record<
		string,
		() => Promise<{ metadata: Metadata }>
	>;

	for (const path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	const posts = Promise.all(body);
	return { posts };
};
