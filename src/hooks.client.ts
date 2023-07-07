import * as SentrySvelte from "@sentry/svelte";
import type { HandleClientError } from "@sveltejs/kit";

SentrySvelte.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_ENVIRONMENT,
  release: "2.3.12"
});

export const handleError: HandleClientError = ({ error, event }) => {
  const errorId = crypto.randomUUID();
  SentrySvelte.captureException(error, {
    contexts: { sveltekit: { event, errorId } }
  });

  console.log(error);

  return {
    message: "Oops, an unexpected error occurred",
    errorId
  };
};
