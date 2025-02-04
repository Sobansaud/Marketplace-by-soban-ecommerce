
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: ["cdn.sanity.io"], // Sanity ke images ke liye domain allow karna zaroori hai
  },
    env: {
      NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
      SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    },
  };
  


module.exports = nextConfig;
