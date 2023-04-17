import styles from "./Button.module.css";
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import CloseIcon from "../../assets/icons/CloseIcon";

const Button = ({ children, handleClick = () => {}, type = "normal" }) => {
  if (type === "download")
    return (
      <a
        href="/src/assets/cv/cv.pdf"
        className={`${styles.Button} ${styles.DownloadButton}`}
        download={true}
        target="_blank"
      >
        {children}
      </a>
    );

  return (
    <button className={styles.Button} onClick={handleClick}>
      {children}
    </button>
  );
};

const ThemeSwitcherButton = ({ darkMode, switchTheme }) => {
  const icon = darkMode ? <SunIcon /> : <MoonIcon />;

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

const MenuToggleButton = ({ toggleMenu, type = "burger" }) => {
  if (type === "close")
    return (
      <div className={styles.CloseMenuButton} onClick={toggleMenu}>
        <CloseIcon />
      </div>
    );

  return (
    <div className={styles.MenuToggleButton} onClick={toggleMenu}>
      <MenuIcon />
    </div>
  );
};

const SocialButton = ({ icon, link }) => {
  return (
    <a
      className={styles.SocialButton}
      target="_blank"
      href={link}
      rel="noreferer"
    >
      {icon}
    </a>
  );
};

export {
  Button,
  ThemeSwitcherButton,
  ScrollToTopButton,
  MenuToggleButton,
  SocialButton,
};
