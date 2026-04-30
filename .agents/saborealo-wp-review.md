# Revisión de arquitectura — `saborealo-wp`

Auditoría profunda del proyecto Astro+React+shadcn ubicado en
`saborealo-wp/`, contrastada con las skills locales en `.agents/skills/`
(astro, frontend-design, shadcn, web-design-guidelines) y con la
documentación oficial pública.

- **Fecha**: 2026-04-30
- **Stack**: Astro 6.1, React 19, shadcn/ui (style `radix-mira`),
  Tailwind v4, TypeScript estricto, pnpm.
- **Naturaleza del sitio**: SSG puro (sin adapter), réplica del sitio
  WordPress vivo `mypanna.com` para PANNA New Latino Food.

---

## 1. Resumen

Proyecto **maduro y bien estructurado**: capa de datos tipada
(`data/panna-*.ts` con `as const` + `satisfies`), separación limpia
Astro (estático) vs React (interactivo), accesibilidad por encima del
promedio (skip link, ARIA landmarks, `aria-live`, semántica `<dl>`,
`<details>`), y un sistema de diseño coherente con identidad de marca
(rojo `#EA0029`, crema `#FFF9ED`, Fjalla One + Caveat).

La deuda principal es:

1. Imágenes servidas desde dominio externo sin optimización.
2. SEO incompleto (sin `site`, sin sitemap, sin OG/canonical).
3. Divergencia con la filosofía de styling de shadcn (override masivo
   vía CSS hand-written apuntando a `[data-slot=...]`).

---

## 2. Cumplimiento por skill

### 2.1 `astro` — ✅ mayormente

- ✅ Estructura `src/{pages,components,layouts,styles}` correcta.
- ✅ Rutas dinámicas con `getStaticPaths()` correctamente tipadas
  (`pages/menu/[category].astro`, `pages/menu/[category]/[item].astro`,
  `pages/locations/[location].astro`).
- ✅ TypeScript estricto (`extends "astro/tsconfigs/strict"`), alias
  `@/*` configurado.
- ✅ Hidratación granular y consciente: `client:load` con
  `transition:persist` en el header; `client:visible={{rootMargin:"200px"}}`
  para grids/carruseles below-the-fold.
- ⚠️ **Falta `site` en `astro.config.mjs`.** Astro docs:
  > "Astro uses this full URL to generate your sitemap and canonical
  > URLs in your final build. It is strongly recommended that you set
  > this configuration to get the most out of Astro."
  Fuente: <https://docs.astro.build/en/reference/configuration-reference/>.
- ⚠️ Sin script `astro check` en `package.json` (la skill `astro`
  recomienda ejecutarlo antes del build).

### 2.2 `shadcn` — ⚠️ mezclado

- ✅ `components.json` válido (style `radix-mira`, baseColor `neutral`,
  cssVariables `true`, iconLibrary `hugeicons`).
- ✅ Uso de la composición canónica de formularios:
  `Field`/`FieldGroup`/`FieldSet`/`FieldLegend`
  (`ContactPage.tsx`, `JobApplicationPage.tsx`).
- ✅ `asChild` aplicado a `Button` para anchors semánticos.
- ✅ `cn()` para clases condicionales.
- ✅ `data-slot` respetado por los componentes UI.
- ❌ **Override visual masivo desde CSS apuntando a
  `[data-slot=...]`.** La regla de styling
  ([`.agents/skills/shadcn/rules/styling.md`](skills/shadcn/rules/styling.md))
  exige *"className for layout, not styling — never override component
  colors or typography"* y prefiere variantes / tokens semánticos /
  variables CSS por encima de overrides ad-hoc. Ejemplos:
  - `styles/components/hero-carousel.css` resetea
    `[data-slot="card"]` (border, box-shadow).
  - `styles/components/menu-page.css` redefine
    `.menu-category-card[data-slot="card"]` con hover/scale.
  - `styles/components/location-page.css` redefine
    `.location-gallery__thumbnail-button[data-slot="button"]`.
  El acoplamiento por slot rompería si shadcn renombra slots.
- ❌ **`!important` × 4 contra estados nativos del Button.** En
  `styles/components/location-page.css` líneas 76, 87, 98, 104 —
  síntoma de pelear contra el manejo de `disabled`/opacidad del
  componente.
