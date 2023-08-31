import { error, type LoadEvent } from "@sveltejs/kit";
import { trpc } from "$lib/trpc/client";

import type { Post } from "$lib/utils/types.js";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (event: LoadEvent) => {
  const slug = event.params.slug ?? "";
  const parent = event.parent;

  const { queryClient } = await parent();
  const postQuery = await queryClient.fetchQuery({
    queryFn: () =>
      trpc(event).posts.fetchPosts.query({
        slug: slug
      }),
    queryKey: ["post"]
  });

  const post: Post = postQuery[0];
  if (!post) {
    throw error(404);
  }

  return {
    post
  };
};
