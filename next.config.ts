import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "x9j9paxo2wpkuamk.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