- ❌ **`CarouselDots` envuelve los dots en `CardFooter` fuera de un
  `Card`** (`components/home/CarouselDots.tsx:29`). La regla de
  composición ([`.agents/skills/shadcn/rules/composition.md`](skills/shadcn/rules/composition.md))
  define `CardFooter` como parte de la composición de `Card`. Usarlo
  como contenedor genérico es abuso semántico — debería ser un `<div>`
  con `role="group"` o un primitivo neutro.
- ⚠️ **`LocationGalleryCarousel` reimplementa controles encima de
  `useCarousel`** con SVG inline en vez de usar
  `CarouselPrevious`/`CarouselNext`. La skill recomienda
  *"Compose, don't reinvent"*. Si la divergencia es intencional,
  documentarla.
- ⚠️ Layout/spacing en CSS plano (gap/grid expresados en píxeles)
  desaprovecha utilities Tailwind v4. La skill prefiere `gap-*` y
  `flex flex-col gap-*`; aquí no aparece prácticamente ningún utility
  en JSX.

### 2.3 `frontend-design` — ✅

- ✅ Aesthetic clara, no genérica AI: paleta cálida, Fjalla One
  display + Caveat handwriting, decoración recurrente
  (`MANCHA.png`, `PannaSectionNotch`, underlines ilustradas).
- ✅ Animaciones respetan `prefers-reduced-motion`
  (`hooks/use-carousel-autoplay.ts`).
- ✅ Composición intencional — `PannaPageIntro`,
  `PannaDecoratedHeading`, `PannaTextHero` reutilizables.

### 2.4 `web-design-guidelines` — ✅ con huecos

- ✅ Skip link, landmark `<main id="main-content">`,
  `aria-current="page"`, `aria-labelledby`, `sr-only` para títulos
  visualmente ocultos, `aria-hidden`/`focusable="false"` en SVGs
  decorativas, `aria-live="polite"` y `aria-pressed` en carruseles.
- ✅ Semántica: `<dl>/<dt>/<dd>` para horarios
  (`LocationInfoGrid.astro`), `<details>/<summary>` para órdenes
  (`MenuItemDetail.tsx`).
- ✅ `loading="lazy"`, `decoding="async"`, `fetchpriority="high"`
  para above-the-fold.
- ⚠️ Sin canonical, sin Open Graph / Twitter cards, sin sitemap.
- ⚠️ Imágenes externas sin optimizar (ver §3.1).
- ⚠️ Formularios sin validación cliente visible — los componentes
  shadcn soportan `data-invalid` + `aria-invalid` (skill `forms`),
  pero no se aplican dinámicamente.

---

## 3. Hallazgos detallados

### 3.1 [Alta] Imágenes remotas sin optimización

- **Dónde**: `src/data/panna-assets.ts`
  (`PANNA_MEDIA_BASE_URL = "https://mypanna.com/wp-content/uploads"`)
  y todos los `data/panna-*.ts` que lo consumen vía `pannaImage()`.
  También `styles/components/store-cards.css:23` usa una URL absoluta.
- **Por qué es un problema**: Astro puede optimizar imágenes remotas
  declarando `image.domains` o `image.remotePatterns` en la config.
  Hoy ninguna de las dos está configurada, así que las imágenes
  pasan tal cual desde WordPress sin resize, sin AVIF/WebP responsive,
  sin `<Image>`. Cita oficial:
  > "Remote images from other sources will not be optimized, but using
  > the `<Image />` component for these images will prevent Cumulative
  > Layout Shift (CLS)."
  Fuente: <https://docs.astro.build/en/guides/images/>.
- **Recomendación**:
  - Migrar assets críticos (logo, hero, decorativos pequeños) a
    `public/` o `src/assets/`.
  - Para los que sigan en `mypanna.com`, registrar el dominio en
    `astro.config.mjs` (`image.domains: ["mypanna.com"]`) y
    reemplazar `<img>` por `<Image>`/`<Picture>` de `astro:assets`.

### 3.2 [Alta] SEO incompleto

- **Dónde**: `astro.config.mjs` (sin `site`), `src/layouts/Layout.astro`
  (sin OG, sin canonical, sin alternates).
- **Por qué**: Astro docs marcan `site` como *strongly recommended*;
  habilita sitemap y canonicals. Para un restaurante con SEO local,
  son señales relevantes.
