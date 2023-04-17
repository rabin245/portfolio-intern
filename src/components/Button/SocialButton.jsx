import styles from "./Button.module.css";

const SocialButton = ({ icon, link }) => {
  return (
    <a
      className={styles.SocialButton}
      target="_blank"
      href={link}
      rel="noreferer"
    >
      {icon}
    </a>
  );
};

export default SocialButton;
