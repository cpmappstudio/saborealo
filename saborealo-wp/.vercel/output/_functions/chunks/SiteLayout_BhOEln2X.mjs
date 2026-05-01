import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c as createComponent } from './astro-component_BHvubdiC.mjs';
import { G as createRenderInstruction, n as addAttribute, r as renderTemplate, y as renderComponent, x as renderHead, H as renderSlot, m as maybeRenderHead, J as createTransitionScope } from './entrypoint_DN3GfvOX.mjs';
import 'react';
import { cva } from 'class-variance-authority';
import { Slot, Accordion as Accordion$1, NavigationMenu as NavigationMenu$1, Dialog } from 'radix-ui';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon, ArrowUp01Icon, Cancel01Icon, Menu01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import { defineQuery } from 'groq';
import { s as sanityClient } from './page-ssr_Df5WsTR8.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-7 w-full min-w-0 rounded-md border border-input bg-input/20 px-2 py-0.5 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

function PannaDecoratedHeading({
  title,
  underline,
  as: Heading = "h2",
  id,
  className,
  titleClassName,
  underlineClassName
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("panna-decorated-heading", className), children: [
    /* @__PURE__ */ jsx(
      Heading,
      {
        id,
        className: cn("panna-decorated-heading__title", titleClassName),
        children: title
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: underline.src,
        alt: "",
        width: underline.width,
        height: underline.height,
        loading: "lazy",
        decoding: "async",
        className: cn(
          "panna-decorated-heading__underline",
          underlineClassName
        ),
        "aria-hidden": "true"
      }
    )
  ] });
}

const SITE_ICONS = {
  phone: {
    viewBox: "0 0 512 512",
    path: "M497.39 361.8 385.39 313.8a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6Z"
  },
  mail: {
    viewBox: "0 0 512 512",
    path: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7ZM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4Z"
  },
  pin: {
    viewBox: "0 0 384 512",
    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0ZM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80Z"
  },
  searchLocation: {
    viewBox: "0 0 512 512",
    path: "M505.04 442.66 405.33 342.97c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99ZM208.02 351.96c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98ZM208.04 112c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83ZM208.04 208c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24Z"
  },
  facebook: {
    viewBox: "0 0 320 512",
    path: "M279.14 288 293.36 195.34h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0C152.14 0 104.28 44.38 104.28 124.72v70.62H22.89V288h81.39v224h100.17V288h74.69Z"
  },
  instagram: {
    viewBox: "0 0 448 512",
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141Zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7Zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8Zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9C384.2 43.4 352.4 35.2 316.5 33.4c-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S3.3 127.5 1.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8Z",
    fillRule: "evenodd"
  },
  tiktok: {
    viewBox: "0 0 448 512",
    path: "M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"
  },
  google: {
    viewBox: "0 0 488 512",
    path: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4Z"
  }
};
function SiteIcon({ type, className, dataIcon }) {
  const icon = SITE_ICONS[type];
  const fillRule = "fillRule" in icon ? icon.fillRule : void 0;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: icon.viewBox,
      "aria-hidden": "true",
      focusable: "false",
      className,
      "data-icon": dataIcon,
      children: /* @__PURE__ */ jsx("path", { d: icon.path, fillRule, clipRule: fillRule })
    }
  );
}

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
        sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
        "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

const PANNA_ORDER_URL = "https://online.skytab.com/75cf391c0101d4b1394336e87e3b0382";

