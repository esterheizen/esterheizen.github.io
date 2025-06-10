import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Enable static HTML export
  images: { unoptimized: true }, // Needed if you use <Image />
};

export default nextConfig;
