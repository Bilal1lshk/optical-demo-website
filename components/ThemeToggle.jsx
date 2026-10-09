"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({
  className = "",
  showLabel = true,
  variant = "desktop",
}) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }

    try {
      localStorage.setItem("theme", nextTheme);
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.content = nextTheme;
    } catch (e) {
      // ignore in private browsing / blocked storage
    }
  };

  if (!mounted) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full opacity-60 ${
          variant === "mobile"
            ? "w-full py-2.5 px-4 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs"
            : variant === "icon"
            ? "w-9 h-9 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10"
            : "px-3.5 py-1.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs"
        } ${className}`}
        aria-hidden="true"
      >
        <div className="w-3.5 h-3.5 rounded-full bg-neutral-400 dark:bg-neutral-600 animate-pulse" />
      </div>
    );
  }

  const isDark = theme === "dark";

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-medium transition-all bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-200 dark:border-white/10 ${className}`}
      >
        {isDark ? (
          <>
            <Sun className="w-4 h-4 text-emerald-400" />
            <span>Switch to Light Theme</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-emerald-600" />
            <span>Switch to Dark Theme</span>
          </>
        )}
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 dark:border-white/10 active:scale-95 ${className}`}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-emerald-400" />
        ) : (
          <Moon className="w-4 h-4 text-emerald-600" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-200 dark:border-white/10 active:scale-95 ${className}`}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-emerald-400" />
          {showLabel && <span>Light</span>}
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-emerald-600" />
          {showLabel && <span>Dark</span>}
        </>
      )}
    </button>
  );
}
