import MenuItem from "../MenuItem";
import ThemeSwitcher from "../ThemeSwitcher";
import styles from "./Menu.module.css";

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

      <ThemeSwitcher darkMode={darkMode} switchTheme={switchTheme} />
    </div>
  );
};

export default Menu;
