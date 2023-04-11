import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = ({ darkMode, switchTheme }) => {
  const icon = darkMode ? <MoonIcon /> : <SunIcon />;

  return (
    <div className={styles.icon} onClick={switchTheme}>
      {icon}
    </div>
  );
};

export default ThemeSwitcher;
