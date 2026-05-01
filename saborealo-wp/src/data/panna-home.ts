import { pannaImage as image } from "@/data/panna-assets"
import { PANNA_ORDER_URL } from "@/data/panna-links"

export const pannaHomeData = {
  starProducts: [
    {
      layout: "text",
      bg: "#FFBA52",
      product: "/images/products/breakfast.png",
      title: "START YOUR DAY THE SABOREALO WAY",
      text: "Build your perfect breakfast plate. Pick your eggs, pick your side — come in and make it yours.",
      cta: "SEE BREAKFAST MENU",
      href: "/menu",
    },
    {
      layout: "text",
      bg: "#FFBA52",
      product: "/images/products/puerto-rico-food.png",
      title: "A TASTE OF PUERTO RICO",
      text: "Authentic flavors straight from the island. Bring the tradition to your table.",
      cta: "SEE FULL MENU",
      href: "/menu",
    },
    {
      layout: "text",
      bg: "#FFBA52",
      product: "/images/products/drinks.png",
      title: "DRINKS FOR EVERY MOOD",
      text: "Fresh juices, smoothies, and coffee. Always cold, always hot, always SABOREALO.",
      cta: "SEE DRINKS MENU",
      href: "/menu",
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
    title: "Authentic Puerto Rican Flavor, Fresh Every Day",
    underline: "/trazo.webp",
    image: "/images/stores/saborealo-matador-store.jpg",
    imageAlt: "Saborealo Bakery store exterior",
    paragraphs: [
      [
        "Saborealo Bakery brings the warmth and flavor of Puerto Rico to Kissimmee with food made to satisfy every craving.",
        "From breakfast sandwiches and fresh coffee to mofongo, frituras, pastries, and hot plates, every visit is full of comfort, tradition, and sabor.",
      ],
      [
        "Inspired by the spirit of Puerto Rican home cooking and the energy of the local community, Saborealo feels welcoming, vibrant, and proudly boricua.",
        "With the touch of Chef Noel from Aibonito, Puerto Rico, it is the kind of place where family favorites, quick bites, and everyday meals come together.",
      ],
    ],
  },
} as const;

export type PannaHomeData = typeof pannaHomeData;
