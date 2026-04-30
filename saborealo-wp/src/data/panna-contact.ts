import { pannaImage as image } from "@/data/panna-assets"

type ContactInputField = {
  control: "input"
  id: string
  name: string
  label: string
  placeholder: string
  type: "text" | "tel" | "email"
  autoComplete: string
  required?: boolean
  inputMode?: "text" | "tel" | "email"
  pattern?: string
  title?: string
  spellCheck?: boolean
}

type ContactTextareaField = {
  control: "textarea"
  id: string
  name: string
  label: string
  placeholder: string
  autoComplete: string
  rows: number
  required?: boolean
  spellCheck?: boolean
}

export type ContactFormFieldConfig = ContactInputField | ContactTextareaField

export const pannaContactData = {
  help: {
    title: "LET US HELP YOU",
    underline: {
      src: image("2024/10/MANCHA.png"),
      width: 361,
      height: 44,
    },
    copy: "We are here to serve you and hear about any feedback that can help us to improve our service.",
    officeHours:
      "Our Corporate office hours are Monday thru Friday from 9 a.m. to 5 p.m. EST.",
  },
  form: {
    name: "contact-us",
    fields: [
      {
        control: "input",
        id: "contact-first-name",
        name: "first_name",
        label: "First Name",
        placeholder: "First Name…",
        type: "text",
        autoComplete: "given-name",
      },
      {
        control: "input",
        id: "contact-last-name",
        name: "last_name",
        label: "Last Name",
        placeholder: "Last Name…",
        type: "text",
        autoComplete: "family-name",
        required: true,
      },
      {
        control: "input",
        id: "contact-phone",
        name: "phone",
        label: "Phone",
        placeholder: "Phone…",
        type: "tel",
        autoComplete: "tel",
        inputMode: "tel",
        pattern: "[0-9()#&+*=. -]+",
        title: "Only numbers and phone characters (#, -, *, etc) are accepted.",
        required: true,
      },
      {
        control: "input",
        id: "contact-email",
        name: "email",
        label: "Email",
        placeholder: "Email Address…",
        type: "email",
        autoComplete: "email",
        inputMode: "email",
        spellCheck: false,
        required: true,
      },
      {
        control: "input",
        id: "contact-subject",
        name: "subject",
        label: "Subject",
        placeholder: "Subject…",
        type: "text",
        autoComplete: "off",
        required: true,
      },
      {
        control: "textarea",
        id: "contact-message",
        name: "message",
        label: "Message",
        placeholder: "Message…",
        autoComplete: "off",
        rows: 4,
      },
    ] satisfies ContactFormFieldConfig[],
  },
  contactBand: {
    title: "CONTACT US",
    description:
      "If you need to contact a specific PANNA restaurant, go to the menu “Locations” and scroll down to find all PANNA location’s contact information.",
    background: image("2024/10/Graffiti-Negro.webp"),
    mascot: {
      src: image("2024/10/CHEFF.webp"),
      width: 414,
      height: 552,
    },
  },
} as const

export type PannaContactData = typeof pannaContactData
