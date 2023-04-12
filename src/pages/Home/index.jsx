import styles from "./Home.module.css";
import Image from "../../assets/images/banner-image.png";
import { Button } from "../../components/Button";

const Home = ({ homeRef, contactRef }) => {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  return (
    <div className={styles.Home} ref={homeRef}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>
            Hi, I'm <span className={styles.name}>Rabindra Baisnab</span>
          </h1>
          <p>
            Full Stack Web Developer with a passion for building responsive
            websites and web applications specialized in React and Node.
          </p>
          <div>
            <Button handleClick={() => scrollToRef(contactRef)}>Hire me</Button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={Image} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
