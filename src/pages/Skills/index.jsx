import SkillCard from "../../components/SkillCard";
import styles from "./Skills.module.css";

const Skills = ({ skillsRef }) => {
  const skills = [
    {
      title: "HTML",
      completed: 80,
    },
    {
      title: "CSS",
      completed: 70,
    },
    {
      title: "JavaScript",
      completed: 60,
    },
    {
      title: "Python",
      completed: 80,
    },
    {
      title: "React",
      completed: 60,
    },
    {
      title: "Node",
      completed: 60,
    },
  ];

  return (
    <div className={styles.Skills} ref={skillsRef}>
      <div className={styles.wrapper}>
        <h1>Skills</h1>

        <div className={styles.cards}>
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              completed={skill.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
