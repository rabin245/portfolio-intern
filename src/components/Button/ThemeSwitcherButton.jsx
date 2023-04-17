import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import styles from "./Button.module.css";

const ThemeSwitcherButton = ({ darkMode, switchTheme }) => {
  const icon = darkMode ? <SunIcon /> : <MoonIcon />;

  return (
    <div className={styles.themeButton} onClick={switchTheme}>
      {icon}
    </div>
  );
};

export default ThemeSwitcherButton;
