import React, { useCallback, useEffect, useState } from "react";
import "./VrPage.scss";
import Image from "../../assets/desktop/image-interactive.jpg";
import Image2 from "../../assets/mobile/image-interactive.jpg";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const VrPage = () => {
  const isBreakpoint = useMediaQuery(1025);

  // let text = useRef(null);
  // useEffect(() => {
  //   timeline.from(text, {
  //     duration: 1.8,
  //     delay: 1,
  //     x: 650,
  //     skewX: 10,
  //     opacity: 0,
  //     stagger: {
  //       amount: 0.7,
  //     },
  //   });
  // });

  return (
    <div className="vrpage">
      <div className="image">
        {isBreakpoint ? (
          <img src={Image2} alt="" />
        ) : (
          <img src={Image} alt="" />
        )}
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
