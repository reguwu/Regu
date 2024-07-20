"use server"

import { Resend } from "resend";
import Email from "@/components/content/Email";
import { EMAIL } from "@/utils/constant";

export const sendEmail = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: EMAIL,
    subject: `From ${formData.get("email")?.toString()}`,
    react: <Email msg={formData.get("message")?.toString()} />,
  });
}