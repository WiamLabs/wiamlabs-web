// © 2026 WiamLabs. All rights reserved.

import type { NewsPost, Product } from "./products";

const CMS_API = process.env.NEXT_PUBLIC_CMS_API_URL?.replace(/\/$/, "");
const CMS_ENABLED = process.env.CMS_ENABLED === "true" && Boolean(CMS_API);

type CmsNewsItem = {
  slug: string;
  title: string;
  excerpt: string | null;
  body_html: string;
  author_name: string;
  published_at: string | null;
  tags: string[];
};

type CmsProductItem = {
  slug: string;
  name: string;
  tagline: string | null;
  status: Product["status"];
  external_url: string | null;
};

function htmlToParagraphs(html: string): string[] {
  return html
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function mapNewsItem(item: CmsNewsItem): NewsPost {
  const date = item.published_at ? item.published_at.slice(0, 10) : "2026-01-01";
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt || "",
    date,
    author: item.author_name || "WiamLabs",
    tag: item.tags?.[0] || "Company",
    body: htmlToParagraphs(item.body_html || ""),
  };
}

function mapProductItem(item: CmsProductItem): Product {
  return {
    slug: item.slug,
    name: item.name,
    tagline: item.tagline || "",
    status: item.status,
    externalUrl: item.external_url || "#",
    ctaLabel: item.slug === "wiamtrade" ? "Open WiamTrade" : `Open ${item.name}`,
    copyright:
      item.slug === "wiamapp"
        ? "© 2026 WiamApp. Powered by WiamLabs"
        : item.slug === "wiamtrade"
          ? "© 2026 WiamTrade. Powered by WiamLabs"
          : "© 2026 WiamLabs. All rights reserved.",
    pitch: item.tagline || "",
    features: [],
  };
}

async function cmsFetch<T>(path: string): Promise<T | null> {
  if (!CMS_ENABLED || !CMS_API) return null;
  try {
    const res = await fetch(`${CMS_API}${path}`, {
      next: { revalidate: 60, tags: ["cms"] },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function isCmsEnabled(): boolean {
  return CMS_ENABLED;
}

export async function fetchCmsNews(limit = 20): Promise<NewsPost[] | null> {
  const data = await cmsFetch<{ items: CmsNewsItem[] }>(`/v1/cms/public/news?limit=${limit}`);
  if (!data?.items?.length) return null;
  return data.items.map(mapNewsItem);
}

export async function fetchCmsNewsBySlug(slug: string): Promise<NewsPost | null> {
  const item = await cmsFetch<CmsNewsItem>(`/v1/cms/public/news/${slug}`);
  return item ? mapNewsItem(item) : null;
}

export async function fetchCmsProducts(): Promise<Product[] | null> {
  const data = await cmsFetch<{ items: CmsProductItem[] }>("/v1/cms/public/products");
  if (!data?.items?.length) return null;
  return data.items.map(mapProductItem);
}
