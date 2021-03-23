import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import particlesConfig from "./config/particleConfig";
import Sidebar from "./components/sidebar";
import { useMediaQuery } from "react-responsive";

import About from "./screens/About";
import Experience from "./screens/Experience";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Projects from "./screens/Projects";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = useState(!isTabletOrMobile);
  return (
    <>
      {isTabletOrMobile && <Navbar isOpen={open} setOpen={setOpen} />}
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: -1,
          left: 0,
          top: 0,
        }}
      >
        <Particles
          height="100vh"
          width="100%"
          params={particlesConfig}
          style={{ backgroundColor: "#121212", overflow: "hidden" }}
        />
      </div>

      {<Sidebar active={open} />}

      <main className="main">
        <div className="home" id="home">
          <Home />
        </div>
        <div className="about" id="about">
          <About />
        </div>
        <div className="experience" id="experience">
          <Experience />
        </div>
        <div className="projects" id="projects">
          <Projects />
        </div>
      </main>
    </>
  );
}

export default App;
