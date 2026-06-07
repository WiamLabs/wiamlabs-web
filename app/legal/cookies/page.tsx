// © 2026 WiamLabs. All rights reserved.

import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import styles from "../legal.module.css";

export const metadata = buildMetadata({
  title: "Cookie Notice",
  description: "How wiamlabs.com uses cookies and similar technologies.",
  path: "/legal/cookies",
});

export default function CookiesPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader title="Cookie Notice" />
      <p className={styles.updated}>Last updated: June 2026</p>

      <div className={styles.content}>
        <p>
          wiamlabs.com uses minimal cookies. We prefer privacy-friendly analytics where possible.
        </p>

        <h2>Essential cookies</h2>
        <p>
          Required for security and basic site operation. These cannot be disabled while using the
          site.
        </p>

        <h2>Analytics (optional)</h2>
        <p>
          If enabled, we may use privacy-focused analytics to understand traffic patterns without
          building advertising profiles.
        </p>

        <h2>Your choices</h2>
        <p>
          You can block cookies in your browser settings. The contact form will still work without
          marketing cookies.
        </p>
      </div>
    </div>
  );
}
