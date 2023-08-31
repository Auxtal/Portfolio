import * as SentrySvelte from "@sentry/svelte";
import { env } from "$env/dynamic/public";

import type { HandleClientError } from "@sveltejs/kit";

SentrySvelte.init({
  dsn: env.PUBLIC_SENTRY_DSN,
  environment: env.PUBLIC_ENVIRONMENT,
  release: "2.5.15"
});

export const handleError: HandleClientError = ({ error, event }) => {
  const errorId = crypto.randomUUID();
  SentrySvelte.captureException(error, {
    contexts: { sveltekit: { event } },
    tags: { errorId }
  });

  console.log(error);

  return {
    message: "Oops, an unexpected error occurred",
    errorId
  };
};
