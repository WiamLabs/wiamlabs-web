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
        source: "/privacy-policy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-use.html",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms-of-use",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
