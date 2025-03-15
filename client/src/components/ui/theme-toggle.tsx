import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 theme-toggle-btn"
      aria-label="Toggle dark mode"
    >
      <Sun className="w-6 h-6 hidden dark:block" />
      <Moon className="w-6 h-6 block dark:hidden" />
    </button>
  );
};
