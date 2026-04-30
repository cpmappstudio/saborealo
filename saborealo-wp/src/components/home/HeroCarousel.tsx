"use client"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useCarouselAutoplay } from "@/hooks/use-carousel-autoplay"

import { CarouselDots } from "./CarouselDots"

export type HeroSlide = {
  id: string
  alt: string
  desktop: string
  mobile: string
}

type HeroCarouselProps = {
  slides: readonly HeroSlide[]
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const { selectedIndex, setApi, scrollTo } = useCarouselAutoplay(slides.length)

  if (slides.length === 0) {
    return null
  }

  return (
    <section className="hero" aria-label="Featured promotions">
      <Card className="hero__frame">
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="hero__picture"
          aria-label="Featured promotion slides"
        >
          <CarouselContent className="hero__track">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="hero__slide">
                <picture className="hero__picture-element">
                  <source media="(max-width: 767px)" srcSet={slide.mobile} />
                  <img
                    src={slide.desktop}
                    alt={slide.alt}
                    width={1920}
                    height={500}
                    className="hero__image"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                </picture>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <CarouselDots
          count={slides.length}
          getDotLabel={(index) => `Go to slide ${index + 1}`}
          label="Hero slides"
          onSelect={scrollTo}
          selectedIndex={selectedIndex}
        />
      </Card>
    </section>
  )
}
