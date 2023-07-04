export { load } from "sveltekit-flash-message/server";

import { redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  toggleTheme: async ({ url, cookies }) => {
    const theme = cookies.get("theme");
    const redirectUrl = url.searchParams.get("redirect") as string;

    if (!theme) {
      cookies.set("theme", "light", {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        secure: true,
        sameSite: "strict"
      });
      return;
    }

    cookies.set("theme", theme === "dark" ? "light" : "dark", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      secure: true,
      sameSite: "strict"
    });

    throw redirect(302, redirectUrl);
  }
};
