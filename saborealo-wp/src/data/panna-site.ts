import { pannaImage as image } from "@/data/panna-assets"
import { PANNA_ORDER_URL } from "@/data/panna-links"

type LocationNavLink = {
  label: string
  href: string
  matchPath: string
}

export const pannaSiteContact = [
  { icon: "phone", label: "+1 (305) 97-PANNA" },
  { icon: "phone", label: "+1 (305) 977-2662" },
  { icon: "mail", label: "info@mypanna.com" },
  { icon: "pin", label: "1130 NW 159th Dr, Miami FL 33169" },
] as const

type BuildPannaSiteDataInput = {
  /** Sub-links for the LOCATIONS dropdown in the main nav. */
  locationNavLinks: readonly LocationNavLink[]
  /** Links shown under the "STORES" column in the footer. */
  locationFooterLinks: readonly LocationNavLink[]
}

export function buildPannaSiteData({
  locationNavLinks,
  locationFooterLinks,
}: BuildPannaSiteDataInput) {
  return {
    logo: {
      src: "/logo.png",
      width: 1024,
      height: 477,
      alt: "PANNA New Latino Food",
    },
    nav: [
      { label: "MENU", href: "/menu/", matchPath: "/menu/" },
      { label: "ABOUT US", href: "/about-us/", matchPath: "/about-us/" },
      // Only render the LOCATIONS dropdown when there are locations to
      // show. An empty `sub` array would still trigger the dropdown UI,
      // producing a hover-open menu with no items.
      ...(locationNavLinks.length > 0
        ? [
            {
              label: "LOCATIONS",
              href: "#",
              matchPath: "/locations/",
              sub: locationNavLinks,
            },
          ]
        : []),
      { label: "CONTACT", href: "/contact/", matchPath: "/contact/" },
      {
        label: "ONLINE ORDER",
        href: PANNA_ORDER_URL,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    contact: pannaSiteContact,
    footer: {
      contact: pannaSiteContact,
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
      storeLinks: locationFooterLinks,
      social: [
        {
          type: "facebook",
          label: "Facebook",
          href: "https://www.facebook.com/pannastores",
        },
        {
          type: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/pannastores/",
        },
        {
          type: "tiktok",
          label: "TikTok",
          href: "https://www.tiktok.com/@pannastores",
        },
        {
          type: "google",
          label: "Google",
          href: "https://www.google.com/search?q=MYPANNA",
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
  } as const
}

export type PannaSiteData = ReturnType<typeof buildPannaSiteData>
