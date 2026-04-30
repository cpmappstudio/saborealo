import { Button } from "@/components/ui/button"
import type { PannaMenuProduct } from "@/data/panna-menu"

const MAX_RATING = 5

type MenuItemDetailProps = {
  product: PannaMenuProduct
}

export function MenuItemDetail({ product }: MenuItemDetailProps) {
  const rating = Math.max(0, Math.min(MAX_RATING, product.rating))

  return (
    <section className="menu-item-detail" aria-labelledby="menu-item-title">
      <div className="panna-shell menu-item-detail__inner">
        <div className="menu-item-detail__media">
          <img
            className="menu-item-detail__image"
            src={product.image}
            alt={product.imageAlt}
            width={400}
            height={400}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="menu-item-detail__content">
          <RatingStars rating={rating} />

          <h1 id="menu-item-title" className="menu-item-detail__title">
            {product.title}
          </h1>

          <p className="menu-item-detail__description">{product.description}</p>

          {product.orderLocations.length > 0 ? (
            <MenuItemOrder locations={product.orderLocations} />
          ) : null}
        </div>
      </div>
    </section>
  )
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div
      className="menu-item-rating"
      role="img"
      aria-label={`Rated ${rating} out of ${MAX_RATING}`}
    >
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          className="menu-item-rating__star"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          data-filled={index < rating}
        >
          <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
        </svg>
      ))}
    </div>
  )
}

function MenuItemOrder({
  locations,
}: {
  locations: PannaMenuProduct["orderLocations"]
}) {
  return (
    <details className="menu-item-order">
      <Button className="menu-item-order__trigger" asChild>
        <summary>Order now</summary>
      </Button>

      <ul className="menu-item-order__menu">
        {locations.map((location) => (
          <li key={location.href}>
            <a
              className="menu-item-order__link"
              href={location.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}
