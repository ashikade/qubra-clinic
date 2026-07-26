/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/qubra-clinic",
  assetPrefix: "/qubra-clinic/",
};

export default nextConfig;