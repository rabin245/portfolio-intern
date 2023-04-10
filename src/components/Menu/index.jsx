import MenuItem from "../MenuItem";
import styles from "./Menu.module.css";

const Menu = ({ homeRef, aboutRef, contactRef, skillsRef, projectsRef }) => {
  return (
    <div className={styles.menu}>
      <MenuItem title="Home" reference={homeRef} />
      <MenuItem title="About" reference={aboutRef} />
      <MenuItem title="Skills" reference={skillsRef} />
      <MenuItem title="Projects" reference={projectsRef} />
      <MenuItem title="Contact" reference={contactRef} />
    </div>
  );
};

export default Menu;
