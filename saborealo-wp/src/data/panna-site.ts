import { pannaImage as image } from "@/data/panna-assets"
import {
  pannaLocationFooterLinks,
  pannaLocationNavLinks,
} from "@/data/panna-locations"
import { PANNA_ORDER_URL } from "@/data/panna-links"

const siteContactItems = [
  { icon: "phone", label: "+1 (407) 201-8976" },
  { icon: "mail", label: "noel.saborealo@gmail.com" },
  { icon: "pin", label: "926 Cypress Pkwy,\nKissimmee FL 34759" },
] as const;

export const pannaSiteData = {
  logo: {
    src: "/logo.svg",
    width: 1024,
    height: 477,
    alt: "Saborealo Logo",
  },
  nav: [
    {
      label: "MENU",
      href: "/menu/",
      matchPath: "/menu/",
    },
    {
      label: "ABOUT US",
      href: "/about-us/",
      matchPath: "/about-us/",
    },
    {
      label: "LOCATIONS",
      href: "#",
      matchPath: "/locations/",
      sub: pannaLocationNavLinks,
    },
    { label: "CONTACT", href: "/contact/", matchPath: "/contact/" },
    {
      label: "ONLINE ORDER",
      href: PANNA_ORDER_URL,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  contact: siteContactItems,
  footer: {
    contact: siteContactItems,
    quickLinks: [
      { label: "About Us", href: "/about-us/", matchPath: "/about-us/" },
      { label: "Our Menu", href: "/menu/" },
      {
        label: "Orders",
        href: PANNA_ORDER_URL,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      { label: "Job Application", href: "/job-application/" },
      { label: "Contact", href: "/contact/" },
    ],
    storeLinks: pannaLocationFooterLinks,
    social: [
      {
        type: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/Saboréalo-bakery-61561592674562",
      },
      {
        type: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/saborealobakery/",
      },
      {
        type: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@saborealo.bakery",
      },
      {
        type: "google",
        label: "Google",
        href: "https://www.google.com/search?q=saborealo+bakery",
      },
    ],
    appButtons: [
      {
        image: image("2024/10/APP-STORE.webp"),
        href: "https://apps.apple.com/us/app/panna-new-latino-food/id6474134808",
        alt: "Download on the App Store",
      },
      {
        image: image("2024/10/GOOGLE-PLAY.webp"),
        href: "https://play.google.com/store/apps/details?id=com.como.prod976720239767",
        alt: "Get it on Google Play",
      },
    ],
  },
} as const;

export type PannaSiteData = typeof pannaSiteData;
