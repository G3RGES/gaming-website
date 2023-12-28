/* eslint-disable react/no-unescaped-entities */
import React from "react";

const WhatsNew = () => {
  return (
    <>
      <div className="py-10 bg-primary text-white">
        <div className="container ">
          {/* Header Section */}
          <div className="flex flex-row justify-between items-center px-3">
            <h1 className=" font-bold text-2xl">What's New</h1>
            <button
              className="bg-gray-400/50 text-white
            rounded-xl py-3 px-4 font-semibold z-10"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
