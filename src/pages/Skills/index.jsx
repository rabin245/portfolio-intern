import styles from "./Skills.module.css";

const Skills = ({ skillsRef }) => {
  return (
    <div className={styles.Skills} ref={skillsRef}>
      Skills section
    </div>
  );
};

export default Skills;
