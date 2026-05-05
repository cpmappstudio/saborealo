#!/usr/bin/env node
/**
 * Imports menu items from the SkyTab/OLO API into Sanity.
 *
 * Prerequisites:
 *   - Generate a write token at sanity.io/manage → project → API → Tokens
 *
 * Usage (local JSON files — preferred when API blocks Node):
 *   1. Open these URLs in your browser and save the raw JSON:
 *        https://oloapi.shift4payments.com/api/v2/public/75cf391c0101d4b1394336e87e3b0382/menu/aea87371-70f2-4fde-9afe-b5fd5c97b3c7/categories
 *        → save as scripts/skytab-categories.json
 *        https://oloapi.shift4payments.com/api/v2/public/75cf391c0101d4b1394336e87e3b0382/menu/aea87371-70f2-4fde-9afe-b5fd5c97b3c7/items
 *        → save as scripts/skytab-items.json
 *   2. Run:
 *        SANITY_TOKEN=sk... SANITY_DATASET=production node scripts/import-menu-items.mjs --from-files
 *        SANITY_TOKEN=sk... SANITY_DATASET=production node scripts/import-menu-items.mjs --from-files --dry-run
 *
 * Usage (live API — only works if the API doesn't block your IP):
 *   SANITY_TOKEN=sk... SANITY_DATASET=production node scripts/import-menu-items.mjs
 */

import { createClient } from "@sanity/client"
import { readFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

// ── Config ────────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env manually (this script runs outside Vite/Astro)
const env = {}
try {
  const raw = readFileSync(resolve(__dirname, "../.env"), "utf8")
  for (const line of raw.split("\n")) {
    const m = line.match(/^([^#=][^=]*)=(.*)$/)
    if (m) env[m[1].trim()] = m[2].trim()
  }
} catch {
  // .env is optional if vars come from the shell
}

const PROJECT_ID =
  process.env.PUBLIC_SANITY_PROJECT_ID ?? env.PUBLIC_SANITY_PROJECT_ID
// SANITY_DATASET overrides PUBLIC_SANITY_DATASET so you can target production without editing .env
const DATASET =
  process.env.SANITY_DATASET ??
  process.env.PUBLIC_SANITY_DATASET ??
  env.PUBLIC_SANITY_DATASET
const TOKEN = process.env.SANITY_TOKEN
const DRY_RUN = process.argv.includes("--dry-run")
const FROM_FILES = process.argv.includes("--from-files")

const MERCHANT = "75cf391c0101d4b1394336e87e3b0382"
const MENU_ID = "aea87371-70f2-4fde-9afe-b5fd5c97b3c7"
const API_BASE = `https://oloapi.shift4payments.com/api/v2/public/${MERCHANT}/menu/${MENU_ID}`
const ORDER_BASE = `https://online.skytab.com/${MERCHANT}`

// ── Validation ────────────────────────────────────────────────────────────────

if (!PROJECT_ID || !DATASET) {
  console.error(
    "✗ Missing PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET in .env",
  )
  process.exit(1)
}
if (!TOKEN && !DRY_RUN) {
  console.error(
    "✗ Missing SANITY_TOKEN.\n  Generate one at sanity.io/manage → API → Tokens (Editor role).",
  )
  process.exit(1)
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  token: TOKEN,
  useCdn: false,
  apiVersion: "2024-01-01",
})

// ── Helpers ───────────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96)
}

// Strips accents, punctuation, and whitespace for fuzzy name comparison
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]/g, "")
}

function namesMatch(a, b) {
  return normalize(a) === normalize(b)
}

function readLocalJson(filename) {
  const filePath = resolve(__dirname, filename)
  try {
    return JSON.parse(readFileSync(filePath, "utf8"))
  } catch {
    throw new Error(
      `Could not read ${filePath}.\nSave the browser JSON response there first.`,
    )
  }
}

async function fetchApi(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      Accept: "application/json",
      Referer: "https://online.skytab.com/",
      Origin: "https://online.skytab.com",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  })
  if (!res.ok) throw new Error(`API ${path} returned ${res.status}`)
  return res.json()
}

