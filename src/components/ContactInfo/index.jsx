import styles from "./ContactInfo.module.css";

const ContactInfo = ({ icon, title, link, linkText }) => {
  return (
    <p className={styles.infoDiv}>
      {icon}
      <div className={styles.info}>
        <span>{title}</span>
        <a href={link} target="_blank" rel="noreferrer">
          {linkText}
        </a>
      </div>
    </p>
  );
};

export default ContactInfo;
