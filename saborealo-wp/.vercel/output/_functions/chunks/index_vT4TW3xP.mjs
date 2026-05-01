import { s as sanityClient } from './page-ssr_Df5WsTR8.mjs';
import { c as createComponent } from './astro-component_BHvubdiC.mjs';
import { y as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DN3GfvOX.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { c as cn, B as Button, g as getLinkAttributes, P as PannaDecoratedHeading, a as PANNA_ORDER_URL, H as HERO_SLIDES_QUERY, b as HOME_MENU_CATEGORIES_QUERY, d as HOME_STORES_QUERY, $ as $$SiteLayout } from './SiteLayout_BhOEln2X.mjs';
import useEmblaCarousel from 'embla-carousel-react';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import { P as PannaSectionNotch } from './PannaSectionNotch_BT1qlUpL.mjs';
import { p as pannaImage } from './panna-assets_Cc4iHxjU.mjs';
import { createImageUrlBuilder } from '@sanity/image-url';

function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-lg bg-card py-4 text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-lg px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("font-heading text-sm font-medium", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-xs/relaxed text-muted-foreground", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-4 group-data-[size=sm]/card:px-3", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn(
        "flex items-center rounded-b-lg px-4 group-data-[size=sm]/card:px-3 [.border-t]:pt-4 group-data-[size=sm]/card:[.border-t]:pt-3",
        className
      ),
      ...props
    }
  );
}

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}

function useCarouselAutoplay(slideCount, intervalMs = 5e3) {
  const [api, setApi] = React.useState();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  React.useEffect(() => {
    if (!api) return;
    const updateSelection = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);
    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);
  React.useEffect(() => {
    if (!api || slideCount < 2 || prefersReducedMotion || isPaused) return;
    const timer = window.setInterval(() => {
      api.scrollNext();
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [api, intervalMs, isPaused, prefersReducedMotion, slideCount]);
  const pause = React.useCallback(() => {
    setIsPaused(true);
  }, []);
  const resume = React.useCallback(() => {
    setIsPaused(false);
  }, []);
  const scrollTo = React.useCallback(
    (index) => {
      api?.scrollTo(index);
    },
    [api]
  );
  return { pause, resume, selectedIndex, setApi, scrollTo };
}

function CarouselDots({
  count,
  getDotLabel,
  label,
  onSelect,
  selectedIndex,
  className
}) {
  if (count <= 0) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    CardFooter,
    {
      className: cn("carousel-dots", className),
      role: "group",
      "aria-label": label,
      children: Array.from({ length: count }, (_, index) => /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          size: "icon-xs",
          variant: "ghost",
          className: cn("carousel-dot", index === selectedIndex && "is-active"),
          "aria-label": getDotLabel(index),
          "aria-pressed": index === selectedIndex,
          onClick: () => onSelect(index)
        },
        index
      ))
    }
  );
}

function HeroCarousel({ slides }) {
  const { selectedIndex, setApi, scrollTo } = useCarouselAutoplay(slides.length);
  if (slides.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "hero", "aria-label": "Featured promotions", children: /* @__PURE__ */ jsxs(Card, { className: "hero__frame", children: [
    /* @__PURE__ */ jsx(
      Carousel,
      {
        opts: { loop: true },
        setApi,
        className: "hero__picture",
        "aria-label": "Featured promotion slides",
        children: /* @__PURE__ */ jsx(CarouselContent, { className: "hero__track", children: slides.map((slide, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "hero__slide", children: /* @__PURE__ */ jsxs("picture", { className: "hero__picture-element", children: [
          /* @__PURE__ */ jsx("source", { media: "(max-width: 767px)", srcSet: slide.mobile }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: slide.desktop,
              alt: slide.alt,
              width: 1920,
              height: 500,
              className: "hero__image",
              loading: index === 0 ? "eager" : "lazy",
              decoding: "async",
              fetchPriority: index === 0 ? "high" : "auto"
            }
          )
        ] }) }, slide.id)) })
      }
    ),
    /* @__PURE__ */ jsx(
      CarouselDots,
      {
        count: slides.length,
        getDotLabel: (index) => `Go to slide ${index + 1}`,
        label: "Hero slides",
        onSelect: scrollTo,
        selectedIndex
      }
    )
  ] }) });
}

