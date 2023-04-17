import styles from "./Home.module.css";
import Image from "../../assets/images/banner-image.png";
import { Button, DownloadButton, SocialButton } from "../../components/Button";
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import DownloadIcon from "../../assets/icons/DownloadIcon";

const Home = ({ homeRef, contactRef }) => {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  const socials = [
    {
      icon: <GithubIcon />,
      link: "https://github.com/rabin245/",
    },
    {
      icon: <LinkedinIcon />,
      link: "https://www.linkedin.com/in/rabindra-baisnab",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/_zaxiya",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/_zaxiya/",
    },
  ];

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
            <DownloadButton>
              <>
                <span>Download CV</span>
                <DownloadIcon />
              </>
            </DownloadButton>
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
