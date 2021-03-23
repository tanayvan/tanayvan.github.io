import React from "react";

export default function About() {
  return (
    <div className="about section">
      <h1 className="heading">About Me</h1>
      <p>Hey, I'm Tanay Van. a software engineer based in India</p>
      <p>
        I love creating ideas to realities that live on the internet, whether
        that be websites, applications, or anything in between. My goal is to
        always build things in an optimal and efficient way.
      </p>
      <p>Here are a few technologies I've been working with recently:</p>
      <div className="skills">
        <ul>
          <li>
            <i class="fas fa-caret-right"></i>
            Javascript
          </li>
          <li>
            <i class="fas fa-caret-right"></i>
            NodeJs
          </li>
          <li>
            <i class="fas fa-caret-right"></i>
            MongoDb
          </li>
          <li>
            <i class="fas fa-caret-right"></i>
            React
          </li>
        </ul>
        <ul>
          <li>
            <i class="fas fa-caret-right"></i>
            HTML & CSS
          </li>
          <li>
            <i class="fas fa-caret-right"></i>
            Firebase
          </li>
          <li>
            <i class="fas fa-caret-right"></i>
            React Native
          </li>
          <li>
            <i class="fas fa-caret-right"></i>
            Next Js
          </li>
        </ul>
      </div>
    </div>
  );
}
