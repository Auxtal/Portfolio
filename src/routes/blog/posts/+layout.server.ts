import readingTime from "reading-time";
import striptags from "striptags";

import { importPosts } from "$lib/utils/posts/server";
import type { Post } from "$lib/utils/types";

export const load = async ({ url }: { url: { pathname: string } }) => {
  const { pathname } = url;
  const slug = pathname.replace("/blog/posts/", "");
  const post = await importPosts().then((posts) => {
    return posts.find((post) => post.slug === slug);
  });

  const loadReadingTime = (post: Post) => {
    const html = post.renderResult()?.html;
    const readingTimeResult = html ? readingTime(striptags(html) || "") : undefined;
    return readingTimeResult;
  };

  // Removes the render function from the post object for the client
  const postNoRender = JSON.parse(JSON.stringify(post));
  Reflect.deleteProperty(postNoRender, "render");

  return {
    post: postNoRender,
    streams: {
      readingTime: loadReadingTime(post)
    }
  };
};
