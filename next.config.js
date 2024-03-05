const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
});
