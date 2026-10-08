import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Dev only: allow opening the site from other devices on the local network
  // (the machine's LAN address changes, so match the whole private ranges).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
