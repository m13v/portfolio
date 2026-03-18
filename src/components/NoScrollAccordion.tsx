"use client";

import { useEffect, useRef } from "react";

export function NoScrollAccordion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        '[role="button"][aria-expanded]'
      );
      if (!target) return;

      const scrollY = window.scrollY;
      const body = document.body;
      const html = document.documentElement;

      // Freeze viewport by fixing the body in place
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      html.style.scrollBehavior = "auto";

      // Unfreeze after accordion animation completes
      setTimeout(() => {
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        window.scrollTo(0, scrollY);
        setTimeout(() => {
          html.style.scrollBehavior = "";
        }, 50);
      }, 400);
    };

    el.addEventListener("click", handleClick, true);
    return () => el.removeEventListener("click", handleClick, true);
  }, []);

  return <div ref={ref}>{children}</div>;
}
