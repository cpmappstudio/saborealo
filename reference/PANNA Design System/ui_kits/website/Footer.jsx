(function () {
  const h = React.createElement;

  const FOOTER_ICONS = {
    phone: {
      viewBox: "0 0 512 512",
      path: "M497.39 361.8 385.39 313.8a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6Z",
    },
    mail: {
      viewBox: "0 0 512 512",
      path: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7ZM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4Z",
    },
    pin: {
      viewBox: "0 0 384 512",
      path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0ZM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80Z",
    },
    facebook: {
      viewBox: "0 0 320 512",
      path: "M279.14 288 293.36 195.34h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0C152.14 0 104.28 44.38 104.28 124.72v70.62H22.89V288h81.39v224h100.17V288h74.69Z",
    },
    instagram: {
      viewBox: "0 0 448 512",
      path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141Zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7Zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8Zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9C384.2 43.4 352.4 35.2 316.5 33.4c-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S3.3 127.5 1.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8Z",
    },
    tiktok: {
      viewBox: "0 0 448 512",
      path: "M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z",
    },
    google: {
      viewBox: "0 0 488 512",
      path: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4Z",
    },
  };

  function SvgIcon({ type }) {
    const icon = FOOTER_ICONS[type];
    return h("svg", { viewBox: icon.viewBox, "aria-hidden": "true" },
      h("path", { d: icon.path })
    );
  }

  function FooterColumn({ title, children }) {
    return h("div", { className: "site-footer__column" },
      h("h2", { className: "site-footer__title" }, title),
      children
    );
  }

  function Footer() {
    const { logo, footer } = window.PANNA_DATA;

    return h("footer", { className: "site-footer" },
      h("div", { className: "site-footer__main" },
        h("div", { className: "panna-shell" },
          h("a", { href: "https://mypanna.com" },
            h("img", {
              className: "site-footer__logo",
              src: logo,
              alt: "PANNA New Latino Food",
              loading: "lazy",
            })
          ),

          h("div", { className: "site-footer__grid" },
            h(FooterColumn, { title: "PANNA GROUP" },
              h("ul", { className: "site-footer__contact" },
                footer.contact.map((item) => h("li", { key: `${item.icon}-${item.label}` },
                  h("span", { className: "site-footer__icon" },
                    h(SvgIcon, { type: item.icon })
                  ),
                  h("span", { className: "site-footer__text" }, item.label)
                ))
              )
            ),

            h(FooterColumn, { title: "QUICK LINKS" },
              h("ul", { className: "site-footer__list" },
                footer.quickLinks.map((item) => h("li", { key: item.label },
                  h("a", { className: "site-footer__link", href: item.href }, item.label)
                ))
              )
            ),

            h(FooterColumn, { title: "STORES" },
              h("ul", { className: "site-footer__list" },
                footer.storeLinks.map((item) => h("li", { key: item.label },
                  h("a", { className: "site-footer__link", href: item.href }, item.label)
                ))
              )
            ),

            h(FooterColumn, { title: "SUBSCRIBE" },
              h("form", { className: "site-footer__form" },
                h("input", {
                  className: "site-footer__input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                }),
                h("button", { className: "site-footer__submit", type: "submit" }, "Send")
              ),

              h("div", { className: "site-footer__social" },
                footer.social.map((item) => h("a", {
                  className: "site-footer__social-link",
                  href: item.href,
                  key: item.type,
                  "aria-label": item.label,
                },
                  h(SvgIcon, { type: item.type })
                ))
              ),

              h("div", { className: "site-footer__apps" },
                footer.appButtons.map((item) => h("a", { href: item.href, key: item.alt },
                  h("img", { src: item.image, alt: item.alt, loading: "lazy" })
                ))
              )
            )
          )
        )
      ),

      h("div", { className: "site-footer__legal" },
        h("span", null, "\u00a9 2024 PANNA | All Rights Reserved |\u00a0"),
        h("a", { href: "https://mypanna.com/privacy-policy/" }, "Privacy Policy")
      )
    );
  }

  window.Footer = Footer;
})();
