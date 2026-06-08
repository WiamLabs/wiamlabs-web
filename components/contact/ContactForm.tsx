// © 2026 WiamLabs. All rights reserved.

"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./ContactForm.module.css";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required minLength={2} maxLength={120} />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required maxLength={200} />
        </div>

        <div className={styles.field}>
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject" required defaultValue="General">
            <option value="General">General</option>
            <option value="Press">Press</option>
            <option value="Careers">Careers</option>
            <option value="Business">Business inquiry</option>
            <option value="Support">Product support</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required minLength={10} maxLength={5000} />
        </div>

        <div className={styles.honeypot} aria-hidden>
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {state === "success" && (
          <p className={`${styles.message} ${styles.success}`} role="status">
            Thank you — your message was sent. We will reply soon.
          </p>
        )}

        {state === "error" && (
          <p className={`${styles.message} ${styles.error}`} role="alert">
            {errorMsg}
          </p>
        )}

        <Button type="submit" disabled={state === "loading"} fullWidth>
          {state === "loading" ? "Sending…" : "Send message"}
        </Button>
      </form>

      <p className={styles.supportNote}>
        WiamApp or WiamTrade support:{" "}
        <a href="mailto:support@wiamapp.com">support@wiamapp.com</a>
      </p>
    </div>
  );
}
