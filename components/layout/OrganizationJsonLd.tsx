// © 2026 WiamLabs. All rights reserved.

import { organizationJsonLd } from "@/lib/jsonld";

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
    />
  );
}