- **Recomendación**:
  - Añadir `site: "https://<dominio-final>"`.
  - Instalar `@astrojs/sitemap`.
  - Añadir `<link rel="canonical">`, OG y Twitter cards en
    `Layout.astro` con props opcionales (image, type).

### 3.3 [Media] `!important` para anular estados de Button shadcn

- **Dónde**: `src/styles/components/location-page.css` líneas
  **76, 87, 98, 104**.
- **Verificado**: 4 ocurrencias, todas sobre `opacity` de
  `[data-slot="button"]`.
- **Por qué**: indica que se está peleando contra el manejo nativo de
  `disabled` y estados del componente.
- **Recomendación**: usar la variante `ghost` o crear una variante
  CVA dedicada para los thumbnails; alternativamente, sustituir el
  `Button` por un `<button>` plano con la clase del proyecto cuando
  el componente shadcn no encaje.

### 3.4 [Media] Override masivo vía `[data-slot]` en CSS

- **Dónde**: prácticamente todos los archivos en
  `src/styles/components/` (21 archivos).
- **Por qué**: contradice la regla `styling.md` *"className for
  layout, not styling"*. El acoplamiento al atributo `data-slot` es
  frágil ante actualizaciones de shadcn y dificulta razonar sobre el
  estilo final.
- **Recomendación** (gradual): identificar qué overrides realmente
  pertenecen a la marca y moverlos a:
  1. variantes CVA propias dentro de `components/ui/*`,
  2. tokens en `@theme inline { ... }` (`global.css`), o
  3. `@layer utilities` con clases reutilizables.
  Reservar el CSS por componente para layout específico de página.

### 3.5 [Media] `CarouselDots` usa `CardFooter` fuera de `Card`

- **Dónde**: `src/components/home/CarouselDots.tsx:29`.
- **Por qué**: `CardFooter` es parte de la composición de `Card`
  (skill `composition.md`). Usarlo como contenedor genérico de un
  grupo de botones es abuso semántico.
- **Recomendación**: reemplazar por `<div role="group" aria-label=...>`.
  Mantener la clase `carousel-dots` para el styling.

### 3.6 [Media] `LocationGalleryCarousel` reimplementa controles

- **Dónde**: `src/components/locations/LocationGalleryCarousel.tsx`.
- **Por qué**: hay que justificar por qué no se usan
  `CarouselPrevious`/`CarouselNext` ni `CarouselDots` ya existente
  (DRY).
- **Recomendación**: si la divergencia es por aria/UX, documentar en
  comentario in-file (rara excepción válida para comentarios — explica
  el *por qué*, no el *qué*).

### 3.7 [Media] Action de búsqueda hardcoded a `mypanna.com`

- **Dónde**: `src/components/site/SiteHeader.tsx:208`
  (`action="https://mypanna.com/"`).
- **Por qué**: si la intención del rebuild es servir el sitio nuevo,
  el form de búsqueda redirige a WordPress. Es un acoplamiento
  invisible.
- **Recomendación**: o eliminar el campo de búsqueda hasta tener
  endpoint propio, o explicitarlo en `data/panna-site.ts` con un
  campo `searchAction`.

### 3.8 [Baja] Regex de teléfono duplicado

- **Dónde**:
  - `src/data/panna-contact.ts:75` (inline literal).
  - `src/data/panna-job-application.ts:60`
    (`const phonePattern = "[0-9()#&+*=. -]+"`).
- **Recomendación**: extraer a `src/lib/form-patterns.ts` y reusar.

### 3.9 [Baja] Mezcla de hrefs absolutos y relativos

- **Dónde**: `src/data/panna-home.ts:97,106,115,133` (hrefs
  absolutos a `https://mypanna.com/menu/*` y `/giftcards/`),
  vs `src/data/panna-site.ts` que usa rutas relativas (`/menu/`,
  `/about-us/`).
- **Por qué**: los enlaces a `mypanna.com` saltan al sitio WP
  legacy en lugar de quedarse dentro de la SPA estática.
- **Recomendación**: decidir política única (mientras no exista la
  página equivalente, mantener WP; pero documentarlo y, cuando
  exista, redirigir).

### 3.10 [Baja] `README.md` es el placeholder de Astro starter

- **Dónde**: `saborealo-wp/README.md`.
- **Recomendación**: reescribir explicando estructura, política de
  assets (`mypanna.com` vs `public/`), scripts, dónde editar copy
  (`data/panna-*.ts`).

### 3.11 [Baja] `package.json` sin `check` ni lint

- **Dónde**: `package.json`.
- **Recomendación**: añadir
  - `"check": "astro check"`,
  - opcionalmente `"format"` con Prettier o Biome,
  - configurar pre-commit / CI para `astro check`.

### 3.12 [Baja] Sin i18n

- **Dónde**: todo el contenido (`data/panna-*.ts`) está en inglés
  hardcoded.
- **Por qué**: no es un bug per se, pero el restaurante opera en
  Miami/Orlando con audiencia bilingüe; vale la pena dejarlo
  documentado como decisión consciente o roadmap.
- **Recomendación**: si entra ES en el futuro, anticipar la
  estructura — `data/en/*.ts` y `data/es/*.ts` o Astro i18n routing.

---

## 4. Hallazgos preliminares descartados tras verificación

Estos aparecieron en una primera pasada y fueron **descartados** tras
verificación directa contra el código y docs oficiales:

| # | Hallazgo descartado | Verificación |
|---|---|---|
| A | `tw-animate-css` importado pero sin uso | Falso. Se usa en `components/ui/navigation-menu.tsx` (3 ocurrencias) y `components/ui/sheet.tsx` (2 ocurrencias) vía `animate-in`/`animate-out`/`fade-in`. |
| B | `dist/` y `node_modules/` versionados | Falso. `.gitignore` incluye ambos correctamente. La presencia local en `ls` es solo de la copia de trabajo. |

---

## 5. Recomendaciones priorizadas

| Prioridad | Acción | Esfuerzo |
|-----------|--------|----------|
| P1 | Configurar `site` + `@astrojs/sitemap` + canonical/OG en `Layout.astro` | bajo |
| P1 | Registrar `mypanna.com` en `image.domains` y migrar a `<Image>`/`<Picture>` | medio |
| P2 | Eliminar los 4 `!important` en `location-page.css` introduciendo variante CVA o reemplazando el Button | bajo |
| P2 | Mover `CarouselDots` fuera de `CardFooter` | trivial |
| P2 | Justificar o reemplazar la implementación de controles de `LocationGalleryCarousel` | medio |
| P3 | Decidir política de hrefs (todo relativo o todo a WP) y documentar | bajo |
| P3 | Reescribir `README.md` real | bajo |
| P3 | Añadir `astro check` a scripts y CI | trivial |
| P3 | Extraer `phonePattern` a un módulo compartido | trivial |
| P4 | Plan de i18n si entra en roadmap | medio |

---

## 6. Fortalezas a preservar

No todo es deuda. Conviene proteger explícitamente:

- Capa de datos centralizada y tipada (`data/panna-*.ts` con
  `as const` + `satisfies`).
- Hidratación granular y deliberada
  (`client:visible` con `rootMargin`, `transition:persist` en header).
- Accesibilidad sólida — patrón consistente en todos los componentes.
- Naming convention clara (`Panna*` sistema, `Site*` chrome,
  por dominio para features).
- Composición reusable (`PannaPageIntro`, `PannaDecoratedHeading`,
  `PannaTextHero`).
- `useCarouselAutoplay` con soporte `prefers-reduced-motion`.

---

## 7. Referencias

- Skill local: [`.agents/skills/astro/SKILL.md`](skills/astro/SKILL.md)
- Skill local: [`.agents/skills/shadcn/SKILL.md`](skills/shadcn/SKILL.md)
- Skill local: [`.agents/skills/shadcn/rules/styling.md`](skills/shadcn/rules/styling.md)
- Skill local: [`.agents/skills/shadcn/rules/composition.md`](skills/shadcn/rules/composition.md)
- Skill local: [`.agents/skills/frontend-design/SKILL.md`](skills/frontend-design/SKILL.md)
- Skill local: [`.agents/skills/web-design-guidelines/SKILL.md`](skills/web-design-guidelines/SKILL.md)
- Astro Configuration Reference — `site` option:
  <https://docs.astro.build/en/reference/configuration-reference/>
- Astro Images guide — remote images & `image.domains`:
  <https://docs.astro.build/en/guides/images/>
