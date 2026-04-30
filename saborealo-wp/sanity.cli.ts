import { defineCliConfig } from "sanity/cli"

// Sanity CLI doesn't auto-load .env (Astro and Vite do). Use Node 22+
// built-in env loader so `pnpm typegen` and other CLI commands see the
// PUBLIC_SANITY_* variables defined in .env.
try {
  process.loadEnvFile()
} catch {
  // .env is optional; the shell may provide vars directly.
}

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error(
    "Missing PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET. " +
      "Copy .env.example to .env and set the values.",
  )
}

export default defineCliConfig({
  api: { projectId, dataset },
  autoUpdates: true,
  // TypeGen runs via `pnpm typegen` (Astro is the dev/build entry point, not
  // `sanity dev`). Enabling this also makes `sanity` CLI commands keep types
  // in sync if the editor ever uses them directly.
  typegen: { enabled: true },
})
