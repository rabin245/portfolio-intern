import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const switchTheme = () => {
    const root = document.documentElement;

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
      root.className = "dark";
      localStorage.theme = "dark";
    } else {
      root.className = "light";
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const ThemeContext = createContext("light");

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState(globalThis.window?.__theme || "light");
//   const toggleTheme = () => {
//     globalThis.window.__setPreferredTheme(theme === "light" ? "dark" : "light");
//   };

//   useEffect(() => {
//     globalThis.window.__onThemeChange = setTheme;
//   }, []);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
