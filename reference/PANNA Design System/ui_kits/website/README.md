# PANNA Website UI Kit

Pixel-leaning recreation of the home page at `mypanna.com`, broken into reusable React components.

`index.html` can be opened directly from Finder because the mounted components are browser-ready scripts. For a closer browser preview loop, you can also serve this kit from the Design System root so `../../colors_and_type.css` resolves correctly:

```bash
cd "reference/PANNA Design System"
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/ui_kits/website/`.

## Components

| File | What |
|---|---|
| `SiteData.jsx` | Shared content and remote asset URLs extracted from the original build |
| `website.css` | Component layout, spacing, breakpoints, and Elementor-derived sizing |
| `Header.jsx` | Sticky black header: PANNA logo, desktop dropdown nav, mobile burger, product search |
| `Hero.jsx` | 11-slide promo carousel using the original horizontal/vertical banner assets |
| `MenuGrid.jsx` | Two menu-category carousel rows using the original `ICONO_*.webp` assets |
| `FeatureCards.jsx` | Star product carousel plus the two promo cards from the original home page |
| `StoreCards.jsx` | Store cards with original location photos, badge treatment, and dark patterned section |
| `Footer.jsx` | Cream footer with centered logo, four columns, social links, app buttons, and red legal bar |
| `Marquee.jsx` / `CtaBanner.jsx` | Legacy experimental components, not mounted by `index.html` |

## Notes

- `index.html` mounts the external components directly as normal browser scripts; do not paste component copies back into the HTML.
- The current kit intentionally uses remote `https://mypanna.com/wp-content/uploads/...` assets for pixel comparison. They can be replaced later by local assets without changing component structure.
