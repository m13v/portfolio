import {
  Column,
  Heading,
  Line,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

// Kept in sync with FEATURED on the homepage.
const FEATURED = ["s4l", "screenpipe", "mediar", "fazm", "omi", "image-gen-tool"];

export default function Work() {
  const archive = getPosts(["src", "app", "work", "projects"])
    .filter((post) => !FEATURED.includes(post.slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column paddingX="l" gap="12">
        <Heading variant="display-strong-s">Selected work</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          The six that matter most. Everything else is in the archive below.
        </Text>
      </Column>

      <Projects include={FEATURED} />

      <Row fillWidth paddingX="l">
        <Line />
      </Row>

      <Column paddingX="l" gap="16">
        <Heading as="h2" variant="heading-strong-l">
          Archive
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Earlier experiments, hackathon builds, and tools that did their job and
          stopped.
        </Text>
        <Column fillWidth gap="2" paddingTop="8">
          {archive.map((post) => (
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
                  style={{ minWidth: "10rem", flexShrink: 0 }}
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
      </Column>
    </Column>
  );
}
