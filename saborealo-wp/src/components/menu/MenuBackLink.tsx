import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"

type MenuBackLinkProps = {
  href: string
  label: string
}

export function MenuBackLink({ href, label }: MenuBackLinkProps) {
  return (
    <div className="menu-back">
      <div className="panna-shell">
        <Button variant="ghost" className="menu-back__button" asChild>
          <a href={href}>
            <HugeiconsIcon
              aria-hidden="true"
              data-icon="inline-start"
              icon={ArrowLeft01Icon}
              strokeWidth={2}
            />
            <span>{label}</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
