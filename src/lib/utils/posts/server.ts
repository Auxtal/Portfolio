import type { Post } from "$lib/utils/types";

export const importPosts = async () => {
  const imports = import.meta.glob("$routes/blog/posts/**/*.md") as Record<
    string,
    () => Promise<{ metadata: Post; default: any }>
  >;
  const postPromises = [];

  for (const [path, resolver] of Object.entries(imports)) {
    const promise = resolver().then((post) => {
      const renderResult = post.default.render;
      return { path, renderResult, ...post.metadata };
    });

    postPromises.push(promise);
  }

  const posts = await Promise.all(postPromises);
  return posts;
};