async function uploadImage(imageUrl, slug) {
  const res = await fetch(imageUrl)
  if (!res.ok)
    throw new Error(`Image fetch failed (${res.status}): ${imageUrl}`)
  const contentType = res.headers.get("content-type") ?? "image/jpeg"
  const ext = contentType.includes("png") ? "png" : "jpg"
  const buffer = Buffer.from(await res.arrayBuffer())
  return client.assets.upload("image", buffer, {
    filename: `${slug}.${ext}`,
    contentType,
  })
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Dataset: ${DATASET}`)
  if (DRY_RUN) console.log("── DRY RUN — no writes will occur ──")
  console.log()

  // 1. Load existing Sanity categories
  const sanityCategories = await client.fetch(
    '*[_type == "menuCategory"]{_id, label, slug}',
  )
  console.log(
    `Sanity categories (${sanityCategories.length}):`,
    sanityCategories.map((c) => c.label).join(", "),
    "\n",
  )

  // 2. Load SkyTab data
  let categoriesRaw, itemsRaw
  if (FROM_FILES) {
    console.log("Loading SkyTab data from local files…")
    categoriesRaw = readLocalJson("skytab-categories.json")
    itemsRaw = readLocalJson("skytab-items.json")
  } else {
    console.log("Fetching SkyTab menu from API…")
    ;[categoriesRaw, itemsRaw] = await Promise.all([
      fetchApi("/categories"),
      fetchApi("/items"),
    ])
  }

  // SkyTab wraps arrays: { categories: [...] } and { items: [...] }
  const skytabCategories = categoriesRaw.categories ?? categoriesRaw
  const skytabItemsList = itemsRaw.items ?? itemsRaw

  // Build a map ref → item object for O(1) lookups
  const itemByRef = new Map(skytabItemsList.map((it) => [it.ref, it]))

  console.log(
    `SkyTab: ${skytabCategories.length} categories, ${skytabItemsList.length} items\n`,
  )

  // 3. Match SkyTab categories → Sanity _id
  // Each SkyTab category contains an `items` array of item refs (not nested objects)
  const categoryMap = new Map() // skytabCategory.ref → sanity _id

  for (const sc of skytabCategories) {
    const name = sc.name ?? ""
    const match = sanityCategories.find((c) => namesMatch(c.label, name))
    if (match) {
      categoryMap.set(sc.ref, match._id)
      console.log(`✓ "${name}" → "${match.label}"`)
    } else {
      const itemCount = sc.items?.length ?? 0
      console.warn(
        `✗ No Sanity match for "${name}" (${itemCount} items will be skipped)`,
      )
    }
  }

  // 4. Build flat list of (item, sanityCategoryId) pairs, preserving category order
  const workItems = []
  for (const sc of skytabCategories) {
    const sanityCategoryId = categoryMap.get(sc.ref)
    if (!sanityCategoryId) continue
    for (const itemRef of sc.items ?? []) {
      const item = itemByRef.get(itemRef)
      if (item) workItems.push({ item, sanityCategoryId })
    }
  }

  console.log(`\n${workItems.length} items to import\n`)

  // 5. Import items
  let created = 0
  let skipped = 0
  let failed = 0

  for (const { item, sanityCategoryId } of workItems) {
    const title = (item.name ?? "").trim()
    if (!title) {
      skipped++
      continue
    }

    const slug = slugify(title)
    const docId = `skytab-item-${item.ref}`
    const description =
      (item.description ?? "").trim() || `${title} — disponible en nuestro menú.`
    const imageUrl = item.imageUrl800x800 ?? item.imageUrl ?? null

    console.log(`→ ${title}`)

    if (DRY_RUN) {
      console.log(`  slug="${slug}"  image=${imageUrl ? "✓" : "none"}`)
      created++
      continue
    }

    try {
      let imageField = undefined
      if (imageUrl) {
        process.stdout.write("  Uploading image… ")
        const asset = await uploadImage(imageUrl, slug)
        imageField = {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
          hotspot: {
            _type: "sanity.imageHotspot",
            x: 0.5,
            y: 0.5,
            height: 0.5,
            width: 0.5,
          },
          alt: title,
        }
        console.log("done")
      }

      await client.createOrReplace({
        _id: docId,
        _type: "menuItem",
        title,
        slug: { _type: "slug", current: slug },
        description,
        rating: 5,
        orderUrl: ORDER_BASE,
        category: { _type: "reference", _ref: sanityCategoryId },
        ...(imageField && { image: imageField }),
      })

      console.log("  ✓ Saved")
      created++
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`)
      failed++
    }
  }

  // 6. Summary
  console.log("\n── Summary ──────────────────────────────")
  console.log(`  Created / updated : ${created}`)
  console.log(`  Skipped           : ${skipped}`)
  console.log(`  Failed            : ${failed}`)
  if (failed > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
