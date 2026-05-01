import { defineQuery } from "groq"

/**
 * Image projection for any `image` field.
 * Keeps the asset reference (so `urlFor()` can build sized URLs), the
 * hotspot/crop data (so the URL builder can respect editor crops), and
 * the custom `alt` field declared on every image schema.
 */
const imageFragment = /* groq */ `{
  asset->{_id, _type},
  hotspot,
  crop,
  alt
}`

/* ─── Menu categories ───────────────────────────────────────────── */

export const HOME_MENU_CATEGORIES_QUERY = defineQuery(/* groq */ `
  *[_type == "menuCategory" && homeRow != "none" && defined(slug.current)]
    | order(homeRow asc, homeOrder asc, label asc) {
      _id,
      "slug": slug.current,
      label,
      homeRow,
      icon ${imageFragment}
    }
`)

export const MENU_CATEGORIES_QUERY = defineQuery(/* groq */ `
  *[_type == "menuCategory" && defined(slug.current)]
    | order(menuOrder asc, label asc) {
      _id,
      "slug": slug.current,
      label,
      image ${imageFragment}
    }
`)

export const MENU_CATEGORY_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "menuCategory" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    label,
    "items": *[_type == "menuItem"
      && category._ref == ^._id
      && defined(slug.current)] | order(title asc) {
        _id,
        "slug": slug.current,
        title,
        image ${imageFragment}
      }
  }
`)

/* ─── Menu items ────────────────────────────────────────────────── */

export const MENU_ITEM_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "menuItem"
    && slug.current == $itemSlug
    && category._ref in *[_type == "menuCategory" && slug.current == $categorySlug]._id][0] {
      _id,
      "slug": slug.current,
      title,
      description,
      rating,
      orderUrl,
      image ${imageFragment},
      "category": category->{
        _id,
        "slug": slug.current,
        label
      }
    }
`)

/* ─── Hero slides ───────────────────────────────────────────────── */

export const HERO_SLIDES_QUERY = defineQuery(/* groq */ `
  *[_type == "heroSlide"] | order(displayOrder asc) {
    _id,
    alt,
    "desktopImage": desktopImage{asset->{_id, _type}, hotspot, crop},
    "mobileImage": mobileImage{asset->{_id, _type}, hotspot, crop}
  }
`)

/* ─── Locations ─────────────────────────────────────────────────── */

export const LOCATIONS_NAV_QUERY = defineQuery(/* groq */ `
  *[_type == "location" && defined(slug.current)]
    | order(displayOrder asc, title asc) {
      _id,
      "slug": slug.current,
      title,
      footerLabel
    }
`)

export const HOME_STORES_QUERY = defineQuery(/* groq */ `
  *[_type == "location" && defined(slug.current)]
    | order(displayOrder asc, title asc) {
      _id,
      "slug": slug.current,
      title,
      address,
      phone,
      badgeName,
      guruUrl,
      cardImage ${imageFragment}
    }
`)

export const LOCATION_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    phrase,
    address,
    phone,
    email,
    openedDay,
    badgeName,
    guruUrl,
    mapEmbedUrl,
    mapTitle,
    mapTagline,
    metaTitle,
    metaDescription,
    overviewParagraphs,
    overviewHighlight,
    overviewBullets,
    hours[]{_key, day, time},
    gallery[]{
      _key,
      asset->{_id, _type},
      hotspot,
      crop,
      alt
    }
  }
`)

