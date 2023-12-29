import { useRef } from "react";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import styles from "./Card.module.css"; // Add the appropriate module style file
import MapIcon from "../../assets/icons/MapIcon";

const ExperienceAccordionCard = ({
  position,
  location,
  office,
  date,
  office_site,
  link,
  description,
  expanded,
  onClick,
}) => {
  const panelRef = useRef(null);

  return (
    <div className={styles.accordion_item}>
      <div
        className={`${styles.accordion_title} ${
          expanded ? styles.expanded : ""
        }`}
        onClick={onClick}
      >
        <span className={styles.position}>
          {position} @ {office}
          <span className={styles.title_date}> ( {date} )</span>
        </span>
        <div className={styles.dateInfo}>
          <p className={styles.date}>{date}</p>
          <div
            className={`${styles.accordion_icon} ${
              expanded ? styles.opened : ""
            }`}
          >
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      <div
        className={styles.accordion_description}
        style={{
          maxHeight: expanded ? `${panelRef.current?.scrollHeight}px` : "0",
        }}
        ref={panelRef}
      >
        <div className={styles.description_title}>
          <MapIcon width={20} height={20} strokeWidth={1.5} />
          <span className={styles.title_location}>{location}</span>
          <a className={styles.title_link} href={link} target="_blank">
            {office_site}
          </a>
        </div>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceAccordionCard;
