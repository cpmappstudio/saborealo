import { pannaImage as image } from "@/data/panna-assets"

/**
 * Brand assets that belong to the layout/design system rather than to
 * specific Sanity content (decorative backgrounds, info icons, hero
 * artwork). They are kept here so editorial content can stay in the CMS
 * while presentation assets remain co-located with the codebase.
 */
export const pannaSectionAssets = {
  menu: {
    hero: {
      title: "Dine In Menu",
      background: image("2024/10/BACK-DINE-IN.webp"),
      titleImage: {
        src: image("2024/10/DINE-IN-MENU.webp"),
        width: 967,
        height: 406,
      },
      logoImage: {
        src: image("2024/10/LOGO-DINE-IN.png"),
        width: 401,
        height: 235,
      },
    },
    categoryHero: {
      background: image("2024/10/BNR-CATEGORIAS-1.webp"),
    },
  },
  location: {
    hero: {
      background: image("2024/10/BNR-CATEGORIAS-1.webp"),
    },
    mapBackground: image("2024/10/Graffiti-Negro.webp"),
    infoIcons: {
      address: image("2024/10/ADDRESS.webp"),
      email: image("2024/10/EMAIL.webp"),
      hours: image("2024/10/HOURS.webp"),
      openedDay: image("2024/10/OPENDAY.webp"),
      phone: image("2024/10/PHONE-1.webp"),
    },
  },
} as const

export type PannaSectionAssets = typeof pannaSectionAssets
