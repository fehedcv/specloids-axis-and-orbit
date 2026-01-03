/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML
  assetPrefix: './',


  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
