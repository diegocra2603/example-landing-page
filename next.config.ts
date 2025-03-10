import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanmartin-cdn.azureedge.net',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
