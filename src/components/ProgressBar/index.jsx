import styles from "./ProgressBar.module.css";

const ProgressBar = ({ completed }) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBar_fill}
        style={{
          width: `${completed}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
