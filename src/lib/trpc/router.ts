import { t } from "./trpc";
import { lastFmRouter } from "./routers/lastfm";

export const router = t.router({
  lastfm: lastFmRouter
});

export type Router = typeof router;
