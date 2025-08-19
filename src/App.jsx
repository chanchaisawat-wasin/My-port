import "./App.css";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import AboutMe from "./components/about_me.jsx";
import Skills from "./components/skills.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const options = {
    background: {
      color: { value: "#000000" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.3 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: "#00FF00" },
      opacity: { value: 0.3 },
      links: {
        color: "#00FF00",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 100,
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            backgroundColor: "#000000",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* <div className="p-4 fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div> */}
        <div className="pt-22 justify-items-center p-4">
          <Hero />
          <AboutMe />
          <Skills />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
