import { ThemeSwitcherButton } from "../Button";
import { MenuItem } from "../MenuItem";
import styles from "./Menu.module.css";

const MenuDesktop = ({ menuItems, darkMode, switchTheme, scrollToRef }) => (
  <div className={styles.menuDesktop}>
    {menuItems.map((item) => (
      <MenuItem
        key={item.title}
        type="desktop"
        title={item.title}
        reference={item.reference}
        scrollToRef={scrollToRef}
      />
    ))}
    <ThemeSwitcherButton darkMode={darkMode} switchTheme={switchTheme} />
  </div>
);

export default MenuDesktop;
