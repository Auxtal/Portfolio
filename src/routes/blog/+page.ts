interface Metadata {
	date: Date;
	layout: string;
	tags: string[];
	title: string;
}

export type Post = {
	path: string;
	metadata: Metadata;
};

export const load = () => {
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
