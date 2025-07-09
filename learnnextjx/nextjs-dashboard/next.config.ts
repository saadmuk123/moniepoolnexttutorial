import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
 
  typescript: {
    // This will make sure that TypeScript errors are treated as build errors
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
