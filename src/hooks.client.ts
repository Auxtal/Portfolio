import * as SentrySvelte from "@sentry/svelte";
import type { HandleClientError } from "@sveltejs/kit";

SentrySvelte.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_ENVIRONMENT,
  release: "1.2.2"
});

export const handleError: HandleClientError = ({ error, event }) => {
  const errorId = crypto.randomUUID();
  SentrySvelte.captureException(error, {
    contexts: { sveltekit: { event, errorId } }
  });

  return {
    message: "Oops, an unexpected error occurred",
    errorId
  };
};
