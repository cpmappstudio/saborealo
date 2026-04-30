import type { PannaSiteData } from "@/data/panna-site"

type SiteLogoProps = {
  logo: PannaSiteData["logo"]
  href?: string
  alt?: string
  ariaLabel?: string
  linkClassName?: string
  imageClassName?: string
  loading?: "eager" | "lazy"
  decorative?: boolean
}

export function SiteLogo({
  logo,
  href,
  alt = logo.alt,
  ariaLabel = "PANNA home",
  linkClassName,
  imageClassName,
  loading,
  decorative = false,
}: SiteLogoProps) {
  const image = (
    <img
      src={logo.src}
      alt={decorative ? "" : alt}
      width={logo.width}
      height={logo.height}
      loading={loading}
      decoding="async"
      className={imageClassName}
      aria-hidden={decorative || undefined}
    />
  )

  if (!href) {
    return image
  }

  return (
    <a href={href} className={linkClassName} aria-label={ariaLabel}>
      {image}
    </a>
  )
}
