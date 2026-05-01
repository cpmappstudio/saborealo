import './server_BQt8Bf5u.mjs';
import { Resend } from 'resend';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Html, Head, Preview, Body, Container, Heading, Section, Text, Hr, render } from 'react-email';
import { p as pannaJobApplicationData } from './panna-job-application_DnnEg-iI.mjs';
import { d as defineAction, o as object, l as literal, s as string, u as union, a as array } from './entrypoint_DN3GfvOX.mjs';

const ContactNotification = ({
  first_name,
  last_name,
  email,
  phone,
  subject,
  message
}) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsxs(Preview, { children: [
    "New contact message from ",
    first_name ? `${first_name} ` : "",
    last_name
  ] }),
  /* @__PURE__ */ jsx(Body, { style: main$1, children: /* @__PURE__ */ jsxs(Container, { style: container$1, children: [
    /* @__PURE__ */ jsx(Heading, { style: heading$1, children: "New contact message" }),
    /* @__PURE__ */ jsxs(Section, { style: section, children: [
      /* @__PURE__ */ jsxs(Text, { style: text$1, children: [
        /* @__PURE__ */ jsx("strong", { children: "From:" }),
        " ",
        first_name ? `${first_name} ` : "",
        last_name
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: text$1, children: [
        /* @__PURE__ */ jsx("strong", { children: "Email:" }),
        " ",
        email
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: text$1, children: [
        /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
        " ",
        phone
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: text$1, children: [
        /* @__PURE__ */ jsx("strong", { children: "Subject:" }),
        " ",
        subject
      ] })
    ] }),
    message ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Hr, { style: divider }),
      /* @__PURE__ */ jsxs(Section, { style: section, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h2", style: subheading$1, children: "Message" }),
        /* @__PURE__ */ jsx(Text, { style: messageText, children: message })
      ] })
    ] }) : null,
    /* @__PURE__ */ jsx(Text, { style: footer$1, children: "Sent from saborealo.com contact form." })
  ] }) })
] });
ContactNotification.PreviewProps = {
  first_name: "Jane",
  last_name: "Doe",
  email: "jane@example.com",
  phone: "(305) 555-0100",
  subject: "Catering inquiry",
  message: "Looking for a catering quote for next month's event."
};
const main$1 = {
  backgroundColor: "#ffffff",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif"
};
const container$1 = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px 0 48px"
};
const heading$1 = {
  fontSize: "20px",
  fontWeight: 600,
  margin: "0 0 16px 0"
};
const subheading$1 = {
  fontSize: "14px",
  fontWeight: 600,
  margin: "0 0 8px 0",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  color: "#555"
};
const section = {
  padding: "8px 0"
};
const text$1 = {
  fontSize: "14px",
  lineHeight: 1.6,
  margin: "4px 0"
};
const messageText = {
  fontSize: "14px",
  lineHeight: 1.6,
  margin: 0,
  whiteSpace: "pre-wrap"
};
const divider = {
  borderColor: "#eee",
  margin: "16px 0"
};
const footer$1 = {
  color: "#888",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "32px"
};

