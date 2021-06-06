import React from "react";
import Tilt from "react-parallax-tilt";
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" style={{ height: 150, width: 150}}>
        <div>
          <h1>FACE APP</h1>
          {/* <img alt='logo' src={}/> */}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
