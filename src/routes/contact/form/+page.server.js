import { z } from "zod";
import { redirect } from "@sveltejs/kit";

const emailSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "Name is required" })
    .max(64, { message: "Name must be under 64 characters" })
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .max(64, { message: "Email must be under 64 characters" })
    .email({ message: "Invalid email address" }),
  subject: z
    .string({ required_error: "Subject is required" })
    .min(1, { message: "Subject is required" })
    .max(200, { message: "Subject must be under 200 characters" })
    .trim(),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, { message: "Message is required" })
    .max(4000, { message: "Message must be under 4000 characters" })
    .trim()
});

export const actions = {
  submit: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    try {
      emailSchema.parse(formData);
    } catch (error) {
      const { fieldErrors: errors } = error.flatten();
      return {
        data: formData,
        errors
      };
    }

    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
            reply_email: formData.email
          },
          accessToken: import.meta.env.VITE_EMAILJS_PRIVATE_KEY
        })
      });
    } catch (error) {
      console.log("EmailJS API Send Email Failed", error);
      throw redirect(500, "/");
    }
  }
};
