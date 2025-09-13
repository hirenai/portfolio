/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: false
    },
    // Configuration for static export
    trailingSlash: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Image optimization
    images: {
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
    // Disable ESLint during build for deployment
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Disable TypeScript checking during build
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;