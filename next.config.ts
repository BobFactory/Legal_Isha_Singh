import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '', // Keep this empty for custom domains
  assetPrefix: '/', // Ensure assets are loaded from root
  trailingSlash: true,
};

export default nextConfig;
