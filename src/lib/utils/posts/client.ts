import type { Metadata } from "$lib/utils/types";

export const importPosts = async () => {
  const imports = import.meta.glob("$routes/blog/posts/**/*.md") as Record<
    string,
    () => Promise<{ metadata: Metadata; default: any }>
  >;
  const postPromises = [];

  for (const [path, resolver] of Object.entries(imports)) {
    const promise = resolver().then((post) => {
      return { path, ...post.metadata };
    });

    postPromises.push(promise);
  }

  const posts = await Promise.all(postPromises);
  return posts;
};
