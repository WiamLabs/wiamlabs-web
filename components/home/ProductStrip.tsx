// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, StatusBadge } from "@/components/ui/Card";
import { products } from "@/lib/products";
import styles from "./ProductStrip.module.css";

export function ProductStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2>Our products</h2>
            <p>Live today — more coming under the WiamLabs house.</p>
          </div>
          <Button href="/products" variant="ghost" size="sm">
            View all →
          </Button>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <Card key={product.slug} interactive>
              <div className={styles.cardInner}>
                <div className={`${styles.visual} ${styles[product.slug]}`}>
                  {product.name}
                </div>
                <div className={styles.meta}>
                  <h3 className={styles.cardTitle}>{product.name}</h3>
                  <StatusBadge status={product.status} />
                </div>
                <p className={styles.tagline}>{product.tagline}</p>
                <div className={styles.meta}>
                  <Button
                    href={product.externalUrl}
                    external
                    size="sm"
                  >
                    {product.ctaLabel} →
                  </Button>
                  <Link href={`/products/${product.slug}`} className={styles.copyright}>
                    Learn more
                  </Link>
                </div>
                <span className={styles.copyright}>{product.copyright}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
