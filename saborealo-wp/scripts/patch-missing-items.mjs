#!/usr/bin/env node
/**
 * Patches menuItem documents that are missing images and/or descriptions.
 * Images are sourced from Pexels (free, no branding).
 *
 * Usage:
 *   SANITY_TOKEN=sk... SANITY_DATASET=production node scripts/patch-missing-items.mjs
 *   SANITY_TOKEN=sk... SANITY_DATASET=production node scripts/patch-missing-items.mjs --dry-run
 */

import { createClient } from "@sanity/client"
import { readFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const env = {}
try {
  const raw = readFileSync(resolve(__dirname, "../.env"), "utf8")
  for (const line of raw.split("\n")) {
    const m = line.match(/^([^#=][^=]*)=(.*)$/)
    if (m) env[m[1].trim()] = m[2].trim()
  }
} catch {}

const PROJECT_ID =
  process.env.PUBLIC_SANITY_PROJECT_ID ?? env.PUBLIC_SANITY_PROJECT_ID
const DATASET =
  process.env.SANITY_DATASET ??
  process.env.PUBLIC_SANITY_DATASET ??
  env.PUBLIC_SANITY_DATASET
const TOKEN = process.env.SANITY_TOKEN
const DRY_RUN = process.argv.includes("--dry-run")

if (!PROJECT_ID || !DATASET) {
  console.error("✗ Missing PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET")
  process.exit(1)
}
if (!TOKEN && !DRY_RUN) {
  console.error("✗ Missing SANITY_TOKEN")
  process.exit(1)
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  token: TOKEN,
  useCdn: false,
  apiVersion: "2024-01-01",
})

// Pexels CDN — free to use, no branding, optimized at 800px
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`

// ── Patch data ────────────────────────────────────────────────────────────────
// Each entry: { title, description, imageUrl }

const PATCHES = [
  // ── Desayuno ─────────────────────────────────────────────────────────────────
  {
    title: "2 Hash Brown",
    description:
      "Dos crujientes hash browns dorados, perfectos para acompañar tu desayuno.",
    imageUrl: px("5848045"),
  },
  {
    title: "2 Pancakes",
    description:
      "Dos panqueques esponjosos servidos con mantequilla y almíbar.",
    imageUrl: px("5677021"),
  },
  {
    title: "4 Salchichas",
    description:
      "Cuatro salchichas jugosas asadas a la plancha, ideales para el desayuno.",
    imageUrl:
      "https://images.pexels.com/photos/35928308/pexels-photo-35928308/free-photo-of-delicious-full-english-breakfast-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Revoltillo de jamon & 2Tostadas (Desayuno)",
    description:
      "Revoltillo de huevos con jamón acompañado de dos tostadas crujientes.",
    imageUrl: px("17335055"),
  },
  {
    title: "Sandwich de Jamón (Desayuno)",
    description:
      "Sandwich de jamón en pan fresco, sencillo y sabroso para comenzar el día.",
    imageUrl: px("36518821"),
  },
  // ── Acompañamientos ───────────────────────────────────────────────────────────
  {
    title: "Side de Bacon",
    description:
      "Tiras de bacon crujiente, el acompañamiento perfecto para cualquier plato.",
    imageUrl: px("14133033"),
  },
  {
    title: "Papas Fritas (G)",
    description:
      "Papas fritas en tamaño grande, crujientes y doradas por fuera, suaves por dentro.",
    imageUrl: px("32421783"),
  },
  {
    title: "Papas Fritas (P)",
    description:
      "Papas fritas en tamaño pequeño, crujientes y sabrosas.",
    imageUrl: px("15656541"),
  },
  // ── Mega Sandwiches ───────────────────────────────────────────────────────────
  {
    title: "Tostadas Mantequilla (Mega)",
    description:
      "Pan mega tostado untado generosamente con mantequilla, dorado y crujiente.",
    imageUrl: px("913813"),
  },
  {
    title: "Tostadas Mayonesa (Mega)",
    description:
      "Pan mega tostado con mayonesa, cremoso y con ese sabor clásico de sandwich.",
    imageUrl:
      "https://images.pexels.com/photos/34739832/pexels-photo-34739832/free-photo-of-close-up-of-toasted-slices-on-plate.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // ── Pollo ─────────────────────────────────────────────────────────────────────
  {
    title: "Chicharrones de Pollo",
    description:
      "Trozos de pollo fritos hasta quedar súper crujientes por fuera y jugosos por dentro.",
    imageUrl: px("5474676"),
  },
  {
    title: "Masitas de Pollo al Ajillo",
    description:
      "Trozos tiernos de pollo en salsa de ajillo, un clásico de ajo y aceite con toque boricua.",
    imageUrl:
      "https://images.pexels.com/photos/33254639/pexels-photo-33254639/free-photo-of-close-up-of-crispy-fried-chicken-on-plate.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Pechuga en Salsa de Bacon",
    description:
      "Pechuga de pollo a la plancha bañada en una rica salsa de bacon ahumado.",
    imageUrl: px("36936952"),
  },
  // ── Mariscos ──────────────────────────────────────────────────────────────────
  {
    title: "Camarones al Ajillo",
    description:
      "Camarones salteados en aceite de oliva con ajo fresco y especias, al estilo boricua.",
    imageUrl: px("8697543"),
  },
  // ── Frappes ───────────────────────────────────────────────────────────────────
  {
    title: "frappe Café",
    description:
      "Frappe helado de café, cremoso y refrescante, con ese sabor intenso que te activa.",
    imageUrl:
      "https://images.pexels.com/photos/17558646/pexels-photo-17558646/free-photo-of-sweet-shakes-in-glasses.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Frappe Fruta",
    description:
      "Frappe refrescante preparado con frutas frescas de temporada, suave y lleno de sabor.",
    imageUrl: px("7091586"),
  },
  {
    title: "Frappe Parcha",
    description:
      "Frappe tropical de parcha (maracuyá), con su característico balance entre dulce y ácido.",
    imageUrl: px("10066810"),
  },
  {
    title: "Frappe De Mango",
    description:
      "Frappe tropical de mango, cremoso y con ese sabor dulce que te transporta al Caribe.",
    imageUrl: px("10895782"),
  },
  {
    title: "Frappe De Chesecake",
    description:
      "Frappe helado con sabor a cheesecake, suave, cremoso y con notas de vainilla.",
    imageUrl: px("12833529"),
  },
  {
    title: "Frappe Chesecake Nutella",
    description:
      "Frappe que combina cheesecake y Nutella en una mezcla cremosa e irresistible.",
    imageUrl: px("14836730"),
  },
  {
    title: "Frappe De Ferreo",
    description:
      "Frappe inspirado en el Ferrero Rocher, con sabores de chocolate y avellana.",
    imageUrl: px("14836730"),
  },
  {
    title: "Frappe De Oreo",
    description:
      "Frappe cremoso con trozos de galleta Oreo, un favorito clásico que nunca falla.",
    imageUrl:
      "https://images.pexels.com/photos/17558646/pexels-photo-17558646/free-photo-of-sweet-shakes-in-glasses.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // ── Deli ──────────────────────────────────────────────────────────────────────
  {
    title: "Jamón Deli",
    description:
      "Finas lonchas de jamón deli, tierno y sabroso, cortado al momento para tu sandwich.",
    imageUrl: px("5491285"),
  },
  {
    title: "Jamón de Pavo Deli",
    description:
      "Jamón de pavo deli en lonchas, una opción más ligera con todo el sabor.",
    imageUrl: px("5491290"),
  },
  {
    title: "Mortadella Deli",
    description:
      "Mortadella italiana en finas lonchas, suave y con su sabor característico.",
    imageUrl: px("28558644"),
  },
  {
    title: "Pastrami Deli",
    description:
      "Pastrami de res sazonado y ahumado, cortado en lonchas para los amantes del sabor intenso.",
    imageUrl: px("5491285"),
  },
  {
    title: "Queso Americano Deli",
    description:
      "Queso americano en lonchas, cremoso y de sabor suave, ideal para fundir en sandwiches.",
    imageUrl: px("15754940"),
  },
  {
    title: "Queso de Bola Deli",
    description:
      "Queso de bola en lonchas, con su sabor firme y ligeramente salado.",
    imageUrl: px("36040972"),
  },
  {
    title: "Queso de Papa Deli",
    description:
      "Queso de papa (Colby Jack) en lonchas, suave y cremoso con un toque de leche.",
    imageUrl: px("15754940"),
  },
]

// ── Upload helper ─────────────────────────────────────────────────────────────

async function uploadImage(imageUrl, title) {
  const res = await fetch(imageUrl)
  if (!res.ok) throw new Error(`Fetch failed (${res.status}): ${imageUrl}`)
  const contentType = res.headers.get("content-type") ?? "image/jpeg"
  const buffer = Buffer.from(await res.arrayBuffer())
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
  return client.assets.upload("image", buffer, {
    filename: `${slug}.jpg`,
    contentType,
  })
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Dataset: ${DATASET}`)
  if (DRY_RUN) console.log("── DRY RUN — no writes will occur ──")
  console.log()

  // Load all items missing image from Sanity in one query
  const existing = await client.fetch(
    `*[_type == "menuItem" && !defined(image.asset)]{_id, title}`,
  )
  const byTitle = new Map(existing.map((d) => [d.title.trim(), d._id]))

  console.log(`Items without image in Sanity: ${existing.length}`)
  console.log(`Patches defined: ${PATCHES.length}\n`)

  let patched = 0
  let skipped = 0
  let failed = 0

  for (const patch of PATCHES) {
    const docId = byTitle.get(patch.title)
    if (!docId) {
      console.warn(`✗ Not found in Sanity: "${patch.title}"`)
      skipped++
      continue
    }

    console.log(`→ ${patch.title}`)

    if (DRY_RUN) {
      console.log(`  [dry-run] would patch ${docId}`)
      patched++
      continue
    }

    try {
      process.stdout.write("  Uploading image… ")
      const asset = await uploadImage(patch.imageUrl, patch.title)
      console.log("done")

      await client
        .patch(docId)
        .set({
          description: patch.description,
          image: {
            _type: "image",
            asset: { _type: "reference", _ref: asset._id },
            hotspot: {
              _type: "sanity.imageHotspot",
              x: 0.5,
              y: 0.5,
              height: 0.5,
              width: 0.5,
            },
            alt: patch.title,
          },
        })
        .commit()

      console.log("  ✓ Patched")
      patched++
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`)
      failed++
    }
  }

  console.log("\n── Summary ──────────────────────────────")
  console.log(`  Patched  : ${patched}`)
  console.log(`  Skipped  : ${skipped}`)
  console.log(`  Failed   : ${failed}`)
  if (failed > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
