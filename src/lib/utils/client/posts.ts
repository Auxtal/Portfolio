import type { Post } from "$lib/utils/types";

export const importPosts = () => {
  const imports = import.meta.glob("$routes/blog/posts/**/*.md", { eager: true });
  const posts: Post[] = [];

  for (const path in imports) {
    const post = imports[path] as any;
    if (post) {
      posts.push({
        ...post.metadata
      });
    }
  }

  return posts;
};
