import styles from "./Button.module.css";

const Button = ({ children, handleClick }) => {
  return (
    <button className={styles.Button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
