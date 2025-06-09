import nextra from "nextra";
import type { NextConfig } from "next";

const withNextra = nextra({
  // ... Other Nextra config options
  // contentDirBasePath: "/docs", // Or even nested e.g. `/docs/advanced`
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mirrors.creativecommons.org",
        port: "",
        pathname: "/presskit/icons/**",
      },
      {
        protocol: "https",
        hostname: "podcastindex.org",
        port: "",
        pathname: "/api/images/**",
      },
    ],
  },
  redirects: async () => {
    return [
      // {
      //   source: "/podcast-namespace/tags",
      //   destination: "/podcast-namespace",
      //   permanent: false,
      // },
      {
        source: "/guides",
        destination: "/docs/guides",
        permanent: false,
      },
      {
        source: "/podcast-namespace/tags/boostagrams",
        destination: "/podcast-namespace/tags/value",
        permanent: false,
      },
      {
        source: "/podcast-namespace/tags/live",
        destination: "/podcast-namespace/tags/liveitem",
        permanent: false,
      },
      {
        source: "/podcast-namespace/tags/liveboosts",
        destination: "/podcast-namespace/tags/value",
        permanent: false,
      },
      {
        source: "/podcast-namespace/tags/satstreaming",
        destination: "/podcast-namespace/tags/value",
        permanent: false,
      },
      {
        source: "/podcast-namespace/tags/video",
        destination: "/podcast-namespace/tags/medium",
        permanent: false,
      },
      {
        source: "/podcast-namespace/tags/walletswitching",
        destination: "/podcast-namespace/tags/valuetimesplit",
        permanent: false,
      },
      {
        source: "/podcast-namespace/:path*",
        destination: "/docs/podcast-namespace/:path*",
        permanent: true,
      },
      {
        source: "/live",
        destination: "https://episodes.fm/1584274529/live",
        permanent: false,
      },
    ];
  },
};

export default withNextra({
  // ... Other Next.js config options
  ...nextConfig,
});
