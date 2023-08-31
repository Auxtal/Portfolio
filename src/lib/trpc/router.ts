import { lastFmRouter, postsRouter } from "./routers";
import { t } from "./trpc";

export const router = t.router({
  lastfm: lastFmRouter,
  posts: postsRouter
});

export type Router = typeof router;
