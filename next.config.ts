import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["randomuser.me"], // ✅ Add the external domain here
  },
};

export default nextConfig;
