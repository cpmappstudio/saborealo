"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"

export type HomeMenuCategory = {
  id: string
  slug: string
  label: string
  icon: { src: string; alt: string }
  homeRow: "top" | "bottom"
}

type MenuGridProps = {
  categories: readonly HomeMenuCategory[]
}

type ChevronDirection = "prev" | "next"

const MENU_CAROUSEL_OPTIONS = {
  align: "start",
  containScroll: "trimSnaps",
  loop: true,
  slidesToScroll: "auto",
} as const

const CHEVRON_PATHS: Record<ChevronDirection, string> = {
  prev: "M643 875c-17 0-34-4-47-17L300 558c-12-12-17-29-17-45s5-34 17-46l296-321c12-13 29-21 46-21 16 0 33 4 46 12 13 13 21 30 21 46 0 17-4 34-16 46L434 508l255 259c12 12 16 29 16 46 0 16-8 33-21 45-12 13-25 17-41 17Z",
  next: "M357 125c17 0 34 4 47 17l296 300c12 12 17 29 17 45s-5 34-17 46L404 854c-12 13-29 21-46 21-16 0-33-4-46-12-13-13-21-30-21-46 0-17 4-34 16-46l259-279-255-259c-12-12-16-29-16-46 0-16 8-33 21-45 12-13 25-17 41-17Z",
}

const CAROUSEL_ARROW_CLASSES: Record<ChevronDirection, string> = {
  prev: "carousel-arrow carousel-arrow--prev",
  next: "carousel-arrow carousel-arrow--next",
}

const CAROUSEL_ARROW_LABELS: Record<ChevronDirection, string> = {
  prev: "Previous menu categories",
  next: "Next menu categories",
}

const ROW_ORDER = ["top", "bottom"] as const

export function MenuGrid({ categories }: MenuGridProps) {
  const rows = ROW_ORDER.map((row) =>
    categories.filter((category) => category.homeRow === row),
  ).filter((row) => row.length > 0)

  if (rows.length === 0) {
    return null
  }

  return (
    <section className="menu-section" aria-label="Menu categories">
      <div className="panna-shell">
        {rows.map((items, index) => (
          <MenuCarousel
            items={items}
            key={items[0].homeRow}
            label={`Menu category carousel ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

function MenuCarousel({
  items,
  label,
}: {
  items: readonly HomeMenuCategory[]
  label: string
}) {
  return (
    <Carousel
      className="menu-carousel"
      aria-label={label}
      opts={MENU_CAROUSEL_OPTIONS}
    >
      <MenuCarouselControl direction="prev" />

      <CarouselContent className="menu-carousel__track" aria-live="polite">
        {items.map((item) => (
          <CarouselItem className="menu-carousel__item" key={item.id}>
            <Button variant="ghost" className="menu-chip" asChild>
              <a href={`/menu/${item.slug}/`}>
                <img
                  className="menu-chip__image"
                  src={item.icon.src}
                  alt={item.icon.alt}
                  width={90}
                  height={90}
                  loading="lazy"
                  decoding="async"
                />
                <span className="menu-chip__label">{item.label}</span>
              </a>
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>

      <MenuCarouselControl direction="next" />
    </Carousel>
  )
}

function MenuCarouselControl({ direction }: { direction: ChevronDirection }) {
  const { canScrollNext, canScrollPrev, scrollNext, scrollPrev } = useCarousel()
  const isPrevious = direction === "prev"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={CAROUSEL_ARROW_CLASSES[direction]}
      aria-label={CAROUSEL_ARROW_LABELS[direction]}
      disabled={isPrevious ? !canScrollPrev : !canScrollNext}
      onClick={isPrevious ? scrollPrev : scrollNext}
    >
      <Chevron direction={direction} />
    </Button>
  )
}

function Chevron({ direction }: { direction: ChevronDirection }) {
  return (
    <svg viewBox="0 0 1000 1000" aria-hidden="true">
      <path d={CHEVRON_PATHS[direction]} />
    </svg>
  )
}
