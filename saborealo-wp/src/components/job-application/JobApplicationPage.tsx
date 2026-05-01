import type { CSSProperties } from "react"

import {
  PannaAcceptanceField,
  PannaChoiceGroup,
  PannaTextField,
  PannaTextareaField,
} from "@/components/site/PannaFormFields"
import { PannaPageIntro } from "@/components/site/PannaPageIntro"
import { Button } from "@/components/ui/button"
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field"
import type {
  JobApplicationFormItemConfig,
  PannaJobApplicationData,
} from "@/data/panna-job-application"

type JobApplicationPageProps = {
  jobApplication: PannaJobApplicationData
  /**
   * URL string of the Astro action endpoint. Pass `String(actions.X)`
   * from the `.astro` page — passing the action object directly makes
   * React 19 treat it as a Server Action and override `method`/`encType`.
   */
  action?: string
  inputErrors?: Record<string, string[] | undefined>
}

type JobApplicationFormStyle = CSSProperties & {
  "--job-application-form-background": string
}

export function JobApplicationPage({
  jobApplication,
  action,
  inputErrors,
}: JobApplicationPageProps) {
  return (
    <div className="job-application-page">
      <section
        className="job-application-hero"
        aria-labelledby="job-application-title"
      >
        <div className="job-application-hero__inner panna-shell">
          <PannaPageIntro
            as="h1"
            id="job-application-title"
            title={jobApplication.intro.title}
            underline={jobApplication.intro.underline}
            className="job-application-intro"
          >
            <p>{jobApplication.intro.copy}</p>
          </PannaPageIntro>
        </div>
      </section>

      <section
        className="job-application-form-section"
        aria-labelledby="job-application-form-title"
      >
        <div className="panna-shell">
          <h2 id="job-application-form-title" className="sr-only">
            {jobApplication.form.title}
          </h2>
          <JobApplicationForm
            form={jobApplication.form}
            action={action}
            inputErrors={inputErrors}
          />
        </div>
      </section>
    </div>
  )
}

function JobApplicationForm({
  form,
  action,
  inputErrors,
}: {
  form: PannaJobApplicationData["form"]
  action?: string
  inputErrors?: Record<string, string[] | undefined>
}) {
  const formStyle: JobApplicationFormStyle = {
    "--job-application-form-background": `url("${form.background}")`,
  }

  return (
    <form
      className="job-application-form panna-form"
      style={formStyle}
      name={form.name}
      method="post"
      action={action}
      encType="application/x-www-form-urlencoded"
      aria-label={form.title}
      data-astro-reload
    >
      {/* Honeypot — bots fill this, humans don't */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={honeypotStyle}
      />

      <FieldSet className="panna-form__fieldset">
        <FieldLegend className="sr-only">{form.title}</FieldLegend>
        <FieldGroup className="panna-form__grid">
          {form.items.map((item) => (
            <JobApplicationFormItem
              key={item.id}
              item={item}
              inputErrors={inputErrors}
            />
          ))}
        </FieldGroup>
      </FieldSet>

      <Button type="submit" className="panna-form__submit">
        {form.submitLabel}
      </Button>
    </form>
  )
}

function JobApplicationFormItem({
  item,
  inputErrors,
}: {
  item: JobApplicationFormItemConfig
  inputErrors?: Record<string, string[] | undefined>
}) {
  const fieldError =
    item.kind !== "section" ? inputErrors?.[item.name]?.[0] : undefined

  switch (item.kind) {
    case "acceptance":
      return (
        <PannaAcceptanceField
          id={item.id}
          name={item.name}
          label={item.label}
          required={item.required}
          width={item.width}
          text={item.text}
          error={fieldError}
        />
      )
    case "choice-group":
      return (
        <PannaChoiceGroup
          id={item.id}
          name={item.name}
          label={item.label}
          required={item.required}
          width={item.width}
          inputType={item.inputType}
          options={item.options}
          error={fieldError}
        />
      )
    case "input":
      return (
        <PannaTextField
          id={item.id}
          name={item.name}
          label={item.label}
          type={item.inputType}
          autoComplete={item.autoComplete}
          inputMode={item.inputMode}
          pattern={item.pattern}
          placeholder={item.placeholder}
          required={item.required}
          spellCheck={item.spellCheck}
          title={item.title}
          width={item.width}
          error={fieldError}
        />
      )
    case "section":
      return <JobApplicationSection item={item} />
    case "textarea":
      return (
        <PannaTextareaField
          id={item.id}
          name={item.name}
          label={item.label}
          autoComplete={item.autoComplete}
          required={item.required}
          rows={item.rows}
          spellCheck={item.spellCheck}
          width={item.width}
          error={fieldError}
        />
      )
  }
}

function JobApplicationSection({
  item,
}: {
  item: Extract<JobApplicationFormItemConfig, { kind: "section" }>
}) {
  const content = item.lines.map((line) => <span key={line}>{line}</span>)

  if (item.level === 3) {
    return (
      <h3 id={item.id} className="panna-form__section">
        {content}
      </h3>
    )
  }

  return (
    <h2 id={item.id} className="panna-form__section">
      {content}
    </h2>
  )
}

const honeypotStyle: CSSProperties = {
  position: "absolute",
  left: "-9999px",
  width: 1,
  height: 1,
  overflow: "hidden",
}
