"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as "light" | "dark" | null;
    const preferred = stored ?? "light";
    document.documentElement.dataset.theme = preferred;
    setTheme(preferred);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  };

  return (
    <Button variant="secondary" onClick={handleToggle} aria-label="テーマ切り替え">
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}
