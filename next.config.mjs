/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '103.41.206.96',
            },
            {
                protocol: 'https',
                hostname: 'rel.co.id',
                pathname: '/storage/**',
            },
        ],
    },
    output: 'standalone',
};

export default nextConfig;
