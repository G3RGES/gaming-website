/* eslint-disable no-unused-vars */
import React from "react";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import RecomendedGames from "./components/RecomendedGames";
import WhatsNew from "./components/WhatsNew";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <TrendingGames />
        <RecomendedGames />
        <WhatsNew />
        <Footer />
      </div>
    </>
  );
};

export default App;
