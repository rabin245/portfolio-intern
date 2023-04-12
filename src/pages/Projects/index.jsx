import styles from "./Projects.module.css";
import PortfolioImage from "../../assets/images/project-portfolio.png";
import ElectionDappImage from "../../assets/images/project-electiondapp.png";
import BlogImage from "../../assets/images/project-blogapp.png";
import QuizImage from "../../assets/images/project-quizzical.png";
import { ProjectCard } from "../../components/Card";

const Projects = ({ projectsRef }) => {
  const projects = [
    {
      image: PortfolioImage,
      title: "Portfolio",
      github: "https://github.com/rabin245/portfolio-intern",
    },
    {
      image: ElectionDappImage,
      title: "Election Voting Dapp",
      link: "https://electiondapp.onrender.com/",
      github: "https://github.com/rabin245/election_ui#",
    },
    {
      image: BlogImage,
      title: "Blog App",
      github: "https://github.com/rabin245/blog_app_frontend",
    },
    {
      image: QuizImage,
      title: "Quizzical",
      link: "https://rabin245.github.io/quizzical/",
      github: "https://github.com/rabin245/quizzical",
    },
  ];

  return (
    <div className={styles.Projects} ref={projectsRef}>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.title}>Recent works</h1>
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
