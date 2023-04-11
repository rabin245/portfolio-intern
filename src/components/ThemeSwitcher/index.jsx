import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { darkMode, switchTheme } = useContext(ThemeContext);

  const icon = darkMode ? <MoonIcon /> : <SunIcon />;

  return (
    <div className={styles.icon} onClick={switchTheme}>
      {icon}
    </div>
  );
};

export default ThemeSwitcher;
