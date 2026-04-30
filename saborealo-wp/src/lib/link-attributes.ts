export type LinkAttributes = {
  target?: "_blank" | "_self"
  rel?: string
}

export function getLinkAttributes<T extends object>(link: T): LinkAttributes {
  const rel =
    "rel" in link && typeof link.rel === "string" ? link.rel : undefined
  const target =
    "target" in link && (link.target === "_blank" || link.target === "_self")
      ? link.target
      : undefined

  return {
    rel,
    target,
  }
}
