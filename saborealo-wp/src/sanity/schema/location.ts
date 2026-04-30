import { PinIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

import { seoFields } from "./shared/seo-fields"

const dayList = [
  { title: "Monday", value: "Mon" },
  { title: "Tuesday", value: "Tue" },
  { title: "Wednesday", value: "Wed" },
  { title: "Thursday", value: "Thu" },
  { title: "Friday", value: "Fri" },
  { title: "Saturday", value: "Sat" },
  { title: "Sunday", value: "Sun" },
] as const

const galleryImage = defineArrayMember({
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
})

const hoursEntry = defineArrayMember({
  type: "object",
  name: "hoursEntry",
  title: "Hours entry",
  fields: [
    defineField({
      name: "day",
      title: "Day",
      type: "string",
      options: { list: [...dayList], layout: "dropdown" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time",
      description: 'For example "7:30–22:00".',
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "day", subtitle: "time" },
  },
})

const overviewBullet = defineArrayMember({ type: "string" })
const overviewParagraph = defineArrayMember({ type: "text" })

export const location = defineType({
  name: "location",
  title: "Location",
  type: "document",
  icon: PinIcon,
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "presentation", title: "Presentation" },
    { name: "contact", title: "Contact" },
    { name: "map", title: "Map" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Identity
    defineField({
      name: "title",
      title: "Title",
      description: "Display name in headings (typically all caps, e.g. DORAL).",
      type: "string",
      group: "identity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
      options: { source: "title", maxLength: 64 },
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
      name: "footerLabel",
      title: "Footer label",
      description:
        "Short label used in navigation and footer lists (e.g. Doral).",
      type: "string",
      group: "identity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phrase",
      title: "Tagline phrase",
      description:
        "Short tagline rendered under the page title (e.g. “Doral’s New Latino Food Choice!”).",
      type: "string",
      group: "identity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      description: "Lower numbers appear first in lists.",
      type: "number",
      group: "identity",
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),

    // Presentation
    defineField({
      name: "cardImage",
      title: "Card image",
      description: "Image used on the home page store card.",
      type: "image",
      group: "presentation",
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
      name: "gallery",
      title: "Gallery",
      description: "Images shown in the location page gallery carousel.",
      type: "array",
      group: "presentation",
      of: [galleryImage],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "overviewParagraphs",
      title: "Overview paragraphs",
      type: "array",
      group: "presentation",
      of: [overviewParagraph],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "overviewHighlight",
      title: "Overview highlight",
      type: "text",
      rows: 3,
      group: "presentation",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "overviewBullets",
      title: "Overview bullets",
      type: "array",
      group: "presentation",
      of: [overviewBullet],
    }),

    // Contact
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
      group: "contact",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      description: 'Display format, e.g. "(305) 614-0202".',
      type: "string",
      group: "contact",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "openedDay",
      title: "Opened",
      description: 'Free text, e.g. "Since 2000" or "Jan 1st, 2015".',
      type: "string",
      group: "contact",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "array",
      group: "contact",
      of: [hoursEntry],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "guruUrl",
      title: "Restaurant Guru URL",
      type: "url",
      group: "contact",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "badgeName",
      title: "Restaurant Guru badge name",
      description:
        'Place name shown inside the badge, e.g. "PANNA Doral".',
      type: "string",
      group: "contact",
      validation: (rule) => rule.required(),
    }),

    // Map
    defineField({
      name: "mapEmbedUrl",
      title: "Map embed URL",
      description:
        "Paste the Google Maps “Embed a map” src URL.",
      type: "url",
      group: "map",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "mapTitle",
      title: "Map title",
      type: "string",
      group: "map",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mapTagline",
      title: "Map tagline",
      type: "string",
      group: "map",
      validation: (rule) => rule.required(),
    }),

    // SEO
    ...seoFields.map((field) => ({ ...field, group: "seo" })),
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
      title: "title",
      subtitle: "address",
      media: "cardImage",
    },
  },
})
