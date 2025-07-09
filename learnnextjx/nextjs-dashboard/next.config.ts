import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
 webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

export default nextConfig;
