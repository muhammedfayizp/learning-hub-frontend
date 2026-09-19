"use client";

import { useTheme } from "@/context/ThemeContext";
import { User } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        className="rounded-full border border-slate-300 p-2 text-lg transition hover:scale-105 dark:border-slate-700"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <button
        aria-label="User profile"
        className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:scale-105 dark:border-slate-700 dark:text-slate-200"
      >
        <User size={20} />
      </button>
    </div>
  );
}