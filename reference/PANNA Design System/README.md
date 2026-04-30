# PANNA Design System

PANNA is a **New Latino Food** restaurant chain serving brunch, arepas, cachapas, burgers, salads, patacones, and more across multiple Florida locations (Doral, Orlando, Weston Road, Weston Town Center). The brand voice is warm, energetic, and bilingually rooted in Latin culture, with a strong "fresh from the grill" identity.

This design system documents the visual + content language used across PANNA's marketing site (mypanna.com) and supporting touchpoints (mobile app, gift cards, takeout/delivery).

## Sources

- **Codebase (read-only mount):** `saborealo/` — a static dump of the WordPress/Elementor site for `mypanna.com`. The mounted folder includes `index.html`, generated Elementor CSS under `wp-content/uploads/elementor/css/post-*.css`, and the Google Fonts loader for **Fjalla One**. Image binaries (logos, food photography, category icons) are referenced as remote `https://mypanna.com/wp-content/uploads/...` URLs and are NOT present in the mount.
- **Uploaded screenshots** (in `uploads/`, copied into `assets/` for reference):
  - `header.png`, `site-header-dropdowns.png` — top nav with logo, search, ORDER ONLINE button
  - `menu-below-header.png` — the 13 menu category line-icons row
  - `cards.png`, `store-cards.png` — product/feature cards and store-location cards
  - `cta-below-menu.png` — full-bleed photographic CTA banner
  - `footer.png` — dark footer with social, app store, contact
  - `inside-menu.png`, `inside-product.png` — interior page layouts
  - `inside-store-location1.png`, `inside-store-location2below1.png` — store detail pages
  - `SABOREALO_RESTAURANT_LOGO_SBR_2_COLORES.png` — logo used as `panna-logo.png`. **NOTE:** the uploaded logo is the parent-company "Saborealo" logo. The actual PANNA wordmark on the live site is `https://mypanna.com/wp-content/uploads/2024/10/PANNAnewlatinofood.png` and was not provided as a file.

## Index

| File / folder | What it is |
|---|---|
| `colors_and_type.css` | Tokens — colors, typography, radii, shadows, motion. Import this first. |
| `assets/` | Logos and reference screenshots. |
| `fonts/` | (None — Fjalla One is loaded from Google Fonts.) |
| `preview/` | Design system tab cards (colors, type, components). |
| `ui_kits/website/` | React/JSX recreation of the marketing site (header, hero, menu grid, store cards, footer + working `index.html`). |
| `SKILL.md` | Agent-Skill manifest for Claude Code compatibility. |

## CONTENT FUNDAMENTALS

PANNA's voice is **bold, hospitable, and gently bilingual**. It treats every menu item like a celebration.

- **Casing.** ALL CAPS dominates marketing surfaces — nav items, section titles, buttons, category labels, banners (`AREPAS`, `ORDER ONLINE`, `OUR LOCATIONS`, `MENU OF THE MONTH`). Body copy in long-form passages reverts to sentence case.
- **Person.** Second-person, inclusive: *"Delight yourself with our star product of the month!"*, *"Order your favorites at PANNA."* Never "I"; "we" appears in brand-story moments only.
- **Tone words.** *Delight, fresh, star product, favorites, new latino, the best, classic, our locations.* Energetic but never gimmicky — no exclamation pile-ups, one `!` per call to action max.
- **Bilingual sprinkles.** Spanish food terms stay in Spanish (Arepas, Cachapas, Patacones, Plato Latino, Golfeados, Pasapalos). The shop name itself is bilingual ("New Latino Food"). English copy carries an occasional Spanish noun without translation; readers are expected to be at-home with both.
- **Emoji & symbols.** No emoji on the site. The closest thing is a custom line-art icon set used for menu categories. The trademark mark `™` does NOT appear; copyright lives only in the footer line.
- **Calls to action.** Short verb phrases in caps: `ORDER ONLINE`, `ORDER NOW`, `VIEW MENU`, `LEARN MORE`, `VIEW LOCATIONS`. Never "Click here" or "Learn more about how we…".
- **Specificity over hype.** Banner copy is specific (*"PICK 4 FLAVORS"*, *"GIFT CARDS"*, *"GOLFEADOS"*) rather than generic ("Try our new menu!"). Each card has one job.
- **Examples in the wild:**
  - Hero: *"AREPAS · CACHAPAS · BRUNCH · FROM THE GRILL · LATIN CORNER · PLATTERS · GRAB 'N GO · BURGERS"* (a marquee of menu categories — the site puts identity ahead of pitch).
  - Banner: *"Delight yourself with our star product of the month!"*
  - Footer: location, phone, hours — facts, no fluff.

## VISUAL FOUNDATIONS

PANNA's visuals are **food-first**: large warm-toned photography, crisp red accents, generous rounded surfaces, and a single condensed display face that anchors every layout.

### Color
- **Primary red `#EA0029`** — the only accent color. Buttons, hover states, headlines (`h3`), highlights, footer. It carries 80% of the brand recognition.
- **Black `#000000`** — body text, dark sections (footer, CTAs).
- **Cream `#FFF9ED` / warm cream `#FFF2DC`** — page backgrounds. Never pure white in the body; always a warm off-white that flatters food photography.
- **White `#FFFFFF`** — only inside cards or as fg on red.
- **Warm gray `#988C84`** — muted captions, dividers.
- **Tertiary/situational:** yellow `#F98D01` and green `#2FD91A` show up sparingly in menu illustrations — never as UI surfaces.

