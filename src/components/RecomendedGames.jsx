/* eslint-disable no-unused-vars */
import React from "react";

// games
import Character2 from "../assets/characters/character2.png";

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
