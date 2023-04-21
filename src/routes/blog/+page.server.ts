import { importPosts } from "$utils/posts";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = () => {
  return { posts: importPosts() };
};
