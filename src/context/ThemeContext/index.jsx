import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      console.log("storedTheme", storedTheme);
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

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

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  // useEffect(() => {
  // document.body.style.transition =
  //   "background-color 0.2s ease-in-out, color 0.2s ease-in-out";
  // }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
