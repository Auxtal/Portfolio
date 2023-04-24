import { importPosts } from "$lib/utils/client/posts";

export const load = () => {
  const posts = () => importPosts();

  return {
    posts: posts()
  };
};
