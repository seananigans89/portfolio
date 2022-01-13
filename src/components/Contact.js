import React from "react";
import FeatherIcon from "feather-icons-react";

const Contact = () => {
  return (
    <div className="contactcontainer">
      <div className="contact">
        <p>
          Get In Touch
          <br />Drop me a line and let's get started on your next project!
        </p>
      </div>
      <a href="mailto:seanstory@gmail.com">
        <button className="contactbtn"><FeatherIcon icon='mail' size={33}/></button>
      </a>
    </div>
  );
};

export default Contact;
