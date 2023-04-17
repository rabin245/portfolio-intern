import styles from "./Button.module.css";
import MenuIcon from "../../assets/icons/MenuIcon";
import CloseIcon from "../../assets/icons/CloseIcon";

const MenuToggleButton = ({ toggleMenu, type = "burger" }) => {
  if (type === "close")
    return (
      <div className={styles.CloseMenuButton} onClick={toggleMenu}>
        <CloseIcon />
      </div>
    );

  return (
    <div className={styles.MenuToggleButton} onClick={toggleMenu}>
      <MenuIcon />
    </div>
  );
};

export default MenuToggleButton;
