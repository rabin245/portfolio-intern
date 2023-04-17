import styles from "./Card.module.css";
import LinkIcon from "../../assets/icons/LinkIcon";
import GithubIcon from "../../assets/icons/GithubIcon";

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

export default ProjectCard;
