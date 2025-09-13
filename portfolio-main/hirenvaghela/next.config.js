/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: false
    },
    // Configuration for static export
    output: 'export',
    trailingSlash: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Disable image optimization for static export
    images: {
        unoptimized: true,
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
    // Ensure proper asset handling
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    // Disable server-side features for static export
    distDir: 'out',
    // Ensure proper routing for static export
    generateBuildId: async () => {
        return 'build-' + Date.now()
    },
};

module.exports = nextConfig;