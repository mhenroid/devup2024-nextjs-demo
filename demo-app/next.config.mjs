/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

export default nextConfig;
