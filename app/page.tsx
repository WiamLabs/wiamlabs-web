// © 2026 WiamLabs. All rights reserved.

import { CTABand } from "@/components/home/CTABand";
import { Hero } from "@/components/home/Hero";
import { NewsTeaser } from "@/components/home/NewsTeaser";
import { PillarGrid } from "@/components/home/PillarGrid";
import { ProductStrip } from "@/components/home/ProductStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductStrip />
      <PillarGrid />
      <NewsTeaser />
      <CTABand />
    </>
  );
}
