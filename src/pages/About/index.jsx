import { useState } from "react";
import styles from "./About.module.css";
import WebIcon from "../../assets/icons/WebIcon";
import { Card, ExperienceAccordionCard } from "../../components/Card";
import ServerIcon from "../../assets/icons/ServerIcon";
import DevicesIcon from "../../assets/icons/DevicesIcon";
import { experience } from "../../assets/data/data.json";

const About = ({ aboutRef }) => {
  const cards = [
    { title: "Front End Developer", icon: <WebIcon /> },
    { title: "Back End Developer", icon: <ServerIcon /> },
    { title: "Responsive Web Design", icon: <DevicesIcon /> },
  ];

  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    setExpandedItem((prevItem) => (prevItem === index ? null : index));
  };

  return (
    <div className={styles.About} ref={aboutRef}>
      <div className={styles.wrapper}>
        <div className={styles.experience}>
          <h2>&lt;1</h2>
          <span>years experience in web development</span>
        </div>

        <div className={styles.description}>
          <div className={styles.content}>
            <p className={styles.content_header}>
              <span>Full Stack Web Developer</span> specialized in ReactJS and
              NodeJS
            </p>
            <div className={styles.accordion_list}>
              <hr className={styles.hr} />
              {experience.map((item, index) => (
                <ExperienceAccordionCard
                  key={index}
                  position={item.position}
                  location={item.location}
                  office={item.office}
                  date={item.date}
                  office_site={item.office_site}
                  link={item.link}
                  description={item.description}
                  expanded={expandedItem === index}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
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
