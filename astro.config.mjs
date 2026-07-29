import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://raboti.bg",
  base: process.env.DEPLOY_BASE ?? "/",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
