import * as SentryNode from "@sentry/node";
import crypto from "crypto";

import type { Handle, HandleServerError } from "@sveltejs/kit";

SentryNode.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_ENVIRONMENT,
  release: "1.2.0"
});

export const handleError: HandleServerError = ({ error, event }) => {
  const errorId = crypto.randomUUID();
  SentryNode.captureException(error, {
    contexts: { sveltekit: { event, errorId } }
  });

  return {
    message: "Oops, an unexpected error occurred",
    errorId
  };
};

export const handle = (async ({ event, resolve }) => {
  const theme = event.cookies.get("theme");

  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
    });
  }

  return await resolve(event);
}) satisfies Handle;
