// © 2026 WiamLabs. All rights reserved.

import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { COPYRIGHT } from "@/lib/site";
import styles from "../legal.module.css";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "WiamLabs privacy policy for wiamlabs.com visitors and contact form users.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader title="Privacy Policy" />
      <p className={styles.updated}>Last updated: June 2026</p>

      <div className={styles.content}>
        <p>
          WiamLabs ({COPYRIGHT}) operates wiamlabs.com. This policy explains how we handle
          information when you visit our company website.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>Contact form: name, email, subject, and message you submit voluntarily.</li>
          <li>Analytics: anonymous page views and performance metrics if enabled.</li>
          <li>Server logs: IP address, browser type, and request time for security.</li>
        </ul>

        <h2>How we use it</h2>
        <p>
          We use contact submissions to respond to your inquiry. We do not sell personal data.
          Product accounts (WiamApp, WiamTrade) are governed by each product&apos;s own policies
          on their respective surfaces.
        </p>

        <h2>Cookies</h2>
        <p>
          We minimize cookies. See our <a href="/legal/cookies">Cookie Notice</a> for details.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions: <a href="mailto:hello@wiamlabs.com">hello@wiamlabs.com</a>
        </p>
      </div>
    </div>
  );
}
