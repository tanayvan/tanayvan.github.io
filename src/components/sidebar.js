import React from "react";
import url from "../assests/profile.jpg";
import Scrollspy from "react-scrollspy";

export default function Sidebar({ active }) {
  const style = active
    ? "bg-color sidebar-container sidebar-active"
    : "bg-color sidebar-container sidebar";
  return (
    <div className={style}>
      <div className="sidebar-profile">
        <div className="" style={{ margin: "1.3rem" }}>
          <img
            src={url}
            alt=""
            style={{ borderRadius: "50%", margin: "10px 0" }}
          />

          <h1 style={{ fontWeight: "400" }}>Tanay Van</h1>
          <h3 style={{ fontWeight: "400" }}>Full Stack Web Developer</h3>
        </div>
      </div>
      <div className="sidebar-links">
        <ul>
          <Scrollspy
            items={["home", "about", "experience", "project"]}
            currentClassName="active"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>
          </Scrollspy>
          <a
            style={{
              fontSize: "1rem",
              position: "absolute",
              bottom: "0",
              marginLeft: "1.1rem",
            }}
            href="mailto:tanayvan258@gmail.com"
          >
            tanayvan258@gmail.com
          </a>
        </ul>
      </div>
    </div>
  );
}
