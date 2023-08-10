import { createTRPCHandle } from "trpc-sveltekit";
import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";

import { sequence } from "@sveltejs/kit/hooks";
import * as SentryNode from "@sentry/node";
// @ts-expect-error Resolve declaration issue
import crypto from "crypto";

import type { Handle, HandleServerError } from "@sveltejs/kit";

SentryNode.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_ENVIRONMENT,
  release: "2.4.14"
});

export const handleError: HandleServerError = ({ error, event }) => {
  const errorId = crypto.randomUUID();
  SentryNode.captureException(error, {
    contexts: { sveltekit: { event, errorId } }
  });

  console.log(error);

  return {
    message: "Oops, an unexpected error occurred",
    errorId
  };
};

const handleTRPC: Handle = createTRPCHandle({ router, createContext });

const handleTheme: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("theme");

  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) => html.replace('data-theme="dark"', `data-theme="${theme}"`)
    });
  }

  return await resolve(event);
};

export const handle: Handle = sequence(handleTRPC, handleTheme);
