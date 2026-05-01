import { PANNA_ORDER_URL } from "@/data/panna-links"

type LocationNavLink = {
  label: string
  href: string
  matchPath: string
}

export const pannaSiteContact = [
  { icon: "phone", label: "+1 (407) 201-8976" },
  { icon: "mail", label: "noel.saborealo@gmail.com" },
  { icon: "pin", label: "926 Cypress Pkwy,\nKissimmee FL 34759" },
] as const;

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
      src: "/logo.svg",
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
      legalNotice: {
        src: "/images/stores/consumer-advisory.png",
        alt: "Consumer Advisory: consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions. Florida Department of Business and Professional Regulation, Division of Hotels and Restaurants. Section 3-603.11, FDA Food Code.",
        width: 577,
        height: 442,
      },
    },
  } as const
}

export type PannaSiteData = ReturnType<typeof buildPannaSiteData>
