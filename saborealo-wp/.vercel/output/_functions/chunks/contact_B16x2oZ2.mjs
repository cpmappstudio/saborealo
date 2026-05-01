import './page-ssr_Df5WsTR8.mjs';
import { c as createComponent } from './astro-component_BHvubdiC.mjs';
import { z as isInputError, y as renderComponent, r as renderTemplate } from './entrypoint_DN3GfvOX.mjs';
import { a as actions } from './server_BQt8Bf5u.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { P as PannaPageIntro, F as FieldSet, a as FieldLegend, b as FieldGroup, c as PannaTextareaField, d as PannaTextField } from './PannaPageIntro_B2M3b0T7.mjs';
import { P as PannaSectionNotch } from './PannaSectionNotch_BT1qlUpL.mjs';
import { B as Button, S as SiteIcon, $ as $$SiteLayout, p as pannaSiteContact } from './SiteLayout_BhOEln2X.mjs';

function ContactPage({
  contact,
  contactItems,
  action,
  inputErrors
}) {
  const bandStyle = {
    "--contact-band-background": `url("${contact.contactBand.background}")`
  };
  return /* @__PURE__ */ jsxs("div", { className: "contact-page", children: [
    /* @__PURE__ */ jsx("section", { className: "contact-intro", "aria-labelledby": "contact-title", children: /* @__PURE__ */ jsxs("div", { className: "contact-intro__inner panna-shell", children: [
      /* @__PURE__ */ jsx(ContactHelp, { help: contact.help }),
      /* @__PURE__ */ jsx(
        ContactForm,
        {
          form: contact.form,
          action,
          inputErrors
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "contact-band",
        style: bandStyle,
        "aria-labelledby": "contact-band-title",
        children: [
          /* @__PURE__ */ jsx(PannaSectionNotch, { className: "contact-band__notch" }),
          /* @__PURE__ */ jsxs("div", { className: "contact-band__inner panna-shell", children: [
            /* @__PURE__ */ jsxs("div", { className: "contact-band__content", children: [
              /* @__PURE__ */ jsx("h2", { id: "contact-band-title", className: "contact-band__title", children: contact.contactBand.title }),
              /* @__PURE__ */ jsx("p", { className: "contact-band__description", children: contact.contactBand.description }),
              /* @__PURE__ */ jsx(ContactInfoList, { items: contactItems })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "contact-band__media", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: contact.contactBand.mascot.src,
                alt: "",
                width: contact.contactBand.mascot.width,
                height: contact.contactBand.mascot.height,
                loading: "lazy",
                decoding: "async",
                className: "contact-band__image"
              }
            ) })
          ] })
        ]
      }
    )
  ] });
}
function ContactForm({
  form,
  action,
  inputErrors
}) {
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "contact-form panna-form",
      name: form.name,
      method: "post",
      action,
      encType: "application/x-www-form-urlencoded",
      "aria-label": "Contact Saborealo Bakery",
      "data-astro-reload": true,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "company",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true",
            style: honeypotStyle
          }
        ),
        /* @__PURE__ */ jsxs(FieldSet, { className: "panna-form__fieldset", children: [
          /* @__PURE__ */ jsx(FieldLegend, { className: "sr-only", children: "Contact Saborealo Bakery" }),
          /* @__PURE__ */ jsx(FieldGroup, { className: "panna-form__fields", children: form.fields.map((field) => /* @__PURE__ */ jsx(
            ContactFormField,
            {
              field,
              error: inputErrors?.[field.name]?.[0]
            },
            field.id
          )) })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "panna-form__submit", children: "Submit" })
      ]
    }
  );
}
function ContactFormField({
  field,
  error
}) {
  if (field.control === "textarea") {
    return /* @__PURE__ */ jsx(
      PannaTextareaField,
      {
        id: field.id,
        name: field.name,
        label: field.label,
        placeholder: field.placeholder,
        autoComplete: field.autoComplete,
        required: field.required,
        rows: field.rows,
        spellCheck: field.spellCheck,
        labelClassName: "sr-only",
        error
      }
    );
  }
  return /* @__PURE__ */ jsx(
    PannaTextField,
    {
      id: field.id,
      name: field.name,
      label: field.label,
      type: field.type,
      placeholder: field.placeholder,
      autoComplete: field.autoComplete,
      required: field.required,
      inputMode: field.inputMode,
      pattern: field.pattern,
      title: field.title,
      spellCheck: field.spellCheck,
      labelClassName: "sr-only",
      error
    }
  );
}
function ContactHelp({ help }) {
  return /* @__PURE__ */ jsx(
    PannaPageIntro,
    {
      as: "h1",
      id: "contact-title",
      title: help.title,
      underline: help.underline,
      className: "contact-help",
      children: /* @__PURE__ */ jsxs("p", { children: [
        help.copy,
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: help.officeHours })
      ] })
    }
  );
}
function ContactInfoList({
  items
}) {
  return /* @__PURE__ */ jsx("ul", { className: "contact-info-list", "aria-label": "Saborealo Bakery contact information", children: items.map((item) => {
    const icon = item.icon === "pin" ? "searchLocation" : item.icon;
    return /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("span", { className: "contact-info-list__icon", children: /* @__PURE__ */ jsx(SiteIcon, { type: icon }) }),
      /* @__PURE__ */ jsx("span", { className: "contact-info-list__text", children: item.label })
    ] }, `${item.icon}-${item.label}`);
  }) });
}
const honeypotStyle = {
  position: "absolute",
  left: "-9999px",
  width: 1,
  height: 1,
  overflow: "hidden"
};

const pannaContactData = {
  help: {
    title: "LET US HELP YOU",
    underline: {
      src: "/mancha.webp",
      width: 361,
      height: 44
    },
    copy: "We are here to serve you and hear any feedback that helps us keep our food and service at its best.",
    officeHours: ""
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
        autoComplete: "given-name"
      },
      {
        control: "input",
        id: "contact-last-name",
        name: "last_name",
        label: "Last Name",
        placeholder: "Last Name…",
        type: "text",
        autoComplete: "family-name",
        required: true
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
        required: true
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
        required: true
      },
      {
        control: "input",
        id: "contact-subject",
        name: "subject",
        label: "Subject",
        placeholder: "Subject…",
        type: "text",
        autoComplete: "off",
        required: true
      },
      {
        control: "textarea",
        id: "contact-message",
        name: "message",
        label: "Message",
        placeholder: "Message…",
        autoComplete: "off",
        rows: 4
      }
    ]
  },
  contactBand: {
    title: "CONTACT US",
    description: "",
    background: "#000000",
    mascot: {
      src: "/images/stores/puerto-rico-flag.png",
      width: 414,
      height: 552
    }
  }
};

const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contact;
  const result = Astro2.getActionResult(actions.submitContact);
  if (result?.data) {
    return Astro2.redirect("/contact/");
  }
  const inputErrors = isInputError(result?.error) ? result.error.fields : {};
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "Contact - Saborealo Bakery", "description": "Contact Saborealo Bakery for restaurant information, feedback, and corporate office details." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactPage", ContactPage, { "contact": pannaContactData, "contactItems": pannaSiteContact, "action": String(actions.submitContact), "inputErrors": inputErrors })} ` })}`;
}, "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/pages/contact.astro", void 0);

const $$file = "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
