import { useContext } from "react";
import MenuItem from "../MenuItem";
import ThemeSwitcher from "../ThemeSwitcher";
import styles from "./Menu.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Menu = ({ homeRef, aboutRef, contactRef, skillsRef, projectsRef }) => {
  const { darkMode, switchTheme } = useContext(ThemeContext);

  return (
    <div className={styles.menu}>
      <MenuItem title="Home" reference={homeRef} />
      <MenuItem title="About" reference={aboutRef} />
      <MenuItem title="Skills" reference={skillsRef} />
      <MenuItem title="Projects" reference={projectsRef} />
      <MenuItem title="Contact" reference={contactRef} />
      <ThemeSwitcher darkMode={darkMode} switchTheme={switchTheme} />
    </div>
  );
};

export default Menu;
