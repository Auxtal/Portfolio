import { env } from "$env/dynamic/private";
import { NtfyClient } from "ntfy";

const ntfyClient = new NtfyClient("https://ntfy.auxtal.xyz");

export const sendEmail = async (name: string, email: string, subject: string, message: string) => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: env.SECRET_EMAILJS_SERVICE_ID,
      template_id: env.SECRET_EMAILJS_TEMPLATE_ID,
      user_id: env.SECRET_EMAILJS_PUBLIC_KEY,
      template_params: {
        name: name,
        subject: subject,
        message: message,
        reply_email: email
      },
      accessToken: env.SECRET_EMAILJS_PRIVATE_KEY
    })
  });

  await ntfyClient.publish({
    message: "A Contact Email Has Been Sent To You",
    title: "Portfolio Website",
    topic: "portfolio"
  });

  return response;
};
