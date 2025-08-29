/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '103.41.206.96',
            },
        ],
    },
};

export default nextConfig;
