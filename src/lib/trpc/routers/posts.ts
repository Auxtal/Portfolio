import { posts } from "$lib/utils/zod/posts";
import { env } from "$env/dynamic/public";
import { t } from "../trpc";
import { z } from "zod";

export const fetchPosts = async (slug: string | null) => {
  const response = await fetch(`${env.PUBLIC_BASE_URL}/api/posts`)
    .then((r) => r.json())
    .then(posts.parse);

  return slug ? response.find((obj) => obj.slug === slug) : response;
};

export const postsRouter = t.router({
  fetchPosts: t.procedure
    .output(
      z.array(
        z.object({
          slug: z.string(),
          title: z.string(),
          published: z.string(),
          updated: z.string(),
          tags: z.array(z.string()),
          excerpt: z.string(),
          hidden: z.boolean(),
          content: z.object({
            html: z.string(),
            css: z.object({ code: z.string(), map: z.string().nullable() })
          }),
          readingTime: z.object({
            text: z.string(),
            minutes: z.number(),
            time: z.number(),
            words: z.number()
          })
        })
      )
    )
    .input(
      z
        .object({
          slug: z.string()
        })
        .nullish()
    )
    .query(async ({ input }) => {
      const slug = input?.slug ?? null;
      const result = await fetchPosts(slug);
      return Array.isArray(result) ? result : result ? [result] : [];
    })
});
