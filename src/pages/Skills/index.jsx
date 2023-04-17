import BootstrapIcon from "../../assets/icons/BootstrapIcon";
import CssIcon from "../../assets/icons/CssIcon";
import HtmlIcon from "../../assets/icons/HtmlIcon";
import JavaScriptIcon from "../../assets/icons/JavascriptIcon";
import PythonIcon from "../../assets/icons/PythonIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import SassIcon from "../../assets/icons/SassIcon";
import TailwindIcon from "../../assets/icons/TailwindIcons";
import { Card } from "../../components/Card";
import styles from "./Skills.module.css";

const Skills = ({ skillsRef }) => {
  const skills = [
    {
      title: "HTML",
      icon: <HtmlIcon />,
    },
    {
      title: "CSS",
      icon: <CssIcon />,
    },
    {
      title: "JavaScript",
      icon: <JavaScriptIcon />,
    },
    {
      title: "Python",
      icon: <PythonIcon />,
    },
    {
      title: "React",
      icon: <ReactIcon />,
    },
    {
      title: "SASS",
      icon: <SassIcon />,
    },
    {
      title: "TailwindCSS",
      icon: <TailwindIcon />,
    },
    {
      title: "Bootstrap",
      icon: <BootstrapIcon />,
    },
  ];

  return (
    <div className={styles.Skills} ref={skillsRef}>
      <div className={styles.wrapper}>
        <h1>Skills</h1>

        <div className={styles.cards}>
          {skills.map((skill) => (
            <Card
              key={skill.title}
              type="skill"
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
