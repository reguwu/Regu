"use server"

import { Resend } from "resend";
import Email from "@/components/content/Email";
import { EMAIL } from "@/utils/constant";

export const sendEmail = async (prevState: any, formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  let toast: boolean = prevState.toast;

  await resend.emails.send({
    from: EMAIL,
    to: EMAIL,
    reply_to: formData.get("email")?.toString().toString(),
    subject: `Email Via Resend: ${formData.get("email")?.toString()}`,
    react: <Email msg={formData.get("message")?.toString()} />,
  })
  .then((data) => {
    // data will be null if reply_to is invalid email
    toast = data.data ? true : false;

    //for testing without actually sending email
    // toast = formData.get("email")?.toString().toString() === "aa" ? true : false;
  })

  return {
   toast: toast,
  }
}