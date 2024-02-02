/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/basic-api/:path*",
        destination: "http://localhost:3000/:path*"
      }
    ]
  }
};

export default nextConfig;
