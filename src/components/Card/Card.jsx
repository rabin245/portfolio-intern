import styles from "./Card.module.css";

const Card = ({ icon, title, type }) => {
  if (type === "about")
    return (
      <div className={styles.AboutCard}>
        <div className={styles.AboutCard__icon}>{icon}</div>
        <h2 className={styles.AboutCard__title}>{title}</h2>
      </div>
    );
  else if (type === "skill")
    return (
      <div className={styles.SkillCard}>
        <div className={styles.SkillCard__icon}>{icon}</div>
        <h3>{title}</h3>
      </div>
    );
};

export default Card;
