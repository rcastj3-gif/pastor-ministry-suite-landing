/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: output: 'export' removed to enable API routes
  // For static export builds, use: npm run build:static
  distDir: '.next',
  images: {
    unoptimized: true
  },
  // Fix for hanging builds
  staticPageGenerationTimeout: 60,
  // Disable experimental features that can cause issues
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig