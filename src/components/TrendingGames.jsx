/* eslint-disable no-unused-vars */
import React from "react";

// games
import Game1 from "../assets/game/game1.jpg";
import Game2 from "../assets/game/game2.jpg";
import Game3 from "../assets/game/game3.jpg";

const GameCardData = [
  {
    id: 1,
    title: "PUBG",
    image: Game1,
    followers: 35,
  },
  {
    id: 2,
    title: "Resident Evil 4",
    image: Game2,
    followers: 135,
  },
  {
    id: 3,
    title: "Game Title2",
    image: Game3,
    followers: 35,
  },
  {
    id: 4,
    title: "PUBG",
    image: Game1,
    followers: 35,
  },
  {
    id: 5,
    title: "Resident Evil 4",
    image: Game2,
    followers: 135,
  },
  {
    id: 6,
    title: "Game Title5",
    image: Game3,
    followers: 55,
  },
];

const TrendingGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white">
        <div className="container">
          {/* Header Section */}
          <div className="flex flex-row justify-between items-center px-3">
            <h1 className=" font-bold text-2xl">Currently Trending Games</h1>
            <button
              className="bg-gray-400/50 text-white
             rounded-xl py-3 px-4 font-semibold"
            >
              View All
            </button>
          </div>

          {/* Games Section */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
              {/* Games Cards */}
              {GameCardData.map((game) => (
                <div key={game.id} className="">
                  <img className="" src={game.image} alt={game.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingGames;
