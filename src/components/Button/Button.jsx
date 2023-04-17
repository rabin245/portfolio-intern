import styles from "./Button.module.css";

const Button = ({ children, handleClick = () => {}, type = "normal" }) => {
  if (type === "download")
    return (
      <a
        href="/src/assets/cv/cv.pdf"
        className={`${styles.Button} ${styles.DownloadButton}`}
        download={true}
        target="_blank"
      >
        {children}
      </a>
    );

  return (
    <button className={styles.Button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
