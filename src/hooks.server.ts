import { createTRPCHandle } from "trpc-sveltekit";
import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { env } from "$env/dynamic/public";

import { sequence } from "@sveltejs/kit/hooks";
import * as Sentry from "@sentry/sveltekit";
import crypto from "crypto";

import type { Handle, HandleServerError } from "@sveltejs/kit";

Sentry.init({
  dsn: env.PUBLIC_SENTRY_DSN,
  environment: env.PUBLIC_ENVIRONMENT,
  release: "2.6.16"
});

export const handleError: HandleServerError = ({ error, event }) => {
  const errorId = crypto.randomUUID();
  Sentry.captureException(error, {
    contexts: { sveltekit: { event } },
    tags: { errorId }
  });

  console.log(error);

  return {
    message: "Oops, an unexpected error occurred",
    errorId
  };
};

const handleTRPC: Handle = createTRPCHandle({
  router,
  createContext,
  onError: ({ type, path, error }) => {
    const errorId = crypto.randomUUID();
    Sentry.captureException(error, {
      contexts: { TRPC: { type, path } },
      tags: { errorId }
    });

    console.error(`Encountered error while trying to process ${type} @ ${path}:`, error);
  }
});

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
