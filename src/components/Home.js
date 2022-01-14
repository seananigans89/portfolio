import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homecontainer">
      <div className="entermessage">
        <p>
          Hi, I'm Sean.
          <br />I build apps for mobile, web, and life.
        </p>
      </div>
      <Link to="./projects"><button  className="enterbtn">Enter</button></Link>
    </div>
  );
};

export default Home;
