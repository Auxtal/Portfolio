import * as Sentry from "@sentry/sveltekit";
import { env } from "$env/dynamic/public";

import type { HandleClientError } from "@sveltejs/kit";

Sentry.init({
  dsn: env.PUBLIC_SENTRY_DSN,
  environment: env.PUBLIC_ENVIRONMENT,
  release: "2.6.15"
});

export const handleError: HandleClientError = ({ error, event }) => {
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
