import React from "react";
import Card from "../components/Card";

export default function Projects() {
  return (
    <div className="section project" id="project">
      <h1 className="heading">Projects</h1>
      <div className="project-cards">
        <Card
          title="E-COMMERCE USING MERN STACK WITH PAYMENT"
          content="A website where one can easily buy and pay online along with
admin panel for necessary CRUD opeartions and user
authentication"
        />
        <Card
          title="SOCIAL NETWORK USING MERN STACK"
          content="A Website with proper authentication where user can follow each
other and can post tweets and able to see tweets of people they
are following"
        />
      </div>
      <div className="project-cards">
        <Card
          title="INSTAGRAM CLONE IN REACT NATIVE USING EXPO AND FIREBASE"
          content="An app with proper authentication where user can post photos
,set their profile picture , they can follow each other and see their
post on feed.
"
        />
        <Card
          title="REMOTE MOBILE ACCESS ( ACCESS YOUR PHONE FROM ANYWHERE
WITHOUT INTERNET) USING JAVA IN ANDROID STUDIO"
          content="An Offline app which solves all the issues all you need to do is
send an SMS from any basic phone with the passcode you set on
your Android app
"
        />
      </div>
    </div>
  );
}
