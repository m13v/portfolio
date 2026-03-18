"use client";

import { useEffect } from "react";
import { trackEvent } from "./PostHogProvider";

export function TrackClicks() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Track external link clicks
      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      if (link) {
        const href = link.href;
        const isExternal =
          href.startsWith("http") && !href.includes(window.location.hostname);
        if (isExternal) {
          trackEvent("external_link_click", {
            url: href,
            text: link.textContent?.trim()?.substring(0, 100),
          });
        }
      }

      // Track accordion (Read more / FAQ) clicks
      const accordion = target.closest('[role="button"][aria-expanded]');
      if (accordion) {
        const wasExpanded = accordion.getAttribute("aria-expanded") === "true";
        trackEvent("accordion_toggle", {
          title: accordion.textContent?.trim()?.substring(0, 100),
          action: wasExpanded ? "collapse" : "expand",
        });
      }

      // Track social icon clicks
      const iconButton = target.closest('[data-tooltip]');
      if (iconButton) {
        const tooltip = iconButton.getAttribute("data-tooltip");
        if (tooltip) {
          trackEvent("social_icon_click", { platform: tooltip });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
