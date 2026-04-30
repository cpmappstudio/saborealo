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
    title: "Authentic Puerto Rican flavor, right here in Kissimmee!",
    underline: {
      src: image("2024/10/MANCHA.png"),
      width: 361,
      height: 44,
    },
  },
  story: {
    title: "About Saborealo",
    background: "#000000",
    columns: [
      {
        id: "our-story",
        image: {
          src: "/images/stores/saborealo-matador-store.jpg",
          alt: "Saborealo Bakery at Matador",
          width: 601,
          height: 400,
        },
        sections: [
          {
            id: "our-story",
            title: "Born from the flavors of Puerto Rico",
            paragraphs: [
              "Saborealo Bakery was born with one mission: bring the warmth, tradition, and bold flavors of Puerto Rico to Kissimmee, FL.",
              "Located at 926 Cypress Pkwy, our bakery is a place where the community gathers for breakfast sandwiches, fresh coffee, mofongo, frituras, pastries, and hot plates — all made with heart.",
              "Every dish carries the spirit of Puerto Rican home cooking, the kind that makes you feel welcome the moment you walk in.",
            ],
          },
        ],
      },
      {
        id: "chef-noel",
        image: {
          src: "/images/stores/chef-noel.jpg",
          alt: "Saborealo Bakery kitchen",
          width: 601,
          height: 400,
        },
        sections: [
          {
            id: "chef-noel",
            title: "The hand behind the flavor",
            paragraphs: [
              "Saborealo is led by Chef Noel, originally from Aibonito, Puerto Rico — a town known for its festivals, its flowers, and its food.",
              "Chef Noel brings that tradition to every plate: fresh ingredients, authentic recipes, and the kind of attention to detail that turns a meal into a memory.",
            ],
          },
          {
            id: "community",
            title: "Proudly boricua, proudly local",
            paragraphs: [
              "More than a bakery, Saborealo is a community hub — vibrant, welcoming, and always full of sabor. Whether you stop in for a quick bite or sit down for a full plate, you leave with a taste you won't forget.",
            ],
          },
        ],
      },
    ] satisfies AboutStoryColumn[],
  },
} as const

export type PannaAboutData = typeof pannaAboutData
