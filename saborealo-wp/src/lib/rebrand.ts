const BRAND_REPLACEMENTS: readonly [RegExp, string][] = [
  [/PANNA New Latino Food/gi, "Saborealo Bakery"],
  [/Panna New Latino Food/gi, "Saborealo Bakery"],
  [/\bPANNA\b/g, "Saborealo"],
  [/\bPanna\b/g, "Saborealo"],
] as const

export function rebrandPannaCopy(value: string | null | undefined) {
  if (!value) return ""

  return BRAND_REPLACEMENTS.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    value,
  )
}
