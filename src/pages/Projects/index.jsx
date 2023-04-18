import styles from "./Projects.module.css";
import { ProjectCard } from "../../components/Card";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import projectData from "../../assets/data/data.json";
import { useState, useEffect } from "react";

const Projects = ({ projectsRef }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = projectData.projects;

    setProjects(data);
  }, []);

  return (
    <div className={styles.Projects} ref={projectsRef}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Recent works</h1>

          <div className={styles.content}>
            <p className={styles.description}>
              Here are some of my recent projects. I have also worked on some
              other projects which are not listed here. You can find them on my
              GitHub profile.
            </p>
            <a
              href="https://github.com/rabin245"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              View on GitHub
              <span className={styles.arrow}>
                <ArrowRightIcon />
              </span>
            </a>
          </div>
        </div>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
