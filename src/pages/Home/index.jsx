import styles from "./Home.module.css";
import Image from "../../assets/images/banner-image.png";
import { Button, SocialButton } from "../../components/Button";
import DownloadIcon from "../../assets/icons/DownloadIcon";
import data from "../../assets/data/data.json";
import { useState, useEffect } from "react";

const Home = ({ homeRef, contactRef }) => {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const loadSocials = async () => {
      const socials = await Promise.all(
        data.socials.map(async (social, index) => {
          const IconComponent = (
            await import(`../../assets/icons/${social.icon}.jsx`)
          ).default;
          return {
            ...social,
            icon: <IconComponent key={index} />,
          };
        })
      );
      setSocials(socials);
    };

    loadSocials();
  }, []);

  return (
    <div className={styles.Home} ref={homeRef}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>
            Hi, I'm <span className={styles.name}>Rabindra Baisnab</span>
          </h1>
          <p>
            Full Stack Web Developer with a passion for building responsive
            websites and web applications.
          </p>
          <div className={styles.socials}>
            {socials.map((info) => (
              <SocialButton key={info.link} icon={info.icon} link={info.link} />
            ))}
          </div>
          <div className={styles.buttons}>
            <Button handleClick={() => scrollToRef(contactRef)}>
              <span>Hire me</span>
            </Button>
            <Button type="download">
              <>
                <span>Download CV</span>
                <DownloadIcon />
              </>
            </Button>
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
