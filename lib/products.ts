// © 2026 WiamLabs. All rights reserved.

import productsData from "@/content/products.json";
import newsData from "@/content/news.json";
import { fetchCmsNews, fetchCmsNewsBySlug, fetchCmsProducts } from "./cms";
import { WIAMAPP_URL, WIAMTRADE_URL, WIAMPASS_URL } from "./site";

export type PricingPlan = {
  name: string;
  price: string;       // display string, e.g. "GHS 30/mo" or "Free"
  billingNote?: string; // e.g. "billed monthly", "per ticket sold"
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
  // Present only on plans that actually charge money through the
  // central wiamlabs.com checkout. Must match the plan_key the
  // product's own backend recognizes (WiamApp: subscription_config
  // table). Omit entirely for Free/Contact-sales plans — those keep
  // linking straight to ctaHref or externalUrl instead.
  checkoutPlanKey?: string;
  // Where non-checkout CTAs go (register, apply, etc.). Falls back
  // to the product's externalUrl when omitted.
  ctaHref?: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "beta" | "coming_soon";
  externalUrl: string;
  ctaLabel: string;
  copyright: string;
  pitch: string;
  features: string[];
  accent?: string;
  pricingIntro?: string;
  pricingPlans?: PricingPlan[];
  businessPricingIntro?: string;
  businessPricingPlans?: PricingPlan[];
};

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tag: string;
  body: string[];
};

const baseProducts = productsData as Product[];

function withLiveUrls(product: Product): Product {
  if (product.slug === "wiamapp") {
    return { ...product, externalUrl: WIAMAPP_URL };
  }
  if (product.slug === "wiamtrade") {
    return {
      ...product,
      externalUrl: WIAMTRADE_URL,
      ctaLabel: "Open WiamTrade",
    };
  }
  if (product.slug === "wiampass") {
    return {
      ...product,
      externalUrl: WIAMPASS_URL,
      ctaLabel: "Open WiamPass",
    };
  }
  return product;
}

export const products = baseProducts.map(withLiveUrls);
export const newsPosts = newsData as NewsPost[];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getNewsPost(slug: string): NewsPost | undefined {
  return newsPosts.find((n) => n.slug === slug);
}

export async function loadNewsPosts(): Promise<NewsPost[]> {
  const cms = await fetchCmsNews();
  return cms ?? newsPosts;
}

export async function loadNewsPost(slug: string): Promise<NewsPost | undefined> {
  const cms = await fetchCmsNewsBySlug(slug);
  if (cms) return cms;
  return getNewsPost(slug);
}

export async function loadProducts(): Promise<Product[]> {
  const cms = await fetchCmsProducts();
  const list = cms ?? baseProducts;
  return list.map(withLiveUrls);
}
