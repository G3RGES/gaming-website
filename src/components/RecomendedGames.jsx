/* eslint-disable no-unused-vars */
import React from "react";

// games
//* NOT ALL OF THEM ARE NEEDED BUT IMPORTED TO SEE WHICH FITS BEST
import Character2 from "../assets/characters/character2.png";
import Game3 from "../assets/game/game3.jpg";
import Game4 from "../assets/game/game4.jpg";
import Game5 from "../assets/game/game5.jpg";
import Game6 from "../assets/game/game6.jpg";
import Hero1 from "../assets/hero/hero1.jpg";
import Hero2 from "../assets/hero/hero2.jpg";
import Hero3 from "../assets/hero/hero3.jpg";
import Hero4 from "../assets/hero/hero4.jpg";
import Hero5 from "../assets/hero/hero5.jpg";

const game1Cover = {
  backgroundImage: `url(${Hero4})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "350px",
};
const game2Cover = {
  backgroundImage: `url(${Hero1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const game3Cover = {
  backgroundImage: `url(${Hero5})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const RecomendedGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white">
        <div className="container relative">
          {/* Header Section */}
          <div className="flex flex-row justify-between items-center px-3">
            <h1 className=" font-bold text-2xl">Recomended Articles</h1>
            <button
              className="bg-gray-400/50 text-white
            rounded-xl py-3 px-4 font-semibold z-10"
            >
              View All
            </button>
          </div>
          {/* Games Articles Grid */}
          <div className="relative z-10">
            <div
              className="grid grid-cols-1 sm:grid-cols-3
             sm:grid-rows-2 gap-4 mt-8 "
            >
              <div
                className="sm:row-span-2 sm:col-span-2 min-h-[300px]
               rounded-lg relative"
                style={game1Cover}
              >
                <div className="bg-black/30 h-full w-full rounded-lg">
                  <div className="absolute bottom-0 left-0 w-full ">
                    <div
                      className="
                   flex justify-center items-center gap-4 
                   bg-gradient-to-t from-primary to-transparent"
                    >
                      <div className="">
                        <img
                          className="h-[135px]
                        min-w-[106px] object-cover rounded-tr-lg rounded-bl-lg "
                          src={Game5}
                          alt="EAFC"
                        />
                      </div>
                      <div className="">
                        <h1 className="font-semibold  ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque rhoncus semper semper. Quisque rhoncus
                          semper semper.
                        </h1>
                        <p className="text-sm text-white/80">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* //* image */}
                  {/* <img
                  className="absolute left-0 bottom-0 h-[135px]
                   w-[100px] object-cover rounded-tr-md"
                  src={Game5}
                /> */}
                </div>
              </div>

              <div
                className="sm:row-span-1 rounded-lg relative"
                style={game2Cover}
              >
                <div className="bg-black/30 h-full w-full rounded-lg">
                  <div className="absolute bottom-0 left-0 w-full ">
                    <div
                      className="
                   flex justify-center items-center gap-4
                   bg-gradient-to-t from-primary to-transparent"
                    >
                      <div className="">
                        <img
                          className="h-[110px]
                        min-w-[80px] object-cover rounded-tr-lg rounded-bl-lg"
                          src={Game3}
                          alt="AC_Origins"
                        />
                      </div>
                      <div className="">
                        <h1 className="font-semibold  ">
                          Lorem ipsum dolor sit amet, elit. dolor sit
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/*//*  image */}
                  {/* <img
                  className="absolute left-0 bottom-0 h-[90px]  object-cover rounded-tr-md"
                  src={Game3}
                /> */}
                </div>
              </div>
              <div
                className="sm:row-span-1 rounded-lg relative"
                style={game3Cover}
              >
                <div className="bg-black/30 h-full w-full rounded-lg">
                  <div className="absolute bottom-0 left-0 w-full ">
                    <div
                      className="
                   flex justify-center items-center gap-4
                   bg-gradient-to-t from-primary to-transparent"
                    >
                      <div className="">
                        <img
                          className="h-[110px]
                        min-w-[80px] object-cover rounded-tr-lg rounded-bl-lg"
                          src={Game6}
                          alt="COD_MW2"
                        />
                      </div>
                      <div className="">
                        <h1 className="font-semibold  ">
                          Lorem ipsum dolor sit amet, Quisque elit
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/*//*  image */}
                  {/* <img
                  className="absolute left-0 bottom-0 h-[90px]  object-cover rounded-tr-md"
                  src={Game6}
                /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Character PNG */}

          {/*//*  image */}
          <img
            className="absolute top-0 right-[-3%] h-[340px] w-[] z-[9] "
            src={Character2}
            alt="character_png"
          />
        </div>
      </section>
    </>
  );
};

export default RecomendedGames;
