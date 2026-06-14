"use client";

import { useEffect, useRef } from "react";

export function CookiebotDeclaration() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src =
      "https://consent.cookiebot.com/b1efc722-213a-4f5a-8fdc-4f1874054662/cd.js";
    script.type = "text/javascript";
    script.async = true;
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
