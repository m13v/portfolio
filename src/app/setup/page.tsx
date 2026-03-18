import {
  Heading,
  Text,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
} from "@once-ui-system/core";
import { person, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `My Workstation – ${person.name}`,
    description:
      "Hardware and software that powers my workflow.",
    baseURL: baseURL,
    path: "/setup",
  });
}

type SetupItem = {
  name: string;
  description: string;
  link?: string;
};

const hardware: SetupItem[] = [
  {
    name: "Samsung 57\" Odyssey Neo G9 (G95NC)",
    description:
      "8K+ curved monitor — immersive workspace for research and side tasks",
  },
  {
    name: "Dell UltraSharp U4025QW 40\"",
    description:
      "5K2K ultrawide — primary display for coding and multitasking",
  },
  {
    name: "MacBook Pro M4",
    description:
      "Main development machine — waiting for Mac Studio to replace it",
  },
  {
    name: "AMD Threadripper 9980X",
    description:
      "200 GB RAM workstation for heavy ML workloads and parallel builds",
  },
  {
    name: "HUGE Trackball Mouse",
    description:
      "Ergonomic trackball — saves my wrist during long sessions",
  },
  {
    name: "Apple Magic Keyboard",
    description:
      "Low-profile keyboard for a clean, minimal desk",
  },
  {
    name: "Logi Keypad",
    description:
      "Programmable macro pad for custom shortcuts and workflow automation",
  },
  {
    name: "Logi Ultra-Wide 4K Camera",
    description:
      "High-quality webcam for calls and recordings",
  },
  {
    name: "Bose Headphones (latest, noise cancelling)",
    description:
      "Active noise cancellation — essential for deep work",
  },
  {
    name: "AirPods Pro 3",
    description:
      "Dual audio — connected to both Mac and Windows simultaneously",
  },
  {
    name: "Philips Speech One",
    description:
      "Professional dictation microphone for crystal-clear voice input",
  },
  {
    name: "Savant Elite Pedals",
    description:
      "Foot pedals for extra input — because hands aren't enough",
  },
  {
    name: "SKG Foot Massager",
    description:
      "Your feet deserve care during marathon coding sessions",
  },
  {
    name: "Two water bottles",
    description: "Hydration is part of the setup \u{1F604}",
  },
];

const software: SetupItem[] = [
  {
    name: "Claude Code",
    description:
      "AI-powered coding — running 20 agents in parallel for maximum velocity",
  },
  {
    name: "Fazm",
    description:
      "AI assistant for day-to-day tasks, planning, and operations",
    link: "https://fazm.ai/m",
  },
  {
    name: "Arc Browser",
    description:
      "Modern browser with spaces, profiles, and a clean UI",
  },
  {
    name: "Wispr Flow",
    description:
      "Voice-to-text that actually works — dictate code, messages, and notes",
  },
];

function SetupSection({
  title,
  items,
}: {
  title: string;
  items: SetupItem[];
}) {
  return (
    <Column fillWidth gap="24">
      <Heading as="h2" variant="display-strong-s">
        {title}
      </Heading>
      <Column fillWidth gap="16">
        {items.map((item) => (
          <Row
            key={item.name}
            fillWidth
            gap="16"
            paddingY="16"
            style={{
              borderBottom: "1px solid var(--neutral-alpha-weak)",
            }}
          >
            <Column flex={1} gap="4">
              {item.link ? (
                <Text
                  variant="heading-strong-m"
                  as="a"
                  href={item.link}
                  style={{ textDecoration: "none" }}
                >
                  {item.name}
                  <Icon
                    name="arrowUpRight"
                    size="xs"
                    style={{ marginLeft: "0.25rem" }}
                  />
                </Text>
              ) : (
                <Text variant="heading-strong-m">{item.name}</Text>
              )}
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Column>
          </Row>
        ))}
      </Column>
    </Column>
  );
}

export default function Setup() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/setup"
        title={`My Workstation – ${person.name}`}
        description="Hardware and software that powers my workflow."
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="m" horizontal="center">
        <Column maxWidth="s" horizontal="center" align="center">
          <Heading variant="display-strong-l" paddingBottom="16">
            My Workstation
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-xl"
            paddingBottom="32"
          >
            I spend most of my day at this desk, so I&apos;ve optimized every
            inch of it. Here&apos;s the hardware and software that powers my
            workflow.
          </Text>
        </Column>
      </Column>

      <Line />

      <SetupSection title="Hardware" items={hardware} />

      <Line />

      <SetupSection title="Software" items={software} />
    </Column>
  );
}
