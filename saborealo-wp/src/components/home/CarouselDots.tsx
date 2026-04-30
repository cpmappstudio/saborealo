"use client"

import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type CarouselDotsProps = {
  count: number
  getDotLabel: (index: number) => string
  label: string
  onSelect: (index: number) => void
  selectedIndex: number
  className?: string
}

export function CarouselDots({
  count,
  getDotLabel,
  label,
  onSelect,
  selectedIndex,
  className,
}: CarouselDotsProps) {
  if (count <= 0) {
    return null
  }

  return (
    <CardFooter
      className={cn("carousel-dots", className)}
      role="group"
      aria-label={label}
    >
      {Array.from({ length: count }, (_, index) => (
        <Button
          key={index}
          type="button"
          size="icon-xs"
          variant="ghost"
          className={cn("carousel-dot", index === selectedIndex && "is-active")}
          aria-label={getDotLabel(index)}
          aria-pressed={index === selectedIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </CardFooter>
  )
}