### Type
- **Display: Fjalla One.** Condensed grotesque, 500 weight, ALL CAPS, tight letter-spacing (~0.3–0.5px). Used for `h1`–`h4`, buttons, nav, category labels.
- **Body: Verdana** (system fallback `DejaVu Sans, Bitstream Vera Sans, sans-serif`). Surprising in a food brand but used confidently for paragraphs at 18px / 1.5.
- **Hierarchy:** Hero 45px → h1 40 → h2 30 → h3 29 (red, all-caps) → h4 20 → body 18 → small 15.
- **No italics, no ornamental serifs** in primary surfaces.

### Spacing & layout
- **1140px max content width**, generous 60–100px vertical rhythm between sections.
- **Centered hero composition** — title, subtitle, CTA stacked centered with the full-bleed photo behind.
- **Grid.** Menu categories run as a single 13-column horizontal row (icon + label per cell). Feature cards run 2–3 across with equal heights.
- **Marquee** of menu categories runs continuously above the fold — a strong identity device.

### Backgrounds & imagery
- **Full-bleed photography** for banners (1920×500 promo strips: `BANNER-PICK-4-FLAVORS`, `BG-DESSERTS`, `BACKGROUND-GOLFEADOS`, etc.). Photos are warm, oversaturated, top-down food shots — appetizing, golden-hour-lit, rarely cool-toned.
- **No decorative gradients.** Use cream backgrounds and real photography first. The home locations band is the main exception: the source site uses the black PANNA doodle pattern behind the store cards.
- **No hand-drawn illustration style** — but the menu category icons ARE custom line-drawings (single-weight strokes, consistent visual language).

### Borders, radii, shadows
- **Generous corner radii.** Cards use 30px, image tiles 20px, image-inside-card 15px, buttons are full pills (50px+).
- **Single soft shadow** on cards: `2px 7px 8px -3px rgba(0,0,0,0.3)`. Feels like a glossy menu page lifted off cream paper.
- **Borders are rare.** Where present, they are 1px in `--panna-gray-300`. The system prefers shape + shadow over outlined containers.
- **No inner shadows.** No glass/frosted blur. No transparency over photos other than 100% opacity overlays for text legibility (rare).

### Animation
- **Transform-based hovers.** `scale(1.1)` with a bounce easing (`cubic-bezier(.34,1.56,.64,1)`) on category icons; subtle background-color crossfades on buttons (`.25s ease`).
- **No fades or slide-ins** on scroll.
- **Marquee scroll** for the menu-categories ticker — slow, continuous, infinite.

### Hover & press states
- **Buttons:** background shifts from `#EA0029` → `#FF002D` (a hair brighter). No size change, no shadow.
- **Inverse buttons** (white-on-red): swap to red-on-white.
- **Category icons:** scale up 1.1, light bounce.
- **Images in cards:** no hover treatment (the card's whole region is clickable; cursor changes).
- **Press / active:** the brand uses default browser behavior — no custom press-down state.

### Layout rules
- **Sticky header** (logo left, nav center, ORDER ONLINE pill right). Cream background, never transparent.
- **Footer** is cream with a centered PANNA logo, four columns, and a red legal bar.
- **Section CTA bands** are full-bleed photo strips with a single overlaid headline + button.
- **Cards float** on the cream page — they don't sit inside a section container.

### Vibe one-liner
*"Warm cream paper, bold red ink, condensed caps, glossy food photos with rounded corners — a friendly Latin-American diner menu rendered as a website."*

## ICONOGRAPHY

PANNA uses a **bespoke line-art icon set** for the 13 menu categories. They are NOT a public icon library.

- **Style.** Single-weight black strokes (~3–4 unit), rounded line-caps, simple silhouettes, friendly proportions. Each icon is roughly 150×150px. They depict the food itself: an arepa, a cachapa, a burger, a juice glass, etc.
- **Format.** Delivered as `.webp` (e.g. `ICONO_AREPAS.webp`, `ICONO_CACHAPAS.webp`, `ICONO_BREAKFAST.webp`, `ICONO_COFFEE.webp`, `BURGER.webp`). 32×32 / 192×192 favicons exist as `.png`.
- **Where they're used.** Below-header menu grid; inline on category pages. Always paired with a Fjalla-One label below.
- **Hover.** `scale(1.1)` with bounce easing.

The current website UI kit references the original remote `https://mypanna.com/wp-content/uploads/...` icon assets directly for pixel comparison. If this becomes a production package, download those `.webp` files into the app asset pipeline instead of substituting a public icon library.

- **No icon font.** No FontAwesome, no Heroicons in the source.
- **No emoji.** No unicode dingbats used as icons in the live site.
- **Logo.** Wordmark only — "PANNA" set in a custom condensed display, with "New Latino Food" lockup beneath. The provided file `panna-logo.png` is the parent **Saborealo** logo (a different brand under the same group); the live PANNA wordmark file is not in the upload set. **🚩 SUBSTITUTION FLAG.**

## Font substitutions

- **Fjalla One** — loaded directly from Google Fonts (`@import` in `colors_and_type.css`). Matches the live site exactly.
- **Verdana** — system font, no file needed.

No font substitutions required.

## Caveats / open questions

1. The real PANNA wordmark file is missing. Provided logo is for sister brand "Saborealo".
2. Menu category icons are missing as binaries. Currently substituted with Lucide CDN glyphs in the UI kit.
3. Food photography is missing as binaries. Hero / banner / product imagery currently uses CSS placeholders. Drop product photos into `assets/photos/` to upgrade fidelity.
