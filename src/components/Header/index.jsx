import styles from "./Header.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const menuItems = [
    { title: "Home", reference: homeRef },
    { title: "About", reference: aboutRef },
    { title: "Skills", reference: skillsRef },
    { title: "Projects", reference: projectsRef },
    { title: "Contact", reference: contactRef },
  ];

  const { darkMode, switchTheme } = useContext(ThemeContext);

  return (
    <div className={styles.Header}>
      <nav>
        <Logo />
        <Menu
          menuItems={menuItems}
          darkMode={darkMode}
          switchTheme={switchTheme}
        />
      </nav>
    </div>
  );
};

export default Header;
