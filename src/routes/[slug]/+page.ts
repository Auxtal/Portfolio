import { trpc } from "$lib/trpc/client";
import { error } from "@sveltejs/kit";

import type { PageLoad } from "./$types";
import type { Post } from "$lib/utils/types.js";

export const load: PageLoad = async (event) => {
  try {
    const params = event.params;
    const parent = event.parent;

    const { queryClient } = await parent();
    const postQuery = await queryClient.fetchQuery({
      queryFn: () => trpc(event).posts.fetchPosts.query({ slug: params.slug.toLowerCase() }),
      queryKey: ["post"]
    });

    const post: Post = postQuery[0];
    return {
      post
    };
  } catch (e) {
    throw error(404);
  }
};
