"use client";

import { Column, Row, Text, Heading } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectData {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images: string[];
    team?: { avatar: string }[];
    link?: string;
  };
  content: string;
}

export function ProjectList({ projects }: { projects: ProjectData[] }) {
  const handleClick = (slug: string) => {
    const el = document.getElementById(`project-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Column fillWidth gap="xl">
      {/* Compact overview list */}
      <Column fillWidth gap="2">
        {projects.map((post, index) => (
          <Row
            key={post.slug}
            fillWidth
            paddingY="8"
            paddingX="12"
            gap="12"
            vertical="center"
            cursor="interactive"
            radius="m"
            className="hover-surface"
            onClick={() => handleClick(post.slug)}
          >
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
              style={{ minWidth: "1.5rem" }}
            >
              {String(index + 1).padStart(2, "0")}
            </Text>
            <Text variant="heading-strong-s" style={{ flex: 1, minWidth: 0 }}>
              {post.metadata.title}
            </Text>
            <Row flex={2} hide s={{ hide: false }}>
              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {post.metadata.summary}
              </Text>
            </Row>
          </Row>
        ))}
      </Column>

      {/* Full project cards with thumbnails */}
      <Column fillWidth gap="xl" paddingX="l">
        {projects.map((post, index) => (
          <Column key={post.slug} id={`project-${post.slug}`} fillWidth>
            <ProjectCard
              priority={index < 2}
              href={`/work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={
                post.metadata.team?.map((member) => ({
                  src: member.avatar,
                })) || []
              }
              link={post.metadata.link || ""}
            />
          </Column>
        ))}
      </Column>
    </Column>
  );
}
