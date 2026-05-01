import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { cva } from 'class-variance-authority';
import { c as cn, I as Input, P as PannaDecoratedHeading } from './SiteLayout_BhOEln2X.mjs';
import { Label as Label$1 } from 'radix-ui';

function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Label$1.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-xs/relaxed leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "fieldset",
    {
      "data-slot": "field-set",
      className: cn(
        "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      ),
      ...props
    }
  );
}
function FieldLegend({
  className,
  variant = "legend",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn(
        "mb-2 font-medium data-[variant=label]:text-xs/relaxed data-[variant=legend]:text-sm",
        className
      ),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "group/field-group @container/field-group flex w-full flex-col gap-4 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        className
      ),
      ...props
    }
  );
}
const fieldVariants = cva(
  "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
        horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-2 dark:has-data-checked:bg-primary/10",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      ),
      ...props
    }
  );
}

function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full resize-none rounded-md border border-input bg-input/20 px-2 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

function PannaTextField({
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
  title
}) {
  const errorId = `${id}-error`;
  return /* @__PURE__ */ jsxs(
    Field,
    {
      className: pannaFormFieldClassName(width, className),
      "data-invalid": error ? true : void 0,
      children: [
        /* @__PURE__ */ jsxs(
          FieldLabel,
          {
            htmlFor: id,
            className: cn("panna-form__label", labelClassName),
            children: [
              label,
              /* @__PURE__ */ jsx(PannaRequiredMark, { required })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id,
            name,
            type,
            autoComplete,
            inputMode,
            pattern,
            placeholder,
            required,
            spellCheck,
            title,
            "aria-invalid": error ? true : void 0,
            "aria-describedby": error ? errorId : void 0,
            className: cn("panna-form__control", controlClassName)
          }
        ),
        /* @__PURE__ */ jsx(PannaFieldError, { id: errorId, message: error })
      ]
    }
  );
}
function PannaTextareaField({
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
  spellCheck
}) {
  const errorId = `${id}-error`;
  return /* @__PURE__ */ jsxs(
    Field,
    {
      className: pannaFormFieldClassName(width, className),
      "data-invalid": error ? true : void 0,
      children: [
        /* @__PURE__ */ jsxs(
          FieldLabel,
          {
            htmlFor: id,
            className: cn("panna-form__label", labelClassName),
            children: [
              label,
              /* @__PURE__ */ jsx(PannaRequiredMark, { required })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id,
            name,
            autoComplete,
            placeholder,
            required,
            rows,
            spellCheck,
            "aria-invalid": error ? true : void 0,
            "aria-describedby": error ? errorId : void 0,
            className: cn("panna-form__control panna-form__textarea", controlClassName)
          }
        ),
        /* @__PURE__ */ jsx(PannaFieldError, { id: errorId, message: error })
      ]
    }
  );
}
function PannaChoiceGroup({
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
  error
}) {
  const errorId = `${id}-error`;
  return /* @__PURE__ */ jsxs(
    FieldSet,
    {
      className: pannaFormFieldClassName(width, className),
      "data-invalid": error ? true : void 0,
      "aria-describedby": error ? errorId : void 0,
      children: [
        /* @__PURE__ */ jsxs(FieldLegend, { className: cn("panna-form__label", labelClassName), children: [
          label,
          /* @__PURE__ */ jsx(PannaRequiredMark, { required })
        ] }),
        /* @__PURE__ */ jsx("div", { className: cn("panna-form__options", optionsClassName), children: options.map((option) => {
          const optionId = `${id}-${option.value}`;
          return /* @__PURE__ */ jsxs("label", { className: "panna-form__option", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: optionId,
                name,
                type: inputType,
                value: option.value,
                required,
                "aria-invalid": error ? true : void 0,
                className: "panna-form__checkbox"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "panna-form__option-text", children: option.label })
          ] }, option.value);
        }) }),
        /* @__PURE__ */ jsx(PannaFieldError, { id: errorId, message: error })
      ]
    }
  );
}
function PannaAcceptanceField({
  id,
  name,
  label,
  required,
  width,
  className,
  labelClassName,
  text,
  error
}) {
  const errorId = `${id}-error`;
  return /* @__PURE__ */ jsxs(
    FieldSet,
    {
      className: pannaFormFieldClassName(width, className),
      "data-invalid": error ? true : void 0,
      "aria-describedby": error ? errorId : void 0,
      children: [
        /* @__PURE__ */ jsxs(FieldLegend, { className: cn("panna-form__label", labelClassName), children: [
          label,
          /* @__PURE__ */ jsx(PannaRequiredMark, { required })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "panna-form__acceptance", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id,
              name,
              type: "checkbox",
              required,
              "aria-invalid": error ? true : void 0,
              className: "panna-form__checkbox"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "panna-form__acceptance-text", children: text })
        ] }),
        /* @__PURE__ */ jsx(PannaFieldError, { id: errorId, message: error })
      ]
    }
  );
}
function PannaRequiredMark({ required }) {
  if (!required) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { className: "panna-form__required", "aria-hidden": "true", children: " *" });
}
function PannaFieldError({ id, message }) {
  if (!message) {
    return null;
  }
  return /* @__PURE__ */ jsx("p", { id, className: "panna-form__error", role: "alert", children: message });
}
function pannaFormFieldClassName(width, className) {
  return cn(
    "panna-form__field",
    width === "full" ? "panna-form__field--full" : null,
    className
  );
}

function PannaPageIntro({
  title,
  underline,
  as,
  id,
  children,
  className,
  headingClassName,
  contentClassName
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("panna-page-intro", className), children: [
    /* @__PURE__ */ jsx(
      PannaDecoratedHeading,
      {
        as,
        id,
        title,
        underline,
        className: cn("panna-page-intro__heading", headingClassName)
      }
    ),
    children ? /* @__PURE__ */ jsx("div", { className: cn("panna-page-intro__content", contentClassName), children }) : null
  ] });
}

export { FieldSet as F, PannaPageIntro as P, FieldLegend as a, FieldGroup as b, PannaTextareaField as c, PannaTextField as d, PannaChoiceGroup as e, PannaAcceptanceField as f };
