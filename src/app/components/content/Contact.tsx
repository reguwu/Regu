"use client";

import styles from "@/styles/Contact.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sendEmail } from "@/utils/email";
import { EMAIL, getUrlByName } from "@/utils/constant";
import { useFormState } from "react-dom";
import { Toast } from "@/components/ui/toast";

const initialState = {
  toast: false,
}

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, formAction] = useFormState(sendEmail, initialState);
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    if(state.toast == true) {
      state.toast = false;
      setOpen(false);
      
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setOpen(true);
      }, 500);
    }
    
  }, [state.toast]);

  const validate = () => {
    return email !== "" && message !== "";
  };

  return (
    <div className={styles["contact"]}>
      <form action={formAction}>
        <label htmlFor="email">
          Email <span className={styles["required"]}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">
          Message <span className={styles["required"]}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className={styles["footer"]}>
          <p>
            Or directly at{" "}
            <Link href={`${getUrlByName("Email")}`}>{EMAIL}</Link>
          </p>

          <button className={styles["submit"]} type="submit" disabled={!validate()}>Submit</button>

          <Toast 
            title="Message Sent" 
            description="Thank you for your message. I'll get back to you as soon as possible." 
            open={open}
            setOpen={setOpen}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
