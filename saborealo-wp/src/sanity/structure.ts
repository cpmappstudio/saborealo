import {
  DocumentTextIcon,
  ImageIcon,
  MenuIcon,
  PinIcon,
  TagIcon,
} from "@sanity/icons"
import type { StructureResolver } from "sanity/structure"

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Menu")
        .icon(MenuIcon)
        .child(
          S.list()
            .title("Menu")
            .items([
              S.documentTypeListItem("menuCategory")
                .title("Categories")
                .icon(TagIcon),
              S.documentTypeListItem("menuItem")
                .title("Items")
                .icon(DocumentTextIcon),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem("location")
        .title("Locations")
        .icon(PinIcon),
      S.documentTypeListItem("heroSlide")
        .title("Hero slides")
        .icon(ImageIcon),
    ])
