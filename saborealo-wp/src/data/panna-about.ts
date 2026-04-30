import { pannaImage as image } from "@/data/panna-assets"

type AboutStoryImage = {
  src: string
  alt: string
  width: number
  height: number
}

type AboutStorySection = {
  id: string
  title: string
  paragraphs: readonly string[]
}

type AboutStoryColumn = {
  id: string
  image: AboutStoryImage
  sections: readonly AboutStorySection[]
}

export const pannaAboutData = {
  intro: {
    title: "A taste to remember, the place you love!",
    underline: {
      src: image("2024/10/MANCHA.png"),
      width: 361,
      height: 44,
    },
  },
  story: {
    title: "About PANNA",
    background: image("2024/10/Graffiti-Negro.webp"),
    columns: [
      {
        id: "family-business",
        image: {
          src: image("2024/10/PANNA-CAFE.webp"),
          alt: "PANNA cafe",
          width: 601,
          height: 400,
        },
        sections: [
          {
            id: "family-business",
            title: "A family business since 2000",
            paragraphs: [
              "PANNA’s history began in 2000, when Mauricio and Beatriz Meneses opened a latin bakery on Collins Avenue in Miami Beach, FL.",
              "After a few years of operation, they discovered that PANNA was born to create not only America’s best cheese stick “Tequeños” and ham & cheese filled bread “Cachitos” but exceptional arepas, sandwiches and salads as well. All served in inviting place for families and friends.",
              "Today, PANNA is a vertically integrated organization , operating restaurants, a factory producing the best latin pastries for both PANNA and third-party partners plus, a distribution center.",
            ],
          },
        ],
      },
      {
        id: "quality",
        image: {
          src: image("2024/10/MAURICIO.webp"),
          alt: "Mauricio Meneses",
          width: 601,
          height: 400,
        },
        sections: [
          {
            id: "quality",
            title: "Flavor, Modern, Quality and Fresh",
            paragraphs: [
              "PANNA delivers authentic latin food with exceptional customer service. Our products combine Latin American flavors with a focus on fresh, high quality ingredients. Our friendly and amazing team members, create a unique and memorable experience, leaving customers with a taste to remember and place they love.",
            ],
          },
          {
            id: "meaning",
            title: "What does PANNA means?",
            paragraphs: [
              "In many Latin American countries, a “pana” is a friend, someone you can trust, someone you like to share and spend time with. So, we just added an extra “n” to our name to make it “double friendly”.",
            ],
          },
        ],
      },
    ] satisfies AboutStoryColumn[],
  },
} as const

export type PannaAboutData = typeof pannaAboutData
