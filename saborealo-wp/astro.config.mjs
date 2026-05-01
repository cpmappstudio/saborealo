// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sanity from "@sanity/astro";

// `astro.config.mjs` is evaluated before Vite bootstraps, so .env is not
// auto-loaded yet. Use Node 22+ built-in env loader.
try {
  process.loadEnvFile();
} catch {
  // .env is optional; vars may come from the shell.
}

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    "Missing PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET. " +
      "Copy .env.example to .env and set the values.",
  );
}

export default defineConfig({
  // SSR per the official `sanity-template-astro-clean` template — pages
  // fetch fresh content per request so editor changes appear without a
  // redeploy. Sanity's CDN keeps the per-request cost low.
  output: "server",
  adapter: vercel(),

  redirects: {
    "/locations": "/",
  },

  integrations: [
    sanity({
      projectId,
      dataset,
      apiVersion: "2026-02-01",
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
