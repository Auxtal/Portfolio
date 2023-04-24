import readingTime from "reading-time";
import striptags from "striptags";

import type { Post } from "$lib/utils/types";

export const importPosts = (render = false) => {
  const imports = import.meta.glob("$routes/blog/posts/**/*.md", { eager: true });
  const posts: Post[] = [];

  for (const path in imports) {
    const post = imports[path] as any;
    if (post) {
      const html = render ? post.default.render()?.html : undefined;
      const readingTimeResult = html ? readingTime(striptags(html) || "") : undefined;

      posts.push({
        ...post.metadata,
        html: html,
        readingTime: readingTimeResult ? readingTimeResult.text : ""
      });
    }
  }

  return posts;
};
