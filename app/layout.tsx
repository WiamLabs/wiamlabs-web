// © 2026 WiamLabs. All rights reserved.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { OrganizationJsonLd } from "@/components/layout/OrganizationJsonLd";
import { WebsiteJsonLd } from "@/components/layout/WebsiteJsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
