import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/ataktemizlik",
        assetPrefix: "/ataktemizlik/",
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atakilaclamavetemizlik.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
