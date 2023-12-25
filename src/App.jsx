/* eslint-disable no-unused-vars */
import React from "react";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import RecomendedGames from "./components/RecomendedGames";

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <TrendingGames />
        <RecomendedGames />
      </div>
    </>
  );
};

export default App;
