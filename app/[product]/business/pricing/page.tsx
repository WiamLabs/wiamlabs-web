// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingPlansGrid } from "@/components/pricing/PricingPlansGrid";
import { getProduct, products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import styles from "../../pricing/page.module.css";

type Props = { params: Promise<{ product: string }> };

export function generateStaticParams() {
  return products
    .filter((p) => p.businessPricingPlans?.length)
    .map((p) => ({ product: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} Business Pricing`,
    description: product.businessPricingIntro || product.pitch,
    path: `/${product.slug}/business/pricing`,
  });
}

export default async function ProductBusinessPricingPage({ params }: Props) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product || !product.businessPricingPlans?.length) notFound();

  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow={`${product.name} Business`}
        title={`Plans for companies on ${product.name}`}
        subtitle={product.businessPricingIntro}
      />

      <PricingPlansGrid product={product} plans={product.businessPricingPlans} />

      <p className={styles.backLink}>
        <Link href={`/${product.slug}/pricing`}>← Worker &amp; customer pricing</Link>
        {" · "}
        <Link href={`/products/${product.slug}`}>Back to {product.name} overview</Link>
      </p>
    </div>
  );
}
