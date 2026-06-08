// © 2026 WiamLabs. All rights reserved.

import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { COPYRIGHT } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Press Kit",
  description: "WiamLabs press kit — boilerplate, logos, and media contact.",
  path: "/press",
});

export default function PressPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Press"
        title="Press kit"
        subtitle="Boilerplate, logos, and contact for press inquiries."
      />

      <section className={styles.boilerplate}>
        <p>
          WiamLabs is a Ghana-based technology company. We build WiamApp, a services marketplace,
          and WiamTrade, a non-custodial trading platform on Telegram. {COPYRIGHT}
        </p>
      </section>

      <section className={styles.downloads}>
        <div className={styles.item}>
          <strong>Logo (SVG)</strong>
          <a href="/brand/logo.svg" download>
            Download
          </a>
        </div>
        <div className={styles.item}>
          <strong>Logo 512 (SVG)</strong>
          <a href="/brand/logo-512.svg" download>
            Download
          </a>
        </div>
        <div className={styles.item}>
          <strong>Brand colors</strong>
          <span style={{ color: "var(--color-text-muted)" }}>Navy #08081A · Gold #D4A017</span>
        </div>
        <div className={styles.item}>
          <strong>Press contact</strong>
          <a href="mailto:press@wiamlabs.com">press@wiamlabs.com</a>
        </div>
      </section>
    </div>
  );
}
