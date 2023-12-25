import React from "react";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <TrendingGames />
      </div>
    </>
  );
};

export default App;
