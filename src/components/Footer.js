import React from "react";
import FeatherIcon from "feather-icons-react";
const Footer = () => {
  return (
    <div className="footercontainer">
      <footer className="footer">
        <a href="https://www.instagram.com/theseanstory/" target="_blank" rel="noreferrer">
          <FeatherIcon icon="instagram" className={"icon"} />
        </a>
        <a href="https://www.linkedin.com/in/sean-story/" target="_blank" rel="noreferrer">
          <FeatherIcon icon="linkedin" className={"icon"} />
        </a>
        <a href="https://github.com/seananigans89" target="_blank" rel="noreferrer">
          <FeatherIcon icon="github" className={"icon"} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
