import { MenuToggleButton } from "../Button";
import { MenuItem, MobileThemeSwitcher } from "../MenuItem";
import styles from "./Menu.module.css";

const MenuMobile = ({
  menuItems,
  isOpen,
  toggleMenu,
  scrollToRef,
  darkMode,
  switchTheme,
}) => {
  const content = menuItems.map((item) => (
    <MenuItem
      key={item.title}
      type="mobile"
      title={item.title}
      icon={item.icon}
      reference={item.reference}
      scrollToRef={scrollToRef}
    />
  ));

  return (
    <div className={`${styles.menuMobile} ${isOpen && styles.open}`}>
      <div className={styles.wrapper}>
        <MenuToggleButton type="close" toggleMenu={toggleMenu} />
        <div className={styles.menuMobileContent}>
          {content}
          <MobileThemeSwitcher darkMode={darkMode} switchTheme={switchTheme} />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