const pannaSiteContact = [
  { icon: "phone", label: "+1 (407) 201-8976" },
  { icon: "mail", label: "noel.saborealo@gmail.com" },
  { icon: "pin", label: "926 Cypress Pkwy,\nKissimmee FL 34759" }
];
function buildPannaSiteData({
  locationNavLinks,
  locationFooterLinks
}) {
  return {
    logo: {
      src: "/logo.svg",
      width: 1024,
      height: 477,
      alt: "PANNA New Latino Food"
    },
    nav: [
      { label: "MENU", href: "/menu/", matchPath: "/menu/" },
      { label: "ABOUT US", href: "/about-us/", matchPath: "/about-us/" },
      // Only render the LOCATIONS dropdown when there are locations to
      // show. An empty `sub` array would still trigger the dropdown UI,
      // producing a hover-open menu with no items.
      ...locationNavLinks.length > 0 ? [
        {
          label: "LOCATIONS",
          href: "#",
          matchPath: "/locations/",
          sub: locationNavLinks
        }
      ] : [],
      { label: "CONTACT", href: "/contact/", matchPath: "/contact/" },
      {
        label: "ONLINE ORDER",
        href: PANNA_ORDER_URL,
        target: "_blank",
        rel: "noopener noreferrer"
      }
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
          rel: "noopener noreferrer"
        },
        { label: "Job Application", href: "/job-application/" },
        { label: "Contact", href: "/contact/" }
      ],
      storeLinks: locationFooterLinks,
      social: [
        {
          type: "facebook",
          label: "Facebook",
          href: "https://www.facebook.com/Saboréalo-bakery-61561592674562"
        },
        {
          type: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/saborealobakery/"
        },
        {
          type: "tiktok",
          label: "TikTok",
          href: "https://www.tiktok.com/@saborealo.bakery"
        },
        {
          type: "google",
          label: "Google",
          href: "https://www.google.com/search?q=saborealo+bakery"
        }
      ],
      legalNotice: {
        src: "/images/stores/consumer-advisory.png",
        alt: "Consumer Advisory: consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions. Florida Department of Business and Professional Regulation, Division of Hotels and Restaurants. Section 3-603.11, FDA Food Code.",
        width: 577,
        height: 442
      }
    }
  };
}

const logoVariantSrc = {
  alt: "/logo-alt.svg"
};
function SiteLogo({
  logo,
  variant = "primary",
  href,
  alt = logo.alt,
  ariaLabel = "PANNA home",
  linkClassName,
  imageClassName,
  loading,
  decorative = false
}) {
  const src = variant === "primary" ? logo.src : logoVariantSrc[variant];
  const image = /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: decorative ? "" : alt,
      width: logo.width,
      height: logo.height,
      loading,
      decoding: "async",
      className: imageClassName,
      "aria-hidden": decorative || void 0
    }
  );
  if (!href) {
    return image;
  }
  return /* @__PURE__ */ jsx("a", { href, className: linkClassName, "aria-label": ariaLabel, children: image });
}

function getLinkAttributes(link) {
  const rel = "rel" in link && typeof link.rel === "string" ? link.rel : void 0;
  const target = "target" in link && (link.target === "_blank" || link.target === "_self") ? link.target : void 0;
  return {
    rel,
    target
  };
}

function normalizePath(path) {
  if (path === "/") {
    return path;
  }
  return path.endsWith("/") ? path : `${path}/`;
}
function isInternalPath(href) {
  return href.startsWith("/");
}
function isCurrentPage(currentPath, href) {
  return isInternalPath(href) && normalizePath(currentPath) === normalizePath(href);
}
function isCurrentSection(currentPath, href, matchPath) {
  const candidatePath = matchPath ?? (isInternalPath(href) ? href : void 0);
  if (!candidatePath) {
    return false;
  }
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedCandidatePath = normalizePath(candidatePath);
  if (normalizedCandidatePath === "/") {
    return normalizedCurrentPath === "/";
  }
  return normalizedCurrentPath.startsWith(normalizedCandidatePath);
}
function isActiveLink(currentPath, link) {
  return isCurrentSection(currentPath, link.href, link.matchPath);
}

