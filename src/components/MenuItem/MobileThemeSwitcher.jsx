import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import styles from "./MenuItem.module.css";

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

export default MobileThemeSwitcher;
