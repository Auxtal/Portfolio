import { z } from "zod";

export const posts = z.array(
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
);
