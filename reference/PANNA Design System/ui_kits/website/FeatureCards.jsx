(function () {
  const h = React.createElement;

  function StarProductCard() {
    const slides = window.PANNA_DATA.starProducts;
    const [active, setActive] = React.useState(0);
    const slide = slides[active];
    const isLight = !slide.bgImage;

    React.useEffect(() => {
      const timer = window.setInterval(() => {
        setActive((current) => (current + 1) % slides.length);
      }, 5000);

      return () => window.clearInterval(timer);
    }, [slides.length]);

    const cardStyle = {
      backgroundColor: slide.bg || undefined,
      backgroundImage: slide.bgImage ? `url("${slide.bgImage}")` : undefined,
    };

    return h("section", { className: "feature-section" },
      h("div", { className: "panna-shell" },
        h("h2", { className: "section-title" }, "Delight yourself with our star product of the month!"),

        h("article", { className: "star-card" },
          h("div", { className: `star-card__slide${isLight ? " is-light" : ""}`, style: cardStyle },
            h("div", { className: "star-card__media" },
              h("img", { className: "star-card__product", src: slide.product, alt: "", loading: "lazy" })
            ),
            h("div", { className: "star-card__copy" },
              slide.titleImage
                ? h("img", { className: "star-card__title-image", src: slide.titleImage, alt: "", loading: "lazy" })
                : h("h3", { className: "star-card__heading" }, slide.title),
              slide.text && h("p", { className: "star-card__text" }, slide.text),
              h("a", { className: "btn", href: slide.href }, slide.cta)
            )
          ),

          h("div", { className: "carousel-dots", "aria-label": "Star product slides" },
            slides.map((item, index) => h("button", {
              className: `carousel-dot${index === active ? " is-active" : ""}`,
              key: item.href,
              type: "button",
              "aria-label": `Go to star product ${index + 1}`,
              onClick: () => setActive(index),
            }))
          )
        )
      )
    );
  }

  function PromoCard({ card }) {
    return h("article", { className: "promo-card" },
      h("img", { className: "promo-card__image", src: card.image, alt: "", loading: "lazy" }),
      h("h3", { className: "promo-card__title" }, card.title),
      h("p", { className: "promo-card__text" }, card.text),
      h("a", { className: "btn", href: card.href }, card.cta)
    );
  }

  function OrderOnlineCards() {
    const cards = window.PANNA_DATA.promoCards;

    return h("section", { className: "feature-section" },
      h("div", { className: "panna-shell" },
        h("div", { className: "promo-grid" },
          cards.map((card) => h(PromoCard, { card, key: card.title }))
        )
      )
    );
  }

  function FeatureCards() {
    return h(React.Fragment, null,
      h(StarProductCard),
      h(OrderOnlineCards)
    );
  }

  window.FeatureCards = FeatureCards;
})();
