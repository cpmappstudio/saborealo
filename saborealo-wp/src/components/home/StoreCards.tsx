import { Button } from "@/components/ui/button"
import { PannaDecoratedHeading } from "@/components/site/PannaDecoratedHeading"
import { PannaRestaurantGuruBadge } from "@/components/site/PannaRestaurantGuruBadge"
import { PannaSectionNotch } from "@/components/site/PannaSectionNotch"
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
        <PannaSectionNotch className="stores-section__notch" />

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

      <PannaRestaurantGuruBadge
        href={store.guruHref}
        placeName={store.badgeName}
        className="store-card__badge"
      />

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
