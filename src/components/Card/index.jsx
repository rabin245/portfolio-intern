import ProgressBar from "../ProgressBar";
import styles from "./Card.module.css";
import LinkIcon from "../../assets/icons/LinkIcon";
import GithubIcon from "../../assets/icons/GithubIcon";

const AboutCard = ({ icon, title }) => {
  return (
    <div className={styles.AboutCard}>
      <div className={styles.AboutCard__icon}>{icon}</div>
      <h2 className={styles.AboutCard__title}>{title}</h2>
    </div>
  );
};

const SkillCard = ({ title, icon }) => {
  return (
    <div className={styles.SkillCard}>
      <div className={styles.SkillCard__icon}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};

const ProjectCardIcon = ({ icon, link }) => (
  <a href={link} target="_blank" className={styles.ProjectCard__linkIcon}>
    {icon}
  </a>
);

const ProjectCard = ({ image, title, link, github }) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ProjectCard__image}>
        <img src={image} alt="project" />
      </div>

      <div className={styles.ProjectCard__desc}>
        <h3 className={styles.ProjectCard__title}>{title}</h3>

        <div className={styles.ProjectCard__icons}>
          {link?.length > 0 ? (
            <ProjectCardIcon icon={<LinkIcon />} link={link} />
          ) : null}
          <ProjectCardIcon icon={<GithubIcon />} link={github} />
        </div>
      </div>
    </div>
  );
};

export { AboutCard, ProjectCard, SkillCard };
