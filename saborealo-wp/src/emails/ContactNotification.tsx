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
} from "react-email";

interface ContactNotificationProps {
  first_name?: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
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
      New contact message from {first_name ? `${first_name} ` : ""}
      {last_name}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New contact message</Heading>

        <Section style={section}>
          <Text style={text}>
            <strong>From:</strong>{" "}
            {first_name ? `${first_name} ` : ""}
            {last_name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={text}>
            <strong>Phone:</strong> {phone}
          </Text>
          <Text style={text}>
            <strong>Subject:</strong> {subject}
          </Text>
        </Section>

        {message ? (
          <>
            <Hr style={divider} />
            <Section style={section}>
              <Heading as="h2" style={subheading}>
                Message
              </Heading>
              <Text style={messageText}>{message}</Text>
            </Section>
          </>
        ) : null}

        <Text style={footer}>
          Sent from saborealo.com contact form.
        </Text>
      </Container>
    </Body>
  </Html>
);

ContactNotification.PreviewProps = {
  first_name: "Jane",
  last_name: "Doe",
  email: "jane@example.com",
  phone: "(305) 555-0100",
  subject: "Catering inquiry",
  message: "Looking for a catering quote for next month's event.",
} as ContactNotificationProps;

export default ContactNotification;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const heading = {
  fontSize: "20px",
  fontWeight: 600,
  margin: "0 0 16px 0",
};

const subheading = {
  fontSize: "14px",
  fontWeight: 600,
  margin: "0 0 8px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  color: "#555",
};

const section = {
  padding: "8px 0",
};

const text = {
  fontSize: "14px",
  lineHeight: 1.6,
  margin: "4px 0",
};

const messageText = {
  fontSize: "14px",
  lineHeight: 1.6,
  margin: 0,
  whiteSpace: "pre-wrap" as const,
};

const divider = {
  borderColor: "#eee",
  margin: "16px 0",
};

const footer = {
  color: "#888",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "32px",
};
