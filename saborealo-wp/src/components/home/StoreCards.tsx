import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PannaDecoratedHeading } from "@/components/site/PannaDecoratedHeading"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { PannaHomeData } from "@/data/panna-home"

type StoreCardsProps = {
  stores: PannaHomeData["stores"]
  story: PannaHomeData["aboutStory"]
}

type Store = PannaHomeData["stores"][number]

export function StoreCards({ stores, story }: StoreCardsProps) {
  return (
    <>
      <section className="stores-heading" aria-labelledby="stores-title">
        <div className="panna-shell">
          <h2 id="stores-title" className="section-title">
            Visit a store near you
          </h2>
        </div>
      </section>

      <section className="stores-section" aria-label="PANNA locations">
        <svg
          className="stores-section__notch"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
            fill="currentColor"
          />
        </svg>

        <div className="stores-section__inner panna-shell">
          <div className="store-grid">
            {stores.map((store) => (
              <StoreCard key={store.name} store={store} />
            ))}
            <StoryBlock story={story} />
          </div>
        </div>
      </section>
    </>
  )
}

function StoreCard({ store }: { store: Store }) {
  return (
    <Card className="store-card">
      <div className="store-card__media">
        <img
          src={store.image}
          alt={`PANNA ${store.name}`}
          width={768}
          height={384}
          loading="lazy"
          decoding="async"
          className="store-card__image"
        />
      </div>

      <StoreBadge store={store} />

      <CardHeader className="store-card__header">
        <CardTitle className="store-card__title-wrap">
          <h3 className="store-card__title">{store.name}</h3>
        </CardTitle>
        <CardDescription className="store-card__text-wrap">
          <p className="store-card__text">
            {store.address}
            <br />
            {store.phone}
          </p>
        </CardDescription>
      </CardHeader>

      <CardFooter className="store-card__footer">
        <Button className="btn" asChild>
          <a href={store.href}>{store.cta}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function StoreBadge({ store }: { store: Store }) {
  return (
    <Badge className="store-guru-badge" variant="outline" asChild>
      <a
        href={store.guruHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`${store.badgeName} recommended by Restaurant Guru`}
      >
        <span className="store-guru-badge__place">{store.badgeName}</span>
        <span className="store-guru-badge__gem" aria-hidden="true">
          <svg viewBox="0 0 102 18" focusable="false">
            <path
              d="M.2 16.8h25.5l-3.2-4.3L34.1.7h33.8l11.6 11.8-3.2 4.3h25.5"
              fill="none"
              stroke="#D8A627"
              strokeWidth="1"
            />
            <path
              d="M34.1.7 31.2 12.5h39.6L67.9.7M41.5.7 33.8 17.3h34.4L60.5.7M51 .7l-7.2 11.8H51m0-11.8 7.2 11.8H51m0 0-7.2 4.8M51 12.5l7.2 4.8"
              fill="none"
              stroke="#D8A627"
              strokeWidth="1"
            />
          </svg>
        </span>
        <span className="store-guru-badge__center">Recommended</span>
        <span className="store-guru-badge__divider" aria-hidden="true">
          <svg viewBox="0 0 102 12" focusable="false">
            <path
              d="M.5 1.5h41.5l9 9 9-9h41.5M44.5 1.5 51 10.5l6.5-9"
              fill="none"
              stroke="#D8A627"
              strokeWidth="1"
            />
          </svg>
        </span>
        <span className="store-guru-badge__source">Restaurant Guru</span>
        <span className="store-guru-badge__year">2025</span>
      </a>
    </Badge>
  )
}

function StoryBlock({ story }: { story: StoreCardsProps["story"] }) {
  return (
    <>
      <Card className="story-block">
        <CardHeader className="story-block__header">
          <CardTitle className="story-block__title-wrap">
            <PannaDecoratedHeading
              title={story.title}
              underline={{
                src: story.underline,
                width: 500,
                height: 54,
              }}
              className="story-block__heading"
            />
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="story-media">
        <img
          src={story.image}
          alt={story.imageAlt}
          width={768}
          height={512}
          loading="lazy"
          decoding="async"
          className="story-media__image"
        />
      </Card>

      <Card className="story-copy">
        <CardContent className="story-copy__content">
          {story.paragraphs.map((lines, index) => (
            <StoryParagraph key={index} lines={lines} />
          ))}
        </CardContent>
      </Card>
    </>
  )
}

function StoryParagraph({ lines }: { lines: readonly string[] }) {
  return (
    <p>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </p>
  )
}
