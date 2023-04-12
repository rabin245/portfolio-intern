import styles from "./Button.module.css";
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
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

const ScrollToTopButton = ({ show }) => {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.ScrollToTop} ${show && styles.visible}`}
      onClick={gotoTop}
    >
      <ArrowUpIcon />
    </div>
  );
};

export { Button, ThemeSwitcherButton, ScrollToTopButton };
