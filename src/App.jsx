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

const Header = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const menuItems = [
    { title: "Home", reference: homeRef },
    { title: "About", reference: aboutRef },
    { title: "Skills", reference: skillsRef },
    { title: "Projects", reference: projectsRef },
    { title: "Contact", reference: contactRef },
  ];

  const { darkMode, switchTheme } = useContext(ThemeContext);

  return (
    <div className="Header">
      <nav>
        <Logo />
        <Menu
          menuItems={menuItems}
          darkMode={darkMode}
          switchTheme={switchTheme}
        />
      </nav>
    </div>
  );
};

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

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
      />
      <Home homeRef={homeRef} contactRef={contactRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <ScrollToTopButton show={showScrollToTop} />
    </div>
  );
}

export default App;
