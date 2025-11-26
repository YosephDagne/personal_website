/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This runs only on the client after mount
    setMounted(true);
  }, []);

  // Avoid rendering anything until mounted
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group relative p-3 rounded-full bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900
                 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-yellow-400
                 shadow-lg hover:shadow-xl transform hover:scale-105
                 transition-all duration-300 ease-out
                 border border-gray-200 dark:border-gray-700
                 hover:border-orange-300 dark:hover:border-yellow-500/30 cursor-pointer"
    >
      <div className="relative w-5 h-5">
        {theme === "dark" ? (
          <Sun
            size={20}
            className="absolute inset-0 transition-all duration-300"
          />
        ) : (
          <Moon
            size={20}
            className="absolute inset-0 transition-all duration-300"
          />
        )}
      </div>
    </button>
  );
}
