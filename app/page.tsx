// © 2026 WiamLabs. All rights reserved.

import { CTABand } from "@/components/home/CTABand";
import { Hero } from "@/components/home/Hero";
import { NewsTeaser } from "@/components/home/NewsTeaser";
import { PillarGrid } from "@/components/home/PillarGrid";
import { ProductStrip } from "@/components/home/ProductStrip";
import { StatsBand } from "@/components/home/StatsBand";
import { VideoFeature } from "@/components/home/VideoFeature";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ProductStrip />
      <VideoFeature />
      <PillarGrid />
      <NewsTeaser />
      <CTABand />
    </>
  );
}
