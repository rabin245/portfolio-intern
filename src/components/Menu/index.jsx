import { MenuItem, MobileMenuItem, MobileThemeSwitcher } from "../MenuItem";
import styles from "./Menu.module.css";
import { MenuToggleButton, ThemeSwitcherButton } from "../Button";

const MenuDesktop = ({ menuItems, darkMode, switchTheme, scrollToRef }) => (
  <div className={styles.menuDesktop}>
    {menuItems.map((item) => (
      <MenuItem
        key={item.title}
        title={item.title}
        reference={item.reference}
        scrollToRef={scrollToRef}
      />
    ))}
    <ThemeSwitcherButton darkMode={darkMode} switchTheme={switchTheme} />
  </div>
);

const MenuMobile = ({
  menuItems,
  isOpen,
  toggleMenu,
  scrollToRef,
  darkMode,
  switchTheme,
}) => {
  const content = menuItems.map((item) => (
    <MobileMenuItem
      key={item.title}
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

const DeviceMenu = ({
  menuItems,
  darkMode,
  switchTheme,
  isOpen = false,
  viewportWidth = 769,
  toggleMenu,
  scrollToRef,
}) => {
  return viewportWidth > 768 ? (
    <MenuDesktop
      menuItems={menuItems}
      darkMode={darkMode}
      switchTheme={switchTheme}
      scrollToRef={scrollToRef}
    />
  ) : (
    <MenuMobile
      menuItems={menuItems}
      isOpen={isOpen}
      toggleMenu={toggleMenu}
      scrollToRef={scrollToRef}
      darkMode={darkMode}
      switchTheme={switchTheme}
    />
  );
};

const Menu = ({
  menuItems,
  darkMode,
  switchTheme,
  isOpen = false,
  viewportWidth = 769,
  toggleMenu,
}) => {
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 65, behavior: "smooth" });
    toggleMenu();
  };

  return (
    <>
      <DeviceMenu
        menuItems={menuItems}
        darkMode={darkMode}
        switchTheme={switchTheme}
        isOpen={isOpen}
        viewportWidth={viewportWidth}
        toggleMenu={toggleMenu}
        scrollToRef={scrollToRef}
      />
      {!isOpen && <MenuToggleButton toggleMenu={toggleMenu} />}
    </>
  );
};

export default Menu;
