# Resend integration plan — Saborealo

Plan **alineado al máximo** con el [tutorial oficial Astro+Resend](https://github.com/resend/resend-astro-tutorial).
Cualquier divergencia con el tutorial está marcada y justificada por
contexto del proyecto (sitio mayormente estático con Sanity Studio,
forms reciben mensajes del usuario y notifican al admin).

- Stack actual: Astro 6.1.10, `@astrojs/node` standalone, React 19, pnpm.
- Estado: dev. `RESEND_API_KEY` ya en `.env` (sandbox, dominio sin verificar).
- Volumen estimado: <100 emails/mes.
- Forms ya son HTML server-side (`method="post"`, sin estado React).
- Sin file uploads.

---

## 1. Decisiones (con justificación)

| # | Decisión | Tutorial oficial | Justificación |
|---|---|---|---|
| 1 | **Astro Actions** (`defineAction({ accept: "form" })`) | ✓ idéntico | Patrón oficial. Validation Zod, progressive enhancement, error handling tipado. |
| 2 | **`react-email`** para templates | ✓ idéntico | Patrón oficial. Define template UNA vez (JSX) → genera html + text auto con `render(component, { plainText: true })`. Cross-client. |
| 3 | **Templates en `src/emails/*.tsx`** | ✓ idéntico | Convención del tutorial. |
| 4 | **Cliente Resend a top-level** del archivo `actions/index.ts` | ✓ idéntico | Tutorial: `const resend = new Resend(import.meta.env.RESEND_API_KEY)` antes del `export const server`. |
| 5 | **`<form action={actions.X}>`** en pages `.astro` | ✓ idéntico | Patrón del tutorial. En componentes React (.tsx) se pasa `actions.X` como prop desde la `.astro` page. |
| 6 | **`Astro.redirect("/contact/")` tras éxito** (sin query params, sin banner) | ✓ idéntico | Tutorial: `if (result?.data) return Astro.redirect("/")`. Form se vacía y eso es el feedback (PRG). Si en el futuro queremos banner "Thanks!", se añade aparte. |
| 7 | **`return data`** del handler tras éxito | ✓ idéntico | Tutorial retorna el objeto del SDK directamente. |
| 8 | **`if (error) { throw error; }`** con braces | ✓ idéntico | Patrón del tutorial. |
| 9 | **`<Preview>` + `<Container>`** en templates | ✓ idéntico | El tutorial los usa. `<Preview>` controla el snippet en Gmail. |
| 10 | **`export default`** en templates + `import X from "..."` | ✓ idéntico | Patrón del tutorial. |
| 11 | **`as XProps`** en `PreviewProps` | ✓ idéntico | Patrón del tutorial (no `satisfies`). |
| 12 | **Variable `inputErrors`** (no `fieldErrors`) | ✓ idéntico | Naming del tutorial. |
| 13 | **Honeypot** (`company` invisible) | ➕ extensión justificada | Tutorial es demo, no tiene anti-spam. En producción es esencial. 1 línea de check, no rompe el patrón. |
| 14 | **`replyTo` = email del cliente** | ➕ extensión justificada | Tutorial envía AL user del form, así que no necesita `replyTo`. **Nuestro caso es notification AL admin**, así que `replyTo` es la única forma de que admin pueda responder al cliente. |
| 15 | **Env vars `MAIL_FROM`, `MAIL_TO_*`** | ➕ extensión justificada | Tutorial hardcodea `from` y usa `to: [email]` (del form). Nuestro `to` es admin (config, no input), `from` cambia entre sandbox/prod. |
| 16 | **`output: "static"` + `adapter: node()`** | ⚠️ divergencia | Tutorial es `output: "server" + vercel()`. Nuestro sitio es mayoritariamente estático (home, menu, locations) — cambiar a `server` haría todas las páginas SSR (peor performance). Astro Actions funcionan en ambos modos. |
| 17 | **NO añadir `pages/api/send.ts`** GET endpoint | ⚠️ omisión justificada | Tutorial lo tiene como demo manual. Endpoint público sin auth que envía emails a cualquiera que haga GET = riesgo de spam/cost. Producción no debe tenerlo. |
| 18 | **Subject dinámico** (no `"It works!"` hardcoded) | ⚠️ divergencia content-only | El tutorial es demo. Subject real debe identificar el envío. Es content, no estructura. |

---

## 2. Stack y env vars

### Dependencias

```bash
pnpm add resend react-email
```

**Mismas que el tutorial**.

### `.env`

```dotenv
PUBLIC_SANITY_PROJECT_ID=kcs5x4q7
PUBLIC_SANITY_DATASET=dev
RESEND_API_KEY=re_xxxxxxxxx                 # ya configurado

# A añadir (extensión justificada — ver decisión #15):
MAIL_FROM=Saborealo Bakery <onboarding@resend.dev>
MAIL_TO_CONTACT=<tu-email-resend>
MAIL_TO_JOB_APPLICATION=<tu-email-resend>
```

> **Sandbox Resend**: `MAIL_FROM` debe ser `onboarding@resend.dev` y los
> `MAIL_TO_*` deben ser el email con el que registraste tu cuenta.
>
> **Producción** (al verificar dominio): `MAIL_FROM=Saborealo
> <noreply@saborealo.com>` y `MAIL_TO_*` apuntan a buzones reales.

`.env.example` debe documentar las 4 variables.

---

## 3. Estructura de archivos

Convención **idéntica** al tutorial oficial:

```
saborealo-wp/
└── src/
    ├── actions/
    │   └── index.ts                            # NEW — IDÉNTICO al tutorial
    ├── emails/                                 # NEW — IDÉNTICO al tutorial
    │   ├── ContactNotification.tsx             # NEW
    │   └── JobApplicationNotification.tsx      # NEW
    ├── components/
    │   ├── contact/ContactPage.tsx                       # MODIFIED
    │   └── job-application/JobApplicationPage.tsx        # MODIFIED
    └── pages/
        ├── contact.astro                       # MODIFIED — patrón del tutorial
        └── job-application.astro               # MODIFIED — patrón del tutorial
```

**3 archivos nuevos, 4 modificados, 0 CSS tocado.**

---

## 4. `src/actions/index.ts` (alineado al tutorial)

Imports en el orden del tutorial. Cliente a top-level. Patrón
`render(Component(props))` literal. `if (error) { throw error; }` con
braces.

```ts
import { defineAction } from "astro:actions"
import { Resend } from "resend"
import ContactNotification from "@/emails/ContactNotification"
import JobApplicationNotification from "@/emails/JobApplicationNotification"
import { render } from "react-email"
import { z } from "astro:schema"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

const FROM = import.meta.env.MAIL_FROM
const TO_CONTACT = import.meta.env.MAIL_TO_CONTACT
const TO_JOB = import.meta.env.MAIL_TO_JOB_APPLICATION

export const server = {
  submitContact: defineAction({
    accept: "form",
    input: z.object({
      company: z.string().max(0).optional(),                    // honeypot
      first_name: z.string().trim().max(100).optional(),
      last_name: z.string().trim().min(1).max(100),
      phone: z.string().trim().regex(/^[0-9()#&+*=. -]+$/).max(40),
      email: z.string().trim().email().max(254),
      subject: z.string().trim().min(1).max(200),
      message: z.string().trim().max(5000).optional(),
    }),
    handler: async (data) => {
      // Honeypot — bot llenó campo invisible. Devolver shape compatible
      // con `data` exitoso (id) para que el bot no reintente.
      if (data.company) {
        return { id: "skipped" }
      }

      const emailContent = ContactNotification(data)
      const html = await render(emailContent)
      const text = await render(emailContent, { plainText: true })

      const { data: sent, error } = await resend.emails.send({
        from: FROM,
        to: [TO_CONTACT],
        replyTo: data.email,
        subject: `New contact message — ${data.first_name ?? ""} ${data.last_name}`.trim(),
        html,
        text,
      })

      if (error) {
        throw error
      }

      return sent
    },
  }),

  submitJobApplication: defineAction({
    accept: "form",
    input: z.object({ /* job schema, ~40 campos */ }),
    handler: async (data) => {
      if (data.company) {
        return { id: "skipped" }
      }

      const emailContent = JobApplicationNotification(data)
      const html = await render(emailContent)
      const text = await render(emailContent, { plainText: true })

      const { data: sent, error } = await resend.emails.send({
        from: FROM,
        to: [TO_JOB],
        replyTo: data.email,
        subject: `New job application — ${data["first-name"]} ${data["last-name"]}`,
        html,
        text,
      })

      if (error) {
        throw error
      }

      return sent
    },
  }),
}
```

> **Patrón exacto del tutorial** (línea por línea):
> - Cliente Resend a top-level antes del `server`. ✓
> - `defineAction({ accept: "form", input: z.object(...), handler })`. ✓
> - `const emailContent = Component(data)` → `render(emailContent)`. ✓
> - `if (error) { throw error }` con braces. ✓
> - `return data` del SDK (no objeto wrapper). ✓

---

## 5. Templates (`src/emails/*.tsx`)

Patrón **idéntico** a `sampleEmail.tsx` del tutorial: imports de
`react-email`, named export + default export, `<Html><Head /><Preview>
<Body><Container>...</Container></Body></Html>` skeleton, `PreviewProps`
con `as`, estilos como objects al final.

### `src/emails/ContactNotification.tsx`

```tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "react-email"

interface ContactNotificationProps {
  first_name?: string
  last_name: string
  email: string
  phone: string
  subject: string
  message?: string
}

export const ContactNotification = ({
  first_name,
  last_name,
  email,
  phone,
  subject,
  message,
}: ContactNotificationProps) => (
  <Html>
    <Head />
    <Preview>
      New contact message from {first_name ? `${first_name} ` : ""}{last_name}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New contact message</Heading>

        <Section style={section}>
          <Text style={text}>
            <strong>From:</strong> {first_name ? `${first_name} ` : ""}{last_name}
          </Text>
          <Text style={text}><strong>Email:</strong> {email}</Text>
          <Text style={text}><strong>Phone:</strong> {phone}</Text>
          <Text style={text}><strong>Subject:</strong> {subject}</Text>
        </Section>

        <Hr />

        <Text style={text}>{message ?? ""}</Text>

        <Text style={footer}>Sent from saborealo.com contact form.</Text>
      </Container>
    </Body>
  </Html>
)

ContactNotification.PreviewProps = {
  first_name: "Jane",
  last_name: "Doe",
  email: "jane@example.com",
  phone: "(305) 555-0100",
  subject: "Catering inquiry",
  message: "Looking for a catering quote for next month.",
} as ContactNotificationProps

export default ContactNotification

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
}

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px 0 48px",
}

const heading = {
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "16px",
}

const section = {
  padding: "8px 0",
}

const text = {
  fontSize: "14px",
  lineHeight: 1.6,
  margin: "4px 0",
}

const footer = {
  color: "#888",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "32px",
}
```

### `src/emails/JobApplicationNotification.tsx`

Mismo skeleton. Para los ~40 campos: `<Section>` por bloque con
`<Heading as="h2">` (Personal Info / Education / Work Experience /
Availability / Acceptances). Cada acceptance se renderiza ✓ o ✗.

`PreviewProps` con datos de muestra para `pnpm dlx react-email dev`.

---

## 6. `contact.astro` (alineado al tutorial)

Patrón **idéntico** a `index.astro` del tutorial. Imports combinados, mismo
flow `getActionResult` → redirect → `inputErrors`.

```astro
---
import { actions, isInputError } from "astro:actions"
import { ContactPage } from "@/components/contact/ContactPage"
import { pannaContactData } from "@/data/panna-contact"
import { pannaSiteContact } from "@/data/panna-site"
import SiteLayout from "@/layouts/SiteLayout.astro"

const result = Astro.getActionResult(actions.submitContact)
if (result?.data) {
  return Astro.redirect("/contact/")
}

const inputErrors = isInputError(result?.error) ? result.error.fields : {}
---

<SiteLayout
  title="Contact - Saborealo Bakery"
  description="..."
>
  <ContactPage
    contact={pannaContactData}
    contactItems={pannaSiteContact}
    action={actions.submitContact}
    inputErrors={inputErrors}
  />
</SiteLayout>
```

> **Diferencias con `index.astro` del tutorial**:
> - Pasamos data y action como **props al componente React** (vs HTML
>   inline en `.astro`). El componente está preexistente en `.tsx` con
>   estructura compleja — meterlo todo en `.astro` sería refactor mayor.
> - `inputErrors` se propaga al componente (mismo nombre, mismo shape).

---

## 7. `ContactPage.tsx` (cambios mínimos)

Patrón **idéntico** del tutorial dentro del JSX (`aria-describedby` +
`<p id="X-error">`), adaptado a los `Panna*Field` existentes que ya
soportan props para a11y.

```tsx
type ContactPageProps = {
  contact: PannaContactData
  contactItems: PannaSiteData["contact"]
  action: ActionClient                       // NEW — el objeto actions.submitContact
  inputErrors?: Record<string, string[]>     // NEW — del tutorial
}

// dentro del form:
<form
  className="contact-form panna-form"
  name={form.name}
  method="post"
  action={action}                            // NEW — patrón del tutorial
  encType="application/x-www-form-urlencoded"
  aria-label="Contact Saborealo"
>
  {/* Honeypot — bots lo llenan, humanos no (extensión justificada — decisión #13) */}
  <input
    type="text"
    name="company"
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
    style={{ position: "absolute", left: "-9999px" }}
  />

  <FieldSet className="panna-form__fieldset">
    <FieldLegend className="sr-only">Contact Saborealo</FieldLegend>
    <FieldGroup className="panna-form__fields">
      {form.fields.map((field) => (
        <ContactFormField
          key={field.id}
          field={field}
          error={inputErrors?.[field.name]?.[0]}
        />
      ))}
    </FieldGroup>
  </FieldSet>

  <Button type="submit" className="panna-form__submit">Submit</Button>
</form>
```

`ContactFormField` recibe `error?: string` y lo pasa a `PannaTextField`:

```tsx
<PannaTextField
  id={field.id}
  name={field.name}
  // ... resto de props ...
  error={error}
  aria-describedby={error ? `${field.id}-error` : undefined}
/>
{error && <p id={`${field.id}-error`} className="panna-form__error">{error}</p>}
```

> El `<p id="X-error">` y `aria-describedby` siguen el patrón **literal**
> del tutorial. `PannaTextField` ya soporta `aria-invalid` (skill
> `shadcn/forms.md`); le añado prop `error?: string`.

### `JobApplicationPage.tsx` y `job-application.astro`

Mismo patrón. La diferencia es el volumen (~40 campos en secciones).

---

## 8. Anti-spam — honeypot

**v1**: campo invisible `company`. El handler chequea `if (data.company)
return { id: "skipped" }` (mismo shape de retorno que un envío real, así
el bot ve "éxito" y no reintenta).

**v2** (si entra spam real): Cloudflare Turnstile + rate limiting por IP.

---

## 9. Setup paso a paso

### Tu lado

- [x] Cuenta Resend, API key, var en `.env`.
- [ ] Añadir las 3 variables faltantes a `.env` y `.env.example`:
  ```
  MAIL_FROM=Saborealo Bakery <onboarding@resend.dev>
  MAIL_TO_CONTACT=<tu-email-resend>
  MAIL_TO_JOB_APPLICATION=<tu-email-resend>
  ```

### Mi lado (cuando confirmes)

1. **Setup**: `pnpm add resend react-email`.
2. **Templates**: `src/emails/ContactNotification.tsx` + `src/emails/JobApplicationNotification.tsx` con el skeleton del tutorial.
3. **Actions**: `src/actions/index.ts` con cliente Resend a top-level + 2 schemas Zod + 2 actions (patrón literal del tutorial).
4. **Pages `.astro`**: `getActionResult` + redirect plain (`/contact/`, `/job-application/`).
5. **Componentes**: prop `action`, `inputErrors`, honeypot field, mensaje de error inline siguiendo el patrón del tutorial.
6. **Verificación**: `pnpm check`, `pnpm build`, test manual local.

**Tiempo estimado**: 60–90 min.

---

## 10. Gotchas y testing

### Gotchas (de la skill Resend)

| # | Gotcha | Acción |
|---|---|---|
| 1 | SDK retorna `{ data, error }`, no lanza | `if (error) { throw error }` (patrón tutorial). |
| 2 | No CORS desde browser | Astro Actions ya son server-side ✓. |
| 3 | 403 con `onboarding@resend.dev` en sandbox | Solo entrega al email de tu cuenta Resend. |
| 4 | `from` debe ser dominio verificado | Sandbox: `onboarding@resend.dev`. |
| 5 | Direcciones de prueba | `delivered@resend.dev` (OK), `bounced@resend.dev`, `complained@resend.dev`. **Nunca** fake@gmail.com. |
| 6 | Domain mismatch | Subdominio exacto: `mail.saborealo.com` ≠ `saborealo.com`. |
| 7 | `Component(props)` función, NO `<Component {...props}/>` JSX | Tutorial llama el template como función y pasa el resultado a `render()`. |

### Test manual local

1. `pnpm dev`.
2. Llenar form de contacto → submit.
3. Verificar:
   - Llega el email al inbox de Resend.
   - `Reply-To` es el email del cliente.
   - Subject incluye nombre del cliente.
   - HTML legible, text version presente.
   - URL después del submit es `/contact/` (redirect plain, sin query params).
4. Test validación: enviar con email inválido → re-render del form con
   `<p id="email-error">{message}</p>` debajo del input.
5. Test honeypot: DevTools, llenar `company` → retorna éxito (`{ id: "skipped" }`)
   pero NO llega email.
6. Repetir con job application.

### Bonus: preview de templates en local

```bash
pnpm dlx react-email dev --dir src/emails
```

Abre `http://localhost:3000` y muestra cada template con sus
`PreviewProps`. Patrón del tutorial.

---

## 11. Mejoras futuras (NO en v1)

- **Verificar dominio** (`saborealo.com`) → DKIM/SPF/DMARC.
- **Banner success** "Thanks!" tras redirect (si decides que la UX
  minimal del tutorial no basta).
- **Auto-reply al cliente**: `resend.batch.send([adminNotification, autoReply])`.
- **Idempotency keys** si añadimos retry logic explícito.
- **Webhooks Resend** (`email.bounced`, `email.complained`) para monitoreo.
- **Cloudflare Turnstile** + rate limiting si entra spam real.

---

## 12. Validación final contra `reference/astro-resend-tutorial-main/`

| Tutorial | Plan v3 | ✓ |
|---|---|---|
| `pnpm add resend react-email` | ✓ idéntico |
| `import { defineAction } from "astro:actions"` | ✓ |
| `import { z } from "astro:schema"` | ✓ |
| `import { Resend } from "resend"` | ✓ |
| `import { render } from "react-email"` | ✓ |
| `import X from "../emails/X"` (default + relative-or-alias) | ✓ default export |
| `const resend = new Resend(import.meta.env.RESEND_API_KEY)` top-level | ✓ idéntico |
| `defineAction({ accept: "form", input: z.object(...), handler })` | ✓ idéntico |
| `const emailContent = Component(props); const html = await render(emailContent); const text = await render(emailContent, { plainText: true })` | ✓ idéntico |
| `if (error) { throw error; }` con braces | ✓ idéntico |
| `return data` del SDK | ✓ idéntico |
| `<Html><Head /><Preview>...</Preview><Body><Container>...</Container></Body></Html>` | ✓ idéntico |
| `XEmail.PreviewProps = {...} as XProps` | ✓ idéntico |
| `export default XEmail` | ✓ idéntico |
| `Astro.getActionResult(actions.X)` | ✓ idéntico |
| `if (result?.data) return Astro.redirect("/...")` | ✓ idéntico |
| `const inputErrors = isInputError(result?.error) ? result.error.fields : {}` | ✓ idéntico |
| `<form action={actions.X} method="post">` | ✓ idéntico (vía prop al componente React) |
| `aria-describedby={inputErrors.X ? "X-error" : undefined}` + `<p id="X-error">{inputErrors.X[0]}</p>` | ✓ idéntico |
| **Extensiones justificadas (no en tutorial pero necesarias en producción)** | |
| Honeypot field invisible | ➕ |
| `replyTo: data.email` | ➕ |
| Env vars `MAIL_FROM`, `MAIL_TO_*` | ➕ |
| **Omisiones justificadas** | |
| GET endpoint `pages/api/send.ts` | ❌ riesgo de seguridad |
| `output: "server"` (mantenemos `static`) | ❌ romperia el resto del sitio |

---

## 13. TL;DR

- **2 deps** (`resend`, `react-email`) — **idénticas al tutorial oficial**.
- **3 archivos nuevos** + **4 modificados** + **0 CSS tocado**.
- **Patrón 100% alineado al tutorial** en imports, estructura, render
  call, error handling, redirect, a11y.
- **3 extensiones justificadas** (honeypot, replyTo, env vars) y **2
  omisiones justificadas** (GET endpoint, `output: server`) por contexto
  del proyecto.
- **Cero vendor lock-in**: cambiar provider implica tocar `actions/index.ts`
  (las 8 líneas del send).
- **Progressive enhancement**: forms funcionan sin JS.
- **Free tier 30× tu volumen**.

Cuando confirmes el plan + tengas las 3 env vars, arranco con Fase 1.
