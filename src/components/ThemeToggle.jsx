import { LuMoon, LuSun } from "react-icons/lu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "mx-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <LuSun className="h-5 w-5 text-yellow-300 cursor-pointer" />
      ) : (
        <LuMoon className="h-5 w-5 text-blue-900 cursor-pointer" />
      )}
    </button>
  );
}
