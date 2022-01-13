import React from "react";
import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";

const Projects = () => {
  const sorted = [
    {
      id: 1,
      header: "Overview",
      description:
        "Sorted is an inventory management app specifically designed for keeping track of photo/video equipment.",
      image: "https://i.imgur.com/Qy0Ae4V.png",
    },
    {
      id: 2,
      header: "Lessons",
      description: "I learned a great deal building my first React Native App.",
      image: "https://i.imgur.com/Qy0Ae4V.png",
    },
    {
      id: 3,
      header: "More Info",
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
        "Pokématch is a classic matching memory game where the player flips over cards two at a time until all matching pairs are found.",
      image: "https://i.imgur.com/ozqwyMd.png",
    },
    {
      id: 2,
      header: "Lessons",
      description: "I learned a great deal building my first React Native App.",
      image: "https://i.imgur.com/ozqwyMd.png",
    },
    {
      id: 3,
      header: "More Info",
      description:
        "The next feature I would like to add is native camera functionality to enable barcode and QR code scanning.",
      image: "https://i.imgur.com/ozqwyMd.png",
    },
  ];
  return (
    <div className="cardcontent">
      <div className="cardblock1">
        <h1 className="projecttitle">Sorted</h1>
        <CardView
          items={sorted}
          activeColor="#000"
          imageHeight="350px"
          imageWidth="175px"
        />
      </div>
      <div className="cardblock2">
        <h1 className="projecttitle">Pokématch</h1>
        <CardView
          items={pokematch}
          activeColor="#000"
          imageHeight="350px"
          imageWidth="250px"
        />
      </div>
    </div>
  );
};

export default Projects;
