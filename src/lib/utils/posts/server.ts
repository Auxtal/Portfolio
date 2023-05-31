import readingTime from "reading-time";
import striptags from "striptags";

import type { Metadata } from "$lib/utils/types";

export const importPosts = async () => {
  const imports = import.meta.glob("$routes/blog/posts/**/*.md") as Record<
    string,
    () => Promise<{ metadata: Metadata; default: any }>
  >;
  const postPromises = [];

  for (const [path, resolver] of Object.entries(imports)) {
    const promise = resolver().then((post) => {
      const html = post.default.render()?.html;
      const readingTimeResult = html ? readingTime(striptags(html) || "") : undefined;
      return { path, html, readTime: readingTimeResult, ...post.metadata };
    });

    postPromises.push(promise);
  }

  const posts = await Promise.all(postPromises);
  return posts;
};
