/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
