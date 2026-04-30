import { pannaImage as image } from "@/data/panna-assets"
import { pannaLocationStoreCards } from "@/data/panna-locations"
import { PANNA_ORDER_URL } from "@/data/panna-links"

const menuRowItem = (slug: string, label: string, imagePath: string) => ({
  label,
  image: image(imagePath),
  href: `/menu/${slug}/`,
})

export const pannaHomeData = {
  heroSlides: [
    {
      alt: "PANNA coffee counter",
      desktop: image("2026/02/BANNER-COUNTER-COFFEE-HORIZONTAL.webp"),
      mobile: image("2026/02/BANNER-COUNTER-COFFEE-VERTICAL.webp"),
    },
    {
      alt: "All week brunch",
      desktop: image("2026/04/BANNER-ALL-WEEK-BRUNCH-HORIZONTAL.webp"),
      mobile: image("2026/04/BANNER-ALL-WEEK-BRUNCH-VERTICAL.webp"),
    },
    {
      alt: "Pick 4 flavors",
      desktop: image("2024/10/BANNER-PICK-4-FLAVORS.webp"),
      mobile: image("2024/10/BANNER-PICK-4-FLAVORS-MOVIL.png"),
    },
    {
      alt: "Secret menu",
      desktop: image("2025/01/SECRET-MENU-HORIZONTAL-3.webp"),
      mobile: image("2025/01/SECRET-MENU-MOVIL-3.webp"),
    },
    {
      alt: "PANNA blog",
      desktop: image("2024/11/BLOG-PANNA.webp"),
      mobile: image("2024/11/BLOG-PANNA-MOVIL.webp"),
    },
    {
      alt: "Desserts",
      desktop: image("2024/11/BG-DESSERTS.webp"),
      mobile: image("2024/11/BACKGROUND-DESSERTS-MOVIL.webp"),
    },
    {
      alt: "Order online",
      desktop: image("2024/11/BACKGROUND-ORDER-ONLINE.png"),
      mobile: image("2024/11/BACKGROUND-ORDER-ONLINE-MOVIL.png"),
    },
    {
      alt: "Grab N Go",
      desktop: image("2025/06/GRAB-N-GO-BANNER-HORIZONTAL.webp"),
      mobile: image("2025/06/GRAB-AND-GO-VERTICAL.webp"),
    },
    {
      alt: "Golfeados",
      desktop: image("2024/11/BACKGROUND-GOLFEADOS.webp"),
      mobile: image("2024/11/BACKGROUND-GOLFEADOS-MOVIL.webp"),
    },
    {
      alt: "Gift card",
      desktop: image("2024/11/BG-GIFT-CARD-H.webp"),
      mobile: image("2024/11/BG-GIFT-CARD-MOVIL.webp"),
    },
    {
      alt: "Omelette",
      desktop: image("2025/01/BACKGROUND-2.webp"),
      mobile: image("2025/01/BACKGROUND-MOVIL-2.webp"),
    },
  ],
  menuRows: [
    [
      menuRowItem("arepas", "AREPAS", "2024/10/ICONO_AREPAS.webp"),
      menuRowItem("cachapas", "CACHAPAS", "2024/10/ICONO_CACHAPAS.webp"),
      menuRowItem("brunch", "BRUNCH", "2025/09/BRUNCH2.webp"),
      menuRowItem("from-the-grill", "FROM THE GRILL", "2024/10/FROM-THE-GRILL.webp"),
      menuRowItem("latin-corner-retail", "LATIN CORNER", "2024/10/ICONO_LATIN-CORNER.webp"),
      menuRowItem("platters", "PLATTERS", "2024/10/ICONO_PLATTERS.webp"),
      menuRowItem("grab-and-go", "GRAB 'N GO", "2024/10/ICONO_GRAB-GO.webp"),
      menuRowItem("burgers", "BURGERS", "2024/10/BURGER.webp"),
    ],
    [
      menuRowItem("salads", "SALADS", "2024/10/ICONO_SALADS.webp"),
      menuRowItem("patacones", "PATACONES", "2024/10/ICONO_PATACON.webp"),
      menuRowItem("breakfast", "BREAKFAST", "2024/10/ICONO_BREAKFAST.webp"),
      menuRowItem("coffees", "COFFEE", "2024/10/ICONO_COFFEE.webp"),
      menuRowItem("juices-and-smoothies", "JUICES & SMOOTHIES", "2024/10/ICONO_JUICE-SMOOTHIES.webp"),
      menuRowItem("desserts", "DESSERT", "2024/10/ICONO_DESSERT.webp"),
      menuRowItem("plato-latino", "PLATO LATINO", "2024/10/NEW-LATINO-MIX-1.webp"),
    ],
  ],
  starProducts: [
    {
      layout: "image-title",
      bg: "#FFF2DC",
      product: image("2024/10/PICK-4-FLAVORS-BANNER-PUBLICIDAD.webp"),
      titleImage: image("2024/10/TITULO-PICK-4-FLAVORS.webp"),
      cta: "CALL TO ORDER",
      href: "https://mypanna.com/menu/arepa-pick-4-flavors/",
    },
    {
      layout: "text",
      bgImage: image("2024/10/FONDO-PLATTERS.webp"),
      product: image("2024/10/PLATTERS.webp"),
      title: "CREATE YOUR OWN PLATTERS!",
      text: "Combine and savor the finest PANNA delights. It's simple and delicious.",
      cta: "CALL TO ORDER",
      href: "https://mypanna.com/menu/catering/",
    },
    {
      layout: "image-title",
      bgImage: image("2024/10/BACK-GRAB.webp"),
      product: image("2025/06/PRODUCTOS-GRAB-GO-VERTICAL.webp"),
      titleImage: image("2025/01/GRAB-N-GO-TITULO.webp"),
      text: "Enjoy the best flavors of PANNA at home. Visit our Grab 'n Go section and choose your favorites!",
      cta: "ORDER NOW!",
      href: "https://mypanna.com/menu/grab-and-go/",
    },
  ],
  promoCards: [
    {
      image: image("2024/10/PICK-UP-AND-DELIVERY.webp"),
      title: "Latino Flavors Delivered to Your Door!",
      text: "Order Now and Savor Without the Wait - Pick Up and Delivery from Panna New Latino Food",
      cta: "STAR NOW",
      href: PANNA_ORDER_URL,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      image: image("2024/12/BANNER-GIFT-CARD-HOME.webp"),
      title: "IT'S TIME TO GET YOUR PANNA GIFT CARD",
      text: "The perfect gift for your loved ones or friends. Get it at any PANNA or order online from the button below.",
      cta: "BUY NOW",
      href: "https://mypanna.com/giftcards/",
    },
  ],
  stores: pannaLocationStoreCards,
  aboutStory: {
    title: "A Fast Casual Venezuelan Restaurant Making History in the USA!",
    underline: image("2024/10/TRAZO@2x.webp"),
    image: image("2024/10/PANNA-STORES.webp"),
    imageAlt: "PANNA store exterior",
    paragraphs: [
      [
        "PANNA, a taste to remember, the place you love. We began as a Venezuelan restaurant since 2000. Come and visit any of our fast, casual locations to enjoy the most delicious",
        "Venezuelan food combined with other traditional delights from Colombia and Argentina.",
      ],
      [
        "At PANNA, everyone can find something to eat for",
        "breakfast, lunch, snack, dinner, and even late night. Latin people and guests from around the World have great time at PANNA with its casual environment and friendly service. Latin American food is well known for its diversity of",
        "flavors and textures; we are proud to offer the best",
        "enezuelan “cachitos and tequeños” in the USA, made with traditional recipes that you can eat at any Venezuelan",
        "estaurant . Try something different, try the best Venezuelan food at PANNA today!",
      ],
    ],
  },
} as const

export type PannaHomeData = typeof pannaHomeData
