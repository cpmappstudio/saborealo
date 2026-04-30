import type { ReactNode } from "react"

import { PannaDecoratedHeading } from "@/components/site/PannaDecoratedHeading"
import { cn } from "@/lib/utils"

type HeadingTag = "h1" | "h2"

type PannaPageIntroProps = {
  title: string
  underline: {
    src: string
    width: number
    height: number
  }
  as?: HeadingTag
  id?: string
  children?: ReactNode
  className?: string
  headingClassName?: string
  contentClassName?: string
}

export function PannaPageIntro({
  title,
  underline,
  as,
  id,
  children,
  className,
  headingClassName,
  contentClassName,
}: PannaPageIntroProps) {
  return (
    <div className={cn("panna-page-intro", className)}>
      <PannaDecoratedHeading
        as={as}
        id={id}
        title={title}
        underline={underline}
        className={cn("panna-page-intro__heading", headingClassName)}
      />
      {children ? (
        <div className={cn("panna-page-intro__content", contentClassName)}>
          {children}
        </div>
      ) : null}
    </div>
  )
}
