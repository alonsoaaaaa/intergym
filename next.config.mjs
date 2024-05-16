/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  images: {
    domains: ["thegym.nyc3.cdn.digitaloceanspaces.com"],
  },
};

export default nextConfig;
