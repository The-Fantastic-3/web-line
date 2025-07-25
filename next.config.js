/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig;
