import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import styles from "./MenuItem.module.css";

const MenuItem = ({ title, reference, scrollToRef }) => {
  return (
    <div
      className={styles.link}
      onClick={() => {
        scrollToRef(reference);
      }}
    >
      {title}
    </div>
  );
};

const MobileMenuItem = ({ title, icon, reference, scrollToRef }) => {
  return (
    <div
      className={styles.mobilelink}
      onClick={() => {
        scrollToRef(reference);
      }}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

const MobileThemeSwitcher = ({ darkMode, switchTheme }) => {
  return (
    <div
      className={styles.mobilelink}
      onClick={() => {
        switchTheme();
      }}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
      <span>Theme</span>
    </div>
  );
};

export { MenuItem, MobileMenuItem, MobileThemeSwitcher };
