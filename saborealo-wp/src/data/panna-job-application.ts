import { pannaImage as image } from "@/data/panna-assets"

type JobApplicationFieldWidth = "half" | "full"
type JobApplicationInputType = "date" | "email" | "tel" | "text"

type JobApplicationBaseField = {
  id: string
  name: string
  label: string
  width?: JobApplicationFieldWidth
  required?: boolean
}

type JobApplicationInputField = JobApplicationBaseField & {
  kind: "input"
  inputType: JobApplicationInputType
  autoComplete?: string
  inputMode?: "email" | "numeric" | "tel" | "text"
  pattern?: string
  placeholder?: string
  spellCheck?: boolean
  title?: string
}

type JobApplicationTextareaField = JobApplicationBaseField & {
  kind: "textarea"
  autoComplete?: string
  rows: number
  spellCheck?: boolean
}

type JobApplicationChoiceGroup = JobApplicationBaseField & {
  kind: "choice-group"
  inputType: "checkbox" | "radio"
  options: readonly {
    label: string
    value: string
  }[]
}

type JobApplicationAcceptanceField = JobApplicationBaseField & {
  kind: "acceptance"
  text: string
}

type JobApplicationSection = {
  kind: "section"
  id: string
  level: 2 | 3
  lines: readonly string[]
}

export type JobApplicationFormItemConfig =
  | JobApplicationAcceptanceField
  | JobApplicationChoiceGroup
  | JobApplicationInputField
  | JobApplicationSection
  | JobApplicationTextareaField

const phonePattern = "[0-9()#&+*=. -]+"
const phoneTitle = "Only numbers and phone characters (#, -, *, etc) are accepted."

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
] as const

const yesNoNaOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "N/A", value: "na" },
] as const

const hoursOptions = [
  { label: "Full Time", value: "full-time" },
  { label: "Part Time", value: "part-time" },
] as const

const scheduleOptions = [
  { label: "Days", value: "days" },
  { label: "Evenings", value: "evenings" },
  { label: "Graveyard", value: "graveyard" },
  { label: "Weekends", value: "weekends" },
] as const

const statusOptions = [
  { label: "Regular", value: "regular" },
  { label: "Temporary", value: "temporary" },
] as const

function inputField(
  id: string,
  label: string,
  options: Partial<Omit<JobApplicationInputField, "id" | "kind" | "label" | "name">> = {}
): JobApplicationInputField {
  return {
    kind: "input",
    id: `job-${id}`,
    name: id,
    label,
    inputType: "text",
    width: "half",
    autoComplete: "off",
    ...options,
  }
}

function phoneField(
  id: string,
  label: string,
  options: Partial<Omit<JobApplicationInputField, "id" | "kind" | "label" | "name">> = {}
) {
  return inputField(id, label, {
    inputType: "tel",
    inputMode: "tel",
    pattern: phonePattern,
    title: phoneTitle,
    ...options,
  })
}

function choiceGroup(
  id: string,
  label: string,
  options: JobApplicationChoiceGroup["options"],
  inputType: JobApplicationChoiceGroup["inputType"],
  width: JobApplicationFieldWidth = "half"
): JobApplicationChoiceGroup {
  return {
    kind: "choice-group",
    id: `job-${id}`,
    name: inputType === "checkbox" ? `${id}[]` : id,
    label,
    inputType,
    options,
    width,
  }
}

function yesNoGroup(
  id: string,
  label: string,
  width: JobApplicationFieldWidth = "full"
) {
  return choiceGroup(id, label, yesNoOptions, "radio", width)
}

function section(
  id: string,
  lines: readonly string[],
  level: 2 | 3 = 2
): JobApplicationSection {
  return {
    kind: "section",
    id: `job-section-${id}`,
    lines,
    level,
  }
}

function educationFields(prefix: string, title: string): JobApplicationFormItemConfig[] {
  return [
    section(`education_${prefix}`, [title], 3),
    inputField(`${prefix}_school_name`, "School Name"),
    inputField(`${prefix}_degree`, "Degree"),
    inputField(`${prefix}_address`, "Address/City/State", { width: "full" }),
  ]
}

function referenceFields(n: 1 | 2 | 3): JobApplicationFormItemConfig[] {
  const prefix = `reference_${n}`
  return [
    section(`${prefix}_heading`, [`Reference ${n}`], 3),
    inputField(`${prefix}_name`, "Name", { required: true }),
    inputField(`${prefix}_address`, "Address/City/State", { width: "full", required: true }),
    phoneField(`${prefix}_phone`, "Phone", { required: true }),
    inputField(`${prefix}_relationship`, "Relationship", { required: true }),
  ]
}

