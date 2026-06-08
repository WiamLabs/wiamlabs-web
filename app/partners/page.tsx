// © 2026 WiamLabs. All rights reserved.

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { partners } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Partners",
  description: "WiamLabs technology and infrastructure partners across Africa.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Ecosystem"
        title="Our partners"
        subtitle="We work with trusted providers to deliver reliable products."
      />

      <div className={styles.grid}>
        {partners.map((p) => (
          <article key={p.name} className={styles.card}>
            <div className={styles.logo} aria-hidden>
              {p.name.charAt(0)}
            </div>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <a href={p.website} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Visit website →
            </a>
          </article>
        ))}
      </div>

      <div className={styles.cta}>
        <h2>Partner with WiamLabs</h2>
        <p>Press, infrastructure, or distribution — we would like to hear from you.</p>
        <div style={{ marginTop: "1rem" }}>
          <Button href="/contact?subject=Partnership">Get in touch</Button>
        </div>
      </div>
    </div>
  );
}
