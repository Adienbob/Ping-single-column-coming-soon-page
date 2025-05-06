import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.example.com"],
  },
  // 👇 Add this line to disable the React issue button
  reactDevOverlay: false,
};

export default nextConfig;
