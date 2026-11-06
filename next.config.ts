import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/bizbrain", destination: "/products/bizbrain", permanent: true },
      { source: "/ar/bizbrain", destination: "/ar/products/bizbrain", permanent: true },
      { source: "/fisqel", destination: "/products/fisqel", permanent: true },
      { source: "/ar/fisqel", destination: "/ar/products/fisqel", permanent: true },
    ];
  },
};

export default nextConfig;
