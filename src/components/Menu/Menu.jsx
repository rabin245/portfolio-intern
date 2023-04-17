import { MenuToggleButton } from "../Button";
import DeviceMenu from "./DeviceMenu";

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
