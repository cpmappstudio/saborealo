import { defineField } from "sanity"

export const seoFields = [
  defineField({
    name: "metaTitle",
    title: "Meta title",
    type: "string",
    validation: (rule) =>
      rule
        .required()
        .max(70)
        .warning("Keep it under 70 characters for best SEO"),
  }),
  defineField({
    name: "metaDescription",
    title: "Meta description",
    type: "text",
    rows: 3,
    validation: (rule) =>
      rule
        .required()
        .max(160)
        .warning("Keep it under 160 characters for best SEO"),
  }),
]
