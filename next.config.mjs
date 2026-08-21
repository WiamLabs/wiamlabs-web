// © 2026 WiamLabs. All rights reserved.

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.wiamlabs.com" }],
        destination: "https://wiamlabs.com/:path*",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "https://sports.wiamlabs.com/privacy-policy",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "https://sports.wiamlabs.com/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-use",
        destination: "https://sports.wiamlabs.com/terms-of-use",
        permanent: true,
      },
      {
        source: "/terms-of-use.html",
        destination: "https://sports.wiamlabs.com/terms-of-use",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "https://sports.wiamlabs.com/terms-of-use",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
