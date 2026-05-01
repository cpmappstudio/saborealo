import type { ComponentProps, ReactNode } from "react"

import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export type PannaFormFieldWidth = "half" | "full"

type PannaFormBaseFieldProps = {
  id: string
  name: string
  label: string
  required?: boolean
  width?: PannaFormFieldWidth
  className?: string
  labelClassName?: string
  controlClassName?: string
  error?: string
}

type PannaTextFieldProps = PannaFormBaseFieldProps &
  Pick<
    ComponentProps<"input">,
    | "autoComplete"
    | "inputMode"
    | "pattern"
    | "placeholder"
    | "spellCheck"
    | "title"
    | "type"
  >

type PannaTextareaFieldProps = PannaFormBaseFieldProps &
  Pick<
    ComponentProps<"textarea">,
    "autoComplete" | "placeholder" | "rows" | "spellCheck"
  >

type PannaChoiceGroupProps = Omit<PannaFormBaseFieldProps, "controlClassName"> & {
  inputType: "checkbox" | "radio"
  options: readonly {
    label: string
    value: string
  }[]
  optionsClassName?: string
}

type PannaAcceptanceFieldProps = Omit<
  PannaFormBaseFieldProps,
  "controlClassName"
> & {
  text: ReactNode
}

export function PannaTextField({
  id,
  name,
  label,
  required,
  width,
  className,
  labelClassName,
  controlClassName,
  error,
  type = "text",
  autoComplete,
  inputMode,
  pattern,
  placeholder,
  spellCheck,
  title,
}: PannaTextFieldProps) {
  const errorId = `${id}-error`
  return (
    <Field
      className={pannaFormFieldClassName(width, className)}
      data-invalid={error ? true : undefined}
    >
      <FieldLabel
        htmlFor={id}
        className={cn("panna-form__label", labelClassName)}
      >
        {label}
        <PannaRequiredMark required={required} />
      </FieldLabel>
      <Input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        spellCheck={spellCheck}
        title={title}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn("panna-form__control", controlClassName)}
      />
      <PannaFieldError id={errorId} message={error} />
    </Field>
  )
}

export function PannaTextareaField({
  id,
  name,
  label,
  required,
  width,
  className,
  labelClassName,
  controlClassName,
  error,
  autoComplete,
  placeholder,
  rows,
  spellCheck,
}: PannaTextareaFieldProps) {
  const errorId = `${id}-error`
  return (
    <Field
      className={pannaFormFieldClassName(width, className)}
      data-invalid={error ? true : undefined}
    >
      <FieldLabel
        htmlFor={id}
        className={cn("panna-form__label", labelClassName)}
      >
        {label}
        <PannaRequiredMark required={required} />
      </FieldLabel>
      <Textarea
        id={id}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        rows={rows}
        spellCheck={spellCheck}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn("panna-form__control panna-form__textarea", controlClassName)}
      />
      <PannaFieldError id={errorId} message={error} />
    </Field>
  )
}

export function PannaChoiceGroup({
  id,
  name,
  label,
  required,
  width,
  className,
  labelClassName,
  inputType,
  options,
  optionsClassName,
  error,
}: PannaChoiceGroupProps) {
  const errorId = `${id}-error`
  return (
    <FieldSet
      className={pannaFormFieldClassName(width, className)}
      data-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
    >
      <FieldLegend className={cn("panna-form__label", labelClassName)}>
        {label}
        <PannaRequiredMark required={required} />
      </FieldLegend>
      <div className={cn("panna-form__options", optionsClassName)}>
        {options.map((option) => {
          const optionId = `${id}-${option.value}`

          return (
            <label className="panna-form__option" key={option.value}>
              <input
                id={optionId}
                name={name}
                type={inputType}
                value={option.value}
                required={required}
                aria-invalid={error ? true : undefined}
                className="panna-form__checkbox"
              />
              <span className="panna-form__option-text">{option.label}</span>
            </label>
          )
        })}
      </div>
      <PannaFieldError id={errorId} message={error} />
    </FieldSet>
  )
}

export function PannaAcceptanceField({
  id,
  name,
  label,
  required,
  width,
  className,
  labelClassName,
  text,
  error,
}: PannaAcceptanceFieldProps) {
  const errorId = `${id}-error`
  return (
    <FieldSet
      className={pannaFormFieldClassName(width, className)}
      data-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
    >
      <FieldLegend className={cn("panna-form__label", labelClassName)}>
        {label}
        <PannaRequiredMark required={required} />
      </FieldLegend>
      <label className="panna-form__acceptance">
        <input
          id={id}
          name={name}
          type="checkbox"
          required={required}
          aria-invalid={error ? true : undefined}
          className="panna-form__checkbox"
        />
        <span className="panna-form__acceptance-text">{text}</span>
      </label>
      <PannaFieldError id={errorId} message={error} />
    </FieldSet>
  )
}

function PannaRequiredMark({ required }: { required?: boolean }) {
  if (!required) {
    return null
  }

  return (
    <span className="panna-form__required" aria-hidden="true">
      {" *"}
    </span>
  )
}

function PannaFieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null
  }

  return (
    <p id={id} className="panna-form__error" role="alert">
      {message}
    </p>
  )
}

function pannaFormFieldClassName(
  width: PannaFormFieldWidth | undefined,
  className?: string
) {
  return cn(
    "panna-form__field",
    width === "full" ? "panna-form__field--full" : null,
    className
  )
}
