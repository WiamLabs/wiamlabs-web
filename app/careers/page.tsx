// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { careers } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Join WiamLabs — build WiamApp, WiamTrade, and Africa's digital future.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Team"
        title="Careers at WiamLabs"
        subtitle="We are growing. Open roles below — more coming soon."
      />

      <div className={styles.grid}>
        {careers.map((role) => (
          <article key={role.slug} className={styles.card}>
            <div>
              <h2>{role.title}</h2>
              <p className={styles.meta}>
                {role.location} · {role.type}
              </p>
              <p className={styles.summary}>{role.summary}</p>
            </div>
            <Button href={`/contact?subject=Careers`} size="sm">
              Apply
            </Button>
          </article>
        ))}
      </div>

      <p style={{ marginTop: "2rem", color: "var(--color-text-muted)" }}>
        No perfect fit?{" "}
        <Link href="/contact" style={{ color: "var(--color-gold)" }}>
          Send us your profile
        </Link>
        .
      </p>
    </div>
  );
}
