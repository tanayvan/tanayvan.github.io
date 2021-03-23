import React from "react";

export default function Experience() {
  return (
    <div className="experience section" id="experience">
      <h1 className="heading">Where I’ve Worked</h1>
      <p>
        <i class="fas fa-caret-right" style={{ marginRight: "5px" }}></i>Back
        End Developer at Olcademy
      </p>
      <p style={{ marginLeft: "25px" }}>Feb 2021 - Present</p>
      <ul>
        <li>
          <p>
            <i class="fas fa-caret-right" style={{ marginRight: "5px" }}></i>
            Developed Notification System for User in MongoDb{" "}
          </p>
        </li>
        <li>
          <p>
            <i class="fas fa-caret-right" style={{ marginRight: "5px" }}></i>
            Developed Autocomplete Search using Mongo Search Index and
            Aggeragate Pipeline
          </p>
        </li>
        <li>
          <p>
            <i class="fas fa-caret-right" style={{ marginRight: "5px" }}></i>
            Designed Various Schema in MongoDb
          </p>
        </li>
        <li>
          <p>
            <i class="fas fa-caret-right" style={{ marginRight: "5px" }}></i>
            Developed Share and Comments functionality for Blogs{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}