function workHistoryFields(n: 1 | 2): JobApplicationFormItemConfig[] {
  const prefix = `job_${n}`
  const items: JobApplicationFormItemConfig[] = [
    section(`${prefix}_heading`, [`Job Title #${n}`], 3),
    inputField(`${prefix}_title`, "Job Title", { required: true }),
    inputField(`${prefix}_start_date`, "Start Date", { inputType: "date", required: true }),
    inputField(`${prefix}_end_date`, "End Date", { inputType: "date", required: true }),
    inputField(`${prefix}_company_name`, "Company Name", { required: true }),
    inputField(`${prefix}_supervisor_name`, "Supervisor's Name", { required: true }),
    phoneField(`${prefix}_phone`, "Phone Number", { required: true }),
    inputField(`${prefix}_city`, "City", { required: true }),
    inputField(`${prefix}_state`, "State", { required: true }),
    inputField(`${prefix}_zip`, "Zip", { required: true }),
    {
      kind: "textarea",
      id: `job-${prefix}_duties`,
      name: `${prefix}_duties`,
      label: "Duties",
      width: "full",
      autoComplete: "off",
      rows: 3,
    },
    inputField(`${prefix}_reason_for_leaving`, "Reason for Leaving", { required: true }),
    inputField(`${prefix}_starting_salary`, "Starting Salary"),
    inputField(`${prefix}_ending_salary`, "Ending Salary"),
  ]

  if (n === 1) {
    items.push(
      choiceGroup(
        `${prefix}_may_contact`,
        "May we contact your present employer?",
        yesNoNaOptions,
        "radio",
        "full"
      )
    )
  }

  return items
}

export const pannaJobApplicationData = {
  intro: {
    title: "JOIN OUR TEAM!",
    underline: {
      src: image("2024/10/MANCHA.png"),
      width: 361,
      height: 44,
    },
    copy: "Please carefully read and answer all questions. You will not be considered for employment if you fail to completely answer all the questions on this application. You may attach a resume, but all questions must be answered.",
  },
  form: {
    name: "job-application",
    title: "Employment Application",
    submitLabel: "Send",
    background: "#0000",
    items: [
      inputField("position", "Position Applying For", {
        autoComplete: "organization-title",
        required: true,
        width: "full",
      }),

      section("personal_data", ["PERSONAL DATA"]),
      inputField("name", "Name (last, first, middle)", {
        autoComplete: "name",
        required: true,
        width: "full",
      }),
      inputField("street_address", "Street Address and/or Mailing Address", {
        autoComplete: "street-address",
        width: "full",
      }),
      inputField("city", "City", { autoComplete: "address-level2" }),
      inputField("state", "State", { autoComplete: "address-level1" }),
      inputField("zip", "Zip", { autoComplete: "postal-code" }),
      phoneField("home_telephone", "Home Telephone Number", { autoComplete: "tel" }),
      phoneField("business_telephone", "Business Telephone Number"),
      phoneField("cellular_telephone", "Cellular Telephone Number", { autoComplete: "tel" }),
      inputField("start_date", "Date You Can Start Work", { inputType: "date" }),
      inputField("salary_desired", "Salary Desired"),
      yesNoGroup("high_school_diploma", "Do you have a High School Diploma or GED?", "half"),

      section("position_information", ["POSITION INFORMATION", "Check all that you are willing to work"]),
      choiceGroup("hours", "Hours", hoursOptions, "checkbox"),
      choiceGroup("schedule", "Schedule", scheduleOptions, "checkbox"),
      choiceGroup("status", "Status", statusOptions, "radio"),
      yesNoGroup("authorized_to_work", "Are you authorized to work in the U.S. on an unrestricted basis?"),
      yesNoGroup("felony_conviction", "Have you ever been convicted of a felony? (Convictions will not necessarily disqualify an applicant for employment.)"),
      {
        kind: "textarea",
        id: "job-felony_explanation",
        name: "felony_explanation",
        label: "If yes, explain:",
        width: "full",
        autoComplete: "off",
        rows: 2,
      },
      yesNoGroup("essential_functions_told", "Have you been told the essential functions of the job, or have you been viewed a copy of the job description listing the essential functions?"),
      yesNoGroup("essential_functions_perform", "Can you perform these essential functions of the job with or without reasonable accommodation?"),

      section("qualifications", ["QUALIFICATIONS", "Please list any education or training you feel relates to the position applied for."]),
      ...educationFields("school_1", "School"),
      ...educationFields("school_2", "School"),
      ...educationFields("other", "Other"),

      section("special_skills", ["SPECIAL SKILLS"]),
      {
        kind: "textarea",
        id: "job-special_skills",
        name: "special_skills",
        label: "List any special skills or experience that you feel would help you in this position (leadership, organizations/teams, etc.):",
        width: "full",
        autoComplete: "off",
        rows: 4,
      },

      section("references", ["REFERENCES", "Please list two professional references not related to you. If you don't have professional references, list personal unrelated references."]),
      ...referenceFields(1),
      ...referenceFields(2),
      ...referenceFields(3),

      section("work_history", ["WORK HISTORY", "Start with your present or most recent employment and work back. Include paid and unpaid positions."]),
      ...workHistoryFields(1),
      ...workHistoryFields(2),

      {
        kind: "acceptance",
        id: "job-applicant_certification",
        name: "applicant_certification",
        label: "APPLICANT CERTIFICATION",
        width: "full",
        required: true,
        text: "I certify that the facts set forth in this Application for Employment are true and complete to the best of my knowledge. I understand that if I am employed, false statements, omissions or misrepresentations may result in my dismissal. I authorize the Employer to make an investigation of any of the facts set forth in this application and release the Employer from any liability. The employer may contact any listed references on this application. I acknowledge and understand that the company is an \"at will\" employer. Therefore, any employee may resign at any time, just as the employer may terminate the employment relationship with any employee at any time, with or without cause, with or without notice to the other party.",
      },
    ] satisfies JobApplicationFormItemConfig[],
  },
} as const

export type PannaJobApplicationData = typeof pannaJobApplicationData
