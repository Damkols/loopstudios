import React, { useEffect, useRef } from "react";
import "./Landing.scss";

const Landing = ({ timeline }) => {
  let landing_text = useRef(null);

  useEffect(() => {
    timeline.from(landing_text, {
      delay: 1.8,
      opacity: 0,
      delay: 0.8,
      x: -300,
      skewX: 10,
      stagger: {
        amount: 0.4,
      },
    });
  });
  return (
    <div className="landing">
      <div className="container" ref={(el) => (landing_text = el)}>
        <h1>
          Immersive <br /> Experiences <br /> That Deliver
        </h1>
      </div>
    </div>
  );
};

export default Landing;
