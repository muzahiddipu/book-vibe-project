import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/b/isbn/**",
        search: "?default=false",
      },
      {
        protocol: "https",
        hostname: "ia801909.us.archive.org",
        pathname: "/view_archive.php",
      },
    ],
  },
};

export default nextConfig;
