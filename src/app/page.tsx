import {
  Avatar,
  Button,
  Column,
  Heading,
  Line,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { home, about, work, person, baseURL } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

// Six projects that carry the strongest evidence. Everything else lives on /work.
// Three, deliberately. Fewer bigger things read stronger than six.
const FEATURED = ["screenpipe", "mediar", "omi"];

export default function Home() {
  const bySlug = new Map(
    getPosts(["src", "app", "work", "projects"]).map((p) => [p.slug, p])
  );
  const featured = FEATURED.map((slug) => bySlug.get(slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <Column
      maxWidth="m"
      gap="xl"
      paddingY="24"
      horizontal="center"
      style={{ overflowX: "hidden", maxWidth: "48rem" }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── HERO ── */}
      <Column fillWidth gap="20" paddingTop="24">
        <Heading wrap="balance" variant="heading-strong-xl">
          {home.headline}
        </Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
          {home.subline}
        </Text>
        <Column as="ul" className="factList" gap="8" paddingTop="4">
          <Text as="li" variant="body-default-l" onBackground="neutral-medium">
            Won math and computer science olympiads.
          </Text>
          <Text as="li" variant="body-default-l" onBackground="neutral-medium">
            Top 3 engineer on{" "}
            <SmartLink href="https://github.com/m13v">
              GitHub trending
            </SmartLink>
            .
          </Text>
          <Text as="li" variant="body-default-l" onBackground="neutral-medium">
            Cofounded{" "}
            <SmartLink href="https://github.com/mediar-ai/screenpipe">
              screenpipe
            </SmartLink>
            : #1 trending on GitHub, 21k stars, $15k MRR, YC S26.
          </Text>
          <Text as="li" variant="body-default-l" onBackground="neutral-medium">
            Built and sold a B2B SaaS hotel channel manager in eighteen
            months.
          </Text>
        </Column>

        <Row gap="12" wrap paddingTop="12">
          <Button
            href={about.path}
            variant="secondary"
            size="m"
            data-border="rounded"
            arrowIcon
          >
            <Row gap="8" vertical="center" paddingRight="4">
              <Avatar
                marginRight="8"
                style={{ marginLeft: "-0.75rem" }}
                src={person.avatar}
                size="m"
              />
              About
            </Row>
          </Button>
          <Button
            href={`mailto:${person.email}`}
            variant="tertiary"
            size="m"
            data-border="rounded"
          >
            {person.email}
          </Button>
        </Row>
      </Column>

      <Row fillWidth>
        <Line />
      </Row>

      {/* ── SELECTED WORK ── */}
      <Column fillWidth gap="16">
        <Heading as="h2" variant="heading-strong-l">
          Selected work
        </Heading>
        <Column fillWidth gap="4">
          {featured.map((post) => (
            <SmartLink
              key={post.slug}
              href={`/work/${post.slug}`}
              style={{ width: "100%" }}
            >
              <Row
                fillWidth
                paddingY="12"
                paddingX="12"
                gap="16"
                vertical="center"
                radius="m"
                className="hover-surface"
                s={{ direction: "column", gap: "4", align: "start" }}
              >
                <Text
                  variant="heading-strong-s"
                  style={{ minWidth: "8rem", flexShrink: 0 }}
                >
                  {post.metadata.title}
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  style={{ flex: 1, minWidth: 0 }}
                >
                  {post.metadata.summary}
                </Text>
              </Row>
            </SmartLink>
          ))}
        </Column>
        <Row paddingX="12">
          <Button href={work.path} variant="tertiary" size="s" arrowIcon>
            All projects
          </Button>
        </Row>
      </Column>

    </Column>
  );
}
