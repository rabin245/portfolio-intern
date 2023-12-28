import styles from "./Button.module.css";

const Button = ({ children, type = "normal", buttonType = "button" }) => {
  if (type === "download") {
    return (
      <a
        href="/cv.pdf"
        className={`${styles.Button} ${styles.DownloadButton}`}
        download={true}
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles.Button} type={buttonType}>
      {children}
    </button>
  );
};

export default Button;
