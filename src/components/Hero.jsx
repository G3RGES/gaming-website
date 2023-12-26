import React from "react";

// image
import CoverImg from "../assets/hero/hero_cover.jpg";
import HeroImg from "../assets/hero/hero_png.png";

// icons
import { FaArrowRight } from "react-icons/fa6";

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
      <div className="min-h-[550px]  overflow-hidden" style={bgImage}>
        <div
          className="bg-primary/80 bg-gradient-to-t 
        from-primary from-10% to-transparent to-90%
        flex items-center min-h-[550px]"
        >
          <div className="container ">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* content */}
              <div className="flex flex-col justify-center items-start">
                <p className="text-lg text-purple-500 font-semibold">
                  Discover Games You Will Love
                </p>
                <h1 className="text-white font-semibold text-6xl">
                  Read About Games You Love
                </h1>
                <button
                  className="mt-8 bg-gradient-to-r
                from-purple-800 to-tertiary rounded-2xl 
                py-2 px-4 text-white font-semibold flex 
                flex-row items-center justify-center gap-3 text-lg"
                >
                  Start Exploring
                  <FaArrowRight className="hover:translate-x-1 duration-300 w-8" />
                </button>
              </div>

              {/* image  */}
              <div className="">
                <img className="" src={HeroImg} alt="hero_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
