"use client";

import { Flex, IconButton, Row, SmartLink, Text } from "@once-ui-system/core";
import { usePathname } from "next/navigation";

import { about, blog, display, person, routes, social, work } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { path: "/", label: person.firstName },
  { path: about.path, label: about.label },
  { path: work.path, label: work.label },
  { path: "/beliefs", label: "Beliefs" },
  { path: blog.path, label: blog.label },
  { path: "/setup", label: "Setup" },
];

export const Header = () => {
  const pathname = usePathname() ?? "";

  const enabled = navItems.filter(
    (item) => routes[item.path as keyof typeof routes] !== false,
  );

  return (
    <>
      <Flex
        position="fixed"
        zIndex={9}
        style={{ top: "var(--static-space-16)", left: "var(--static-space-16)" }}
        gap="12"
        vertical="center"
      >
        {enabled.map((item) => {
          const active =
            item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
          return (
            <SmartLink key={item.path} href={item.path} unstyled>
              <Text
                variant="label-default-s"
                onBackground={active ? "neutral-strong" : "neutral-weak"}
              >
                {item.label}
              </Text>
            </SmartLink>
          );
        })}
      </Flex>
      <Flex
        position="fixed"
        zIndex={9}
        style={{ top: "var(--static-space-16)", right: "var(--static-space-16)" }}
        gap="4"
        vertical="center"
      >
        <Row gap="4">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
        {display.themeSwitcher && <ThemeToggle />}
      </Flex>
    </>
  );
};
