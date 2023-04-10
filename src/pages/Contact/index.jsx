import styles from "./Contact.module.css";

const Contact = ({ contactRef }) => {
  return (
    <div className={styles.Contact} ref={contactRef}>
      Contact page
    </div>
  );
};

export default Contact;
