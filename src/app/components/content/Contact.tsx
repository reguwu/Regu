"use client";

import styles from "@/styles/Contact.module.css";
import Link from "next/link";
import getUrlByName from "@/utils/constant/socialMedias";
import { ToastySubmitButton } from "@/components/ui/button/ToastySubmitButton";
import { useState } from "react";
import { sendEmail } from "@/utils/email";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    return email !== "" && message !== "";
  };

  return (
    <div className={styles["contact"]}>
      <form action={sendEmail}>
        <label htmlFor="email">
          Email <span className={styles["required"]}>*</span>
        </label>
        <input
          type="text"
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
            <Link href={`${getUrlByName("email")}`}>regyu.dev@gmail.com</Link>
          </p>
          <ToastySubmitButton
            title="Message Sent"
            description="Thank you for your message. I'll get back to you as soon as possible."
            disabled={!validate()}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
