"use client"

import type { CSSProperties } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { PannaHomeData } from "@/data/panna-home"
import { useCarouselAutoplay } from "@/hooks/use-carousel-autoplay"

import { CarouselDots } from "./CarouselDots"

type StarProduct = PannaHomeData["starProducts"][number] & {
  bg?: string
  bgImage?: string
  bgImageMobile?: string
  product: string
  productMobile?: string
  title?: string
  titleImage?: string
  text?: string
}

type StarProductSlideStyle = CSSProperties & {
  "--star-card-bg-desktop"?: string
  "--star-card-bg-mobile"?: string
}

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
                <CarouselItem key={slide.id} className="star-card__item">
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
  const hasBackgroundImage = Boolean(slide.bgImage)
  const hasTitleImage = Boolean(slide.titleImage)
  const style: StarProductSlideStyle = {
    backgroundColor: slide.bg,
    "--star-card-bg-desktop": hasBackgroundImage ? `url("${slide.bgImage}")` : undefined,
    "--star-card-bg-mobile": slide.bgImageMobile
      ? `url("${slide.bgImageMobile}")`
      : hasBackgroundImage
        ? `url("${slide.bgImage}")`
        : undefined,
  }

  return (
    <CardContent
      className={`star-card__slide${hasBackgroundImage ? " has-bg-image" : " is-light"}`}
      style={style}
    >
      <div className="star-card__media">
        <picture className="star-card__product-picture">
          {slide.productMobile ? (
            <source media="(max-width: 1024px)" srcSet={slide.productMobile} />
          ) : null}
          <img
            src={slide.product}
            alt=""
            width={900}
            height={600}
            loading="lazy"
            decoding="async"
            className="star-card__product"
          />
        </picture>
      </div>

      <div className="star-card__copy">
        {hasTitleImage ? (
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
          <h3 className="star-card__heading">{"title" in slide ? slide.title : ""}</h3>
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
