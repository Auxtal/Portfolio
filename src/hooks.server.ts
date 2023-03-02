import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  const theme = event.cookies.get("theme");

  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) => html.replace('data-theme="dark"', `data-theme="${theme}"`)
    });
  }

  return await resolve(event);
}) satisfies Handle;
