// © 2026 WiamLabs. All rights reserved.

import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact WiamLabs for partnerships, press, and general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact WiamLabs"
        subtitle="Partnerships, press, careers, and general questions — we read every message."
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
        </section>

        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
