import { pannaImage as image } from "@/data/panna-assets";
import { PANNA_ORDER_URL } from "@/data/panna-links";

const menuRowItem = (slug: string, label: string, imagePath: string) => ({
  label,
  image: image(imagePath),
  href: `/menu/${slug}/`,
});

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
      menuRowItem(
        "from-the-grill",
        "FROM THE GRILL",
        "2024/10/FROM-THE-GRILL.webp",
      ),
      menuRowItem(
        "latin-corner-retail",
        "LATIN CORNER",
        "2024/10/ICONO_LATIN-CORNER.webp",
      ),
      menuRowItem("platters", "PLATTERS", "2024/10/ICONO_PLATTERS.webp"),
      menuRowItem("grab-and-go", "GRAB 'N GO", "2024/10/ICONO_GRAB-GO.webp"),
      menuRowItem("burgers", "BURGERS", "2024/10/BURGER.webp"),
    ],
    [
      menuRowItem("salads", "SALADS", "2024/10/ICONO_SALADS.webp"),
      menuRowItem("patacones", "PATACONES", "2024/10/ICONO_PATACON.webp"),
      menuRowItem("breakfast", "BREAKFAST", "2024/10/ICONO_BREAKFAST.webp"),
      menuRowItem("coffees", "COFFEE", "2024/10/ICONO_COFFEE.webp"),
      menuRowItem(
        "juices-and-smoothies",
        "JUICES & SMOOTHIES",
        "2024/10/ICONO_JUICE-SMOOTHIES.webp",
      ),
      menuRowItem("desserts", "DESSERT", "2024/10/ICONO_DESSERT.webp"),
      menuRowItem(
        "plato-latino",
        "PLATO LATINO",
        "2024/10/NEW-LATINO-MIX-1.webp",
      ),
    ],
  ],
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
  stores: [
    {
      name: "DORAL",
      badgeName: "PANNA Doral",
      guruHref: "https://restaurantguru.com/Panna-Doral-Doral",
      image: image("2024/10/DORAL-768x384.webp"),
      address: "3887 NW 107th AVE. Suite #101 Doral, 33178",
      phone: "(305) 614-0202",
      cta: "MORE DETAILS",
      href: "https://mypanna.com/locations/doral/",
    },
    {
      name: "ORLANDO",
      badgeName: "PANNA Orlando",
      guruHref: "https://restaurantguru.com/PANNA-Orlando",
      image: image("2024/10/PANNA-ORLANDO-768x384.webp"),
      address: "13526 Village Park Dr #200 Orlando, FL 32837",
      phone: "(407) 270-7891",
      cta: "ORDER NOW",
      href: "https://www.getsauce.com/order/panna-orlando/menu",
    },
    {
      name: "WESTON ROAD",
      badgeName: "PANNA Weston Road",
      guruHref: "https://restaurantguru.com/Panna-Cafe-Weston-Weston",
      image: image("2024/10/WESTON-ROAD-768x384.webp"),
      address: "2620 Weston Rd, Weston, FL 33331",
      phone: "(954) 618-4017",
      cta: "MORE DETAILS",
      href: "https://mypanna.com/locations/weston-road/",
    },
    {
      name: "WESTON TOWN CENTER",
      badgeName: "PANNA Weston Town Center",
      guruHref: "https://restaurantguru.com/PANNA-Weston-Town-Center-Weston",
      image: image("2024/10/WESTON-768x384.webp"),
      address: "1731 Main Street Weston, FL 33326",
      phone: "(954) 372-1944",
      cta: "MORE DETAILS",
      href: "https://mypanna.com/locations/weston-town-center/",
    },
  ],
  aboutStory: {
    title: "Authentic Puerto Rican Flavor, Fresh Every Day",
    underline: image("2024/10/TRAZO@2x.webp"),
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
