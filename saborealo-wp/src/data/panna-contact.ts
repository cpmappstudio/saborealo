type ContactInputField = {
  control: "input";
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "tel" | "email";
  autoComplete: string;
  required?: boolean;
  inputMode?: "text" | "tel" | "email";
  pattern?: string;
  title?: string;
  spellCheck?: boolean;
};

type ContactTextareaField = {
  control: "textarea";
  id: string;
  name: string;
  label: string;
  placeholder: string;
  autoComplete: string;
  rows: number;
  required?: boolean;
  spellCheck?: boolean;
};

export type ContactFormFieldConfig = ContactInputField | ContactTextareaField;

export const pannaContactData = {
  help: {
    title: "LET US HELP YOU",
    underline: {
      src: "/mancha.webp",
      width: 361,
      height: 44,
    },
    copy: "We are here to serve you and hear any feedback that helps us keep our food and service at its best.",
    officeHours: "",
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
        pattern: "[0-9 .,\\(\\)*+=#&\\-]+",
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
    description: "",
    background: "#000000",
    mascot: {
      src: "/images/stores/puerto-rico-flag.png",
      width: 414,
      height: 552,
    },
  },
} as const;

export type PannaContactData = typeof pannaContactData;
