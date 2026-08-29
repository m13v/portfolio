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
      "8K+ curved monitor. Immersive workspace for research and side tasks.",
  },
  {
    name: "Dell UltraSharp U4025QW 40\"",
    description:
      "5K2K ultrawide. Primary display for coding and multitasking.",
  },
  {
    name: "MacBook Pro M4",
    description:
      "Main development machine, waiting for a Mac Studio to replace it.",
  },
  {
    name: "AMD Threadripper 9980X",
    description:
      "200 GB RAM workstation for heavy ML workloads and parallel builds.",
  },
  {
    name: "HUGE Trackball Mouse",
    description:
      "Ergonomic trackball. Saves my wrist during long sessions.",
  },
  {
    name: "Apple Magic Keyboard",
    description:
      "Low-profile keyboard for a clean, minimal desk.",
  },
  {
    name: "Logi Keypad",
    description:
      "Programmable macro pad for custom shortcuts and workflow automation.",
  },
  {
    name: "Logi Ultra-Wide 4K Camera",
    description:
      "High-quality webcam for calls and recordings.",
  },
  {
    name: "Bose Headphones (latest, noise cancelling)",
    description:
      "Active noise cancellation, essential for deep work.",
  },
  {
    name: "AirPods Pro 3",
    description:
      "Dual audio, connected to both Mac and Windows simultaneously.",
  },
  {
    name: "Philips Speech One",
    description:
      "Professional dictation microphone for crystal-clear voice input.",
  },
  {
    name: "Savant Elite Pedals",
    description:
      "Foot pedals for extra input, because two hands are not enough.",
  },
  {
    name: "SKG Foot Massager",
    description:
      "Your feet deserve care during marathon coding sessions.",
  },
  {
    name: "Two water bottles",
    description: "Hydration is part of the setup \u{1F604}",
  },
];

const aiCoding: SetupItem[] = [
  {
    name: "Claude Code",
    description:
      "Where most of my code gets written. I run many agents in parallel rather than one at a time.",
  },
  {
    name: "Conductor",
    description:
      "Orchestrates parallel Claude Code sessions across worktrees so agents do not collide.",
  },
  {
    name: "Cursor / Windsurf",
    description:
      "Kept around for inline editing and for comparing how different agent harnesses behave.",
  },
  {
    name: "Ollama",
    description:
      "Local models. Useful when a task should never leave the machine.",
  },
  {
    name: "Fazm",
    description:
      "My own voice-first agent for day-to-day operations, planning, and Mac control.",
    link: "https://fazm.ai/m",
  },
];

const development: SetupItem[] = [
  {
    name: "zsh + Homebrew",
    description:
      "pyenv, nvm, bun, deno, and pnpm side by side. Every runtime a project might ask for.",
  },
  {
    name: "gh and glab",
    description:
      "GitHub and GitLab from the terminal. Agents drive these more than I do now.",
  },
  {
    name: "Docker + UTM",
    description:
      "Containers for services, full VMs when something needs a whole machine to break.",
  },
  {
    name: "TablePlus + RedisInsight",
    description:
      "Postgres, MySQL, Mongo, and Redis in one place instead of four CLIs.",
  },
  {
    name: "ffmpeg, jq, pandoc",
    description:
      "The three tools that quietly solve most data-wrangling problems.",
  },
  {
    name: "Xcode",
    description: "For anything that has to ship to an Apple device.",
  },
];

const inputVoice: SetupItem[] = [
  {
    name: "Wispr Flow",
    description:
      "Voice-to-text that actually works. I dictate code, messages, and notes.",
  },
  {
    name: "superwhisper",
    description:
      "Local transcription for anything I would rather not send to a server.",
  },
  {
    name: "Karabiner-Elements",
    description:
      "Remaps the keyboard at the OS level. The foot pedals route through here.",
  },
  {
    name: "Homerow",
    description:
      "Keyboard-driven clicking. Cuts most of the reaching for the trackball.",
  },
];

const everythingElse: SetupItem[] = [
  {
    name: "Arc Browser",
    description: "Spaces and profiles keep client work separate from my own.",
  },
  {
    name: "Obsidian",
    description:
      "Plain-text notes I own. Everything durable ends up here eventually.",
  },
  {
    name: "Superhuman",
    description: "Email, kept to a few minutes a day.",
  },
  {
    name: "Beeper",
    description:
      "Telegram, Signal, WhatsApp, Slack, and Discord in one inbox instead of five.",
  },
  {
    name: "Screen Studio",
    description: "Demo recordings that do not look like screen recordings.",
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
            I spend most of my day at this desk, so I have optimized every inch
            of it. Here is what I actually use.
          </Text>
        </Column>
      </Column>

      <Line />

      <SetupSection title="Hardware" items={hardware} />

      <Line />

      <SetupSection title="AI and coding" items={aiCoding} />

      <Line />

      <SetupSection title="Development" items={development} />

      <Line />

      <SetupSection title="Input and voice" items={inputVoice} />

      <Line />

      <SetupSection title="Everything else" items={everythingElse} />
    </Column>
  );
}
