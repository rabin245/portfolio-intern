import styles from "./MenuItem.module.css";

const MenuItem = ({ title, reference }) => {
  // scrolls to the reference element
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  return (
    <div
      className={styles.link}
      onClick={() => {
        console.log(reference);
        scrollToRef(reference);
      }}
    >
      {title}
    </div>
  );
};

export default MenuItem;
