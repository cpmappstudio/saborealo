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

const shiftOptions = [
  { label: "Any", value: "any" },
  { label: "Day", value: "day" },
  { label: "Night", value: "night" },
  { label: "Swing", value: "swing" },
  { label: "Rotating", value: "rotating" },
  { label: "Split", value: "split" },
  { label: "Graveyard", value: "graveyard" },
  { label: "Other", value: "other" },
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
  width: JobApplicationFieldWidth = "half"
) {
  return choiceGroup(id, label, yesNoOptions, "radio", width)
}

function checkboxGroup(
  id: string,
  label: string,
  options: JobApplicationChoiceGroup["options"],
  width: JobApplicationFieldWidth = "half"
) {
  return choiceGroup(id, label, options, "checkbox", width)
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

function employmentFields(jobNumber: 1 | 2): JobApplicationFormItemConfig[] {
  const prefix = `employment_${jobNumber}`

  return [
    section(`${prefix}_heading`, [`Job ${jobNumber}`], 3),
    inputField(`${prefix}_employer_name`, "Employer Name", { required: true }),
    inputField(`${prefix}_employer_address`, "Employer Address", {
      required: true,
    }),
    inputField(`${prefix}_start_date`, "Start Date", {
      inputType: "date",
      required: true,
    }),
    inputField(`${prefix}_end_date`, "End Date", {
      inputType: "date",
      required: true,
    }),
    inputField(`${prefix}_position_title`, "Position Title", { required: true }),
    phoneField(`${prefix}_telephone`, "Telephone", { required: true }),
    inputField(`${prefix}_duties`, "Duties", { required: true }),
    inputField(`${prefix}_reason_for_leaving`, "Reason for leaving", {
      required: true,
    }),
    inputField(`${prefix}_skills`, "Skills", { required: true }),
    inputField(`${prefix}_supervisor`, "Supervisor", { required: true }),
    inputField(`${prefix}_pay_per_month`, "Pay Per Month $", { required: true }),
  ]
}

function educationFields(id: string, title: string): JobApplicationFormItemConfig[] {
  return [
    section(`education_${id}`, [title], 3),
    inputField(`${id}_institution_name`, "Institution Name", { required: true }),
    inputField(`${id}_years_completed`, "Years Completed", { required: true }),
    inputField(`${id}_fields_of_study`, "Fields of Study", { required: true }),
    inputField(`${id}_degree`, "Graduate or degree", { required: true }),
  ]
}

function referenceFields(referenceNumber: 1 | 2): JobApplicationFormItemConfig[] {
  const prefix = `reference_${referenceNumber}`

  return [
    section(`${prefix}_heading`, [`Reference ${referenceNumber}`], 3),
    inputField(`${prefix}_name`, "Name", { required: true }),
    inputField(`${prefix}_address`, "Address", { required: true }),
    phoneField(`${prefix}_telephone`, "Telephone", { required: true }),
    inputField(`${prefix}_occupation`, "Occupation", { required: true }),
    inputField(`${prefix}_years_known`, "Years Known", { required: true }),
  ]
}

export const pannaJobApplicationData = {
  intro: {
    title: "JOIN OUR TALENTED TEAM!",
    underline: {
      src: image("2024/10/MANCHA.png"),
      width: 361,
      height: 44,
    },
    copy: "If you carry the soul of a leader inside, you like challenges and responsibilities, welcome to the PANNA Family. Please complete the form below and we will be contacting you as soon as we have a vacancy in our organization. Thank you!",
  },
  form: {
    name: "job-application",
    title: "Job Application Form",
    submitLabel: "Send",
    background: image("2024/10/FONDO-NEGRO-PANNA.webp"),
    items: [
      inputField("position", "Applying for which position?", {
        autoComplete: "organization-title",
        required: true,
      }),
      section("employee_information", ["EMPLOYEE INFORMATION"]),
      inputField("first_name", "First Name", {
        autoComplete: "given-name",
        required: true,
      }),
      inputField("middle_name", "Middle Name", {
        autoComplete: "additional-name",
        required: true,
      }),
      inputField("last_name", "Last Name", {
        autoComplete: "family-name",
        required: true,
      }),
      inputField("email", "Email", {
        autoComplete: "email",
        inputMode: "email",
        inputType: "email",
        required: true,
        spellCheck: false,
      }),
      phoneField("telephone", "Telephone", {
        autoComplete: "tel",
        required: true,
      }),
      phoneField("alternate_telephone", "Alternate Telephone"),
      inputField("mailing_address", "Mailing Address", {
        autoComplete: "street-address",
        width: "full",
      }),
      yesNoGroup(
        "essential_functions",
        "Are you able to perform the essential functions of the position with or without accommodations?"
      ),
      yesNoGroup(
        "employment_eligibility",
        "I am legally eligible for employment in the U.S.?"
      ),
      yesNoGroup(
        "permanent_position",
        "I am seeking a permanent position:"
      ),
      yesNoGroup(
        "valid_drivers_license",
        "Can you provide a valid Driver's License?"
      ),
      inputField("drivers_license_state", "If so, fill out the following:", {
        placeholder: "Issuing State…",
      }),
      inputField("drivers_license_number", "Driver's License Number", {
        placeholder: "Type and Driver's License Number…",
      }),
      checkboxGroup(
        "available_shifts",
        "Work the following shifts: (check all that apply)",
        shiftOptions,
        "full"
      ),
      section("employment_history", [
        "EMPLOYMENT HISTORY (Most Recent Employment, No more than 10 years).",
      ]),
      ...employmentFields(1),
      ...employmentFields(2),
      {
        kind: "textarea",
        id: "job-related-employment-summary",
        name: "related_employment_summary",
        label: "Summarize other employment related to this job:",
        width: "full",
        autoComplete: "off",
        rows: 4,
      },
      section("education_history", ["EDUCATION HISTORY"]),
      ...educationFields("high_school", "High School"),
      ...educationFields("business_technical", "Business/Technical"),
      ...educationFields("college_university", "College/University"),
      ...educationFields("additional_education", "Additional"),
      section("military", ["MILITARY"]),
      yesNoGroup("veteran", "Are you a veteran?", "full"),
      inputField("military_training", "Duty/Specialized Training", {
        placeholder: "If you are not veteran then write here NO…",
        width: "full",
      }),
      section("skills_qualifications", ["SKILLS & QUALIFICATIONS"]),
      inputField(
        "other_qualifications",
        "Other qualifications such as special skills, abilities or honors that should be considered:",
        { width: "full" }
      ),
      inputField(
        "equipment_skills",
        "Types of computers, software, and other equipment you are qualified to operate or repair:",
        { width: "full" }
      ),
      inputField(
        "certifications",
        "Professional licenses, certifications or registrations:",
        { width: "full" }
      ),
      inputField(
        "additional_skills",
        "Additional skills, including supervision skills, other languages or information regarding the career/occupation you wish to bring to the employer's attention:",
        { width: "full" }
      ),
      section("personal_references", ["PERSONAL REFERENCES"]),
      ...referenceFields(1),
      ...referenceFields(2),
      {
        kind: "acceptance",
        id: "job-applicant-certification",
        name: "applicant_certification",
        label: "INFORMATION TO THE APPLICANT",
        width: "full",
        required: true,
        text: "I certify that the information provided in this application is complete and accurate. I understand that PANNA may verify my personal, education, and employment references, and that omissions or misrepresentations may affect employment decisions. I also understand that employment requirements may include proof of authorization to work in the United States, a physical examination, a drug test, or other documents required for the position.",
      },
    ] satisfies JobApplicationFormItemConfig[],
  },
} as const

export type PannaJobApplicationData = typeof pannaJobApplicationData
