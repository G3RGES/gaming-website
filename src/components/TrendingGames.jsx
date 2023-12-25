import React from "react";

const TrendingGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white">
        <div className="container">
          <div className="flex flex-row justify-between items-center px-3">
            <h1 className=" font-bold text-2xl">Currently Trending Games</h1>
            <button
              className="bg-gray-400/50 text-white
             rounded-xl py-3 px-4 font-semibold"
            >
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingGames;
