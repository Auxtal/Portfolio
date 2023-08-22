import { trpc } from "$lib/trpc/client";

import type { PageLoad } from "../[slug]/$types";
import type { LoadEvent } from "@sveltejs/kit";

export const load: PageLoad = async (event: LoadEvent) => {
  const { queryClient } = await event.parent();

  await queryClient.prefetchQuery({
    queryFn: async () => trpc(event).posts.fetchPosts.query(),
    queryKey: ["posts"]
  });
};
