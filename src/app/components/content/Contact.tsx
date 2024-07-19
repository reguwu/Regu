import { Resend } from 'resend';
import Email from '@/components/content/Email';
import styles from '@/styles/Contact.module.css'
import Link from 'next/link';
import getUrlByName from '@/utils/constant/socialMedias';
import { ToastySubmitButton } from '@/components/ui/button/ToastySubmitButton';



async function sendEmail(formData: FormData) {
  'use server'

  // console.log(formData)
  // const resend = new Resend('re_123456789');

  // await resend.emails.send({
  //   from: 'you@example.com',
  //   to: 'user@gmail.com',
  //   subject: 'hello world',
  //   react: <Email msg={"msg"} />,
  // });
}

const Contact = async () => {
  return (
    <div className={styles["contact"]}>
      <form action={sendEmail}>
        <label htmlFor="email">Email </label>
        <input type="text" id="email" name="email" placeholder="Enter your email"/>

        <label htmlFor="message">Message </label>
        <textarea id="message" name="message" rows={6} placeholder="Enter your message"/>

        <div className={styles["note"]}>
          <p>Or directly at <Link href={`${getUrlByName("email")}`}>regyu.dev@gmail.com</Link></p>
          <ToastySubmitButton 
            title="Message Sent" 
            description="Thank you for your message. I'll get back to you as soon as possible." 
          />
        </div>
      </form>
    </div>
  )
}

export default Contact