function SiteFooter({ logo, footer, currentPath }) {
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsx("div", { className: "site-footer__main", children: /* @__PURE__ */ jsxs("div", { className: "panna-shell", children: [
      /* @__PURE__ */ jsx(
        SiteLogo,
        {
          logo,
          variant: "alt",
          href: "/",
          imageClassName: "site-footer__logo",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "site-footer__grid", children: [
        /* @__PURE__ */ jsx(FooterColumn, { title: "SABOREALO", children: /* @__PURE__ */ jsx("ul", { className: "site-footer__contact", children: footer.contact.map((item) => /* @__PURE__ */ jsx(ContactItem, { item }, `${item.icon}-${item.label}`)) }) }),
        /* @__PURE__ */ jsx(FooterColumn, { title: "QUICK LINKS", children: /* @__PURE__ */ jsx(FooterLinks, { currentPath, links: footer.quickLinks }) }),
        /* @__PURE__ */ jsx(FooterColumn, { title: "STORES", children: /* @__PURE__ */ jsx(FooterLinks, { currentPath, links: footer.storeLinks }) }),
        /* @__PURE__ */ jsxs(FooterColumn, { title: "SUBSCRIBE", children: [
          /* @__PURE__ */ jsx("div", { className: "site-footer__social", children: footer.social.map((item) => /* @__PURE__ */ jsx(
            Button,
            {
              className: "site-footer__social-link",
              variant: "default",
              size: "icon",
              asChild: true,
              children: /* @__PURE__ */ jsx("a", { href: item.href, "aria-label": item.label, children: /* @__PURE__ */ jsx(SiteIcon, { type: item.type, dataIcon: "inline-start" }) })
            },
            item.type
          )) }),
          /* @__PURE__ */ jsx("div", { className: "site-footer__apps", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: footer.legalNotice.src,
              alt: footer.legalNotice.alt,
              width: footer.legalNotice.width,
              height: footer.legalNotice.height,
              loading: "lazy",
              decoding: "async"
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "site-footer__legal", children: /* @__PURE__ */ jsx("span", { children: "© 2026 Saborealo| All Rights Reserved  " }) })
  ] });
}
function FooterColumn({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "site-footer__column", children: [
    /* @__PURE__ */ jsx("h2", { className: "site-footer__title", children: title }),
    children
  ] });
}
function ContactItem({ item }) {
  return /* @__PURE__ */ jsxs("li", { children: [
    /* @__PURE__ */ jsx("span", { className: "site-footer__icon", children: /* @__PURE__ */ jsx(SiteIcon, { type: item.icon }) }),
    /* @__PURE__ */ jsx("span", { className: "site-footer__text", children: item.label })
  ] });
}
function FooterLinks({
  links,
  currentPath
}) {
  return /* @__PURE__ */ jsx("ul", { className: "site-footer__list", children: links.map((link) => {
    const isActive = isActiveLink(currentPath, link);
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: link.href,
        className: "site-footer__link",
        "aria-current": isCurrentPage(currentPath, link.href) ? "page" : void 0,
        "data-active": isActive ? "true" : void 0,
        ...getLinkAttributes(link),
        children: link.label
      }
    ) }, link.label);
  }) });
}

function Accordion({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Accordion$1.Root,
    {
      "data-slot": "accordion",
      className: cn(
        "flex w-full flex-col overflow-hidden rounded-md border",
        className
      ),
      ...props
    }
  );
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Accordion$1.Item,
    {
      "data-slot": "accordion-item",
      className: cn("not-last:border-b data-open:bg-muted/50", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(Accordion$1.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    Accordion$1.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between gap-6 border border-transparent p-2 text-left text-xs/relaxed font-medium transition-all outline-none hover:underline disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowDown01Icon, strokeWidth: 2, "data-slot": "accordion-trigger-icon", className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" }),
        /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowUp01Icon, strokeWidth: 2, "data-slot": "accordion-trigger-icon", className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Accordion$1.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden px-2 text-xs/relaxed data-open:animate-accordion-down data-closed:animate-accordion-up",
      ...props,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "h-(--radix-accordion-content-height) pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
            className
          ),
          children
        }
      )
    }
  );
}

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenu$1.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-xs/relaxed font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
);
function NavigationMenuTrigger({
  className,
  children,
  asChild,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      asChild,
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: asChild ? children : /* @__PURE__ */ jsxs(Fragment, { children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          HugeiconsIcon,
          {
            icon: ArrowDown01Icon,
            strokeWidth: 2,
            className: "relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180",
            "aria-hidden": "true"
          }
        )
      ] })
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "top-0 left-0 w-full p-1.5 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-xl group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow-md group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenu$1.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-xl bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 md:w-(--radix-navigation-menu-viewport-width) data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-90",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "flex items-center gap-1.5 rounded-lg p-2 text-xs/relaxed transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(Dialog.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(Dialog.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      Dialog.Content,
      {
        "data-slot": "sheet-content",
        "data-side": side,
        className: cn(
          "fixed z-50 flex flex-col bg-popover bg-clip-padding text-xs/relaxed text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx(Dialog.Close, { "data-slot": "sheet-close", asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              className: "absolute top-4 right-4",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, strokeWidth: 2 }),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-6", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog.Title,
    {
      "data-slot": "sheet-title",
      className: cn(
        "font-heading text-sm font-medium text-foreground",
        className
      ),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-xs/relaxed text-muted-foreground", className),
      ...props
    }
  );
}

