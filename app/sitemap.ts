// © 2026 WiamLabs. All rights reserved.

import type { MetadataRoute } from "next";
import { newsPosts, products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/news",
    "/media",
    "/press",
    "/careers",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ];

  const productRoutes = products.flatMap((p) => {
    const routes = [`/products/${p.slug}`, `/${p.slug}/pricing`];
    if (p.businessPricingPlans?.length) {
      routes.push(`/${p.slug}/business/pricing`);
    }
    return routes;
  });
  const newsRoutes = newsPosts.map((n) => `/news/${n.slug}`);

  const all = [...staticRoutes, ...productRoutes, ...newsRoutes];

  return all.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-06-07"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") ? 0.9 : 0.7,
  }));
}
