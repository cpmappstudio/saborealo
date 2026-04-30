import type { LinkAttributes } from "@/lib/link-attributes"

export type MatchableLink = LinkAttributes & {
  href: string
  matchPath?: string
}

export function normalizePath(path: string) {
  if (path === "/") {
    return path
  }

  return path.endsWith("/") ? path : `${path}/`
}

export function isInternalPath(href: string) {
  return href.startsWith("/")
}

export function isCurrentPage(currentPath: string, href: string) {
  return isInternalPath(href) && normalizePath(currentPath) === normalizePath(href)
}

export function isCurrentSection(
  currentPath: string,
  href: string,
  matchPath?: string
) {
  const candidatePath = matchPath ?? (isInternalPath(href) ? href : undefined)

  if (!candidatePath) {
    return false
  }

  const normalizedCurrentPath = normalizePath(currentPath)
  const normalizedCandidatePath = normalizePath(candidatePath)

  if (normalizedCandidatePath === "/") {
    return normalizedCurrentPath === "/"
  }

  return normalizedCurrentPath.startsWith(normalizedCandidatePath)
}

export function isActiveLink(currentPath: string, link: MatchableLink) {
  return isCurrentSection(currentPath, link.href, link.matchPath)
}
