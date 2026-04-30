import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { PannaHomeData } from "@/data/panna-home"

type PromoFeatureCard = PannaHomeData["promoCards"][number]

type PromoCardsProps = {
  cards: readonly PromoFeatureCard[]
}

export function PromoCards({ cards }: PromoCardsProps) {
  if (cards.length === 0) {
    return null
  }

  return (
    <section className="feature-section" aria-label="PANNA promotions">
      <div className="panna-shell">
        <div className="promo-grid">
          {cards.map((card) => (
            <PromoCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PromoCard({ card }: { card: PromoFeatureCard }) {
  return (
    <Card className="promo-card">
      <img
        src={card.image}
        alt=""
        width={768}
        height={384}
        loading="lazy"
        decoding="async"
        className="promo-card__image"
      />

      <CardHeader className="promo-card__header">
        <CardTitle className="promo-card__title-wrap">
          <h3 className="promo-card__title">{card.title}</h3>
        </CardTitle>
        <CardDescription className="promo-card__text-wrap">
          <p className="promo-card__text">{card.text}</p>
        </CardDescription>
      </CardHeader>

      <CardFooter className="promo-card__footer">
        <Button className="btn" asChild>
          <a href={card.href}>{card.cta}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
