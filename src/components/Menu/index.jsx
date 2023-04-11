import { useContext } from "react";
import MenuItem from "../MenuItem";
import ThemeSwitcher from "../ThemeSwitcher";
import styles from "./Menu.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Menu = ({ homeRef, aboutRef, contactRef, skillsRef, projectsRef }) => {
  const { darkMode, switchTheme } = useContext(ThemeContext);

  const menuItems = [
    { title: "Home", reference: homeRef },
    { title: "About", reference: aboutRef },
    { title: "Skills", reference: skillsRef },
    { title: "Projects", reference: projectsRef },
    { title: "Contact", reference: contactRef },
  ];

  return (
    <div className={styles.menu}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          reference={item.reference}
        />
      ))}

      <ThemeSwitcher darkMode={darkMode} switchTheme={switchTheme} />
    </div>
  );
};

export default Menu;
