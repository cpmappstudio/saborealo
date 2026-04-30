"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { PannaHomeData } from "@/data/panna-home"
import { useCarouselAutoplay } from "@/hooks/use-carousel-autoplay"
import { cn } from "@/lib/utils"

import { CarouselDots } from "./CarouselDots"

type StarProduct = PannaHomeData["starProducts"][number]

type StarProductCarouselProps = {
  slides: readonly StarProduct[]
}

export function StarProductCarousel({ slides }: StarProductCarouselProps) {
  const { selectedIndex, setApi, scrollTo } = useCarouselAutoplay(slides.length)

  if (slides.length === 0) {
    return null
  }

  return (
    <section className="feature-section" aria-labelledby="star-product-title">
      <div className="panna-shell">
        <h2 id="star-product-title" className="section-title">
          Delight yourself with our star product of the month!
        </h2>

        <Card className="star-card">
          <Carousel
            opts={{ loop: true }}
            setApi={setApi}
            className="star-card__carousel"
            aria-label="Star product slides"
          >
            <CarouselContent className="star-card__track">
              {slides.map((slide) => (
                <CarouselItem key={slide.href} className="star-card__item">
                  <StarProductSlide slide={slide} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <CarouselDots
            count={slides.length}
            getDotLabel={(index) => `Go to star product ${index + 1}`}
            label="Star product slides"
            onSelect={scrollTo}
            selectedIndex={selectedIndex}
          />
        </Card>
      </div>
    </section>
  )
}

function StarProductSlide({ slide }: { slide: StarProduct }) {
  const style: React.CSSProperties = {}
  const hasBackgroundImage = "bgImage" in slide && Boolean(slide.bgImage)

  if ("bg" in slide && slide.bg) {
    style.backgroundColor = slide.bg
  }

  if (hasBackgroundImage) {
    style.backgroundImage = `url("${slide.bgImage}")`
  }

  return (
    <CardContent
      className={cn("star-card__slide", !hasBackgroundImage && "is-light")}
      style={style}
    >
      <div className="star-card__media">
        <img
          src={slide.product}
          alt=""
          width={900}
          height={600}
          loading="lazy"
          decoding="async"
          className="star-card__product"
        />
      </div>

      <div className="star-card__copy">
        {"titleImage" in slide && slide.titleImage ? (
          <img
            src={slide.titleImage}
            alt=""
            width={520}
            height={180}
            loading="lazy"
            decoding="async"
            className="star-card__title-image"
          />
        ) : (
          <h3 className="star-card__heading">
            {"title" in slide ? slide.title : ""}
          </h3>
        )}

        {"text" in slide && slide.text ? (
          <p className="star-card__text">{slide.text}</p>
        ) : null}

        <Button className="btn" asChild>
          <a href={slide.href}>{slide.cta}</a>
        </Button>
      </div>
    </CardContent>
  )
}
