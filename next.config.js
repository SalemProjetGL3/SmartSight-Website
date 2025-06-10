/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better development experience
    reactStrictMode: true,
    
    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Enable compression
    compress: true,

    // Optimize production builds
    swcMinify: true,

    // Reduce memory usage in development
    webpack: (config, { dev, isServer }) => {
        // Optimize development builds
        if (dev) {
            config.optimization = {
                ...config.optimization,
                removeAvailableModules: false,
                removeEmptyChunks: false,
                splitChunks: false,
            }
        }

        // Optimize production builds
        if (!dev) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 244000,
                    minChunks: 1,
                    maxAsyncRequests: 30,
                    maxInitialRequests: 30,
                    cacheGroups: {
                        defaultVendors: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10,
                            reuseExistingChunk: true,
                        },
                        default: {
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true,
                        },
                    },
                },
            }
        }

        return config
    },
}

module.exports = nextConfig