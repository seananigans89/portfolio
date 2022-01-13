import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homecontainer">
      <div className="entermessage">
        <p>
          Hi, I'm Sean.
          <br />I make things for the web.
        </p>
      </div>
      <Link className="link" to="./projects"><button  className="enterbtn">Enter</button></Link>
    </div>
  );
};

export default Home;
