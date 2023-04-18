import { Card } from "../../components/Card";
import styles from "./Skills.module.css";
import data from "../../assets/data/data.json";
import { useEffect, useState } from "react";

const Skills = ({ skillsRef }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadSkills = async () => {
      const skills = await Promise.all(
        data.skills.map(async (skill, index) => {
          const IconComponent = (
            await import(`../../assets/icons/${skill.icon}.jsx`)
          ).default;
          return {
            ...skill,
            icon: <IconComponent key={index} />,
          };
        })
      );
      setSkills(skills);
    };

    loadSkills();
  }, []);

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
