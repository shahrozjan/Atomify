import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for `next export`
  output: "export",
  images: {
    unoptimized: true,
  },

  // Add other configuration options if needed
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // Example: Custom base path (if hosting in a subdirectory)
  // basePath: "/subdirectory",
};

export default nextConfig;
