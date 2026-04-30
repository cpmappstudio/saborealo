"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"
import type { PannaLocationGalleryImage } from "@/data/panna-locations"
import { useCarouselAutoplay } from "@/hooks/use-carousel-autoplay"
import { cn } from "@/lib/utils"

type LocationGalleryCarouselProps = {
  images: readonly PannaLocationGalleryImage[]
  locationName: string
}

type LocationGalleryControlDirection = "previous" | "next"

type LocationGalleryControlsProps = {
  pause: () => void
}

type LocationGalleryControlProps = React.ComponentProps<typeof Button> & {
  direction: LocationGalleryControlDirection
  label: string
}

const LOCATION_GALLERY_CHEVRON_PATHS: Record<
  LocationGalleryControlDirection,
  string
> = {
  previous:
    "M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z",
  next: "M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z",
}

export function LocationGalleryCarousel({
  images,
  locationName,
}: LocationGalleryCarouselProps) {
  const [thumbnailApi, setThumbnailApi] = React.useState<CarouselApi>()
  const { pause, resume, scrollTo, selectedIndex, setApi } =
    useCarouselAutoplay(images.length)
  const hasMultipleImages = images.length > 1

  React.useEffect(() => {
    thumbnailApi?.scrollTo(selectedIndex)
  }, [selectedIndex, thumbnailApi])

  const handleThumbnailApi = React.useCallback((api: CarouselApi) => {
    setThumbnailApi(api)
  }, [])

  const handleBlur = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const nextFocusedElement = event.relatedTarget as Node | null

      if (
        !nextFocusedElement ||
        !event.currentTarget.contains(nextFocusedElement)
      ) {
        resume()
      }
    },
    [resume]
  )

  const handleThumbnailSelect = React.useCallback(
    (index: number) => {
      pause()
      scrollTo(index)
      thumbnailApi?.scrollTo(index)
    },
    [pause, scrollTo, thumbnailApi]
  )

  if (images.length === 0) {
    return null
  }

  return (
    <div
      className="location-gallery"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={handleBlur}
      onKeyDownCapture={pause}
      onPointerDownCapture={pause}
    >
      <Carousel
        opts={{ align: "center", loop: hasMultipleImages }}
        setApi={setApi}
        className="location-gallery__main"
        aria-label={`${locationName} photo gallery`}
      >
        <CarouselContent className="location-gallery__main-track">
          {images.map((image, index) => (
            <CarouselItem
              key={image.src}
              className="location-gallery__main-slide"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="location-gallery__image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {hasMultipleImages ? <LocationGalleryControls pause={pause} /> : null}
      </Carousel>

      {hasMultipleImages ? (
        <Carousel
          opts={{ align: "start", containScroll: "trimSnaps", dragFree: true }}
          setApi={handleThumbnailApi}
          className="location-gallery__thumbnails"
          aria-label={`${locationName} gallery thumbnails`}
        >
          <CarouselContent className="location-gallery__thumbnail-track">
            {images.map((image, index) => (
              <CarouselItem
                key={image.src}
                className="location-gallery__thumbnail-slide"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "location-gallery__thumbnail-button",
                    index === selectedIndex && "is-active"
                  )}
                  aria-label={`Show ${locationName} photo ${index + 1}`}
                  aria-pressed={index === selectedIndex}
                  onClick={() => handleThumbnailSelect(index)}
                >
                  <img
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="location-gallery__thumbnail-image"
                  />
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : null}
    </div>
  )
}

function LocationGalleryControls({ pause }: LocationGalleryControlsProps) {
  const { canScrollNext, canScrollPrev, scrollNext, scrollPrev } =
    useCarousel()

  const handlePrevious = React.useCallback(() => {
    pause()
    scrollPrev()
  }, [pause, scrollPrev])

  const handleNext = React.useCallback(() => {
    pause()
    scrollNext()
  }, [pause, scrollNext])

  return (
    <>
      <LocationGalleryControl
        direction="previous"
        label="Previous slide"
        disabled={!canScrollPrev}
        onClick={handlePrevious}
      />
      <LocationGalleryControl
        direction="next"
        label="Next slide"
        disabled={!canScrollNext}
        onClick={handleNext}
      />
    </>
  )
}

function LocationGalleryControl({
  className,
  direction,
  label,
  ...props
}: LocationGalleryControlProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "location-gallery__control",
        `location-gallery__control--${direction}`,
        className
      )}
      aria-label={label}
      {...props}
    >
      <LocationGalleryChevron direction={direction} />
    </Button>
  )
}

function LocationGalleryChevron({
  direction,
}: {
  direction: LocationGalleryControlDirection
}) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      aria-hidden="true"
      focusable="false"
      data-icon="inline-start"
      className="location-gallery__control-icon"
    >
      <path d={LOCATION_GALLERY_CHEVRON_PATHS[direction]} />
    </svg>
  )
}
