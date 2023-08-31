import readingTime from "reading-time";
import striptags from "striptags";

import { json, type RequestHandler } from "@sveltejs/kit";
import type { Post, PostModules } from "$lib/utils/types";

const getPosts = () => {
  const paths: PostModules = import.meta.glob("/src/posts/**/*.md", { eager: true });
  let posts: Post[] = [];

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-2)?.replace(".md", "").toLowerCase();

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const content = file.default.render();

      const html = content?.html;
      const readingTimeResult = readingTime(striptags(html) || "");

      const post = { ...metadata, slug, content, readingTime: readingTimeResult } satisfies Post;
      !post.hidden && posts.push(post);
    }
  }

  posts = posts.sort((first, second) => {
    return new Date(second.published).getTime() - new Date(first.published).getTime();
  });

  return posts;
};

export const GET: RequestHandler = async () => {
  const posts = getPosts();
  return json(posts);
};
