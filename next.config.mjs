/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    WORDPRESS_API_URL : process.env.WORDPRESS_API_URL,
  }
};

export default nextConfig;
