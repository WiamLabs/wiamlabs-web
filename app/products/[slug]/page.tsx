// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Card";
import { getProduct, products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.pitch,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className={`container ${styles.page}`}>
      <PageHeader eyebrow="Product" title={product.name} subtitle={product.tagline} />

      <div className={`${styles.heroVisual} ${styles[product.slug]}`}>{product.name}</div>
      <StatusBadge status={product.status} />

      <p className={styles.pitch}>{product.pitch}</p>

      <section className={styles.features}>
        <h2>Features</h2>
        <ul>
          {product.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <div className={styles.actions}>
        <Button href={product.externalUrl} external size="lg">
          {product.ctaLabel} →
        </Button>
        <Button href="/products" variant="outline">
          All products
        </Button>
      </div>

      <p className={styles.copyright}>{product.copyright}</p>

      {others.length > 0 && (
        <section className={styles.more}>
          <h2>More from WiamLabs</h2>
          <div className={styles.moreGrid}>
            {others.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className={styles.moreCard}>
                <strong>{p.name}</strong>
                {p.tagline}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
