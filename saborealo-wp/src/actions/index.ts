import { defineAction } from "astro:actions";
import { Resend } from "resend";
import ContactNotification from "@/emails/ContactNotification";
import JobApplicationNotification from "@/emails/JobApplicationNotification";
import { render } from "react-email";
import { z } from "astro:schema";

function requireEnv(name: string): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env and set the values.`,
    );
  }
  return value;
}

// Lazy-init Resend so the module loads on serverless cold start even when
// env vars haven't been set yet (e.g. preview deploys without secrets).
// The instance is cached across invocations of the same warm function.
let resendClient: Resend | undefined;
function getResend(): Resend {
  if (!resendClient) {
    resendClient = new Resend(requireEnv("RESEND_API_KEY"));
  }
  return resendClient;
}

export const server = {
  submitContact: defineAction({
    accept: "form",
    // Schema follows the tutorial pattern: minimal validation. The HTML
    // form already enforces `required` and `type="email"`/`type="tel"`
    // client-side; the schema only re-validates email format server-side
    // and accepts the rest as plain strings.
    input: z.object({
      // honeypot — bots fill this, humans don't
      company: z.string().max(0).optional(),
      first_name: z.string().optional(),
      last_name: z.string(),
      phone: z.string(),
      email: z.string().email(),
      subject: z.string(),
      message: z.string().optional(),
    }),
    handler: async (data) => {
      // Honeypot — silently succeed without sending
      if (data.company) {
        return { id: "skipped" };
      }

      const emailContent = ContactNotification({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      });
      const html = await render(emailContent);
      const text = await render(emailContent, { plainText: true });

      const { data: sent, error } = await getResend().emails.send({
        from: requireEnv("MAIL_FROM"),
        to: [requireEnv("MAIL_TO_CONTACT")],
        replyTo: data.email,
        subject: `New contact message — ${[data.first_name, data.last_name]
          .filter(Boolean)
          .join(" ")}`,
        html,
        text,
      });

      if (error) {
        throw error;
      }

      return sent;
    },
  }),

  submitJobApplication: defineAction({
    accept: "form",
    // The job application has ~40 fields. The schema only enforces the
    // critical ones; everything else is accepted as string|string[] via
    // catchall — this stays DRY and the template iterates the form
    // metadata to render every value with its label.
    input: z
      .object({
        company: z.string().max(0).optional(),
        position: z.string(),
        name: z.string(),
        applicant_certification: z.literal("on"),
      })
      .catchall(
        z.union([z.string(), z.array(z.string())]).optional(),
      ),
    handler: async (data) => {
      if (data.company) {
        return { id: "skipped" };
      }

      const emailContent = JobApplicationNotification({ data });
      const html = await render(emailContent);
      const text = await render(emailContent, { plainText: true });

      const { data: sent, error } = await getResend().emails.send({
        from: requireEnv("MAIL_FROM"),
        to: [requireEnv("MAIL_TO_JOB_APPLICATION")],
        subject: `New job application — ${data.name} (${data.position})`,
        html,
        text,
      });

      if (error) {
        throw error;
      }

      return sent;
    },
  }),
};
