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
    ],
  },
};

export default nextConfig;
