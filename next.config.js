/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // now stable in 13.4
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**/*',
      }
    ]
  }
}

module.exports = nextConfig