function SiteHeader({ logo, nav, currentPath }) {
  return /* @__PURE__ */ jsx("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "site-header__inner panna-shell", children: [
    /* @__PURE__ */ jsx(SiteLogo, { logo, href: "/", linkClassName: "site-header__logo" }),
    /* @__PURE__ */ jsx("div", { className: "site-header__nav-wrap site-header__desktop-nav", children: /* @__PURE__ */ jsx(DesktopNavigation, { currentPath, nav }) }),
    /* @__PURE__ */ jsx("div", { className: "site-header__nav-wrap site-header__mobile-nav", children: /* @__PURE__ */ jsx(MobileNavigation, { currentPath, logo, nav }) }),
    /* @__PURE__ */ jsx("div", { className: "site-search", children: /* @__PURE__ */ jsx(HeaderSearch, {}) })
  ] }) });
}
function DesktopNavigation({
  nav,
  currentPath
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu,
    {
      viewport: false,
      className: "main-nav",
      "aria-label": "Main menu",
      children: /* @__PURE__ */ jsx(NavigationMenuList, { children: nav.map((item) => {
        const isActive = isActiveLink(currentPath, item);
        return /* @__PURE__ */ jsx(NavigationMenuItem, { className: "main-nav__item", children: "sub" in item && item.sub ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            NavigationMenuTrigger,
            {
              className: "main-nav__link",
              "data-active": isActive ? "true" : void 0,
              children: item.label
            }
          ),
          /* @__PURE__ */ jsx(NavigationMenuContent, { className: "main-nav__dropdown", children: /* @__PURE__ */ jsx("ul", { className: "main-nav__dropdown-list", children: item.sub.map((subItem) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(
            "a",
            {
              "aria-current": isCurrentPage(currentPath, subItem.href) ? "page" : void 0,
              className: "main-nav__sub-link",
              "data-active": isActiveLink(currentPath, subItem) ? "true" : void 0,
              href: subItem.href,
              ...getLinkAttributes(subItem),
              children: subItem.label
            }
          ) }) }, subItem.label)) }) })
        ] }) : /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, className: "main-nav__link", children: /* @__PURE__ */ jsx(
          "a",
          {
            "aria-current": isCurrentPage(currentPath, item.href) ? "page" : void 0,
            "data-active": isActive ? "true" : void 0,
            href: item.href,
            ...getLinkAttributes(item),
            children: item.label
          }
        ) }) }, item.label);
      }) })
    }
  );
}
function MobileNavigation({
  logo,
  nav,
  currentPath
}) {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: "site-header__toggle",
        "aria-label": "Open navigation",
        children: /* @__PURE__ */ jsx(
          HugeiconsIcon,
          {
            icon: Menu01Icon,
            "data-icon": "inline-start",
            strokeWidth: 2,
            "aria-hidden": "true"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "site-header__sheet", children: [
      /* @__PURE__ */ jsxs(SheetHeader, { children: [
        /* @__PURE__ */ jsxs(SheetTitle, { className: "site-header__sheet-title", children: [
          /* @__PURE__ */ jsx(SiteLogo, { logo, decorative: true }),
          /* @__PURE__ */ jsx("span", { children: "Navigation" })
        ] }),
        /* @__PURE__ */ jsx(SheetDescription, { className: "site-header__sheet-description", children: "Browse PANNA sections and quick actions." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "site-header__sheet-body", children: [
        /* @__PURE__ */ jsx(HeaderSearch, { className: "site-header__sheet-search-form" }),
        /* @__PURE__ */ jsx(
          Accordion,
          {
            type: "single",
            collapsible: true,
            className: "site-header__accordion",
            children: nav.map((item) => /* @__PURE__ */ jsx(
              MobileNavigationItem,
              {
                currentPath,
                item
              },
              item.label
            ))
          }
        )
      ] })
    ] })
  ] });
}
function HeaderSearch({ className }) {
  return /* @__PURE__ */ jsxs(
    "form",
    {
      action: "https://mypanna.com/",
      className: cn("site-search__form", className),
      method: "get",
      role: "search",
      "aria-label": "Site search",
      children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            name: "s",
            placeholder: "Search Products…",
            type: "search",
            autoComplete: "off",
            "aria-label": "Search products",
            className: "site-search__input"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            size: "icon",
            "aria-label": "Search",
            className: "site-search__button",
            children: /* @__PURE__ */ jsx(
              HugeiconsIcon,
              {
                icon: Search01Icon,
                "data-icon": "inline-start",
                strokeWidth: 2.5,
                "aria-hidden": "true"
              }
            )
          }
        )
      ]
    }
  );
}
function MobileNavigationItem({
  item,
  currentPath
}) {
  const isActive = isActiveLink(currentPath, item);
  if (!("sub" in item) || !item.sub || item.href !== "#") {
    return /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
      "a",
      {
        "aria-current": isCurrentPage(currentPath, item.href) ? "page" : void 0,
        className: "site-header__mobile-link",
        "data-active": isActive ? "true" : void 0,
        href: item.href,
        ...getLinkAttributes(item),
        children: item.label
      }
    ) });
  }
  return /* @__PURE__ */ jsxs(
    AccordionItem,
    {
      className: "site-header__mobile-item",
      "data-active": isActive ? "true" : void 0,
      value: item.label,
      children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "site-header__mobile-trigger", children: item.label }),
        /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "site-header__mobile-sub-list", children: item.sub.map((subItem) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            "aria-current": isCurrentPage(currentPath, subItem.href) ? "page" : void 0,
            className: "site-header__mobile-sub-link",
            "data-active": isActiveLink(currentPath, subItem) ? "true" : void 0,
            href: subItem.href,
            ...getLinkAttributes(subItem),
            children: subItem.label
          }
        ) }, subItem.label)) }) })
      ]
    }
  );
}

