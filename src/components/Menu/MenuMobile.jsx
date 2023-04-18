import { useEffect, useRef } from "react";
import { MenuToggleButton } from "../Button";
import { MenuItem, MobileThemeSwitcher } from "../MenuItem";
import styles from "./Menu.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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

  const playerRef = useRef(null);

  const handleSwitchTheme = () => {
    switchTheme();
    playerRef.current.play();
    setTimeout(() => {
      playerRef.current.pause();
    }, 795);
  };

  useEffect(() => {
    const root = document.documentElement;

    const player = playerRef.current;

    if (root.classList.contains("dark")) {
      player.setSeeker(98, false);
      player.pause();
    } else {
      player.setSeeker(33, false);
      player.pause();
    }
  }, [isOpen]);

  return (
    <div className={`${styles.menuMobile} ${isOpen && styles.open}`}>
      <div className={styles.wrapper}>
        <MenuToggleButton type="close" toggleMenu={toggleMenu} />
        <div className={styles.menuMobileContent}>
          <div className={styles.player}>
            <Player
              className={styles.player}
              ref={playerRef}
              speed={2.75}
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_uEtE5tG3Jv.json"
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          {content}
          <MobileThemeSwitcher
            darkMode={darkMode}
            switchTheme={handleSwitchTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
