import styles from "./About.module.css";
import WebIcon from "../../assets/icons/WebIcon";
import { Card } from "../../components/Card";
import ServerIcon from "../../assets/icons/ServerIcon";
import DevicesIcon from "../../assets/icons/DevicesIcon";

const About = ({ aboutRef }) => {
  const cards = [
    { title: "Front End Developer", icon: <WebIcon /> },
    { title: "Back End Developer", icon: <ServerIcon /> },
    { title: "Response Web Design", icon: <DevicesIcon /> },
  ];

  return (
    <div className={styles.About} ref={aboutRef}>
      <div className={styles.wrapper}>
        <div className={styles.experience}>
          <h2>&lt;1</h2>
          <span>years experience in web development</span>
        </div>

        <div className={styles.description}>
          <div className={styles.content}>
            <span>Full Stack Web Developer</span> specialized in ReactJS and
            NodeJS
          </div>
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <Card key={index} type="about" {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
