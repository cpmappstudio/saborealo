import { pannaImage as image } from "@/data/panna-assets"

type MenuOrderLocation = {
  label: string
  href: string
}

type MenuProduct = {
  slug: string
  title: string
  image: string
  imageAlt: string
  href: string
  description: string
  rating: number
  orderLocations: readonly MenuOrderLocation[]
}

type MenuCategoryPage = {
  slug: string
  label: string
  title: string
  image: string
  products: readonly MenuProduct[]
}

const emptyOrderLocations: readonly MenuOrderLocation[] = []

const arepaPickFourOrderLocations = [
  {
    label: "Doral",
    href: "https://www.getsauce.com/order/panna-doral/menu/arepas-3abc/dish/arepa-4-flavors-c518",
  },
  {
    label: "Orlando",
    href: "https://www.getsauce.com/order/panna-orlando/menu/arepas-3abc/dish/arepa-4-flavors-c518",
  },
  {
    label: "Weston Road",
    href: "https://www.getsauce.com/order/panna-weston-road/menu/arepas-3abc/dish/arepa-4-flavors-c518",
  },
  {
    label: "Weston Town Center",
    href: "https://www.getsauce.com/order/panna-weston-town-center/menu/arepas-3abc/dish/arepa-4-flavors-c518",
  },
] satisfies readonly MenuOrderLocation[]

const menuProduct = (
  categorySlug: string,
  productSlug: string,
  title: string,
  imagePath: string,
  options: Partial<
    Pick<MenuProduct, "description" | "imageAlt" | "rating" | "orderLocations">
  > = {}
): MenuProduct => ({
  slug: productSlug,
  title,
  image: image(imagePath),
  imageAlt: options.imageAlt ?? title,
  href: `/menu/${categorySlug}/${productSlug}/`,
  description:
    options.description ?? `Explore ${title.toLowerCase()} from PANNA New Latino Food.`,
  rating: options.rating ?? 5,
  orderLocations: options.orderLocations ?? emptyOrderLocations,
})

const placeholderProducts = (
  slug: string,
  label: string,
  productImage: string
): readonly MenuProduct[] => [
  {
    slug,
    title: label,
    image: productImage,
    imageAlt: label,
    href: `/menu/${slug}/${slug}/`,
    description: `Explore PANNA ${label.toLowerCase()} favorites.`,
    rating: 5,
    orderLocations: emptyOrderLocations,
  },
]

const categoryPage = (
  slug: string,
  label: string,
  imagePath: string,
  products?: readonly MenuProduct[]
): MenuCategoryPage => {
  const categoryImage = image(imagePath)

  return {
    slug,
    label,
    title: label,
    image: categoryImage,
    products: products ?? placeholderProducts(slug, label, categoryImage),
  }
}

