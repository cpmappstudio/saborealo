import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { PannaMenuProduct } from "@/data/panna-menu"

type MenuProductGridProps = {
  title: string
  products: readonly PannaMenuProduct[]
}

export function MenuProductGrid({ title, products }: MenuProductGridProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section
      className="menu-category-products"
      aria-labelledby="menu-category-products-title"
    >
      <div className="panna-shell">
        <h2 id="menu-category-products-title" className="sr-only">
          {title} Menu Items
        </h2>

        <ul className="menu-product-grid">
          {products.map((product) => (
            <li className="menu-product-item" key={product.href}>
              <Card className="menu-product-card">
                <img
                  className="menu-product-card__image"
                  src={product.image}
                  alt={product.imageAlt}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />

                <CardHeader className="menu-product-card__header">
                  <CardTitle className="menu-product-card__title-wrap">
                    <h3 className="menu-product-card__title">{product.title}</h3>
                  </CardTitle>
                </CardHeader>

                <CardFooter className="menu-product-card__footer">
                  <Button className="btn menu-product-card__button" asChild>
                    <a href={product.href}>VIEW DETAILS</a>
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
