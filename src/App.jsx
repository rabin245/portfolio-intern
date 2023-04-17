import { useContext, useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { ThemeContext } from "./context/ThemeContext";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { ScrollToTopButton } from "./components/Button";
import HomeIcon from "./assets/icons/HomeIcon";
import UserIcon from "./assets/icons/UserIcon";
import SkillsIcon from "./assets/icons/SkillsIcon";
import ProjectIcon from "./assets/icons/ProjectIcon";
import ContactIcon from "./assets/icons/ContactIcon";

const Header = ({
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  isMenuOpen,
  toggleMenu,
}) => {
  const menuItems = [
    { title: "Home", reference: homeRef, icon: <HomeIcon /> },
    { title: "About", reference: aboutRef, icon: <UserIcon /> },
    { title: "Skills", reference: skillsRef, icon: <SkillsIcon /> },
    { title: "Projects", reference: projectsRef, icon: <ProjectIcon /> },
    { title: "Contact", reference: contactRef, icon: <ContactIcon /> },
  ];

  const { darkMode, switchTheme } = useContext(ThemeContext);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Header">
      <nav>
        <Logo />
        <Menu
          menuItems={menuItems}
          darkMode={darkMode}
          switchTheme={switchTheme}
          isOpen={isMenuOpen}
          viewportWidth={viewportWidth}
          toggleMenu={toggleMenu}
        />
      </nav>
    </div>
  );
};

const Footer = () => {
  return <div className="Footer">&copy; All rights reserved.</div>;
};

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Home homeRef={homeRef} contactRef={contactRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      {!isMenuOpen && <ScrollToTopButton show={showScrollToTop} />}
      <Footer />
    </div>
  );
}

export default App;
