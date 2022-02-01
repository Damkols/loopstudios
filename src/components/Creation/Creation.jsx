import React, { useCallback, useEffect, useState } from "react";
import "./Creation.scss";
import Img1 from "../../assets/mobile/image-deep-earth.jpg";
import Img2 from "../../assets/mobile/image-night-arcade.jpg";
import Img3 from "../../assets/mobile/image-soccer-team.jpg";
import Img4 from "../../assets/mobile/image-grid.jpg";
import Img5 from "../../assets/mobile/image-from-above.jpg";
import Img6 from "../../assets/mobile/image-pocket-borealis.jpg";
import Img7 from "../../assets/mobile/image-curiosity.jpg";
import Img8 from "../../assets/mobile/image-fisheye.jpg";

import ImgD1 from "../../assets/desktop/image-deep-earth.jpg";
import ImgD2 from "../../assets/desktop/image-night-arcade.jpg";
import ImgD3 from "../../assets/desktop/image-soccer-team.jpg";
import ImgD4 from "../../assets/desktop/image-grid.jpg";
import ImgD5 from "../../assets/desktop/image-from-above.jpg";
import ImgD6 from "../../assets/desktop/image-pocket-borealis.jpg";
import ImgD7 from "../../assets/desktop/image-curiosity.jpg";
import ImgD8 from "../../assets/desktop/image-fisheye.jpg";

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

const Creation = () => {
  const Images = [
    {
      source: Img1,
      id: 1,
    },
    {
      source: Img2,
      id: 2,
    },
    {
      source: Img3,
      id: 3,
    },
    {
      source: Img4,
      id: 4,
    },
    {
      source: Img5,
      id: 5,
    },
    {
      source: Img6,
      id: 6,
    },
    {
      source: Img7,
      id: 7,
    },
    {
      source: Img8,
      id: 8,
    },
  ];

  const ImagesD = [
    {
      source: ImgD1,
      id: 1,
    },
    {
      source: ImgD2,
      id: 2,
    },
    {
      source: ImgD3,
      id: 3,
    },
    {
      source: ImgD4,
      id: 4,
    },
    {
      source: ImgD5,
      id: 5,
    },
    {
      source: ImgD6,
      id: 6,
    },
    {
      source: ImgD7,
      id: 7,
    },
    {
      source: ImgD8,
      id: 8,
    },
  ];

  const isBreakpoint = useMediaQuery(1025);

  return (
    <div className="creation">
      <h1>Our Creations</h1>
      <div className="grid">
        {isBreakpoint
          ? Images.map((image) => (
              <div className="imgContainer" key={image.id}>
                <img src={image.source} alt="" />
              </div>
            ))
          : ImagesD.map((imaged) => (
              <div className="imgContainer" key={imaged.id}>
                <img src={imaged.source} alt="" />
              </div>
            ))}
      </div>
      <button>See All</button>
    </div>
  );
};

export default Creation;
