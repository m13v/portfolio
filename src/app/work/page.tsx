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
const FEATURED = ["s4l", "mediar", "fazm", "omi", "screenpipe", "image-gen-tool"];

// Every project, bucketed by what it actually is. Order within a category is
// deliberate, strongest first.
const CATEGORIES: { title: string; slugs: string[] }[] = [
  {
    title: "agents & automation",
    slugs: ["s4l", "fazm", "mediar", "holodeck", "reddit-linkedin-repost"],
  },
  { title: "context & capture", slugs: ["screenpipe", "omi"] },
  {
    title: "retrieval",
    slugs: [
      "county-law-rag",
      "sema-arxiv-search",
      "semantic-chunking",
      "youtube-gpt",
      "gemini-4-docs",
      "docs2cli",
    ],
  },
  {
    title: "generative media",
    slugs: ["image-gen-tool", "realtime-sora", "virtual-try-on"],
  },
  {
    title: "developer tools",
    slugs: ["gpt-auto-debugger", "shadcn-for-ai", "getq", "gpt-vs-gemini"],
  },
  {
    title: "consumer",
    slugs: ["betzy", "feliciti", "newcomers", "timetree", "ai-sales-assistant"],
  },
];

export default function Work() {
  const all = getPosts(["src", "app", "work", "projects"]);
  const bySlug = new Map(all.map((post) => [post.slug, post]));

  const categories = CATEGORIES.map((category) => ({
    title: category.title,
    items: category.slugs
      .map((slug) => bySlug.get(slug))
      .filter((post): post is NonNullable<typeof post> => Boolean(post)),
  })).filter((category) => category.items.length > 0);

  const categorised = new Set(CATEGORIES.flatMap((c) => c.slugs));
  const uncategorised = all
    .filter((post) => !categorised.has(post.slug))
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
          The six that matter most. Everything else is grouped below.
        </Text>
      </Column>

      <Projects include={FEATURED} />

      <Row fillWidth paddingX="l">
        <Line />
      </Row>

      <Column paddingX="l" gap="16">
        <Heading as="h2" variant="heading-strong-l">
          Everything
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Every project, grouped by what it is.
        </Text>

        <div className="categoryGrid">
          {categories.map((category) => (
            <Column key={category.title} gap="8" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">
                {category.title}
              </Text>
              <Column gap="4" fillWidth>
                {category.items.map((post) => (
                  <SmartLink key={post.slug} href={`/work/${post.slug}`}>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {post.metadata.title}
                    </Text>
                  </SmartLink>
                ))}
              </Column>
            </Column>
          ))}

          {uncategorised.length > 0 && (
            <Column gap="8" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">
                other
              </Text>
              <Column gap="4" fillWidth>
                {uncategorised.map((post) => (
                  <SmartLink key={post.slug} href={`/work/${post.slug}`}>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {post.metadata.title}
                    </Text>
                  </SmartLink>
                ))}
              </Column>
            </Column>
          )}
        </div>
      </Column>

    </Column>
  );
}
