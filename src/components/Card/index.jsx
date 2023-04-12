import styles from "./Card.module.css";

const Card = ({ icon, title }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Card;
