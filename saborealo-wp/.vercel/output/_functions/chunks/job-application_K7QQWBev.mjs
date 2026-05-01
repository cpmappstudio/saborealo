import './page-ssr_Df5WsTR8.mjs';
import { c as createComponent } from './astro-component_BHvubdiC.mjs';
import { z as isInputError, y as renderComponent, r as renderTemplate } from './entrypoint_DN3GfvOX.mjs';
import { a as actions } from './server_BQt8Bf5u.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { P as PannaPageIntro, F as FieldSet, a as FieldLegend, b as FieldGroup, c as PannaTextareaField, d as PannaTextField, e as PannaChoiceGroup, f as PannaAcceptanceField } from './PannaPageIntro_B2M3b0T7.mjs';
import { B as Button, $ as $$SiteLayout } from './SiteLayout_BhOEln2X.mjs';
import { p as pannaJobApplicationData } from './panna-job-application_DnnEg-iI.mjs';

function JobApplicationPage({
  jobApplication,
  action,
  inputErrors
}) {
  return /* @__PURE__ */ jsxs("div", { className: "job-application-page", children: [
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "job-application-hero",
        "aria-labelledby": "job-application-title",
        children: /* @__PURE__ */ jsx("div", { className: "job-application-hero__inner panna-shell", children: /* @__PURE__ */ jsx(
          PannaPageIntro,
          {
            as: "h1",
            id: "job-application-title",
            title: jobApplication.intro.title,
            underline: jobApplication.intro.underline,
            className: "job-application-intro",
            children: /* @__PURE__ */ jsx("p", { children: jobApplication.intro.copy })
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "job-application-form-section",
        "aria-labelledby": "job-application-form-title",
        children: /* @__PURE__ */ jsxs("div", { className: "panna-shell", children: [
          /* @__PURE__ */ jsx("h2", { id: "job-application-form-title", className: "sr-only", children: jobApplication.form.title }),
          /* @__PURE__ */ jsx(
            JobApplicationForm,
            {
              form: jobApplication.form,
              action,
              inputErrors
            }
          )
        ] })
      }
    )
  ] });
}
function JobApplicationForm({
  form,
  action,
  inputErrors
}) {
  const formStyle = {
    "--job-application-form-background": `url("${form.background}")`
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "job-application-form panna-form",
      style: formStyle,
      name: form.name,
      method: "post",
      action,
      encType: "application/x-www-form-urlencoded",
      "aria-label": form.title,
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
          /* @__PURE__ */ jsx(FieldLegend, { className: "sr-only", children: form.title }),
          /* @__PURE__ */ jsx(FieldGroup, { className: "panna-form__grid", children: form.items.map((item) => /* @__PURE__ */ jsx(
            JobApplicationFormItem,
            {
              item,
              inputErrors
            },
            item.id
          )) })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "panna-form__submit", children: form.submitLabel })
      ]
    }
  );
}
function JobApplicationFormItem({
  item,
  inputErrors
}) {
  const fieldError = item.kind !== "section" ? inputErrors?.[item.name]?.[0] : void 0;
  switch (item.kind) {
    case "acceptance":
      return /* @__PURE__ */ jsx(
        PannaAcceptanceField,
        {
          id: item.id,
          name: item.name,
          label: item.label,
          required: item.required,
          width: item.width,
          text: item.text,
          error: fieldError
        }
      );
    case "choice-group":
      return /* @__PURE__ */ jsx(
        PannaChoiceGroup,
        {
          id: item.id,
          name: item.name,
          label: item.label,
          required: item.required,
          width: item.width,
          inputType: item.inputType,
          options: item.options,
          error: fieldError
        }
      );
    case "input":
      return /* @__PURE__ */ jsx(
        PannaTextField,
        {
          id: item.id,
          name: item.name,
          label: item.label,
          type: item.inputType,
          autoComplete: item.autoComplete,
          inputMode: item.inputMode,
          pattern: item.pattern,
          placeholder: item.placeholder,
          required: item.required,
          spellCheck: item.spellCheck,
          title: item.title,
          width: item.width,
          error: fieldError
        }
      );
    case "section":
      return /* @__PURE__ */ jsx(JobApplicationSection, { item });
    case "textarea":
      return /* @__PURE__ */ jsx(
        PannaTextareaField,
        {
          id: item.id,
          name: item.name,
          label: item.label,
          autoComplete: item.autoComplete,
          required: item.required,
          rows: item.rows,
          spellCheck: item.spellCheck,
          width: item.width,
          error: fieldError
        }
      );
  }
}
function JobApplicationSection({
  item
}) {
  const content = item.lines.map((line) => /* @__PURE__ */ jsx("span", { children: line }, line));
  if (item.level === 3) {
    return /* @__PURE__ */ jsx("h3", { id: item.id, className: "panna-form__section", children: content });
  }
  return /* @__PURE__ */ jsx("h2", { id: item.id, className: "panna-form__section", children: content });
}
const honeypotStyle = {
  position: "absolute",
  left: "-9999px",
  width: 1,
  height: 1,
  overflow: "hidden"
};

const prerender = false;
const $$JobApplication = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$JobApplication;
  const result = Astro2.getActionResult(actions.submitJobApplication);
  if (result?.data) {
    return Astro2.redirect("/job-application/");
  }
  const inputErrors = isInputError(result?.error) ? result.error.fields : {};
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "Job Application - Saborealo Bakery", "description": "Apply to join the Saborealo Bakery team." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JobApplicationPage", JobApplicationPage, { "jobApplication": pannaJobApplicationData, "action": String(actions.submitJobApplication), "inputErrors": inputErrors })} ` })}`;
}, "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/pages/job-application.astro", void 0);

const $$file = "/Users/ulvenforst/Codex/Work/CPM/saborealo/saborealo-wp/src/pages/job-application.astro";
const $$url = "/job-application";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JobApplication,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
