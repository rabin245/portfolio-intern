import styles from "./Home.module.css";

const Home = ({ homeRef }) => {
  return (
    <div className={styles.Home} ref={homeRef}>
      Home page
    </div>
  );
};

export default Home;
