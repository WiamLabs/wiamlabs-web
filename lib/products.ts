// © 2026 WiamLabs. All rights reserved.

import productsData from "@/content/products.json";
import newsData from "@/content/news.json";

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

export const products = productsData as Product[];
export const newsPosts = newsData as NewsPost[];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getNewsPost(slug: string): NewsPost | undefined {
  return newsPosts.find((n) => n.slug === slug);
}
