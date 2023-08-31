import type { inferAsyncReturnType } from "@trpc/server";
import type { RequestEvent } from "@sveltejs/kit";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createContext = async (event: RequestEvent) => {
  return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;