const imageFragment = (
  /* groq */
  `{
  asset->{_id, _type},
  hotspot,
  crop,
  alt
}`
);
const HOME_MENU_CATEGORIES_QUERY = defineQuery(
  /* groq */
  `
  *[_type == "menuCategory" && homeRow != "none" && defined(slug.current)]
    | order(homeRow asc, homeOrder asc, label asc) {
      _id,
      "slug": slug.current,
      label,
      homeRow,
      icon ${imageFragment}
    }
`
);
defineQuery(
  /* groq */
  `
  *[_type == "menuCategory" && defined(slug.current)]
    | order(menuOrder asc, label asc) {
      _id,
      "slug": slug.current,
      label,
      image ${imageFragment}
    }
`
);
defineQuery(
  /* groq */
  `
  *[_type == "menuCategory" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    label,
    "items": *[_type == "menuItem"
      && category._ref == ^._id
      && defined(slug.current)] | order(title asc) {
        _id,
        "slug": slug.current,
        title,
        image ${imageFragment}
      }
  }
`
);
defineQuery(
  /* groq */
  `
  *[_type == "menuCategory" && defined(slug.current)]{
    "slug": slug.current
  }
`
);
defineQuery(
  /* groq */
  `
  *[_type == "menuItem"
    && slug.current == $itemSlug
    && category._ref in *[_type == "menuCategory" && slug.current == $categorySlug]._id][0] {
      _id,
      "slug": slug.current,
      title,
      description,
      rating,
      orderUrl,
      image ${imageFragment},
      "category": category->{
        _id,
        "slug": slug.current,
        label
      }
    }
`
);
defineQuery(
  /* groq */
  `
  *[_type == "menuItem"
    && defined(slug.current)
    && defined(category->slug.current)] {
      "slug": slug.current,
      "categorySlug": category->slug.current
    }
`
);
const HERO_SLIDES_QUERY = defineQuery(
  /* groq */
  `
  *[_type == "heroSlide"] | order(displayOrder asc) {
    _id,
    alt,
    "desktopImage": desktopImage{asset->{_id, _type}, hotspot, crop},
    "mobileImage": mobileImage{asset->{_id, _type}, hotspot, crop}
  }
`
);
const LOCATIONS_NAV_QUERY = defineQuery(
  /* groq */
  `
  *[_type == "location" && defined(slug.current)]
    | order(displayOrder asc, title asc) {
      _id,
      "slug": slug.current,
      title,
      footerLabel
    }
`
);
const HOME_STORES_QUERY = defineQuery(
  /* groq */
  `
  *[_type == "location" && defined(slug.current)]
    | order(displayOrder asc, title asc) {
      _id,
      "slug": slug.current,
      title,
      address,
      phone,
      badgeName,
      guruUrl,
      cardImage ${imageFragment}
    }
`
);
defineQuery(
  /* groq */
  `
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    phrase,
    address,
    phone,
    email,
    openedDay,
    badgeName,
    guruUrl,
    mapEmbedUrl,
    mapTitle,
    mapTagline,
    metaTitle,
    metaDescription,
    overviewParagraphs,
    overviewHighlight,
    overviewBullets,
    hours[]{_key, day, time},
    gallery[]{
      _key,
      asset->{_id, _type},
      hotspot,
      crop,
      alt
    }
  }
`
);
defineQuery(
  /* groq */
  `
  *[_type == "location" && defined(slug.current)]{
    "slug": slug.current
  }
`
);

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/node_modules/.pnpm/astro@6.1.10_@types+node@25.6.0_@vercel+functions@3.5.0_jiti@2.6.1_lightningcss@1.32.0__57b74b6f7ce03d8187cbcbf4cc66636f/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/node_modules/.pnpm/astro@6.1.10_@types+node@25.6.0_@vercel+functions@3.5.0_jiti@2.6.1_lightningcss@1.32.0__57b74b6f7ce03d8187cbcbf4cc66636f/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "PANNA - Website UI Kit",
    description = "PANNA website layout rebuilt with Astro and shadcn components."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preconnect" href="https://mypanna.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#FFF9ED"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/layouts/Layout.astro", void 0);

