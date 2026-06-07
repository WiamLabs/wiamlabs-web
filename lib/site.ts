// © 2026 WiamLabs. All rights reserved.

export const SITE_NAME = "WiamLabs";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://wiamlabs.com";
export const WIAMAPP_URL =
  process.env.NEXT_PUBLIC_WIAMAPP_URL || "https://wiamapp.com";
export const WIAMTRADE_URL =
  process.env.NEXT_PUBLIC_WIAMTRADE_URL || "https://t.me/WiamTradeBot";
export const FOUNDER_NAME = "Martin";
export const COPYRIGHT = "© 2026 WiamLabs. All rights reserved.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/wiamlabs",
  x: "https://x.com/WiamLabs",
  youtube: "https://www.youtube.com/@WiamLabs",
} as const;
