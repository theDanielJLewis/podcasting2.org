import nextra from "nextra";
import type { NextConfig } from "next";

const withNextra = nextra({
  // ... Other Nextra config options
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
      {
        source: "/podcast-namespace/tags",
        destination: "/podcast-namespace",
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
    ];
  },
};

export default withNextra({
  // ... Other Next.js config options
  ...nextConfig,
});
