import toast from "svelte-french-toast";
import { z } from "zod";

export const contactSchema = z.object({
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

export const Toast = (status: string, message: string) => {
  switch (status) {
    case "success":
      toast.success(message, {
        style: `
          background-color: rgba(var(--secondary-rgb), 0.2);
          backdrop-filter: blur(16px);
          color: var(--secondary);
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-property: background-color, color;
          transition-duration: 150ms;`,
        duration: 5000,
        position: "bottom-right"
      });
      break;

    case "error":
      toast.error(message, {
        style: `
          background-color: rgba(var(--secondary-rgb), 0.2);
          backdrop-filter: blur(16px);
          color: var(--secondary);
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-property: background-color, color;
          transition-duration: 150ms;`,
        duration: 5000,
        position: "bottom-right"
      });
      break;
  }
};

export const monthDiff = (date1: Date, date2: Date) => {
  let months;

  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();

  return months <= 0 ? 0 : months;
};

export const yearDiff = (date: string) => {
  const ageDifMs = Date.now().valueOf() - new Date(date).valueOf();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
