export type LocationGalleryImage = {
  key: string
  src: string
  alt: string
  width: number
  height: number
}

export type LocationHoursEntry = {
  key: string
  day: string
  time: string
}

export type LocationDetail = {
  id: string
  slug: string
  title: string
  phrase: string
  address: string
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  openedDay: string
  hours: readonly LocationHoursEntry[]
  guruHref: string
  badgeName: string
  mapEmbedUrl: string
  mapTitle: string
  mapTagline: string
  overviewParagraphs: readonly string[]
  overviewHighlight: string
  overviewBullets: readonly string[]
  gallery: readonly LocationGalleryImage[]
}

export type LocationInfoIcons = {
  address: string
  email: string
  hours: string
  openedDay: string
  phone: string
}
