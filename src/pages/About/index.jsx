import styles from "./About.module.css";

const About = ({ aboutRef }) => {
  return (
    <div className={styles.About} ref={aboutRef}>
      About section
    </div>
  );
};

export default About;
