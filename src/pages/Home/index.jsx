import Card from "../../components/Card";
import styles from "./Home.module.css";

const Home = ({ homeRef }) => {
  return (
    <div className={styles.Home} ref={homeRef}>
      Home page
      <Card />
    </div>
  );
};

export default Home;
