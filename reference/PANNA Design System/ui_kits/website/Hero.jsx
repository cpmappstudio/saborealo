(function () {
  const h = React.createElement;

  function Hero() {
    const slides = window.PANNA_DATA.heroSlides;
    const [active, setActive] = React.useState(0);

    React.useEffect(() => {
      const timer = window.setInterval(() => {
        setActive((current) => (current + 1) % slides.length);
      }, 5000);

      return () => window.clearInterval(timer);
    }, [slides.length]);

    const slide = slides[active];

    return h("section", { className: "hero", "aria-label": "Featured promotions" },
      h("div", { className: "hero__frame" },
        h("picture", { className: "hero__picture" },
          h("source", { media: "(max-width: 767px)", srcSet: slide.mobile }),
          h("img", { className: "hero__image", src: slide.desktop, alt: slide.alt })
        ),
        h("div", { className: "carousel-dots", "aria-label": "Hero slides" },
          slides.map((item, index) => h("button", {
            className: `carousel-dot${index === active ? " is-active" : ""}`,
            key: item.desktop,
            type: "button",
            "aria-label": `Go to slide ${index + 1}`,
            onClick: () => setActive(index),
          }))
        )
      )
    );
  }

  window.Hero = Hero;
})();
