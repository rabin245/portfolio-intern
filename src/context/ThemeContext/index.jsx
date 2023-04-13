import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
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
    const lightText = "#242424";
    const darkText = "#f9f9f9";
    const secondaryDarkBackground = "#121111";
    const secondaryLightBackground = "#dcdcdc";
    const darkCard = "#323131";
    const lightCard = "#eaeaea";
    const darkProgressBar = " #dcdcdc";
    const lightProgressBar = "#cdcdcd";

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      localStorage.theme = "dark";
      root.style.setProperty("--background-color", darkBackground);
      root.style.setProperty("--text-color", darkText);
      root.style.setProperty(
        "--secondary-background-color",
        secondaryDarkBackground
      );
      root.style.setProperty("--card-background-color", darkCard);
      root.style.setProperty("--bar-background-color", darkProgressBar);
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
      root.style.setProperty("--background-color", lightBackground);
      root.style.setProperty("--text-color", lightText);
      root.style.setProperty(
        "--secondary-background-color",
        secondaryLightBackground
      );
      root.style.setProperty("--card-background-color", lightCard);
      root.style.setProperty("--bar-background-color", lightProgressBar);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
