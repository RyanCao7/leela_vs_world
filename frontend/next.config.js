/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.tsx', 'api.ts', '.page.js'],
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