const items = pannaJobApplicationData.form.items;
const JobApplicationNotification = ({
  data
}) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsxs(Preview, { children: [
    "New job application — ",
    String(data.name ?? "Saborealo team")
  ] }),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx(Heading, { style: heading, children: "New job application" }),
    items.map((item, index) => {
      if (item.kind === "section") {
        const isSub = item.level === 3;
        return /* @__PURE__ */ jsx(
          Heading,
          {
            as: isSub ? "h3" : "h2",
            style: isSub ? subheading : sectionHeading,
            children: item.lines.join(" — ")
          },
          `section-${index}`
        );
      }
      if (item.kind === "acceptance") {
        const value = data[item.name];
        return /* @__PURE__ */ jsxs(Text, { style: text, children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            item.label,
            ":"
          ] }),
          " ",
          value ? "✓ Accepted" : "✗ Not accepted"
        ] }, `field-${index}`);
      }
      const baseName = item.name.replace(/\[\]$/, "");
      const raw = data[item.name] ?? data[baseName];
      const display = Array.isArray(raw) ? raw.join(", ") : raw && raw.length > 0 ? raw : "—";
      return /* @__PURE__ */ jsxs(Text, { style: text, children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          item.label,
          ":"
        ] }),
        " ",
        display
      ] }, `field-${index}`);
    }),
    /* @__PURE__ */ jsx(Text, { style: footer, children: "Sent from saborealo.com job application form." })
  ] }) })
] });
JobApplicationNotification.PreviewProps = {
  data: {
    position: "Cashier",
    name: "John Doe",
    street_address: "123 Main St",
    city: "Kissimmee",
    state: "FL",
    zip: "34759",
    home_telephone: "(305) 555-0100",
    cellular_telephone: "(305) 555-0101",
    start_date: "2026-06-01",
    salary_desired: "$15/h",
    high_school_diploma: "yes",
    "hours[]": ["full-time"],
    "schedule[]": ["days", "weekends"],
    status: "regular",
    authorized_to_work: "yes",
    felony_conviction: "no",
    essential_functions_told: "yes",
    essential_functions_perform: "yes",
    school_1_school_name: "Osceola HS",
    school_1_degree: "High School Diploma",
    school_1_address: "Kissimmee, FL",
    special_skills: "Bilingual (English/Spanish), customer service.",
    reference_1_name: "Jane Smith",
    reference_1_address: "Orlando, FL",
    reference_1_phone: "(305) 555-0200",
    reference_1_relationship: "Former manager",
    job_1_title: "Cashier",
    job_1_start_date: "2024-01-15",
    job_1_end_date: "2025-12-01",
    job_1_company_name: "ABC Store",
    job_1_supervisor_name: "Carlos Pérez",
    job_1_phone: "(305) 555-0300",
    job_1_city: "Orlando",
    job_1_state: "FL",
    job_1_zip: "32837",
    job_1_duties: "Greeted customers, processed orders.",
    job_1_reason_for_leaving: "Career growth",
    job_1_starting_salary: "$13/h",
    job_1_ending_salary: "$14/h",
    job_1_may_contact: "yes",
    applicant_certification: "on"
  }
};
const main = {
  backgroundColor: "#ffffff",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif"
};
const container = {
  maxWidth: "640px",
  margin: "0 auto",
  padding: "20px 0 48px"
};
const heading = {
  fontSize: "20px",
  fontWeight: 600,
  margin: "0 0 16px 0"
};
const sectionHeading = {
  fontSize: "13px",
  fontWeight: 700,
  margin: "24px 0 8px 0",
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  color: "#444",
  borderBottom: "1px solid #eee",
  paddingBottom: "4px"
};
const subheading = {
  fontSize: "13px",
  fontWeight: 600,
  margin: "16px 0 4px 0",
  color: "#666"
};
const text = {
  fontSize: "14px",
  lineHeight: 1.6,
  margin: "2px 0"
};
const footer = {
  color: "#888",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "32px"
};

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SANITY_DATASET": "dev", "PUBLIC_SANITY_PROJECT_ID": "kcs5x4q7", "SITE": undefined, "SSR": true};
const resend = new Resend("re_NbHV3qZB_HTCfDoQxonRPGoedpCek1ZvE");
function requireEnv(name) {
  const value = Object.assign(__vite_import_meta_env__, { RESEND_API_KEY: "re_NbHV3qZB_HTCfDoQxonRPGoedpCek1ZvE", MAIL_FROM: "Saborealo Bakery <onboarding@resend.dev>", MAIL_TO_CONTACT: "ulvenforst@gmail.com", MAIL_TO_JOB_APPLICATION: "ulvenforst@gmail.com" })[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env and set the values.`
    );
  }
  return value;
}
const server = {
  submitContact: defineAction({
    accept: "form",
    // Schema follows the tutorial pattern: minimal validation. The HTML
    // form already enforces `required` and `type="email"`/`type="tel"`
    // client-side; the schema only re-validates email format server-side
    // and accepts the rest as plain strings.
    input: object({
      // honeypot — bots fill this, humans don't
      company: string().max(0).optional(),
      first_name: string().optional(),
      last_name: string(),
      phone: string(),
      email: string().email(),
      subject: string(),
      message: string().optional()
    }),
    handler: async (data) => {
      if (data.company) {
        return { id: "skipped" };
      }
      const emailContent = ContactNotification({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message
      });
      const html = await render(emailContent);
      const text = await render(emailContent, { plainText: true });
      const { data: sent, error } = await resend.emails.send({
        from: requireEnv("MAIL_FROM"),
        to: [requireEnv("MAIL_TO_CONTACT")],
        replyTo: data.email,
        subject: `New contact message — ${[data.first_name, data.last_name].filter(Boolean).join(" ")}`,
        html,
        text
      });
      if (error) {
        throw error;
      }
      return sent;
    }
  }),
  submitJobApplication: defineAction({
    accept: "form",
    // The job application has ~40 fields. The schema only enforces the
    // critical ones; everything else is accepted as string|string[] via
    // catchall — this stays DRY and the template iterates the form
    // metadata to render every value with its label.
    input: object({
      company: string().max(0).optional(),
      position: string(),
      name: string(),
      applicant_certification: literal("on")
    }).catchall(
      union([string(), array(string())]).optional()
    ),
    handler: async (data) => {
      if (data.company) {
        return { id: "skipped" };
      }
      const emailContent = JobApplicationNotification({ data });
      const html = await render(emailContent);
      const text = await render(emailContent, { plainText: true });
      const { data: sent, error } = await resend.emails.send({
        from: requireEnv("MAIL_FROM"),
        to: [requireEnv("MAIL_TO_JOB_APPLICATION")],
        subject: `New job application — ${data.name} (${data.position})`,
        html,
        text
      });
      if (error) {
        throw error;
      }
      return sent;
    }
  })
};

export { server };
