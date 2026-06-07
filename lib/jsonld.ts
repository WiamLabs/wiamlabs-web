// © 2026 WiamLabs. All rights reserved.

import { FOUNDER_NAME, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-512.svg`,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
    },
    description:
      "WiamLabs is a Ghana-based technology company building digital products for Africa.",
    sameAs: Object.values(SOCIAL_LINKS),
  };
}
