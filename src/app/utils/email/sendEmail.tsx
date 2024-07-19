"use server"

import { Resend } from "resend";
import Email from "@/components/content/Email";

export const sendEmail = async (formData: FormData) => {

  console.log(formData);
  const resend = new Resend('re_123456789');

  await resend.emails.send({
    from: 'you@example.com',
    to: 'user@gmail.com',
    subject: 'hello world',
    react: <Email msg={"msg"} />,
  });
}