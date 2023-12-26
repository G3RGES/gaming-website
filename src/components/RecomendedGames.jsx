/* eslint-disable no-unused-vars */
import React from "react";

// games
import Character2 from "../assets/characters/character2.png";
import Game3 from "../assets/game/game3.jpg";
import Game4 from "../assets/game/game4.jpg";
import Game5 from "../assets/game/game5.jpg";
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
             sm:grid-rows-2 gap-4 mt-8"
            >
              <div
                className="sm:row-span-2 sm:col-span-2 min-h-[300px]
               rounded-lg "
                style={game1Cover}
              >
                1
              </div>
              <div className="sm:row-span-1 rounded-lg" style={game2Cover}>
                2
              </div>
              <div className="sm:row-span-1 rounded-lg" style={game3Cover}>
                3
              </div>
            </div>
          </div>

          {/* Character PNG */}
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
