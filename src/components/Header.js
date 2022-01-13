import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";


const Header = () => {
  return (
    <nav className="navbar">
      <Link className="link" to='./'><div> <FeatherIcon icon='home' className='homeicon'/></div></Link>
      <ul className="navlinks">
        <Link className="link" to="./projects">Projects</Link>
        <Link className="link" to="./about">About</Link>
        <Link className="link" to="./contact">Contact</Link>
        <button className="resumebtn">Resume</button>
      </ul>
    </nav>
  );
};

export default Header;
