/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true
  },
  // Fix for hanging builds with static export
  staticPageGenerationTimeout: 60,
  // Disable experimental features that can cause issues
  experimental: {
    // Disable features that might cause hanging
    optimizeCss: false
  }
}

module.exports = nextConfig