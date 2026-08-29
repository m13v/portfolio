import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Beliefs – ${person.name}`,
    description:
      "Things I think are true, most of which I learned the expensive way.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Beliefs")}`,
    path: "/beliefs",
  });
}

const beliefs: { claim: string; body: string }[] = [
  {
    claim: "Fewer people on a team is better.",
    body: "Every addition should raise the average, which means the bar for a new person is that they are better than me at something that matters. Most teams add people to feel like progress is happening.",
  },
  {
    claim:
      "Serving people without expecting a return is the highest-leverage thing I do, and the hardest.",
    body: "Almost everything good that has come to me traces back to something I did for free, for someone who could not repay it. I still have to talk myself into it every time.",
  },
  {
    claim: "In the Bay, your first draft has to be good.",
    body: "Attention here is roughly five times shorter than anywhere else I have lived, because there is always something else happening in the next room. Elsewhere you get to iterate in public. Here you get one look.",
  },
  {
    claim: "Meditation is a sport, not a religion.",
    body: "You manage your mind the way you manage balance on a yoga mat: badly at first, then less badly, through repetition. I avoided it for years because I assumed the opposite.",
  },
  {
    claim: "Credentials do not transfer across borders.",
    body: "Everything I built before moving to the US counted for nothing here. Pretending otherwise cost me my first year. The only thing that transfers is the ability to build the next thing.",
  },
];

export default function Beliefs() {
  return (
    <Column
      maxWidth="m"
      gap="xl"
      paddingY="24"
      horizontal="center"
      style={{ maxWidth: "44rem" }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beliefs"
        title={`Beliefs – ${person.name}`}
        description="Things I think are true, most of which I learned the expensive way."
        image={`/api/og/generate?title=${encodeURIComponent("Beliefs")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth gap="12" paddingTop="24">
        <Heading variant="heading-strong-xl">Beliefs</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Things I think are true, most of which I learned the expensive way.
        </Text>
      </Column>

      <Column fillWidth gap="40">
        {beliefs.map((item) => (
          <Column key={item.claim} fillWidth gap="8">
            <Text variant="heading-strong-m">{item.claim}</Text>
            <Text variant="body-default-l" onBackground="neutral-medium">
              {item.body}
            </Text>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
