import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface VerificationEmailProps {
  name: string;
  email: string;
  phone: string;
}

export default function VerificationEmail({
  name,
  email,
  phone,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KF0mCnqEu92Fr1Mu4mxKKTU1Kg.Woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s contact details</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello Admin </Heading>
        </Row>
        <Row>
          <Text>A person has contacted you.</Text>
        </Row>
        <Row>
          <Text>
            Name: {name}, Email: {email}, Phone: {phone}
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