const MENU_CAROUSEL_OPTIONS = {
  align: "start",
  containScroll: "trimSnaps",
  loop: true,
  slidesToScroll: "auto"
};
const CHEVRON_PATHS = {
  prev: "M643 875c-17 0-34-4-47-17L300 558c-12-12-17-29-17-45s5-34 17-46l296-321c12-13 29-21 46-21 16 0 33 4 46 12 13 13 21 30 21 46 0 17-4 34-16 46L434 508l255 259c12 12 16 29 16 46 0 16-8 33-21 45-12 13-25 17-41 17Z",
  next: "M357 125c17 0 34 4 47 17l296 300c12 12 17 29 17 45s-5 34-17 46L404 854c-12 13-29 21-46 21-16 0-33-4-46-12-13-13-21-30-21-46 0-17 4-34 16-46l259-279-255-259c-12-12-16-29-16-46 0-16 8-33 21-45 12-13 25-17 41-17Z"
};
const CAROUSEL_ARROW_CLASSES = {
  prev: "carousel-arrow carousel-arrow--prev",
  next: "carousel-arrow carousel-arrow--next"
};
const CAROUSEL_ARROW_LABELS = {
  prev: "Previous menu categories",
  next: "Next menu categories"
};
const ROW_ORDER = ["top", "bottom"];
function MenuGrid({ categories }) {
  const rows = ROW_ORDER.map(
    (row) => categories.filter((category) => category.homeRow === row)
  ).filter((row) => row.length > 0);
  if (rows.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "menu-section", "aria-label": "Menu categories", children: /* @__PURE__ */ jsx("div", { className: "panna-shell", children: rows.map((items, index) => /* @__PURE__ */ jsx(
    MenuCarousel,
    {
      items,
      label: `Menu category carousel ${index + 1}`
    },
    items[0].homeRow
  )) }) });
}
function MenuCarousel({
  items,
  label
}) {
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      className: "menu-carousel",
      "aria-label": label,
      opts: MENU_CAROUSEL_OPTIONS,
      children: [
        /* @__PURE__ */ jsx(MenuCarouselControl, { direction: "prev" }),
        /* @__PURE__ */ jsx(CarouselContent, { className: "menu-carousel__track", "aria-live": "polite", children: items.map((item) => /* @__PURE__ */ jsx(CarouselItem, { className: "menu-carousel__item", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "menu-chip", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: `/menu/${item.slug}/`, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "menu-chip__image",
              src: item.icon.src,
              alt: item.icon.alt,
              width: 90,
              height: 90,
              loading: "lazy",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "menu-chip__label", children: item.label })
        ] }) }) }, item.id)) }),
        /* @__PURE__ */ jsx(MenuCarouselControl, { direction: "next" })
      ]
    }
  );
}
function MenuCarouselControl({ direction }) {
  const { canScrollNext, canScrollPrev, scrollNext, scrollPrev } = useCarousel();
  const isPrevious = direction === "prev";
  return /* @__PURE__ */ jsx(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "icon",
      className: CAROUSEL_ARROW_CLASSES[direction],
      "aria-label": CAROUSEL_ARROW_LABELS[direction],
      disabled: isPrevious ? !canScrollPrev : !canScrollNext,
      onClick: isPrevious ? scrollPrev : scrollNext,
      children: /* @__PURE__ */ jsx(Chevron, { direction })
    }
  );
}
function Chevron({ direction }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 1000 1000", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: CHEVRON_PATHS[direction] }) });
}

function PromoCards({ cards }) {
  if (cards.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "feature-section", "aria-label": "PANNA promotions", children: /* @__PURE__ */ jsx("div", { className: "panna-shell", children: /* @__PURE__ */ jsx("div", { className: "promo-grid", children: cards.map((card) => /* @__PURE__ */ jsx(PromoCard, { card }, card.title)) }) }) });
}
function PromoCard({ card }) {
  return /* @__PURE__ */ jsxs(Card, { className: "promo-card", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: card.image,
        alt: "",
        width: 768,
        height: 384,
        loading: "lazy",
        decoding: "async",
        className: "promo-card__image"
      }
    ),
    /* @__PURE__ */ jsxs(CardHeader, { className: "promo-card__header", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "promo-card__title-wrap", children: /* @__PURE__ */ jsx("h3", { className: "promo-card__title", children: card.title }) }),
      /* @__PURE__ */ jsx(CardDescription, { className: "promo-card__text-wrap", children: /* @__PURE__ */ jsx("p", { className: "promo-card__text", children: card.text }) })
    ] }),
    /* @__PURE__ */ jsx(CardFooter, { className: "promo-card__footer", children: /* @__PURE__ */ jsx(Button, { className: "btn", asChild: true, children: /* @__PURE__ */ jsx("a", { href: card.href, ...getLinkAttributes(card), children: card.cta }) }) })
  ] });
}

