/* eslint-disable no-unused-vars */
import React from "react";

// games
import Game1 from "../assets/game/game1.jpg";
import Game2 from "../assets/game/game4.jpg";
import Game3 from "../assets/game/game3.jpg";
import Character1 from "../assets/characters/character1.png";

// icons
import { FaFire } from "react-icons/fa";

const GameCardData = [
  {
    id: 1,
    title: "Freedom Fighters",
    image: Game1,
    followers: 150,
  },
  {
    id: 2,
    title: "Witcher 3",
    image: Game2,
    followers: 535,
  },
  {
    id: 3,
    title: "Assassin's Creed Origins",
    image: Game3,
    followers: 555,
  },
  {
    id: 4,
    title: "Freedom Fighters",
    image: Game1,
    followers: 150,
  },
  {
    id: 5,
    title: "Witcher 3",
    image: Game2,
    followers: 535,
  },
  {
    id: 6,
    title: "Assassin's Creed Origins",
    image: Game3,
    followers: 555,
  },
];

const TrendingGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white">
        <div className="container relative">
          {/* Header Section */}
          <div className="flex flex-row justify-between items-center px-3">
            <h1 className=" font-bold text-2xl z-20">
              Currently Trending Games
            </h1>
            <button
              className="bg-gray-400/50 text-white
             rounded-xl py-3 px-4 font-semibold"
            >
              View All
            </button>
          </div>

          {/* Games Section */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8 ">
              {/* Games Cards */}
              {GameCardData.map((game) => (
                <div
                  key={game.id}
                  className="bg-gray-600/20 rounded-lg text-center "
                >
                  <img
                    className="w-full h-[200px] object-contain pt-2 "
                    src={game.image}
                    alt={game.title}
                  />
                  <div className="">
                    <p className="">{game.title} </p>
                    {/* <p className=""> */}
                    <p className="flex items-center gap-1 justify-center">
                      <FaFire />
                      {game.followers}{" "}
                      <span className="text-tertiary">followers</span>{" "}
                    </p>
                    {/* </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* character png */}
          <img
            className="absolute top-0 left-[-7%] h-[340px] w-[] z-[9] overflow-y-hidden"
            src={Character1}
            alt="character_png"
          />
        </div>
      </section>
    </>
  );
};

export default TrendingGames;
