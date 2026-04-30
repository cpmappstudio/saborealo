import { BasketIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu item",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
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
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "menuCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Product image shown on grids and detail pages.",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      description: "Star rating from 0 to 5.",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.required().min(0).max(5),
    }),
    defineField({
      name: "orderUrl",
      title: "Order URL",
      description: "Direct link to order this item online (Skytab).",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      categoryLabel: "category.label",
      media: "image",
    },
    prepare({ title, categoryLabel, media }) {
      return {
        title,
        subtitle:
          typeof categoryLabel === "string" ? categoryLabel : undefined,
        media,
      }
    },
  },
})
