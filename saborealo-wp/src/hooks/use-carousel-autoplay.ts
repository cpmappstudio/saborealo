"use client"

import * as React from "react"

import type { CarouselApi } from "@/components/ui/carousel"

export function useCarouselAutoplay(slideCount: number, intervalMs = 5000) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const updateSelection = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    updateSelection()
    api.on("select", updateSelection)
    api.on("reInit", updateSelection)

    return () => {
      api.off("select", updateSelection)
      api.off("reInit", updateSelection)
    }
  }, [api])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)

    return () => {
      mediaQuery.removeEventListener("change", updatePreference)
    }
  }, [])

  React.useEffect(() => {
    if (!api || slideCount < 2 || prefersReducedMotion) return

    const timer = window.setInterval(() => {
      api.scrollNext()
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [api, intervalMs, prefersReducedMotion, slideCount])

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  return { selectedIndex, setApi, scrollTo }
}
