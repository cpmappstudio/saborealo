import type { CSSProperties } from "react"

import {
  PannaTextField,
  PannaTextareaField,
} from "@/components/site/PannaFormFields"
import { PannaPageIntro } from "@/components/site/PannaPageIntro"
import { SiteIcon } from "@/components/site/SiteIcon"
import { Button } from "@/components/ui/button"
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field"
import type {
  ContactFormFieldConfig,
  PannaContactData,
} from "@/data/panna-contact"
import type { PannaSiteData } from "@/data/panna-site"

type ContactPageProps = {
  contact: PannaContactData
  contactItems: PannaSiteData["contact"]
}

type ContactBandStyle = CSSProperties & {
  "--contact-band-background": string
}

export function ContactPage({ contact, contactItems }: ContactPageProps) {
  const bandStyle: ContactBandStyle = {
    "--contact-band-background": `url("${contact.contactBand.background}")`,
  }

  return (
    <div className="contact-page">
      <section className="contact-intro" aria-labelledby="contact-title">
        <div className="contact-intro__inner panna-shell">
          <ContactHelp help={contact.help} />
          <ContactForm form={contact.form} />
        </div>
      </section>

      <section
        className="contact-band"
        style={bandStyle}
        aria-labelledby="contact-band-title"
      >
        <svg
          className="contact-band__notch"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
            fill="currentColor"
          />
        </svg>

        <div className="contact-band__inner panna-shell">
          <div className="contact-band__content">
            <h2 id="contact-band-title" className="contact-band__title">
              {contact.contactBand.title}
            </h2>
            <p className="contact-band__description">
              {contact.contactBand.description}
            </p>
            <ContactInfoList items={contactItems} />
          </div>

          <div className="contact-band__media" aria-hidden="true">
            <img
              src={contact.contactBand.mascot.src}
              alt=""
              width={contact.contactBand.mascot.width}
              height={contact.contactBand.mascot.height}
              loading="lazy"
              decoding="async"
              className="contact-band__image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactForm({ form }: { form: PannaContactData["form"] }) {
  return (
    <form
      className="contact-form panna-form"
      name={form.name}
      method="post"
      encType="application/x-www-form-urlencoded"
      aria-label="Contact PANNA"
    >
      <FieldSet className="panna-form__fieldset">
        <FieldLegend className="sr-only">Contact PANNA</FieldLegend>
        <FieldGroup className="panna-form__fields">
          {form.fields.map((field) => (
            <ContactFormField key={field.id} field={field} />
          ))}
        </FieldGroup>
      </FieldSet>

      <Button type="submit" className="panna-form__submit">
        Submit
      </Button>
    </form>
  )
}

function ContactFormField({ field }: { field: ContactFormFieldConfig }) {
  if (field.control === "textarea") {
    return (
      <PannaTextareaField
        id={field.id}
        name={field.name}
        label={field.label}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        required={field.required}
        rows={field.rows}
        spellCheck={field.spellCheck}
        labelClassName="sr-only"
      />
    )
  }

  return (
    <PannaTextField
      id={field.id}
      name={field.name}
      label={field.label}
      type={field.type}
      placeholder={field.placeholder}
      autoComplete={field.autoComplete}
      required={field.required}
      inputMode={field.inputMode}
      pattern={field.pattern}
      title={field.title}
      spellCheck={field.spellCheck}
      labelClassName="sr-only"
    />
  )
}

function ContactHelp({ help }: { help: PannaContactData["help"] }) {
  return (
    <PannaPageIntro
      as="h1"
      id="contact-title"
      title={help.title}
      underline={help.underline}
      className="contact-help"
    >
      <p>
        {help.copy}
        <br />
        <strong>{help.officeHours}</strong>
      </p>
    </PannaPageIntro>
  )
}

function ContactInfoList({
  items,
}: {
  items: ContactPageProps["contactItems"]
}) {
  return (
    <ul className="contact-info-list" aria-label="PANNA contact information">
      {items.map((item) => {
        const icon = item.icon === "pin" ? "searchLocation" : item.icon

        return (
          <li key={`${item.icon}-${item.label}`}>
            <span className="contact-info-list__icon">
              <SiteIcon type={icon} />
            </span>
            <span className="contact-info-list__text">{item.label}</span>
          </li>
        )
      })}
    </ul>
  )
}
