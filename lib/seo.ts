// © 2026 WiamLabs. All rights reserved.

import type { Metadata } from "next";
import { COPYRIGHT, FOUNDER_NAME, SITE_NAME, SITE_URL } from "./site";

const defaultDescription =
  "WiamLabs builds WiamApp and WiamTrade and future African digital products. Founded by Martin. Ghana.";

type PageMeta = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "",
  image = "/opengraph-image",
}: PageMeta = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Building Africa's Digital Products`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GH",
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
    keywords: [
      SITE_NAME,
      "WiamApp",
      "WiamTrade",
      "Africa technology",
      "Ghana startup",
      FOUNDER_NAME,
    ],
    authors: [{ name: FOUNDER_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/brand/logo-512.svg", type: "image/svg+xml" }],
    },
    manifest: "/manifest.webmanifest",
  };
}

export { defaultDescription, COPYRIGHT };
