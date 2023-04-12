import MenuItem from "../MenuItem";
import styles from "./Menu.module.css";
import { ThemeSwitcherButton } from "../Button";

const Menu = ({ menuItems, darkMode, switchTheme }) => {
  return (
    <div className={styles.menu}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          reference={item.reference}
        />
      ))}

      <ThemeSwitcherButton darkMode={darkMode} switchTheme={switchTheme} />
    </div>
  );
};

export default Menu;
