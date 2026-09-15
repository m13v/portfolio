import { Row, SmartLink, Text } from "@once-ui-system/core";
import { person } from "@/resources";

// Deliberately quiet: the homepage carries the message, these are for anyone
// who wants to dig.
const pages = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/beliefs", label: "Beliefs" },
  { href: "/blog", label: "Writing" },
  { href: "/setup", label: "Setup" },
];
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Row gap="16" wrap>
          {pages.map((page) => (
            <SmartLink key={page.href} href={page.href}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {page.label}
              </Text>
            </SmartLink>
          ))}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
