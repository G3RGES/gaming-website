/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

// icons
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { LiaPlaystation } from "react-icons/lia";

const WhatsNew = () => {
  return (
    <>
      <div className="py-10 bg-primary text-white">
        <div className="container ">
          {/* Header Section */}
          <div className="flex flex-row justify-between items-center px-3">
            <h1 className=" font-bold text-2xl">What's New</h1>
            <div className="flex gap-2 items-center">
              <div className="flex gap-4 items-center text-2xl">
                <IoLogoAndroid />
                <FaApple />
                <FaWindows />
                <LiaPlaystation />
              </div>
              {/* //* BUTTON IS USED IN MORE THAN ONE COMPONENT SO IT SHOULD BE MADE INTO
              //* A DIFFERENT COMPONENT ON ITS OWN AND BE REUSABLE INSTEAD OF COPYING AND
              //* PASTING IT OVER AND OVER*/}
              <button
                className="bg-gray-400/50 text-white
              rounded-xl py-3 px-4 font-semibold z-10"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
