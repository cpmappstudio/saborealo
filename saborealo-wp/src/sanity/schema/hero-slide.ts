import { ImageIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero slide",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "alt",
      title: "Alternative text",
      description:
        "Describe the slide for screen readers and accessibility. Used for both desktop and mobile images.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "desktopImage",
      title: "Desktop image",
      description: "Horizontal banner shown on screens above 768px.",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile image",
      description: "Vertical or square banner shown on screens up to 767px.",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      description: "Lower numbers appear first.",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "alt",
      subtitle: "displayOrder",
      media: "desktopImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title ?? "Hero slide",
        subtitle:
          typeof subtitle === "number" ? `Order: ${subtitle}` : undefined,
        media,
      }
    },
  },
})
