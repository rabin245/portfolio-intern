import styles from "./Button.module.css";
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";

const ScrollToTopButton = ({ show }) => {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.ScrollToTop} ${show && styles.visible}`}
      onClick={gotoTop}
    >
      <ArrowUpIcon />
    </div>
  );
};

export default ScrollToTopButton;
