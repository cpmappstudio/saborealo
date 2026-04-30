type PannaSectionNotchProps = {
  className?: string
}

export function PannaSectionNotch({ className }: PannaSectionNotchProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" fill="currentColor" />
    </svg>
  )
}
