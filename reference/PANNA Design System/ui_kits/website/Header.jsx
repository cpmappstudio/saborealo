(function () {
  const h = React.createElement;

  function Header() {
    const { nav, logo } = window.PANNA_DATA;
    const [open, setOpen] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const toggleItem = (event, item) => {
      if (!item.sub || item.href !== "#") return;
      event.preventDefault();
      setOpen((current) => current === item.label ? null : item.label);
    };

    return h("header", { className: "site-header" },
      h("div", { className: "site-header__inner panna-shell" },
        h("a", {
          className: "site-header__logo",
          href: "https://mypanna.com",
          "aria-label": "PANNA home",
        },
          h("img", { src: logo, alt: "PANNA New Latino Food" })
        ),

        h("div", { className: "site-header__nav-wrap" },
          h("button", {
            className: "site-header__toggle",
            type: "button",
            "aria-label": "Open menu",
            "aria-expanded": mobileOpen,
            onClick: () => setMobileOpen((value) => !value),
          },
            h("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" },
              h("path", {
                fill: "currentColor",
                d: "M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z",
              })
            )
          ),

          h("nav", {
            className: `main-nav${mobileOpen ? " is-open" : ""}`,
            "aria-label": "Main menu",
          },
            nav.map((item) => h("div", {
              className: `main-nav__item${open === item.label ? " is-open" : ""}`,
              key: item.label,
              onMouseEnter: () => setOpen(item.label),
              onMouseLeave: () => setOpen(null),
            },
              h("a", {
                className: "main-nav__link",
                href: item.href,
                onClick: (event) => toggleItem(event, item),
                onFocus: () => setOpen(item.label),
              },
                h("span", null, item.label),
                item.sub && h("svg", {
                  className: "main-nav__chevron",
                  viewBox: "0 0 320 512",
                  "aria-hidden": "true",
                },
                  h("path", {
                    d: "M143 352.3 7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0Z",
                  })
                )
              ),

              item.sub && h("ul", { className: "main-nav__dropdown" },
                item.sub.map((subItem) => h("li", { key: subItem.label },
                  h("a", { className: "main-nav__sub-link", href: subItem.href }, subItem.label)
                ))
              )
            ))
          )
        ),

        h("div", { className: "site-search" },
          h("form", {
            className: "site-search__form",
            role: "search",
            action: "https://mypanna.com/",
            method: "get",
          },
            h("input", {
              className: "site-search__input",
              type: "search",
              name: "s",
              placeholder: "Search Products...",
            }),
            h("button", {
              className: "site-search__button",
              type: "submit",
              "aria-label": "Search",
            },
              h("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
              },
                h("circle", { cx: "11", cy: "11", r: "7" }),
                h("path", { d: "m20 20-3.5-3.5" })
              )
            )
          )
        )
      )
    );
  }

  window.Header = Header;
})();
