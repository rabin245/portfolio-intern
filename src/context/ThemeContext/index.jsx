import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark" || true
  );

  const switchTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");

    setDarkMode((prev) => {
      localStorage.theme = prev ? "light" : "dark";
      return !prev;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    const lightBackground = "#f9f9f9";
    const darkBackground = "#242424";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      localStorage.theme = "dark";
      root.style.setProperty("--background-color", darkBackground);
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
      root.style.setProperty("--background-color", lightBackground);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
