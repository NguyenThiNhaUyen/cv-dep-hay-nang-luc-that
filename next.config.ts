import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow access from the local network IP
  allowedDevOrigins: ["192.168.240.1", "localhost"],
};

export default nextConfig;
