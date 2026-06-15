import {
  Badge,
  Button,
  Card,
  Column,
  Heading,
  Line,
  RevealFx,
  Row,
  Text,
} from "@once-ui-system/core";

// Credibility stats — kept deliberately to claims that do NOT contradict the
// hero ("40+ products") or the Timeline ("$8m GMV", first money at 12, etc.)
// below this section. Count/age claims live in those sections to avoid
// fighting facts on the same page.
const stats: { value: string; label: string }[] = [
  { value: "10K", label: "commits / month" },
  { value: "xAI", label: "offer turned down (when they were 20 people)" },
  { value: "1", label: "exit" },
  { value: "$5M", label: "raised across 5 startups" },
  { value: "$Bn", label: "companies advised as a consultant" },
  { value: "15 yrs", label: "of 80-hour weeks" },
  { value: "10 yrs", label: "without taking a salary" },
  { value: "2 h", label: "of vipassana, every day" },
];

const dayBullets: string[] = [
  "I come in. We chat about your problems.",
  "I work on anything that feels important to you.",
  "I share all my knowledge and experience.",
  "I ship real code and real value.",
  "I don't ask for anything. I don't own anything.",
  "We make friends and stay connected for life.",
];

export function FreeDayOffer() {
  return (
    <Column id="free-day" fillWidth gap="32" paddingY="l">
      <Row fillWidth paddingRight="64">
        <Line maxWidth={48} />
      </Row>

      {/* Headline */}
      <Column fillWidth gap="16" horizontal="center" align="center" maxWidth="m">
        <RevealFx horizontal="center">
          <Badge
            background="brand-alpha-weak"
            onBackground="brand-strong"
            textVariant="label-default-s"
            paddingX="16"
            paddingY="8"
            arrow={false}
          >
            One day · free · no strings attached
          </Badge>
        </RevealFx>
        <RevealFx delay={0.1} horizontal="center">
          <Heading
            as="h2"
            variant="display-strong-m"
            wrap="balance"
            align="center"
          >
            I&apos;ll work for your startup for free. One full day.
          </Heading>
        </RevealFx>
        <RevealFx delay={0.2} horizontal="center">
          <Text
            variant="heading-default-m"
            onBackground="neutral-weak"
            wrap="balance"
            align="center"
          >
            Every month I give one full day to a startup. My way of giving back
            for the outcomes I&apos;ve been lucky to achieve.
          </Text>
        </RevealFx>
      </Column>

      {/* Stat grid */}
      <RevealFx delay={0.3} fillWidth>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "var(--static-space-12)",
            width: "100%",
          }}
        >
          {stats.map((s) => (
            <Card
              key={s.label}
              direction="column"
              gap="4"
              padding="20"
              radius="l"
              border="neutral-alpha-weak"
            >
              <Text variant="display-strong-xs" onBackground="brand-strong">
                {s.value}
              </Text>
              <Text variant="label-default-s" onBackground="neutral-weak">
                {s.label}
              </Text>
            </Card>
          ))}
        </div>
      </RevealFx>

      {/* What the day looks like + CTA */}
      <Row fillWidth gap="32" s={{ direction: "column", gap: "24" }}>
        <Column flex={1} gap="16">
          <Heading as="h3" variant="heading-strong-l">
            What the day looks like
          </Heading>
          <Column gap="12">
            {dayBullets.map((b) => (
              <Row key={b} gap="12" vertical="start">
                <Text
                  variant="body-default-l"
                  onBackground="brand-strong"
                  style={{ lineHeight: 1.4 }}
                >
                  •
                </Text>
                <Text variant="body-default-l" onBackground="neutral-medium">
                  {b}
                </Text>
              </Row>
            ))}
          </Column>
        </Column>

        <Column
          flex={1}
          gap="20"
          padding="32"
          radius="l"
          border="neutral-alpha-weak"
          background="neutral-alpha-weak"
          horizontal="start"
          vertical="center"
        >
          <Heading as="h3" variant="heading-strong-l" wrap="balance">
            Want me for a day?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Drop me a message and tell me what you&apos;re building. If it&apos;s
            a fit, I&apos;ll block a day and come in.
          </Text>
          <Button
            href="mailto:i@m13v.com?subject=Your%20free%20day%20at%20our%20startup"
            variant="primary"
            size="l"
            prefixIcon="email"
            arrowIcon
            data-border="rounded"
          >
            i@m13v.com
          </Button>
        </Column>
      </Row>

      <Row fillWidth paddingLeft="64" horizontal="end">
        <Line maxWidth={48} />
      </Row>
    </Column>
  );
}
