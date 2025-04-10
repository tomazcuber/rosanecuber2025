const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/rosanecuber2025/' : '',
  basePath: isProd ? '/rosanecuber2025' : '',
  output: 'export'
};

export default nextConfig;
