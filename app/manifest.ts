// © 2026 WiamLabs. All rights reserved.

import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: "WiamApp and WiamTrade — products from WiamLabs, Ghana.",
    start_url: "/",
    display: "standalone",
    background_color: "#08081A",
    theme_color: "#D4A017",
    icons: [
      {
        src: "/brand/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    id: SITE_URL,
  };
}
