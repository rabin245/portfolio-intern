import ProgressBar from "../ProgressBar";
import styles from "./SkillCard.module.css";

const SkillCard = ({ title, completed }) => {
  return (
    <div className={styles.SkillCard}>
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>{completed}%</p>
      </div>
      <ProgressBar completed={completed} />
    </div>
  );
};

export default SkillCard;
