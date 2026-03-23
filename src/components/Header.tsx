"use client";

import { Flex, IconButton, Row } from "@once-ui-system/core";

import { display, social } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
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
  );
};
