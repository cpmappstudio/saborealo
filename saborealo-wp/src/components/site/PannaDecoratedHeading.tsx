import { cn } from "@/lib/utils"

type HeadingTag = "h1" | "h2"

type PannaDecoratedHeadingProps = {
  title: string
  underline: {
    src: string
    width: number
    height: number
  }
  as?: HeadingTag
  id?: string
  className?: string
  titleClassName?: string
  underlineClassName?: string
}

export function PannaDecoratedHeading({
  title,
  underline,
  as: Heading = "h2",
  id,
  className,
  titleClassName,
  underlineClassName,
}: PannaDecoratedHeadingProps) {
  return (
    <div className={cn("panna-decorated-heading", className)}>
      <Heading
        id={id}
        className={cn("panna-decorated-heading__title", titleClassName)}
      >
        {title}
      </Heading>
      <img
        src={underline.src}
        alt=""
        width={underline.width}
        height={underline.height}
        loading="lazy"
        decoding="async"
        className={cn(
          "panna-decorated-heading__underline",
          underlineClassName
        )}
        aria-hidden="true"
      />
    </div>
  )
}
