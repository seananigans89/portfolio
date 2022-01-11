import React from "react";
import FeatherIcon from "feather-icons-react";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
            <a href='https://www.google.ca/'>
          <FeatherIcon icon="instagram" className={'icon'} />
            </a>
          <FeatherIcon icon="linkedin" className={'icon'}/>
          <FeatherIcon icon="github" className={'icon'}/>

      </footer>
    </div>
  );
};

export default Footer;
