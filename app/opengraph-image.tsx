// © 2026 WiamLabs. All rights reserved.

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WiamLabs — Building Africa's Digital Products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08081A",
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#D4A017", marginBottom: 16 }}>WiamLabs</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Building Africa&apos;s digital future.
        </div>
        <div style={{ fontSize: 28, color: "#7B8AA5", marginTop: 24 }}>
          WiamApp · WiamTrade · Founded by Martin
        </div>
      </div>
    ),
    { ...size }
  );
}
