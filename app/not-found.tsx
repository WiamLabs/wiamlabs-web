// © 2026 WiamLabs. All rights reserved.

import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";

export default function NotFound() {
  return (
    <div className="container" style={{ paddingBottom: "4rem" }}>
      <PageHeader
        title="Page not found"
        subtitle="This page does not exist on wiamlabs.com."
      />
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Button href="/">Home</Button>
        <Button href="/products" variant="outline">
          Products
        </Button>
      </div>
    </div>
  );
}