function StarProductCarousel({ slides }) {
  const { selectedIndex, setApi, scrollTo } = useCarouselAutoplay(slides.length);
  if (slides.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "feature-section", "aria-labelledby": "star-product-title", children: /* @__PURE__ */ jsxs("div", { className: "panna-shell", children: [
    /* @__PURE__ */ jsx("h2", { id: "star-product-title", className: "section-title", children: "Delight yourself with our star product of the month!" }),
    /* @__PURE__ */ jsxs(Card, { className: "star-card", children: [
      /* @__PURE__ */ jsx(
        Carousel,
        {
          opts: { loop: true },
          setApi,
          className: "star-card__carousel",
          "aria-label": "Star product slides",
          children: /* @__PURE__ */ jsx(CarouselContent, { className: "star-card__track", children: slides.map((slide) => /* @__PURE__ */ jsx(CarouselItem, { className: "star-card__item", children: /* @__PURE__ */ jsx(StarProductSlide, { slide }) }, slide.href)) })
        }
      ),
      /* @__PURE__ */ jsx(
        CarouselDots,
        {
          count: slides.length,
          getDotLabel: (index) => `Go to star product ${index + 1}`,
          label: "Star product slides",
          onSelect: scrollTo,
          selectedIndex
        }
      )
    ] })
  ] }) });
}
function StarProductSlide({ slide }) {
  return /* @__PURE__ */ jsxs(
    CardContent,
    {
      className: "star-card__slide is-light",
      style: { backgroundColor: slide.bg },
      children: [
        /* @__PURE__ */ jsx("div", { className: "star-card__media", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: slide.product,
            alt: "",
            width: 900,
            height: 600,
            loading: "lazy",
            decoding: "async",
            className: "star-card__product"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "star-card__copy", children: [
          /* @__PURE__ */ jsx("h3", { className: "star-card__heading", children: slide.title }),
          /* @__PURE__ */ jsx("p", { className: "star-card__text", children: slide.text }),
          /* @__PURE__ */ jsx(Button, { className: "btn", asChild: true, children: /* @__PURE__ */ jsx("a", { href: slide.href, children: slide.cta }) })
        ] })
      ]
    }
  );
}

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-2.5!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline: "border-border bg-input/20 text-foreground dark:bg-input/30 [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

