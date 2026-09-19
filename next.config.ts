import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wscf-europe.org",
      },
      {
        protocol: "https",
        hostname: "www.wscf-europe.org",
        
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        
      },
    ],
  },
};

export default nextConfig;
