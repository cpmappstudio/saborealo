import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { schemaTypes } from "./src/sanity/schema"
import { structure } from "./src/sanity/structure"

// Loaded in two contexts:
//   1) Studio bundle (Vite/browser) — `import.meta.env.PUBLIC_*` is inlined
//      by Vite at build time. There is no `process`.
//   2) Sanity CLI (Node) — needs `.env` loaded manually and reads from
//      `process.env`.
if (
  typeof process !== "undefined" &&
  typeof process.loadEnvFile === "function"
) {
  try {
    process.loadEnvFile()
  } catch {
    // .env is optional; vars may come from the shell.
  }
}

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ??
  (typeof process !== "undefined"
    ? process.env.PUBLIC_SANITY_PROJECT_ID
    : undefined)

const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ??
  (typeof process !== "undefined"
    ? process.env.PUBLIC_SANITY_DATASET
    : undefined)

if (!projectId || !dataset) {
  throw new Error(
    "Missing PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET. " +
      "Copy .env.example to .env and set the values.",
  )
}

export default defineConfig({
  name: "saborealo",
  title: "Saborealo",
  projectId,
  dataset,
  basePath: "/admin",
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
})
