/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

// icons
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { LiaPlaystation } from "react-icons/lia";
import { FaHeartbeat } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

// images
import Game1 from "../assets/game/game2.jpg";
import Game2 from "../assets/game/game1.jpg";
import Game3 from "../assets/game/game3.jpg";
import Game4 from "../assets/game/game4.jpg";
import Game5 from "../assets/game/game5.jpg";
import Game6 from "../assets/game/game6.jpg";
import WhatsNewCard from "./WhatsNewCard";

const WhatsNewData = [
  {
    image: Game3,
    title: "AC:Origins Lorem ipsum, dolor sit amet dolor sit amet consectetur",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, doloremque beatae quas officia nihil consequuntur?",
    icon: <FaWindows />,
  },
  {
    image: Game2,
    title:
      "Freedom Fighters Lorem dolor sit amet ipsum, dolor sit amet consectetur",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, doloremque beatae quas officia nihil consequuntur?",
    icon: <FaWindows />,
  },
  {
    image: Game5,
    title: "EAFC 24 Lorem dolor sit amet ipsum, dolor sit amet consectetur",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, doloremque beatae quas officia nihil consequuntur?",
    icon: <LiaPlaystation />,
  },
];

const WhatsNew = () => {
  return (
    <>
      <div className="py-10 bg-primary text-white">
        <div className="container ">
          {/* Header Section */}
          <div className="flex flex-row justify-between items-center px-3">
            <h1 className=" font-bold text-2xl">What's New</h1>
            <div className="flex gap-2 items-center">
              <div
                className="flex gap-4 items-center  bg-gray-400/20 py-2
              px-3 rounded-lg"
              >
                <IoLogoAndroid className="text-2xl cursor-pointer" />
                <FaApple className="text-2xl cursor-pointer" />
                <FaWindows className="text-2xl cursor-pointer" />
                <LiaPlaystation className="text-2xl cursor-pointer" />
              </div>
              {/* //* BUTTON IS USED IN MORE THAN ONE COMPONENT SO IT SHOULD BE MADE INTO
              //* A DIFFERENT COMPONENT ON ITS OWN AND BE REUSABLE INSTEAD OF COPYING AND
              //* PASTING IT OVER AND OVER*/}
              <button
                className="bg-gray-400/50 text-white
              rounded-xl py-2 px-3 font-semibold z-10"
              >
                Explore
              </button>
            </div>
          </div>
          {/* what's new section */}
          <div className="grid grid-cols-1 col-span-3 sm:grid-cols-4 gap-6 my-8">
            {/* cards section */}
            <div className="col-span-3 grid grid-cols-1 gap-6">
              {WhatsNewData.map((data, idx) => (
                <WhatsNewCard
                  key={idx}
                  // image={card.image}
                  // title={card.title}
                  // icon={card.icon}
                  // description={card.description}
                  {...data}
                />
              ))}
            </div>
            {/* subscribe section */}
            <div className="col-span-1">
              <div className="bg-gray-400/10 rounded-lg p-4">
                <CiHeart
                  className="text-yellow-500 text-2xl
                          bg-yellow-500/20 rounded-md p-1 inline-block
                          h-[35px] w-[35px] "
                />
                <h1 className="text-2xl font-semibold space-y-3">
                  Subscribe To Our Newsletter
                </h1>
                <p className="text-sm text-gray-500 my-2 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                </p>
                <input
                  placeholder="Enter Your Email"
                  className="bg-gray-400/20 my-2 w-full py-2 px-4 rounded-2xl"
                  type="email"
                />
                <button
                  className="bg-gradient-to-r 
                     from-secondary to-primary shadow-md font-semibold py-2 px-4
                     rounded-2xl inline-block"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
