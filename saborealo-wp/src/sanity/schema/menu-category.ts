import { TagIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Menu category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      description: "Display name shown in headings and chips (e.g. AREPAS).",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "label", maxLength: 64 },
      validation: (rule) =>
        rule.required().custom((slug) => {
          if (!slug?.current) return "Required"
          if (!/^[a-z0-9-]+$/.test(slug.current)) {
            return "Slug must be lowercase letters, numbers and hyphens only"
          }
          return true
        }),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      description:
        "Small thumbnail used in the home menu carousel chips (square, ~90×90).",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) =>
            rule
              .required()
              .warning("Alt text is required for accessibility and SEO"),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      description:
        "Image used on the menu page category cards (square, ~400×400).",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) =>
            rule
              .required()
              .warning("Alt text is required for accessibility and SEO"),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeRow",
      title: "Home placement",
      description:
        "Where the category appears on the home menu carousel.",
      type: "string",
      options: {
        list: [
          { title: "Top row", value: "top" },
          { title: "Bottom row", value: "bottom" },
          { title: "Hidden from home", value: "none" },
        ],
        layout: "radio",
      },
      initialValue: "top",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeOrder",
      title: "Home order",
      description:
        "Position within the chosen home row. Lower numbers appear first.",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: "menuOrder",
      title: "Menu page order",
      description:
        "Position within the menu page category grid. Lower numbers appear first.",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Menu order",
      name: "menuOrderAsc",
      by: [{ field: "menuOrder", direction: "asc" }],
    },
    {
      title: "Home order",
      name: "homeOrderAsc",
      by: [
        { field: "homeRow", direction: "asc" },
        { field: "homeOrder", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "homeRow",
      media: "icon",
    },
    prepare({ title, subtitle, media }) {
      const rowLabel =
        subtitle === "top"
          ? "Home: top"
          : subtitle === "bottom"
            ? "Home: bottom"
            : "Hidden from home"
      return { title, subtitle: rowLabel, media }
    },
  },
})
