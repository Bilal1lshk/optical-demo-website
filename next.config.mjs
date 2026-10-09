/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/clearsight",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
