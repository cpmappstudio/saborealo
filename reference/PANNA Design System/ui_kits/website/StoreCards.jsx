(function () {
  const h = React.createElement;

  function StoreBadge({ store }) {
    return h("div", {
      className: "store-guru-badge",
      "aria-label": `${store.badgeName} recommended by Restaurant Guru`,
      onClick: (event) => {
        if (event.target.nodeName.toLowerCase() !== "a") {
          window.open(store.guruHref, "_blank", "noopener,noreferrer");
        }
      },
    },
      h("a", {
        className: "store-guru-badge__place",
        href: store.guruHref,
        target: "_blank",
        rel: "noreferrer",
      }, store.badgeName),
      h("span", { className: "store-guru-badge__gem", "aria-hidden": "true" },
        h("svg", { viewBox: "0 0 102 18", focusable: "false" },
          h("path", {
            d: "M.2 16.8h25.5l-3.2-4.3L34.1.7h33.8l11.6 11.8-3.2 4.3h25.5",
            fill: "none",
            stroke: "#D8A627",
            strokeWidth: "1",
          }),
          h("path", {
            d: "M34.1.7 31.2 12.5h39.6L67.9.7M41.5.7 33.8 17.3h34.4L60.5.7M51 .7l-7.2 11.8H51m0-11.8 7.2 11.8H51m0 0-7.2 4.8M51 12.5l7.2 4.8",
            fill: "none",
            stroke: "#D8A627",
            strokeWidth: "1",
          })
        )
      ),
      h("span", { className: "store-guru-badge__center" }, "Recommended"),
      h("span", { className: "store-guru-badge__divider", "aria-hidden": "true" },
        h("svg", { viewBox: "0 0 102 12", focusable: "false" },
          h("path", {
            d: "M.5 1.5h41.5l9 9 9-9h41.5M44.5 1.5 51 10.5l6.5-9",
            fill: "none",
            stroke: "#D8A627",
            strokeWidth: "1",
          })
        )
      ),
      h("a", {
        className: "store-guru-badge__source",
        href: "https://restaurantguru.com",
        target: "_blank",
        rel: "noreferrer",
      }, "Restaurant Guru"),
      h("span", { className: "store-guru-badge__year" }, "2025")
    );
  }

  function StoreCard({ store }) {
    return h("article", { className: "store-card" },
      h("div", { className: "store-card__media" },
        h("img", {
          className: "store-card__image",
          src: store.image,
          alt: `PANNA ${store.name}`,
          loading: "lazy",
        })
      ),
      h(StoreBadge, { store }),
      h("h3", { className: "store-card__title" }, store.name),
      h("p", { className: "store-card__text" },
        store.address,
        h("br"),
        store.phone
      ),
      h("a", { className: "btn", href: store.href }, store.cta)
    );
  }

  function StoryParagraph({ lines }) {
    const children = [];

    lines.forEach((line, index) => {
      if (index > 0) {
        children.push(h("br", { key: `break-${index}` }));
      }
      children.push(line);
    });

    return h("p", null, children);
  }

  function StoryBlock({ story }) {
    return h(React.Fragment, null,
      h("div", { className: "story-block" },
        h("h2", { className: "story-block__title" }, story.title),
        h("img", {
          className: "story-block__underline",
          src: story.underline,
          alt: "",
          loading: "lazy",
          "aria-hidden": "true",
        })
      ),
      h("div", { className: "story-media" },
        h("img", {
          className: "story-media__image",
          src: story.image,
          alt: story.imageAlt,
          loading: "lazy",
        })
      ),
      h("div", { className: "story-copy" },
        story.paragraphs.map((lines, index) => (
          h(StoryParagraph, { lines, key: index })
        ))
      )
    );
  }

  function StoreCards() {
    const stores = window.PANNA_DATA.stores;
    const story = window.PANNA_DATA.aboutStory;

    return h(React.Fragment, null,
      h("section", { className: "stores-heading" },
        h("div", { className: "panna-shell" },
          h("h2", { className: "section-title" }, "Visit a store near you")
        )
      ),

      h("section", { className: "stores-section" },
        h("svg", {
          className: "stores-section__notch",
          viewBox: "0 0 1000 100",
          preserveAspectRatio: "none",
          "aria-hidden": "true",
        },
          h("path", { d: "M500,98.9L0,6.1V0h1000v6.1L500,98.9z", fill: "currentColor" })
        ),

        h("div", { className: "stores-section__inner panna-shell" },
          h("div", { className: "store-grid" },
            stores.map((store) => h(StoreCard, { store, key: store.name })),
            h(StoryBlock, { story })
          )
        )
      )
    );
  }

  window.StoreCards = StoreCards;
})();
