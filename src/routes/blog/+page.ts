import { importPosts } from "$lib/utils/posts/client";

export const load = async () => {
  return {
    posts: await importPosts()
  };
};
