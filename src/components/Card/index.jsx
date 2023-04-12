import ProgressBar from "../ProgressBar";
import styles from "./Card.module.css";

const AboutCard = ({ icon, title }) => {
  return (
    <div className={styles.AboutCard}>
      <div className={styles.AboutCard__icon}>{icon}</div>
      <h2 className={styles.AboutCard__title}>{title}</h2>
    </div>
  );
};

const SkillCard = ({ title, completed }) => {
  return (
    <div className={styles.SkillCard}>
      <div className={styles.SkillCard__description}>
        <h3>{title}</h3>
        <p>{completed}%</p>
      </div>
      <ProgressBar completed={completed} />
    </div>
  );
};

const ProjectCard = ({ image, title, link, github }) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ProjectCard__image}>
        <img src={PortfolioImage} alt="project" />
      </div>

      <div className={styles.ProjectCard__desc}>
        <h3 className={styles.ProjectCard__title}>Project 1</h3>

        <div className={styles.ProjectCard__icons}>
          <a href="#">icon</a>

          <a href="#">icon githubc</a>
        </div>
      </div>
    </div>
  );
};

export { AboutCard, ProjectCard, SkillCard };
