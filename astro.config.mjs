import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  devToolbar: { enabled: false },
  site: "https://raboti.bg",
  base: process.env.DEPLOY_BASE ?? "/",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/demo/") })],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
