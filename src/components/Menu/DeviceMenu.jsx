import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

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
      scrollToRef={(ref) => {
        scrollToRef(ref);
        toggleMenu();
      }}
      darkMode={darkMode}
      switchTheme={switchTheme}
    />
  );
};

export default DeviceMenu;
