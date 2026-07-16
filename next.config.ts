import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out that GitHub Pages can serve.
  output: "export",

  // GitHub Pages serves files from disk, so a request for /about resolves to
  // /about/index.html. trailingSlash keeps internal links in the directory
  // form so they work without a server rewriting them.
  trailingSlash: true,

  // GitHub Pages has no image optimization backend; serve images as-is.
  images: {
    unoptimized: true,
  },

  // Hosted at the ROOT of a custom domain, so no basePath/assetPrefix needed.
  // If you ever move this to https://<user>.github.io/<repo>/ instead, set:
  //   basePath: "/<repo>",
  //   assetPrefix: "/<repo>/",
};

export default nextConfig;
