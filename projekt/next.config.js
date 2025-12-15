/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
    serverComponentsExternalPackages: ['@libsql/client', '@prisma/adapter-libsql'],
  },
};

module.exports = nextConfig;
