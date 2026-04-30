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
}

type JobApplicationFormStyle = CSSProperties & {
  "--job-application-form-background": string
}

export function JobApplicationPage({
  jobApplication,
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
          <JobApplicationForm form={jobApplication.form} />
        </div>
      </section>
    </div>
  )
}

function JobApplicationForm({ form }: { form: PannaJobApplicationData["form"] }) {
  const formStyle: JobApplicationFormStyle = {
    "--job-application-form-background": `url("${form.background}")`,
  }

  return (
    <form
      className="job-application-form panna-form"
      style={formStyle}
      name={form.name}
      method="post"
      encType="application/x-www-form-urlencoded"
      aria-label={form.title}
    >
      <FieldSet className="panna-form__fieldset">
        <FieldLegend className="sr-only">{form.title}</FieldLegend>
        <FieldGroup className="panna-form__grid">
          {form.items.map((item) => (
            <JobApplicationFormItem key={item.id} item={item} />
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
}: {
  item: JobApplicationFormItemConfig
}) {
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