const $$SiteLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SiteLayout;
  const { title, description } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const navLocations = await sanityClient.fetch(LOCATIONS_NAV_QUERY);
  const locationLinks = navLocations.filter((location) => location.slug).map((location) => {
    const path = `/locations/${location.slug}/`;
    return {
      label: location.title ?? location.footerLabel ?? "",
      footerLabel: location.footerLabel ?? location.title ?? "",
      href: path,
      matchPath: path
    };
  });
  const siteData = buildPannaSiteData({
    locationNavLinks: locationLinks.map(({ label, href, matchPath }) => ({
      label,
      href,
      matchPath
    })),
    locationFooterLinks: locationLinks.map(({ footerLabel, href, matchPath }) => ({
      label: footerLabel,
      href,
      matchPath
    }))
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="panna-site"> <a class="skip-link" href="#main-content">Skip to content</a> ${renderComponent($$result2, "SiteHeader", SiteHeader, { "logo": siteData.logo, "nav": siteData.nav, "currentPath": currentPath, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/site/SiteHeader", "client:component-export": "SiteHeader", "data-astro-transition-persist": createTransitionScope($$result2, "pow3flo7") })} <main id="main-content"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "SiteFooter", SiteFooter, { "logo": siteData.logo, "footer": siteData.footer, "currentPath": currentPath })} </div> ` })}`;
}, "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/layouts/SiteLayout.astro", "self");

export { $$SiteLayout as $, Button as B, HERO_SLIDES_QUERY as H, Input as I, PannaDecoratedHeading as P, SiteIcon as S, PANNA_ORDER_URL as a, HOME_MENU_CATEGORIES_QUERY as b, cn as c, HOME_STORES_QUERY as d, getLinkAttributes as g, pannaSiteContact as p };
