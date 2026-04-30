(function () {
  const h = React.createElement;

  function useVisibleMenuCount() {
    const getCount = () => {
      if (window.matchMedia("(max-width: 767px)").matches) return 2;
      if (window.matchMedia("(max-width: 1024px)").matches) return 4;
      return 6;
    };

    const [count, setCount] = React.useState(getCount);

    React.useEffect(() => {
      const onResize = () => setCount(getCount());
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    return count;
  }

  function Chevron({ direction }) {
    const path = direction === "next"
      ? "M357 125c17 0 34 4 47 17l296 300c12 12 17 29 17 45s-5 34-17 46L404 854c-12 13-29 21-46 21-16 0-33-4-46-12-13-13-21-30-21-46 0-17 4-34 16-46l259-279-255-259c-12-12-16-29-16-46 0-16 8-33 21-45 12-13 25-17 41-17Z"
      : "M643 875c-17 0-34-4-47-17L300 558c-12-12-17-29-17-45s5-34 17-46l296-321c12-13 29-21 46-21 16 0 33 4 46 12 13 13 21 30 21 46 0 17-4 34-16 46L434 508l255 259c12 12 16 29 16 46 0 16-8 33-21 45-12 13-25 17-41 17Z";

    return h("svg", { viewBox: "0 0 1000 1000", "aria-hidden": "true" },
      h("path", { d: path })
    );
  }

  function MenuCarousel({ items }) {
    const visibleCount = useVisibleMenuCount();
    const [page, setPage] = React.useState(0);
    const pages = Math.max(1, Math.ceil(items.length / visibleCount));

    React.useEffect(() => {
      setPage(0);
    }, [visibleCount]);

    const visibleItems = items.slice(page * visibleCount, page * visibleCount + visibleCount);

    return h("div", { className: "menu-carousel" },
      h("button", {
        className: "carousel-arrow carousel-arrow--prev",
        type: "button",
        "aria-label": "Previous menu categories",
        onClick: () => setPage((current) => (current - 1 + pages) % pages),
      },
        h(Chevron, { direction: "prev" })
      ),

      h("div", { className: "menu-carousel__viewport" },
        h("div", { className: "menu-carousel__grid" },
          visibleItems.map((item) => h("button", {
            className: "menu-chip",
            type: "button",
            key: item.label,
          },
            h("img", { className: "menu-chip__image", src: item.image, alt: "", loading: "lazy" }),
            h("span", { className: "menu-chip__label" }, item.label)
          ))
        )
      ),

      h("button", {
        className: "carousel-arrow carousel-arrow--next",
        type: "button",
        "aria-label": "Next menu categories",
        onClick: () => setPage((current) => (current + 1) % pages),
      },
        h(Chevron, { direction: "next" })
      )
    );
  }

  function MenuGrid() {
    const rows = window.PANNA_DATA.menuRows;

    return h("section", { className: "menu-section", "aria-label": "Menu categories" },
      h("div", { className: "panna-shell" },
        rows.map((items, index) => h(MenuCarousel, { items, key: index }))
      )
    );
  }

  window.MenuGrid = MenuGrid;
})();
