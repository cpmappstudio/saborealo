import type { SchemaTypeDefinition } from "sanity"

import { heroSlide } from "./hero-slide"
import { location } from "./location"
import { menuCategory } from "./menu-category"
import { menuItem } from "./menu-item"

export const schemaTypes: SchemaTypeDefinition[] = [
  heroSlide,
  location,
  menuCategory,
  menuItem,
]