function PannaRestaurantGuruBadge({
  href,
  placeName,
  className,
  sourceLabel = "Restaurant Guru",
  year = "2025"
}) {
  return /* @__PURE__ */ jsx(
    Badge,
    {
      className: cn("restaurant-guru-badge", className),
      variant: "outline",
      asChild: true,
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `${placeName} recommended by ${sourceLabel}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "restaurant-guru-badge__place", children: placeName }),
            /* @__PURE__ */ jsx("span", { className: "restaurant-guru-badge__gem", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 102 18", focusable: "false", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M.2 16.8h25.5l-3.2-4.3L34.1.7h33.8l11.6 11.8-3.2 4.3h25.5",
                  fill: "none",
                  stroke: "#D8A627",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M34.1.7 31.2 12.5h39.6L67.9.7M41.5.7 33.8 17.3h34.4L60.5.7M51 .7l-7.2 11.8H51m0-11.8 7.2 11.8H51m0 0-7.2 4.8M51 12.5l7.2 4.8",
                  fill: "none",
                  stroke: "#D8A627",
                  strokeWidth: "1"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("span", { className: "restaurant-guru-badge__center", children: "Recommended" }),
            /* @__PURE__ */ jsx("span", { className: "restaurant-guru-badge__divider", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 102 12", focusable: "false", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M.5 1.5h41.5l9 9 9-9h41.5M44.5 1.5 51 10.5l6.5-9",
                fill: "none",
                stroke: "#D8A627",
                strokeWidth: "1"
              }
            ) }) }),
            /* @__PURE__ */ jsx("span", { className: "restaurant-guru-badge__source", children: sourceLabel }),
            /* @__PURE__ */ jsx("span", { className: "restaurant-guru-badge__year", children: year })
          ]
        }
      )
    }
  );
}

const STORE_CTA_LABEL = "MORE DETAILS";
function StoreCards({ stores, story }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "stores-heading", "aria-labelledby": "stores-title", children: /* @__PURE__ */ jsx("div", { className: "panna-shell", children: /* @__PURE__ */ jsx("h2", { id: "stores-title", className: "section-title", children: "Visit a store near you" }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "stores-section", "aria-label": "PANNA locations", children: [
      /* @__PURE__ */ jsx(PannaSectionNotch, { className: "stores-section__notch" }),
      /* @__PURE__ */ jsx("div", { className: "stores-section__inner panna-shell", children: /* @__PURE__ */ jsxs("div", { className: "store-grid", children: [
        stores.map((store) => /* @__PURE__ */ jsx(StoreCard, { store }, store.id)),
        /* @__PURE__ */ jsx(StoryBlock, { story })
      ] }) })
    ] })
  ] });
}
function StoreCard({ store }) {
  return /* @__PURE__ */ jsxs(Card, { className: "store-card", children: [
    /* @__PURE__ */ jsx("div", { className: "store-card__media", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: store.image.src,
        alt: store.image.alt,
        width: 768,
        height: 384,
        loading: "lazy",
        decoding: "async",
        className: "store-card__image"
      }
    ) }),
    /* @__PURE__ */ jsx(
      PannaRestaurantGuruBadge,
      {
        href: store.guruHref,
        placeName: store.badgeName,
        className: "store-card__badge"
      }
    ),
    /* @__PURE__ */ jsxs(CardHeader, { className: "store-card__header", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "store-card__title-wrap", children: /* @__PURE__ */ jsx("h3", { className: "store-card__title", children: store.name }) }),
      /* @__PURE__ */ jsx(CardDescription, { className: "store-card__text-wrap", children: /* @__PURE__ */ jsxs("p", { className: "store-card__text", children: [
        store.address,
        /* @__PURE__ */ jsx("br", {}),
        store.phone
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(CardFooter, { className: "store-card__footer", children: /* @__PURE__ */ jsx(Button, { className: "btn", asChild: true, children: /* @__PURE__ */ jsx("a", { href: `/locations/${store.slug}/`, children: STORE_CTA_LABEL }) }) })
  ] });
}
function StoryBlock({ story }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Card, { className: "story-block", children: /* @__PURE__ */ jsx(CardHeader, { className: "story-block__header", children: /* @__PURE__ */ jsx(CardTitle, { className: "story-block__title-wrap", children: /* @__PURE__ */ jsx(
      PannaDecoratedHeading,
      {
        title: story.title,
        underline: {
          src: story.underline,
          width: 500,
          height: 54
        },
        className: "story-block__heading"
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(Card, { className: "story-media", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: story.image,
        alt: story.imageAlt,
        width: 768,
        height: 512,
        loading: "lazy",
        decoding: "async",
        className: "story-media__image"
      }
    ) }),
    /* @__PURE__ */ jsx(Card, { className: "story-copy", children: /* @__PURE__ */ jsx(CardContent, { className: "story-copy__content", children: story.paragraphs.map((lines, index) => /* @__PURE__ */ jsx(StoryParagraph, { lines }, index)) }) })
  ] });
}
function StoryParagraph({ lines }) {
  return /* @__PURE__ */ jsx("p", { children: lines.map((line, index) => /* @__PURE__ */ jsxs("span", { children: [
    index > 0 ? /* @__PURE__ */ jsx("br", {}) : null,
    line
  ] }, `${line}-${index}`)) });
}

const pannaHomeData = {
  starProducts: [
    {
      layout: "text",
      bg: "#FFBA52",
      product: "/images/products/breakfast.png",
      title: "START YOUR DAY THE SABOREALO WAY",
      text: "Build your perfect breakfast plate. Pick your eggs, pick your side — come in and make it yours.",
      cta: "SEE BREAKFAST MENU",
      href: "/menu"
    },
    {
      layout: "text",
      bg: "#FFBA52",
      product: "/images/products/puerto-rico-food.png",
      title: "A TASTE OF PUERTO RICO",
      text: "Authentic flavors straight from the island. Bring the tradition to your table.",
      cta: "SEE FULL MENU",
      href: "/menu"
    },
    {
      layout: "text",
      bg: "#FFBA52",
      product: "/images/products/drinks.png",
      title: "DRINKS FOR EVERY MOOD",
      text: "Fresh juices, smoothies, and coffee. Always cold, always hot, always SABOREALO.",
      cta: "SEE DRINKS MENU",
      href: "/menu"
    }
  ],
  promoCards: [
    {
      image: pannaImage("2024/10/PICK-UP-AND-DELIVERY.webp"),
      title: "Latino Flavors Delivered to Your Door!",
      text: "Order Now and Savor Without the Wait - Pick Up and Delivery from Panna New Latino Food",
      cta: "STAR NOW",
      href: PANNA_ORDER_URL,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      image: pannaImage("2024/12/BANNER-GIFT-CARD-HOME.webp"),
      title: "IT'S TIME TO GET YOUR PANNA GIFT CARD",
      text: "The perfect gift for your loved ones or friends. Get it at any PANNA or order online from the button below.",
      cta: "BUY NOW",
      href: "https://mypanna.com/giftcards/"
    }
  ],
  aboutStory: {
    title: "Authentic Puerto Rican Flavor, Fresh Every Day",
    underline: "/trazo.webp",
    image: "/images/stores/saborealo-matador-store.jpg",
    imageAlt: "Saborealo Bakery store exterior",
    paragraphs: [
      [
        "Saborealo Bakery brings the warmth and flavor of Puerto Rico to Kissimmee with food made to satisfy every craving.",
        "From breakfast sandwiches and fresh coffee to mofongo, frituras, pastries, and hot plates, every visit is full of comfort, tradition, and sabor."
      ],
      [
        "Inspired by the spirit of Puerto Rican home cooking and the energy of the local community, Saborealo feels welcoming, vibrant, and proudly boricua.",
        "With the touch of Chef Noel from Aibonito, Puerto Rico, it is the kind of place where family favorites, quick bites, and everyday meals come together."
      ]
    ]
  }
};

const builder = createImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
function imageUrl(source, options = {}) {
  let b = urlFor(source).auto("format");
  if (options.width) b = b.width(options.width);
  if (options.height) b = b.height(options.height);
  if (options.width && options.height) b = b.fit("crop");
  return b.url();
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [heroSlidesRaw, homeCategoriesRaw, storesRaw] = await Promise.all([
    sanityClient.fetch(HERO_SLIDES_QUERY),
    sanityClient.fetch(HOME_MENU_CATEGORIES_QUERY),
    sanityClient.fetch(HOME_STORES_QUERY)
  ]);
  const heroSlides = heroSlidesRaw.filter((slide) => slide.desktopImage && slide.mobileImage).map((slide) => ({
    id: slide._id,
    alt: slide.alt ?? "",
    desktop: imageUrl(slide.desktopImage, { width: 1920, height: 500 }),
    mobile: imageUrl(slide.mobileImage, { width: 768, height: 1024 })
  }));
  const homeCategories = homeCategoriesRaw.filter(
    (category) => category.slug && category.icon && (category.homeRow === "top" || category.homeRow === "bottom")
  ).map((category) => ({
    id: category._id,
    slug: category.slug,
    label: category.label ?? "",
    icon: {
      src: imageUrl(category.icon, { width: 180, height: 180 }),
      alt: category.icon?.alt ?? category.label ?? ""
    },
    homeRow: category.homeRow
  }));
  const stores = storesRaw.filter((store) => store.slug && store.cardImage).map((store) => ({
    id: store._id,
    slug: store.slug,
    name: store.title ?? "",
    badgeName: store.badgeName ?? "",
    guruHref: store.guruUrl ?? "",
    image: {
      src: imageUrl(store.cardImage, { width: 768, height: 384 }),
      alt: store.cardImage?.alt ?? `PANNA ${store.title ?? ""}`
    },
    address: store.address ?? "",
    phone: store.phone ?? ""
  }));
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "PANNA - New Latino Food", "description": "Discover PANNA New Latino Food menus, promotions, store locations, and Venezuelan-inspired favorites." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="sr-only">PANNA New Latino Food</h1> ${renderComponent($$result2, "HeroCarousel", HeroCarousel, { "slides": heroSlides, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/home/HeroCarousel", "client:component-export": "HeroCarousel" })} ${renderComponent($$result2, "MenuGrid", MenuGrid, { "categories": homeCategories, "client:visible": { rootMargin: "200px" }, "client:component-hydration": "visible", "client:component-path": "@/components/home/MenuGrid", "client:component-export": "MenuGrid" })} ${renderComponent($$result2, "StarProductCarousel", StarProductCarousel, { "slides": pannaHomeData.starProducts, "client:visible": { rootMargin: "200px" }, "client:component-hydration": "visible", "client:component-path": "@/components/home/StarProductCarousel", "client:component-export": "StarProductCarousel" })} ${renderComponent($$result2, "PromoCards", PromoCards, { "cards": pannaHomeData.promoCards })} ${renderComponent($$result2, "StoreCards", StoreCards, { "stores": stores, "story": pannaHomeData.aboutStory })} ` })}`;
}, "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/pages/index.astro", void 0);

const $$file = "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
