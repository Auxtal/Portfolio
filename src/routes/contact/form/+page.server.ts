import { superValidate } from "sveltekit-superforms/server";
import { setFlash } from "sveltekit-flash-message/server";
import { fail } from "@sveltejs/kit";

import { sendEmail, contactSchema } from "$lib/utils";
import type { Actions } from "@sveltejs/kit";

export const load = async (event) => {
  const form = await superValidate(event, contactSchema);
  return { form };
};

export const actions: Actions = {
  contact: async (event) => {
    const form = await superValidate(event, contactSchema);

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      const response = await sendEmail(
        form.data.name,
        form.data.email,
        form.data.subject,
        form.data.message
      );

      if (response.status !== 200) {
        setFlash({ type: "error", message: "Email Request Failed, Please Try Again Later" }, event);
        return fail(response.status, { form });
      }
    } catch (err) {
      setFlash({ type: "error", message: "Error Occurred, Please Try Again Later" }, event);
      return fail(500, { form });
    }

    setFlash({ type: "success", message: "Your Email Has Been Sent" }, event);
    return { form };
  }
};