const arepaProducts = [
  menuProduct(
    "arepas",
    "arepa-pick-4-flavors",
    "AREPA PICK 4 FLAVORS",
    "2025/09/PICK-4-FLAVORS-2.webp",
    {
      description: "Be unique! Pick 4 of your favorite flavors inside an arepa.",
      imageAlt: "PICK 4 FLAVORS",
      orderLocations: arepaPickFourOrderLocations,
    }
  ),
  menuProduct(
    "arepas",
    "arepa-diablito",
    "AREPA DIABLITO",
    "2025/09/AREPA-CON-DIABLITO.png"
  ),
  menuProduct(
    "arepas",
    "arepa-de-carne-asada",
    "CARNE ASADA",
    "2024/10/CARNE-ASADA-1.webp"
  ),
  menuProduct(
    "arepas",
    "arepa-reina-pepiada",
    "REINA PEPIADA",
    "2024/10/reina-pepiada-arepa-venezolana-3.webp"
  ),
  menuProduct("arepas", "arepa-pelua", "PELÚA", "2024/10/AREPA-PELUA.webp"),
  menuProduct("arepas", "arepa-catira", "CATIRA", "2024/10/AREPA-CATIRA.webp"),
  menuProduct(
    "arepas",
    "arepa-pabellon",
    "PABELLÓN",
    "2024/10/AREPA-DE-PABELLON.webp"
  ),
  menuProduct(
    "arepas",
    "arepa-de-perico",
    "PERICO",
    "2024/10/AREPA-DE-PERICO.webp"
  ),
  menuProduct("arepas", "pernil", "PERNIL", "2024/11/AREPA-DE-PERNIL.webp"),
  menuProduct("arepas", "arepa-tropical", "TROPICAL", "2024/10/arepa-tropical.webp"),
  menuProduct(
    "arepas",
    "arepa-ham-cheese",
    "HAM & CHEESE",
    "2024/10/AREPA-HAM-AND-CHESSE.webp"
  ),
  menuProduct(
    "arepas",
    "arepa-queso-guayanes",
    "GUAYANÉS CHEESE",
    "2024/10/AREPA-QUESO-GUAYANES.webp"
  ),
  menuProduct(
    "arepas",
    "gouda-cheese",
    "GOUDA CHEESE",
    "2024/10/QUESO-AMARILLO.webp"
  ),
  menuProduct(
    "arepas",
    "arepa-queso-mano",
    "DE MANO CHEESE",
    "2024/10/AREPA-QUESO-MANO.webp"
  ),
  menuProduct(
    "arepas",
    "arepa-queso-paisa",
    "PAISA CHEESE",
    "2024/10/AREPA-QUESO-PAISA.webp"
  ),
  menuProduct("arepas", "arepa-domino", "DOMINÓ", "2025/09/AREPA-DOMINO.webp"),
  menuProduct(
    "arepas",
    "baby-arepitas-mix",
    "BABY AREPAS",
    "2024/10/BABY-AREPITAS-MIX.webp"
  ),
] satisfies readonly MenuProduct[]

const categoryPages = [
  categoryPage("arepas", "AREPAS", "2024/10/arepa-tropical.webp", arepaProducts),
  categoryPage("cachapas", "CACHAPAS", "2024/10/CACHAPA-DE-PABELLON.webp"),
  categoryPage("brunch", "BRUNCH", "2025/09/MISMOSAS-PROSECCO.webp"),
  categoryPage("from-the-grill", "FROM THE GRILL", "2024/12/PARRILLA.webp"),
  categoryPage(
    "latin-corner-retail",
    "LATIN CORNER",
    "2024/10/LATIN-CORNER-PORTADA-CATEGORIA.webp"
  ),
  categoryPage("platters", "PLATTERS", "2024/10/PLATTERS-PORTADA-CATEGORIA.webp"),
  categoryPage("grab-and-go", "GRAB 'N GO", "2025/06/CATEGORIA-GRAB-AND-GO.webp"),
  categoryPage("burgers", "BURGERS", "2025/01/PORTADA-BURGER.webp"),
  categoryPage("desserts", "DESSERTS", "2024/12/PORTADA-GOLFEADO.webp"),
  categoryPage(
    "juices-and-smoothies",
    "JUICES & SMOOTHIES",
    "2024/12/JUICE-AND-SMOOTHIES.webp"
  ),
  categoryPage("coffees", "COFFEE", "2024/10/COFFEE-PORTADA-CATEGORIA.webp"),
  categoryPage("breakfast", "BREAKFAST", "2025/01/PORTADA-BREAKFAST.webp"),
  categoryPage("patacones", "PATACONES", "2024/10/SWEET-PATACON-BEEF.webp"),
  categoryPage("salads", "SALADS", "2024/11/SALAD-QUINOA-GARDEN-CHICKEN.webp"),
  categoryPage("plato-latino", "PLATO LATINO", "2025/09/PLATO-LATINO-CATEGORIA.webp"),
] satisfies readonly MenuCategoryPage[]

export const pannaMenuData = {
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
  categoryPages,
  categories: categoryPages.map(({ slug, label, image }) => ({
    label,
    href: `/menu/${slug}/`,
    image,
  })),
} as const

export type PannaMenuData = typeof pannaMenuData
export type PannaMenuCategoryPage = MenuCategoryPage
export type PannaMenuProduct = MenuProduct
