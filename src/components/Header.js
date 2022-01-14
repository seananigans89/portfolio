import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Header = () => {
  return (
    <nav className="navbar">
      <Link className="link" to="./">
        <div>
          {" "}
          <FeatherIcon icon="home" className="homeicon" />
        </div>
      </Link>
      <ul className="navlinks">
        <Link className="link" to="./projects">
          Projects
        </Link>
        <Link className="link" to="./about">
          About
        </Link>
        <Link className="link" to="./contact">
          Contact
        </Link>
        <a href="https://docs.google.com/document/d/15NabdQw4f3kfyhRGMT_R6WM6mmanpJ7wEany-MX061s/edit?usp=sharing"
        target='_blank' rel="noreferrer"><button className="resumebtn">Resume</button></a>
        
      </ul>
    </nav>
  );
};

export default Header;
