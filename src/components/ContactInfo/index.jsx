import styles from "./ContactInfo.module.css";

const ContactInfo = ({ icon, title, link, linkText }) => {
  return (
    <div className={styles.infoDiv}>
      {icon}
      <div className={styles.info}>
        <span>{title}</span>
        <a href={link} target="_blank" rel="noreferrer">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
