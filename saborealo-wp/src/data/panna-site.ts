import { pannaImage as image } from "@/data/panna-assets"

const siteContactItems = [
  { icon: "phone", label: "+1 (305) 97-PANNA" },
  { icon: "phone", label: "+1 (305) 977-2662" },
  { icon: "mail", label: "info@mypanna.com" },
  { icon: "pin", label: "1130 NW 159th Dr, Miami FL 33169" },
] as const

export const pannaSiteData = {
  logo: {
    src: "/logo.png",
    width: 1024,
    height: 477,
    alt: "PANNA New Latino Food",
  },
  nav: [
    {
      label: "MENU",
      href: "/menu/",
      matchPath: "/menu/",
    },
    {
      label: "ABOUT US",
      href: "https://mypanna.com/about-us/",
    },
    {
      label: "LOCATIONS",
      href: "#",
      matchPath: "/locations/",
      sub: [
        { label: "DORAL", href: "https://mypanna.com/locations/doral/" },
        { label: "ORLANDO", href: "https://mypanna.com/locations/orlando/" },
        { label: "WESTON ROAD", href: "https://mypanna.com/locations/weston-road/" },
        { label: "WESTON TOWN CENTER", href: "https://mypanna.com/locations/weston-town-center/" },
      ],
    },
    { label: "CONTACT", href: "/contact/", matchPath: "/contact/" },
    {
      label: "ONLINE ORDER",
      href: "https://mypanna.com/orders/",
    },
  ],
  contact: siteContactItems,
  footer: {
    contact: siteContactItems,
    quickLinks: [
      { label: "About Us", href: "https://mypanna.com/about-us/" },
      { label: "Our Menu", href: "/menu/" },
      { label: "Orders", href: "https://mypanna.com/orders/" },
      { label: "Job Application", href: "/job-application/" },
      { label: "Contact", href: "/contact/" },
    ],
    storeLinks: [
      { label: "Doral", href: "https://mypanna.com/locations/doral/" },
      { label: "Orlando", href: "https://mypanna.com/locations/orlando/" },
      { label: "Weston Road", href: "https://mypanna.com/locations/weston-road/" },
      { label: "Weston Town Center", href: "https://mypanna.com/locations/weston-town-center/" },
    ],
    social: [
      { type: "facebook", label: "Facebook", href: "https://www.facebook.com/pannastores" },
      { type: "instagram", label: "Instagram", href: "https://www.instagram.com/pannastores/" },
      { type: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@pannastores" },
      { type: "google", label: "Google", href: "https://www.google.com/search?q=MYPANNA" },
    ],
    appButtons: [
      { image: image("2024/10/APP-STORE.webp"), href: "https://apps.apple.com/us/app/panna-new-latino-food/id6474134808", alt: "Download on the App Store" },
      { image: image("2024/10/GOOGLE-PLAY.webp"), href: "https://play.google.com/store/apps/details?id=com.como.prod976720239767", alt: "Get it on Google Play" },
    ],
  },
} as const

export type PannaSiteData = typeof pannaSiteData
