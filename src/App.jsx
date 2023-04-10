import { useRef } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Home homeRef={homeRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
