export const SUCCESS_TOAST_QUERY_VALUE = "success"

export type SuccessToastConfig = {
  description: string
  queryParam: string
  successRedirectPath: string
  title: string
}

export const contactSuccessToast: SuccessToastConfig = {
  title: "Message sent successfully!",
  description: "Thanks for contacting Saborealo. We'll get back to you soon.",
  queryParam: "contact",
  successRedirectPath: "/contact/?contact=success",
}

export const jobApplicationSuccessToast: SuccessToastConfig = {
  title: "Application submitted successfully!",
  description:
    "Thanks for applying to Saborealo. We’ll be in touch if there’s a fit.",
  queryParam: "jobApplication",
  successRedirectPath: "/job-application/?jobApplication=success",
}

export function hasSuccessToast(
  searchParams: URLSearchParams,
  config: SuccessToastConfig
) {
  return searchParams.get(config.queryParam) === SUCCESS_TOAST_QUERY_VALUE
}
