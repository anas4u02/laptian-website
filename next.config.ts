/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features for better SEO
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
