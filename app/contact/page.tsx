// © 2026 WiamLabs. All rights reserved.

import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact WiamLabs for press, careers, and general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact WiamLabs"
        subtitle="Press, careers, or a general question — we read every message."
      />

      <div className={styles.grid}>
        <section className={styles.info}>
          <h2>Email</h2>
          <ul>
            <li>
              General: <a href="mailto:hello@wiamlabs.com">hello@wiamlabs.com</a>
            </li>
            <li>
              Press: <a href="mailto:press@wiamlabs.com">press@wiamlabs.com</a>
            </li>
            <li>
              Product support: <a href="mailto:support@wiamapp.com">support@wiamapp.com</a>
            </li>
          </ul>
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
            Messages are sent from WiamLabs and delivered to our team. Replies go to the email you
            enter.
          </p>
        </section>

        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
