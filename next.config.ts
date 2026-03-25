// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Enable type checking during build time
    ignoreBuildErrors: false,
  },
  experimental: {
    // Support for React Server Components
    serverComponents: true,
  },
  publicRuntimeConfig: {
    // Set the Material UI configurations
    materialUI: {
      // Specify any MUI specific configurations here
      theme: 'default', // Example config, change if needed
    },
  },
};

module.exports = nextConfig;