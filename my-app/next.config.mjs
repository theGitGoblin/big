import nextVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = nextVideos({
  webpack(config, options) {
    return config;
  }
});

export default nextConfig;