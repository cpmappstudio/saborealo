import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "react-email";

import { pannaJobApplicationData } from "@/data/panna-job-application";

type JobApplicationData = Record<string, string | string[] | undefined>;

interface JobApplicationNotificationProps {
  data: JobApplicationData;
}

const items = pannaJobApplicationData.form.items;

export const JobApplicationNotification = ({
  data,
}: JobApplicationNotificationProps) => (
  <Html>
    <Head />
    <Preview>
      New job application — {String(data.name ?? "Saborealo team")}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New job application</Heading>

        {items.map((item, index) => {
          if (item.kind === "section") {
            const isSub = item.level === 3;
            return (
              <Heading
                as={isSub ? "h3" : "h2"}
                key={`section-${index}`}
                style={isSub ? subheading : sectionHeading}
              >
                {item.lines.join(" — ")}
              </Heading>
            );
          }

          if (item.kind === "acceptance") {
            const value = data[item.name];
            return (
              <Text style={text} key={`field-${index}`}>
                <strong>{item.label}:</strong>{" "}
                {value ? "✓ Accepted" : "✗ Not accepted"}
              </Text>
            );
          }

          const baseName = item.name.replace(/\[\]$/, "");
          const raw = data[item.name] ?? data[baseName];
          const display = Array.isArray(raw)
            ? raw.join(", ")
            : raw && raw.length > 0
              ? raw
              : "—";

          return (
            <Text style={text} key={`field-${index}`}>
              <strong>{item.label}:</strong> {display}
            </Text>
          );
        })}

        <Text style={footer}>
          Sent from saborealo.com job application form.
        </Text>
      </Container>
    </Body>
  </Html>
);

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
    applicant_certification: "on",
  },
} as JobApplicationNotificationProps;

export default JobApplicationNotification;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
};

const container = {
  maxWidth: "640px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const heading = {
  fontSize: "20px",
  fontWeight: 600,
  margin: "0 0 16px 0",
};

const sectionHeading = {
  fontSize: "13px",
  fontWeight: 700,
  margin: "24px 0 8px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.6px",
  color: "#444",
  borderBottom: "1px solid #eee",
  paddingBottom: "4px",
};

const subheading = {
  fontSize: "13px",
  fontWeight: 600,
  margin: "16px 0 4px 0",
  color: "#666",
};

const text = {
  fontSize: "14px",
  lineHeight: 1.6,
  margin: "2px 0",
};

const footer = {
  color: "#888",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "32px",
};
