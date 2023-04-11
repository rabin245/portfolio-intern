import styles from "./About.module.css";

const About = ({ aboutRef }) => {
  return (
    <div className={styles.About} ref={aboutRef}>
      <div className={styles.wrapper}>
        <div className={styles.experience}>
          <h2>1+</h2>
          <span>years experience in web development</span>
        </div>

        <div className={styles.description}>
          <div className={styles.content}>
            <span>Full Stack Web Developer</span> specialized in ReactJS and
            NodeJS
          </div>
          <div className={styles.cards}>cards</div>
        </div>
      </div>
    </div>
  );
};

export default About;
