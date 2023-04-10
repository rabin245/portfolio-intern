import styles from "./Projects.module.css";

const Projects = ({ projectsRef }) => {
  return (
    <div className={styles.Projects} ref={projectsRef}>
      Projects
    </div>
  );
};

export default Projects;
