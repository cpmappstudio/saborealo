import { createImageUrlBuilder } from "@sanity/image-url"
import { sanityClient } from "sanity:client"

const builder = createImageUrlBuilder(sanityClient)

export type SanityImageSource = Parameters<typeof builder.image>[0]

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

type ImageDimensions = {
  width: number
  height: number
}

/**
 * Builds a sized image URL for a Sanity image source.
 * Defaults to `fit('max')` so hotspot data is respected without cropping
 * unless an explicit aspect (width + height) is requested.
 */
export function imageUrl(
  source: SanityImageSource,
  options: Partial<ImageDimensions> = {},
): string {
  let b = urlFor(source).auto("format")
  if (options.width) b = b.width(options.width)
  if (options.height) b = b.height(options.height)
  if (options.width && options.height) b = b.fit("crop")
  return b.url()
}
