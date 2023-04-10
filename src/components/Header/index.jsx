import styles from "./Header.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <nav>
        <Logo />
        <Menu {...props} />
      </nav>
    </div>
  );
};

export default Header;
