// © 2026 WiamLabs. All rights reserved.

import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { COPYRIGHT } from "@/lib/site";
import styles from "../legal.module.css";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for the WiamLabs company website at wiamlabs.com.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader title="Terms of Use" />
      <p className={styles.updated}>Last updated: June 2026</p>

      <div className={styles.content}>
        <p>
          By using wiamlabs.com you agree to these terms. {COPYRIGHT}
        </p>

        <h2>Informational site</h2>
        <p>
          wiamlabs.com is an informational company website. Trading, bookings, and account
          features live on WiamApp and WiamTrade — each with their own terms.
        </p>

        <h2>Outbound links</h2>
        <p>
          Links to wiamapp.com, Telegram, and partner sites are provided for convenience.
          WiamLabs is not responsible for third-party services you choose to use.
        </p>

        <h2>No warranties</h2>
        <p>
          Content is provided as-is. We strive for accuracy but do not guarantee completeness
          of forward-looking statements about upcoming products.
        </p>

        <h2>Contact</h2>
        <p>
          Legal inquiries: <a href="mailto:hello@wiamlabs.com">hello@wiamlabs.com</a>
        </p>
      </div>
    </div>
  );
}
