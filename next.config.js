/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: false,
    },
    swcMinify: true,
}

module.exports = nextConfig
