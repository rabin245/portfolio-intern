import MenuItem from "../MenuItem";
import ThemeSwitcher from "../ThemeSwitcher";
import styles from "./Menu.module.css";

const Menu = ({ homeRef, aboutRef, contactRef, skillsRef, projectsRef }) => {
  return (
    <div className={styles.menu}>
      <MenuItem title="Home" reference={homeRef} />
      <MenuItem title="About" reference={aboutRef} />
      <MenuItem title="Skills" reference={skillsRef} />
      <MenuItem title="Projects" reference={projectsRef} />
      <MenuItem title="Contact" reference={contactRef} />
      <ThemeSwitcher />
    </div>
  );
};

export default Menu;
