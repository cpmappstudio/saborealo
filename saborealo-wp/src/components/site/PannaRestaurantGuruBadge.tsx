import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type PannaRestaurantGuruBadgeProps = {
  href: string
  placeName: string
  className?: string
  sourceLabel?: string
  year?: string
}

export function PannaRestaurantGuruBadge({
  href,
  placeName,
  className,
  sourceLabel = "Restaurant Guru",
  year = "2025",
}: PannaRestaurantGuruBadgeProps) {
  if (!href) return null;
  return (
    <Badge
      className={cn("restaurant-guru-badge", className)}
      variant="outline"
      asChild
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${placeName} recommended by ${sourceLabel}`}
      >
        <span className="restaurant-guru-badge__place">{placeName}</span>
        <span className="restaurant-guru-badge__gem" aria-hidden="true">
          <svg viewBox="0 0 102 18" focusable="false">
            <path
              d="M.2 16.8h25.5l-3.2-4.3L34.1.7h33.8l11.6 11.8-3.2 4.3h25.5"
              fill="none"
              stroke="#D8A627"
              strokeWidth="1"
            />
            <path
              d="M34.1.7 31.2 12.5h39.6L67.9.7M41.5.7 33.8 17.3h34.4L60.5.7M51 .7l-7.2 11.8H51m0-11.8 7.2 11.8H51m0 0-7.2 4.8M51 12.5l7.2 4.8"
              fill="none"
              stroke="#D8A627"
              strokeWidth="1"
            />
          </svg>
        </span>
        <span className="restaurant-guru-badge__center">Recommended</span>
        <span className="restaurant-guru-badge__divider" aria-hidden="true">
          <svg viewBox="0 0 102 12" focusable="false">
            <path
              d="M.5 1.5h41.5l9 9 9-9h41.5M44.5 1.5 51 10.5l6.5-9"
              fill="none"
              stroke="#D8A627"
              strokeWidth="1"
            />
          </svg>
        </span>
        <span className="restaurant-guru-badge__source">{sourceLabel}</span>
        <span className="restaurant-guru-badge__year">{year}</span>
      </a>
    </Badge>
  )
}
