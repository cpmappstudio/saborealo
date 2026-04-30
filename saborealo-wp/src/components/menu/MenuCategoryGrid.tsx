import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import type { PannaMenuData } from "@/data/panna-menu"

type MenuCategoryGridProps = {
  categories: readonly PannaMenuData["categories"][number][]
}

export function MenuCategoryGrid({ categories }: MenuCategoryGridProps) {
  if (categories.length === 0) {
    return null
  }

  return (
    <section
      className="menu-page__grid-section"
      aria-labelledby="menu-categories-title"
    >
      <div className="panna-shell">
        <h2 id="menu-categories-title" className="sr-only">
          Menu Categories
        </h2>

        <ul className="menu-category-grid">
          {categories.map((category) => (
            <li className="menu-category-item" key={category.label}>
              <a className="menu-category-link" href={category.href}>
                <Card className="menu-category-card">
                  <img
                    className="menu-category-card__image"
                    src={category.image}
                    alt=""
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />

                  <CardHeader className="menu-category-card__header">
                    <CardTitle className="menu-category-card__title">
                      {category.label}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
