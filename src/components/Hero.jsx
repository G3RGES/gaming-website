import React from "react";

// image
import CoverImg from "../assets/hero/hero_cover.jpg";
import HeroImg from "../assets/hero/hero_png.png";

const bgImage = {
  backgroundImage: `url(${CoverImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <>
      <div className="" style={bgImage}>
        <div className="container">
          {/* content */}
          <div className=""></div>

          <div className="">
            <img className="" src={HeroImg} alt="hero_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
