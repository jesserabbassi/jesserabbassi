import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: fileURLToPath(new URL("./", import.meta.url)),
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
