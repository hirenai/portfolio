/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'via.placeholder.com'],
        unoptimized: true
    },
    experimental: {
        appDir: false
    },
    // Temporarily disable SSR to debug hydration issues
    trailingSlash: true,
    // Add this to help with hydration issues
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

module.exports = nextConfig;