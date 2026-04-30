import type { PannaSiteData } from "@/data/panna-site"

const logoVariantSrc = {
  alt: "/logo-alt.svg",
} as const

type SiteLogoVariant = "primary" | keyof typeof logoVariantSrc

type SiteLogoProps = {
  logo: PannaSiteData["logo"]
  variant?: SiteLogoVariant
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
  variant = "primary",
  href,
  alt = logo.alt,
  ariaLabel = "PANNA home",
  linkClassName,
  imageClassName,
  loading,
  decorative = false,
}: SiteLogoProps) {
  const src = variant === "primary" ? logo.src : logoVariantSrc[variant]

  const image = (
    <img
      src={src}
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
