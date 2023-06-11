/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["autoskolasmart.sk", "localhost"],
  },
};

module.exports = nextConfig;
