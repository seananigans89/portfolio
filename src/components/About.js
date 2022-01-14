import React from "react";
import { matchPath } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutcontainer">
      <img src="https://i.imgur.com/jtSCWqA.jpg"></img>
      <div className="abouttext"><p >
        After spending most of my adult life taking photos, recording music, and
        editing video for a living I decided to take the plunge into the
        software development world. There are a lot of commonalities between
        these two fields, but I think what draws me to both of them is the
        ability to communicate ideas, concepts, and stories in an inspiring and
        entertaining way.
      </p>
      <p>
        Whether it’s editing a documentary interview to convey deep emotion, or
        writing an app that teaches the user a new language, the tools that we
        have to facilitate the passage of information are simply astounding. It
        sounds very cheesy to say that the only limit is your own imagination,
        but in this case it certainly rings true.
      </p>
      <p>
        I strive to write concise, efficient applications that will help the people around
        me better communicate, interact with, and understand the world we all
        share.
      </p></div>
      
    </div>
  );
};

export default About;
