const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.unsplash.com', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;