import React from "react";
import "./VrPage.scss";
import Image from "../../assets/desktop/image-interactive.jpg";

const VrPage = () => {
  return (
    <div className="vrpage">
      <div className="image">
        <img src={Image} alt="" />
      </div>
      <div className="text">
        <h1>
          The Leader in <br /> Interactive VR
        </h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through didgital
          experiences that bind to their brand
        </p>
      </div>
    </div>
  );
};

export default VrPage;
