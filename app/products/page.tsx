// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card, StatusBadge } from "@/components/ui/Card";
import { products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Explore WiamApp and WiamTrade — digital products built by WiamLabs for Africa.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Portfolio"
        title="WiamLabs products"
        subtitle="Live products today. The grid expands as new products ship from the WiamLabs house."
      />

      <div className={styles.grid}>
        {products.map((product) => (
          <Card key={product.slug} interactive>
            <article className={styles.card}>
              <div className={`${styles.visual} ${styles[product.slug]}`}>{product.name}</div>
              <div>
                <StatusBadge status={product.status} />
                <h2>{product.name}</h2>
              </div>
              <p>{product.tagline}</p>
              <div className={styles.actions}>
                <Button href={product.externalUrl} external size="sm">
                  {product.ctaLabel} →
                </Button>
                <Button href={`/products/${product.slug}`} variant="outline" size="sm">
                  Details
                </Button>
              </div>
              <span className={styles.copyright}>{product.copyright}</span>
            </article>
          </Card>
        ))}
      </div>

      <p style={{ marginTop: "2rem", color: "var(--color-text-muted)" }}>
        Future products will appear here with a &quot;Coming soon&quot; badge.{" "}
        <Link href="/contact" style={{ color: "var(--color-gold)" }}>
          Partner with us
        </Link>
        .
      </p>
    </div>
  );
}
