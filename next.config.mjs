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
    ];
  },
};

export default nextConfig;
