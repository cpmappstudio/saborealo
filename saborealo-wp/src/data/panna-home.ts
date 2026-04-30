import { pannaImage as image } from "@/data/panna-assets"
import { PANNA_ORDER_URL } from "@/data/panna-links"

export const pannaHomeData = {
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
