import { pannaImage as image } from "@/data/panna-assets"

const locationPath = (slug: string) => `/locations/${slug}/`

const mapEmbedSrc = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=m&z=11&output=embed&iwloc=near`

const defaultHours = [
  { day: "Mon", time: "7:30–22:00" },
  { day: "Tue", time: "7:30–22:00" },
  { day: "Wed", time: "7:30–22:00" },
  { day: "Thu", time: "7:30–22:00" },
  { day: "Fri", time: "7:30–22:00" },
  { day: "Sat", time: "7:30–22:00" },
  { day: "Sun", time: "7:00–22:00" },
] as const

const locationInfoIcons = {
  address: image("2024/10/ADDRESS.webp"),
  email: image("2024/10/EMAIL.webp"),
  hours: image("2024/10/HOURS.webp"),
  openedDay: image("2024/10/OPENDAY.webp"),
  phone: image("2024/10/PHONE-1.webp"),
} as const

const heroBackground = image("2024/10/BNR-CATEGORIAS-1.webp")
const mapBackground = image("2024/10/Graffiti-Negro.webp")

const locations = [
  {
    slug: "doral",
    title: "DORAL",
    footerLabel: "Doral",
    path: locationPath("doral"),
    phrase: "Doral’s New Latino Food Choice!",
    metaTitle: "PANNA Doral | PANNA New Latino Food",
    metaDescription:
      "Visit PANNA Doral for New Latino food, fresh pastries, arepas, coffee, and casual Venezuelan-inspired favorites.",
    storeCard: {
      badgeName: "PANNA Doral",
      guruHref: "https://restaurantguru.com/Panna-Doral-Doral",
      image: image("2024/10/DORAL-768x384.webp"),
      address: "3887 NW 107th AVE. Suite #101 Doral, 33178",
      phone: "(305) 614-0202",
    },
    gallery: [
      {
        src: image("2024/10/DORAL-PAGE.webp"),
        alt: "PANNA Doral storefront exterior",
        width: 1080,
        height: 800,
      },
      {
        src: image("2024/10/DORAL-2.webp"),
        alt: "Guests dining at PANNA Doral",
        width: 1080,
        height: 800,
      },
      {
        src: image("2024/10/DORAL-3.webp"),
        alt: "PANNA Doral grab and go display",
        width: 1080,
        height: 800,
      },
      {
        src: image("2024/10/DORAL-4.webp"),
        alt: "PANNA Doral food and fries",
        width: 1080,
        height: 800,
      },
      {
        src: image("2024/10/DORAL-5.webp"),
        alt: "PANNA Doral arepas",
        width: 1080,
        height: 800,
      },
      {
        src: image("2024/10/DORAL-1.webp"),
        alt: "PANNA Doral restaurant interior",
        width: 1080,
        height: 800,
      },
    ],
    overview: {
      paragraphs: [
        "PANNA Doral brings New Latino flavors, fresh pastries, coffee, and casual meals to one of Miami’s busiest food communities.",
      ],
      highlight:
        "A friendly stop for breakfast, lunch, dinner, and everyday cravings.",
      bullets: [
        "Casual and modern atmosphere.",
        "Fresh Latin American favorites.",
        "Friendly service.",
      ],
    },
    details: {
      hours: defaultHours,
      address: "3887 NW 107th AVE. Suite #101 Doral, FL 33178",
      phone: "(305) 614-0202",
      phoneHref: "tel:+13056140202",
      email: "info@mypanna.com",
      emailHref: "mailto:info@mypanna.com",
      openedDay: "Since 2000",
    },
    map: {
      src: mapEmbedSrc("PANNA Doral"),
      title: "PANNA Doral",
      tagline: "For years PANNA has delighted all its residents!",
    },
  },
  {
    slug: "orlando",
    title: "ORLANDO",
    footerLabel: "Orlando",
    path: locationPath("orlando"),
    phrase: "Orlando’s New Latino Food Choice!",
    metaTitle: "Venezuelan Restaurant - PANNA Orlando | PANNA New Latino Food",
    metaDescription:
      "Visit PANNA Orlando for New Latino flavors, arepas, tequeños, cachitos, pastries, coffee, and casual Venezuelan-inspired food.",
    storeCard: {
      badgeName: "PANNA Orlando",
      guruHref: "https://restaurantguru.com/PANNA-Orlando",
      image: image("2024/10/PANNA-ORLANDO-768x384.webp"),
      address: "13526 Village Park Dr #200 Orlando, FL 32837",
      phone: "(407) 270-7891",
    },
    gallery: [
      {
        src: image("2024/10/PANNA-ORLANDO-2.webp"),
        alt: "PANNA Orlando dining area",
        width: 768,
        height: 512,
      },
      {
        src: image("2024/10/PANNA-ORLANDO-2-1.webp"),
        alt: "PANNA Orlando counter",
        width: 768,
        height: 512,
      },
      {
        src: image("2024/10/PANNA-ORLANDO-3.webp"),
        alt: "PANNA Orlando seating",
        width: 768,
        height: 512,
      },
      {
        src: image("2024/10/PANNA-ORLANDO-4.webp"),
        alt: "PANNA Orlando interior",
        width: 768,
        height: 512,
      },
      {
        src: image("2024/10/PANNA-ORLANDO-5.webp"),
        alt: "PANNA Orlando food display",
        width: 768,
        height: 512,
      },
      {
        src: image("2024/10/PANNA-ORLANDO-6.webp"),
        alt: "PANNA Orlando restaurant details",
        width: 768,
        height: 512,
      },
    ],
    overview: {
      paragraphs: [
        "In January 2015, supported by the preference of clients, we began a growth plan that is consolidated with the opening of a new location in Orlando. For this growth we are reinforcing the structure of the company, strengthening the corporate area and increasing the requirements in compliance with procedures in the company.",
      ],
      highlight:
        "We bring to Hunter’s Creek and the south area of Orlando, a new and unique concept to discover full of New Latino flavors and textures for all tastes.",
      bullets: [
        "Casual and modern atmosphere with outdoor patio.",
        "Audio and music videos at all times.",
        "TV screens and high-end sound system.",
        "Friendly Service.",
      ],
    },
    details: {
      hours: defaultHours,
      address: "13526 Village Park Dr Ste 200 Orlando, FL 32837",
      phone: "(407) 270-7891",
      phoneHref: "tel:+14072707891",
      email: "orl@mypanna.com",
      emailHref: "mailto:orl@mypanna.com",
      openedDay: "Jan 1st, 2015",
    },
    map: {
      src: mapEmbedSrc("PANNA Orlando"),
      title: "PANNA Orlando",
      tagline: "For years PANNA has delighted all its residents!",
    },
  },
  {
    slug: "weston-road",
    title: "WESTON ROAD",
    footerLabel: "Weston Road",
    path: locationPath("weston-road"),
    phrase: "Weston Road’s New Latino Food Choice!",
    metaTitle: "PANNA Weston Road | PANNA New Latino Food",
    metaDescription:
      "Visit PANNA Weston Road for fresh New Latino food, coffee, pastries, and casual Venezuelan-inspired favorites.",
    storeCard: {
      badgeName: "PANNA Weston Road",
      guruHref: "https://restaurantguru.com/Panna-Cafe-Weston-Weston",
      image: image("2024/10/WESTON-ROAD-768x384.webp"),
      address: "2620 Weston Rd, Weston, FL 33331",
      phone: "(954) 618-4017",
    },
    gallery: [
      {
        src: image("2024/10/WESTON-ROAD-768x384.webp"),
        alt: "PANNA Weston Road storefront",
        width: 768,
        height: 384,
      },
    ],
    overview: {
      paragraphs: [
        "PANNA Weston Road serves New Latino flavors, fresh pastries, coffee, and everyday favorites in a casual restaurant setting.",
      ],
      highlight:
        "A comfortable stop for Latin American flavors and friendly service.",
      bullets: [
        "Casual and modern atmosphere.",
        "Fresh Latin American favorites.",
        "Friendly service.",
      ],
    },
    details: {
      hours: defaultHours,
      address: "2620 Weston Rd, Weston, FL 33331",
      phone: "(954) 618-4017",
      phoneHref: "tel:+19546184017",
      email: "info@mypanna.com",
      emailHref: "mailto:info@mypanna.com",
      openedDay: "Since 2000",
    },
    map: {
      src: mapEmbedSrc("PANNA Weston Road"),
      title: "PANNA Weston Road",
      tagline: "For years PANNA has delighted all its residents!",
    },
  },
  {
    slug: "weston-town-center",
    title: "WESTON TOWN CENTER",
    footerLabel: "Weston Town Center",
    path: locationPath("weston-town-center"),
    phrase: "Weston Town Center’s New Latino Food Choice!",
    metaTitle: "PANNA Weston Town Center | PANNA New Latino Food",
    metaDescription:
      "Visit PANNA Weston Town Center for fresh New Latino food, coffee, pastries, and casual Venezuelan-inspired favorites.",
    storeCard: {
      badgeName: "PANNA Weston Town Center",
      guruHref: "https://restaurantguru.com/PANNA-Weston-Town-Center-Weston",
      image: image("2024/10/WESTON-768x384.webp"),
      address: "1731 Main Street Weston, FL 33326",
      phone: "(954) 372-1944",
    },
    gallery: [
      {
        src: image("2024/10/WESTON-768x384.webp"),
        alt: "PANNA Weston Town Center storefront",
        width: 768,
        height: 384,
      },
    ],
    overview: {
      paragraphs: [
        "PANNA Weston Town Center brings New Latino food, fresh pastries, coffee, and casual favorites to the heart of Weston.",
      ],
      highlight:
        "A friendly place to meet, eat, and enjoy familiar Latin American flavors.",
      bullets: [
        "Casual and modern atmosphere.",
        "Fresh Latin American favorites.",
        "Friendly service.",
      ],
    },
    details: {
      hours: defaultHours,
      address: "1731 Main Street Weston, FL 33326",
      phone: "(954) 372-1944",
      phoneHref: "tel:+19543721944",
      email: "info@mypanna.com",
      emailHref: "mailto:info@mypanna.com",
      openedDay: "Since 2000",
    },
    map: {
      src: mapEmbedSrc("PANNA Weston Town Center"),
      title: "PANNA Weston Town Center",
      tagline: "For years PANNA has delighted all its residents!",
    },
  },
] as const

export const pannaLocationsData = {
  hero: {
    background: heroBackground,
  },
  infoIcons: locationInfoIcons,
  mapBackground,
  locations,
} as const

export const pannaLocationNavLinks = locations.map((location) => ({
  label: location.title,
  href: location.path,
  matchPath: location.path,
}))

export const pannaLocationFooterLinks = locations.map((location) => ({
  label: location.footerLabel,
  href: location.path,
  matchPath: location.path,
}))

export const pannaLocationStoreCards = locations.map((location) => ({
  name: location.title,
  badgeName: location.storeCard.badgeName,
  guruHref: location.storeCard.guruHref,
  image: location.storeCard.image,
  address: location.storeCard.address,
  phone: location.storeCard.phone,
  cta: "MORE DETAILS",
  href: location.path,
}))

export type PannaLocationsData = typeof pannaLocationsData
export type PannaLocationPage = PannaLocationsData["locations"][number]
export type PannaLocationGalleryImage = PannaLocationPage["gallery"][number]
