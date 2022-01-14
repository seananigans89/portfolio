import React from "react";
import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";

const Projects = () => {
  const sorted = [
    {
      id: 1,
      header: "Overview",
      description:
        "Sorted is an inventory management app specifically designed for keeping track of photo/video equipment. The user can input all of their gear with specific categories for easy sorting, and create multi-category kits to be shared with other users, facilitating a peer-to-peer equipment rental ecosystem.",
      image: "https://i.imgur.com/Qy0Ae4V.png",
    },
    {
      id: 2,
      header: "Lessons",
      description:
        "This was my first React Native project and I really enjoyed the experience. I think the best lesson from this build came in the area of UX design. The structured nature of React Native and the incredible open source support meant that there is almost always a component that will do what you need, it's just a matter of properly integrating it into the build.",
      image: "https://i.imgur.com/Qy0Ae4V.png",
    },
    {
      id: 3,
      header: "Next Step",
      description:
        "The next feature I would like to add is native camera functionality to enable barcode and QR code scanning.",
      image: "https://i.imgur.com/Qy0Ae4V.png",
    },
  ];
  const pokematch = [
    {
      id: 1,
      header: "Overview",
      description:
        "Pokematch is a classic matching memory game where the player flips over cards two at a time until all matching pairs are found.",
      image: "https://i.imgur.com/ozqwyMd.png",
    },
    {
      id: 2,
      header: "Lessons",
      description:
        "This was my first React project and I had a blast building it. One of the biggest hurdles was being able to randomly select 8 Pokemon from 151 before duplicating each one and shuffling them to form the grid. This project helped solidify my understanding of State in React.",
      image: "https://i.imgur.com/ozqwyMd.png",
    },
    {
      id: 3,
      header: "Next Step",
      description:
        "I'm working on adding functionality to change the grid size for a more challenging game, as well as selecting a specific generation of Pokemon.",
      image: "https://i.imgur.com/ozqwyMd.png",
    },
  ];
  return (
    <div className="cardcontent">
      <div className="cardblock1">
        <h1 className="projecttitle">Sorted</h1>
        <div className="proj1">
          <CardView
            items={sorted}
            activeColor="#000"
            imageHeight="350px"
            imageWidth="175px"
          />
        </div>
        <a
          className="repolink"
          href="https://github.com/seananigans89/frontend-seir-final-project"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="repo">Repo</h3>
        </a>
      </div>
      <div>
        <h1 className="projecttitle">Pokematch</h1>
        <CardView
          items={pokematch}
          activeColor="#000"
          imageHeight="350px"
          imageWidth="250px"
        />
      </div>
      <a
        className="repolink"
        href="https://github.com/seananigans89/pokematch"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="repo">Repo</h3>
      </a>
      <a
        href="https://seananigans89.github.io/pokematch/#/instructions"
        className="repolink"
        target="_blank"
        rel="noreferrer"
      >
        {/* <h3 className="repo">Play Me!</h3> */}
      </a>
      <div></div>
    </div>
  );
};

export default Projects;
