import React from "react";

export default function Home() {
  return (
    <div style={{ marginLeft: "2rem" }}>
      <div className="heading">
        I'm <span style={{ color: "#83dfe2" }}>Tanay</span> Van
      </div>
      <div className="sub-heading">Full Stack Web Developer</div>
      <div className="button-container" style={{ display: "flex" }}>
        <a className="button" href="#projects">
          View Projects
        </a>
        <a
          className="button"
          href="https://drive.google.com/uc?export=download&id=1TLSIQrhUP8RdTtZ2dk0k1F8tWFqsQYrN"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
