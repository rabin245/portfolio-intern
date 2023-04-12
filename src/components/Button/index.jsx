import styles from "./Button.module.css";
import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";

const Button = ({ children, handleClick }) => {
  return (
    <button className={styles.Button} onClick={handleClick}>
      {children}
    </button>
  );
};

const ThemeSwitcherButton = ({ darkMode, switchTheme }) => {
  const icon = darkMode ? <MoonIcon /> : <SunIcon />;

  return (
    <div className={styles.themeButton} onClick={switchTheme}>
      {icon}
    </div>
  );
};

export { Button, ThemeSwitcherButton };
