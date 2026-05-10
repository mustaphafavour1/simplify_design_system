/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // Required for Sanity Studio embedded in Next.js
  transpilePackages: ['@sanity/ui', '@sanity/icons', '@sanity/vision'],
}

export default nextConfig
