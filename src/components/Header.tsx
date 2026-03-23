"use client";

import { Flex } from "@once-ui-system/core";

import { display } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <>
      {display.themeSwitcher && (
        <Flex
          position="fixed"
          zIndex={9}
          style={{ top: "var(--static-space-16)", right: "var(--static-space-16)" }}
        >
          <ThemeToggle />
        </Flex>
      )}
    </>
  );
};
