// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingPlansGrid } from "@/components/pricing/PricingPlansGrid";
import { getProduct, products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

type Props = { params: Promise<{ product: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} Pricing`,
    description: product.pricingIntro || product.pitch,
    path: `/${product.slug}/pricing`,
  });
}

export default async function ProductPricingPage({ params }: Props) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product || !product.pricingPlans) notFound();

  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow={`${product.name} Pricing`}
        title={`Simple pricing for ${product.name}`}
        subtitle={product.pricingIntro}
      />

      <PricingPlansGrid product={product} plans={product.pricingPlans} />

      {product.businessPricingPlans?.length ? (
        <p className={styles.backLink}>
          <Link href={`/${product.slug}/business/pricing`}>
            Looking for business plans? See {product.name} Business pricing →
          </Link>
        </p>
      ) : null}

      <p className={styles.backLink}>
        <Link href={`/products/${product.slug}`}>← Back to {product.name} overview</Link>
      </p>
    </div>
  );
}
